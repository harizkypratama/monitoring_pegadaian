<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();
$data = json_input();

$no = trim((string)($data['no'] ?? $data['No_Kontrak'] ?? ''));
$customerName = trim((string)($data['Customer_NM'] ?? $data['customer_name'] ?? ''));
$customerCode = trim((string)($data['customer_code'] ?? ''));
$product = trim((string)($data['Product'] ?? $data['product'] ?? ''));
$branchId = (int)($data['branch_id'] ?? 0);
$outletId = (int)($data['outlet_id'] ?? 0);
$branchName = trim((string)($data['Cabang'] ?? $data['branch_name'] ?? ''));
$outletName = trim((string)($data['Outlet'] ?? $data['outlet_name'] ?? ''));

if ($no === '' || $customerName === '') fail('No kontrak dan nama nasabah wajib diisi.');

if ($outletId <= 0 && $outletName !== '') {
    $st = $pdo->prepare("SELECT outlet_id,branch_id FROM outlets WHERE outlet_name=? AND is_active=1 LIMIT 1");
    $st->execute([$outletName]);
    $o = $st->fetch();
    if ($o) { $outletId=(int)$o['outlet_id']; $branchId=(int)$o['branch_id']; }
}
if ($branchId <= 0 && $branchName !== '') {
    $st = $pdo->prepare("SELECT branch_id FROM branches WHERE branch_name=? AND is_active=1 LIMIT 1");
    $st->execute([$branchName]);
    $b = $st->fetch();
    if ($b) $branchId=(int)$b['branch_id'];
}

if ($outletId <= 0) fail('Outlet wajib dipilih.');
$st = $pdo->prepare("SELECT o.outlet_id,o.branch_id,b.area_id FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.outlet_id=? AND o.is_active=1");
$st->execute([$outletId]);
$scope = $st->fetch();
if (!$scope) fail('Outlet tidak ditemukan.');

$branchId = (int)$scope['branch_id'];
$areaId = (int)$scope['area_id'];

if ($user['role'] !== 'ADMIN') {
    if (!empty($user['branch_id']) && $branchId !== (int)$user['branch_id']) fail('User tidak boleh menyimpan kontrak di cabang lain.',403);
    if ($areaId !== (int)$user['area_id']) fail('User tidak boleh menyimpan kontrak di area lain.',403);
}

$up = num($data['UP'] ?? $data['up'] ?? 0);
$sm = num($data['Sewa_Modal'] ?? $data['sewa_modal'] ?? 0);
$dsm = num($data['Denda_Sewa_Modal'] ?? $data['denda_sewa_modal'] ?? 0);
$dt = num($data['Denda_Keterlambatan'] ?? $data['denda_keterlambatan'] ?? 0);
$kew = num($data['Kewajiban'] ?? $data['kewajiban'] ?? ($up+$sm+$dsm+$dt));
$rubrik = trim((string)($data['Rubrik'] ?? $data['rubrik'] ?? ''));
$tglKredit = nullable_date($data['Tgl_Kredit'] ?? $data['tgl_kredit'] ?? null);
$tglCut = nullable_date($data['Tgl_Cut_Off'] ?? $data['tgl_cut_off'] ?? null);
$bjdpl = (int)($data['BJDPL_Hari'] ?? $data['bjdpl_hari'] ?? 0);
$status = in_array(($data['status'] ?? 'AKTIF'), ['AKTIF','LUNAS','LELANG','DIBATALKAN'], true) ? $data['status'] : 'AKTIF';
$items = is_array($data['items'] ?? null) ? $data['items'] : [];
$auction = is_array($data['auction'] ?? null) ? $data['auction'] : [];

$pdo->beginTransaction();

