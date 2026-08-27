<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

/*
 * Endpoint ini menerima JSON hasil parsing Excel di browser.
 * Format rows mengikuti field aplikasi:
 * No_Kontrak, Area, Kode_Outlet, Cabang, Outlet, Customer_NM, Product,
 * Jenis_Barang, Karatase, BK, BB, Tgl_Kredit, Tgl_Cut_Off, BJDPL_Hari,
 * UP, Sewa_Modal, Denda_Sewa_Modal, Denda_Keterlambatan, Kewajiban,
 * Rubrik, Taksir_Ulang_Karatase, Taksir_Ulang_BB, Berlian, NPBL,
 * Harga_Minimal_Lelang, Harga_Limit_Lelang, Diskon_Tidak_Diskon,
 * Minimal_Penjualan_Lelang, Diskon_Lelang_Rp, Diskon_Lelang_Persen,
 * Bea_Lelang_Pembeli, Bea_Lelang_Penjual, HMLS,
 * Minimal_Kewajiban_Pembeli_Lelang.
 */

$user=require_admin();
$data=json_input();
$rows=is_array($data['rows']??null)?$data['rows']:[];
$filename=trim((string)($data['filename']??'import.xlsx'));

if(!$rows) fail('Data import kosong.');

$areaId=(int)$user['area_id'];
$pdo->beginTransaction();