try {
    // Customer: reuse by customer_code first, then exact name.
    $customerId = 0;
    if ($customerCode !== '') {
        $st = $pdo->prepare("SELECT customer_id FROM customers WHERE customer_code=? LIMIT 1");
        $st->execute([$customerCode]);
        $customerId = (int)($st->fetchColumn() ?: 0);
    }
    if ($customerId <= 0) {
        $st = $pdo->prepare("SELECT customer_id FROM customers WHERE customer_name=? LIMIT 1");
        $st->execute([$customerName]);
        $customerId = (int)($st->fetchColumn() ?: 0);
    }
    if ($customerId <= 0) {
        $st = $pdo->prepare("INSERT INTO customers (customer_code,customer_name) VALUES (?,?)");
        $st->execute([$customerCode !== '' ? $customerCode : null,$customerName]);
        $customerId=(int)$pdo->lastInsertId();
    } else {
        $st = $pdo->prepare("UPDATE customers SET customer_name=?, customer_code=COALESCE(?,customer_code), updated_at=NOW() WHERE customer_id=?");
        $st->execute([$customerName,$customerCode !== '' ? $customerCode : null,$customerId]);
    }

    // If contract exists, update it; otherwise insert.
    $st = $pdo->prepare("SELECT c.* FROM contracts c WHERE c.no_kontrak=? LIMIT 1");
    $st->execute([$no]);
    $old = $st->fetch();

    if ($old) {
        if ($user['role'] !== 'ADMIN') {
            $oldOutlet = (int)$old['outlet_id'];
            $scopeStmt=$pdo->prepare("SELECT b.area_id,b.branch_id FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.outlet_id=?");
            $scopeStmt->execute([$oldOutlet]);
            $oldScope=$scopeStmt->fetch();
            if (!$oldScope || (int)$oldScope['area_id'] !== $areaId || (!empty($user['branch_id']) && (int)$oldScope['branch_id'] !== (int)$user['branch_id'])) {
                throw new RuntimeException('Tidak boleh mengubah kontrak di luar scope user.');
            }
        }

        $stmt = $pdo->prepare("
            UPDATE contracts SET customer_id=?,outlet_id=?,product=?,tgl_kredit=?,tgl_cut_off=?,bjdpl_hari=?,rubrik=?,
            up=?,sewa_modal=?,denda_sewa_modal=?,denda_keterlambatan=?,kewajiban=?,status=?,updated_by=?,updated_at=NOW()
            WHERE contract_id=?
        ");
        $stmt->execute([$customerId,$outletId,$product,$tglKredit,$tglCut,$bjdpl,$rubrik,$up,$sm,$dsm,$dt,$kew,$status,$user['user_id'],$old['contract_id']]);
        $contractId=(int)$old['contract_id'];
        $action='UPDATE';
        $oldAudit=$old;
    } else {
        $stmt = $pdo->prepare("
            INSERT INTO contracts
            (no_kontrak,customer_id,outlet_id,product,tgl_kredit,tgl_cut_off,bjdpl_hari,rubrik,up,sewa_modal,denda_sewa_modal,denda_keterlambatan,kewajiban,status,created_by,updated_by)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        ");
        $stmt->execute([$no,$customerId,$outletId,$product,$tglKredit,$tglCut,$bjdpl,$rubrik,$up,$sm,$dsm,$dt,$kew,$status,$user['user_id'],$user['user_id']]);
        $contractId=(int)$pdo->lastInsertId();
        $action='INSERT';
        $oldAudit=null;
    }

    $pdo->prepare("DELETE FROM contract_items WHERE contract_id=?")->execute([$contractId]);
    $itemStmt=$pdo->prepare("
        INSERT INTO contract_items
        (contract_id,item_no,jenis_barang,karatase,bk,bb,taksir_ulang_karatase,taksir_ulang_bb,berlian,npbl)
        VALUES (?,?,?,?,?,?,?,?,?,?)
    ");

    foreach ($items as $i=>$item) {
        $itemStmt->execute([
            $contractId,$i+1,
            trim((string)($item['Jenis_Barang'] ?? $item['jenis_barang'] ?? '')),
            num($item['Karatase'] ?? $item['karatase'] ?? 0),
            num($item['BK'] ?? $item['bk'] ?? 0),
            num($item['BB'] ?? $item['bb'] ?? 0),
            num($item['Taksir_Ulang_Karatase'] ?? $item['taksir_ulang_karatase'] ?? 0),
            num($item['Taksir_Ulang_BB'] ?? $item['taksir_ulang_bb'] ?? 0),
            num($item['Berlian'] ?? $item['berlian'] ?? 0),
            num($item['NPBL'] ?? $item['npbl'] ?? 0),
        ]);
    }

    // Keep one current auction calculation per contract.
    $pdo->prepare("DELETE FROM contract_auction_calculations WHERE contract_id=?")->execute([$contractId]);

    if ($auction) {
        $calcStmt=$pdo->prepare("
            INSERT INTO contract_auction_calculations
            (contract_id,hdle_id,npbl,harga_minimal_lelang,harga_limit_lelang,bea_lelang_pembeli,bea_lelang_penjual,hmls,
             status_diskon,diskon_lelang_rp,diskon_lelang_persen,minimal_penjualan_lelang,minimal_kewajiban_pembeli_lelang)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
        ");
        $calcStmt->execute([
            $contractId,
            isset($auction['hdle_id']) ? (int)$auction['hdle_id'] : null,
            num($auction['npbl'] ?? $auction['_NPBL_Total'] ?? 0),
            num($auction['hml'] ?? $auction['harga_minimal_lelang'] ?? 0),
            num($auction['hargaLimit'] ?? $auction['harga_limit_lelang'] ?? 0),
            num($auction['beaPembeli'] ?? $auction['bea_lelang_pembeli'] ?? 0),
            num($auction['beaPenjual'] ?? $auction['bea_lelang_penjual'] ?? 0),
            num($auction['hmls'] ?? 0),
            (($auction['diskon'] ?? false) ? 'DISKON' : (($auction['status_diskon'] ?? 'TIDAK DISKON') === 'DISKON' ? 'DISKON' : 'TIDAK DISKON')),
            num($auction['diskonRp'] ?? $auction['diskon_lelang_rp'] ?? 0),
            num($auction['diskonPct'] ?? $auction['diskon_lelang_persen'] ?? 0),
            num($auction['minimalPenjualan'] ?? $auction['minimal_penjualan_lelang'] ?? 0),
            num($auction['minimalKewajiban'] ?? $auction['minimal_kewajiban_pembeli_lelang'] ?? 0),
        ]);
    }

    $newStmt=$pdo->prepare("SELECT * FROM contracts WHERE contract_id=?");
    $newStmt->execute([$contractId]);
    $new=$newStmt->fetch();

    audit($pdo,$user['user_id'],$action,'contracts',$contractId,"Kontrak {$no} disimpan.",$oldAudit,$new);
    $pdo->commit();

    ok(['contract_id'=>$contractId,'no_kontrak'=>$no], "Kontrak {$no} berhasil disimpan.");
} catch (Throwable $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    fail('Gagal menyimpan kontrak: '.$e->getMessage(),500);
}