try{
    $hash=hash('sha256',json_encode($rows,JSON_UNESCAPED_UNICODE));
    $batchStmt=$pdo->prepare("
        INSERT INTO import_batches
        (area_id,imported_by,original_filename,file_hash,import_status,total_rows,started_at)
        VALUES (?,?,?,?, 'UPLOADED',?,NOW())
    ");
    $batchStmt->execute([$areaId,$user['user_id'],$filename,$hash,count($rows)]);
    $batchId=(int)$pdo->lastInsertId();

    $contractGroups=[];
    $errors=0;

    foreach($rows as $idx=>$r){
        $no=trim((string)($r['No_Kontrak']??''));
        $kode=trim((string)($r['Kode_Outlet']??''));
        $branch=trim((string)($r['Cabang']??''));
        $outlet=trim((string)($r['Outlet']??''));
        $customer=trim((string)($r['Customer_NM']??''));
        $msg=[];
        if($no==='')$msg[]='No_Kontrak kosong';
        if($outlet==='' && $kode==='')$msg[]='Outlet/Kode_Outlet kosong';
        if($customer==='')$msg[]='Customer_NM kosong';

        $status=$msg?'INVALID':'VALID';
        if($msg)$errors++;

        if($status==='VALID') $contractGroups[$no][]=$r;
    }

    $pdo->prepare("UPDATE import_batches SET import_status=?,total_contracts=?,complete_contracts=?,incomplete_contracts=?,error_count=?,finished_at=NOW() WHERE import_batch_id=?")
        ->execute([$errors?'FAILED':'VALIDATED',count($contractGroups),$errors?0:count($contractGroups),$errors?count($contractGroups):0,$errors,$batchId]);

    audit($pdo,$user['user_id'],'IMPORT','import_batches',$batchId,"Validasi import {$filename}.");

    if($errors){
        $pdo->commit();
        ok(['import_batch_id'=>$batchId,'error_count'=>$errors,'total_rows'=>count($rows)],'Import tersimpan sebagai FAILED/VALIDATED dengan error.');
    }

    // Existing No Kontrak is compared by completeness; the most complete item set wins.
    foreach($contractGroups as $no=>$group){
        $first=$group[0];

        $outletId=0;
        if(!empty($first['Kode_Outlet'])){
            $st=$pdo->prepare("SELECT o.outlet_id,o.branch_id,b.area_id FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.outlet_code=? AND o.is_active=1 LIMIT 1");
            $st->execute([$first['Kode_Outlet']]); $o=$st->fetch();
            if($o)$outletId=(int)$o['outlet_id'];
        }
        if($outletId<=0 && !empty($first['Outlet'])){
            $st=$pdo->prepare("SELECT o.outlet_id,o.branch_id,b.area_id FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.outlet_name=? AND o.is_active=1 LIMIT 1");
            $st->execute([$first['Outlet']]); $o=$st->fetch();
            if($o)$outletId=(int)$o['outlet_id'];
        }
        if($outletId<=0) throw new RuntimeException("Outlet tidak ditemukan untuk kontrak {$no}.");
        $branchId=(int)$o['branch_id']; $recordArea=(int)$o['area_id'];
        if($user['role']!=='ADMIN' && $recordArea!==(int)$user['area_id']) throw new RuntimeException("Kontrak {$no} di luar area user.");
        if($user['role']!=='ADMIN' && !empty($user['branch_id']) && $branchId!==(int)$user['branch_id']) throw new RuntimeException("Kontrak {$no} di luar cabang user.");

        $st=$pdo->prepare("SELECT contract_id FROM contracts WHERE no_kontrak=? LIMIT 1");
        $st->execute([$no]); $cid=(int)($st->fetchColumn()?:0);

        if($cid){
            // Same No Kontrak may appear in multiple imports.
            // The authoritative version is the MOST COMPLETE item set,
            // regardless of which file was uploaded first.
            $st=$pdo->prepare("SELECT COUNT(*) FROM contract_items WHERE contract_id=?");
            $st->execute([$cid]);
            $existingItemCount=(int)$st->fetchColumn();
            $incomingItemCount=count($group);

            // Replace the existing item set only when the new import contains
            // MORE item rows for the same contract. If it has fewer/equal rows,
            // preserve the more complete existing version.
            if($incomingItemCount>$existingItemCount){
                $pdo->prepare("DELETE FROM contract_items WHERE contract_id=?")->execute([$cid]);

                $itemStmt=$pdo->prepare("INSERT INTO contract_items(contract_id,item_no,jenis_barang,karatase,bk,bb,taksir_ulang_karatase,taksir_ulang_bb,berlian,npbl) VALUES(?,?,?,?,?,?,?,?,?,?)");
                foreach($group as $i=>$r){
                    $itemStmt->execute([
                        $cid,$i+1,$r['Jenis_Barang']??null,num($r['Karatase']??0),
                        num($r['BK']??0),num($r['BB']??0),
                        num($r['Taksir_Ulang_Karatase']??0),num($r['Taksir_Ulang_BB']??0),
                        num($r['Berlian']??0),num($r['NPBL']??0)
                    ]);
                }

                // The most complete import becomes the current source of this contract.
                $pdo->prepare("UPDATE contracts SET source_import_batch_id=?,updated_by=?,updated_at=NOW() WHERE contract_id=?")
                    ->execute([$batchId,$user['user_id'],$cid]);
            }

            // Header data is also selected by completeness: only fill a blank
            // existing field from the new import; never overwrite populated data
            // with a less-complete value.
            $st=$pdo->prepare("SELECT customer_id,outlet_id,product,tgl_kredit,tgl_cut_off,bjdpl_hari,rubrik,up,sewa_modal,denda_sewa_modal,denda_keterlambatan,kewajiban FROM contracts WHERE contract_id=?");
            $st->execute([$cid]);
            $old=$st->fetch();

            $customerName=trim((string)($first['Customer_NM']??''));
            $customerId=(int)($old['customer_id']??0);
            if($customerId<=0 && $customerName!==''){
                $st=$pdo->prepare("SELECT customer_id FROM customers WHERE customer_name=? LIMIT 1");
                $st->execute([$customerName]);
                $customerId=(int)($st->fetchColumn()?:0);
                if(!$customerId){
                    $st=$pdo->prepare("INSERT INTO customers(customer_name) VALUES(?)");
                    $st->execute([$customerName]);
                    $customerId=(int)$pdo->lastInsertId();
                }
            }

            $vals=[
                'customer_id'=>$customerId,
                'outlet_id'=>(int)($old['outlet_id']??0),
                'product'=>$old['product']??null,
                'tgl_kredit'=>$old['tgl_kredit']??null,
                'tgl_cut_off'=>$old['tgl_cut_off']??null,
                'bjdpl_hari'=>$old['bjdpl_hari']??null,
                'rubrik'=>$old['rubrik']??null,
                'up'=>$old['up']??null,
                'sewa_modal'=>$old['sewa_modal']??null,
                'denda_sewa_modal'=>$old['denda_sewa_modal']??null,
                'denda_keterlambatan'=>$old['denda_keterlambatan']??null,
                'kewajiban'=>$old['kewajiban']??null
            ];

            $incomingHeader=[
                'outlet_id'=>$outletId,
                'product'=>$first['Product']??null,
                'tgl_kredit'=>nullable_date($first['Tgl_Kredit']??null),
                'tgl_cut_off'=>nullable_date($first['Tgl_Cut_Off']??null),
                'bjdpl_hari'=>(int)($first['BJDPL_Hari']??0),
                'rubrik'=>$first['Rubrik']??null,
                'up'=>num($first['UP']??0),
                'sewa_modal'=>num($first['Sewa_Modal']??0),
                'denda_sewa_modal'=>num($first['Denda_Sewa_Modal']??0),
                'denda_keterlambatan'=>num($first['Denda_Keterlambatan']??0),
                'kewajiban'=>num($first['Kewajiban']??0)
            ];

            foreach($incomingHeader as $k=>$v){
                $oldVal=$vals[$k];
                $isBlank=($oldVal===null || $oldVal==='' || (is_numeric($oldVal) && (float)$oldVal===0.0));
                if($isBlank && $v!==null && $v!=='') $vals[$k]=$v;
            }

            $st=$pdo->prepare("UPDATE contracts SET customer_id=?,outlet_id=?,product=?,tgl_kredit=?,tgl_cut_off=?,bjdpl_hari=?,rubrik=?,up=?,sewa_modal=?,denda_sewa_modal=?,denda_keterlambatan=?,kewajiban=?,updated_by=?,updated_at=NOW() WHERE contract_id=?");
            $st->execute([
                $vals['customer_id'],$vals['outlet_id'],$vals['product'],$vals['tgl_kredit'],
                $vals['tgl_cut_off'],$vals['bjdpl_hari'],$vals['rubrik'],$vals['up'],
                $vals['sewa_modal'],$vals['denda_sewa_modal'],$vals['denda_keterlambatan'],
                $vals['kewajiban'],$user['user_id'],$cid
            ]);

            continue;
        }

        $customerName=trim((string)($first['Customer_NM']??''));
        $st=$pdo->prepare("SELECT customer_id FROM customers WHERE customer_name=? LIMIT 1");
        $st->execute([$customerName]); $customerId=(int)($st->fetchColumn()?:0);
        if(!$customerId){
            $st=$pdo->prepare("INSERT INTO customers(customer_name) VALUES(?)");
            $st->execute([$customerName]); $customerId=(int)$pdo->lastInsertId();
        }

        $up=num($first['UP']??0); $sm=num($first['Sewa_Modal']??0);
        $dsm=num($first['Denda_Sewa_Modal']??0); $dt=num($first['Denda_Keterlambatan']??0);
        $kew=num($first['Kewajiban']??($up+$sm+$dsm+$dt));

        $st=$pdo->prepare("INSERT INTO contracts(no_kontrak,customer_id,outlet_id,product,tgl_kredit,tgl_cut_off,bjdpl_hari,rubrik,up,sewa_modal,denda_sewa_modal,denda_keterlambatan,kewajiban,status,source_import_batch_id,created_by,updated_by) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,'AKTIF',?,?,?)");
        $st->execute([$no,$customerId,$outletId,$first['Product']??null,nullable_date($first['Tgl_Kredit']??null),nullable_date($first['Tgl_Cut_Off']??null),(int)($first['BJDPL_Hari']??0),$first['Rubrik']??null,$up,$sm,$dsm,$dt,$kew,$batchId,$user['user_id'],$user['user_id']]);
        $cid=(int)$pdo->lastInsertId();

        $itemStmt=$pdo->prepare("INSERT INTO contract_items(contract_id,item_no,jenis_barang,karatase,bk,bb,taksir_ulang_karatase,taksir_ulang_bb,berlian,npbl) VALUES(?,?,?,?,?,?,?,?,?,?)");
        foreach($group as $i=>$r){
            $itemStmt->execute([$cid,$i+1,$r['Jenis_Barang']??null,num($r['Karatase']??0),num($r['BK']??0),num($r['BB']??0),num($r['Taksir_Ulang_Karatase']??0),num($r['Taksir_Ulang_BB']??0),num($r['Berlian']??0),num($r['NPBL']??0)]);
        }
    }

    $pdo->prepare("UPDATE import_batches SET import_status='IMPORTED',finished_at=NOW() WHERE import_batch_id=?")->execute([$batchId]);
    audit($pdo,$user['user_id'],'IMPORT','import_batches',$batchId,"Import {$filename} berhasil.");
    $pdo->commit();

    ok(['import_batch_id'=>$batchId,'total_rows'=>count($rows),'total_contracts'=>count($contractGroups)],'Import berhasil masuk database.');
}catch(Throwable $e){
    if($pdo->inTransaction())$pdo->rollBack();
    fail('Import gagal: '.$e->getMessage(),500);
}
