<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();
$data=json_input();

$filename=trim((string)($data['filename']??'export.xlsx'));
$rowCount=max(0,(int)($data['row_count']??0));
$branchId=isset($data['branch_id'])&&$data['branch_id']!==''?(int)$data['branch_id']:null;
$outletId=isset($data['outlet_id'])&&$data['outlet_id']!==''?(int)$data['outlet_id']:null;

if($user['role']!=='ADMIN'){
    if($branchId!==null && !empty($user['branch_id']) && $branchId!==(int)$user['branch_id']) fail('Tidak memiliki akses.',403);
    if($outletId!==null){
        $st=$pdo->prepare("SELECT b.branch_id FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.outlet_id=?");
        $st->execute([$outletId]);
        $b=$st->fetch();
        if(!$b || (!empty($user['branch_id']) && (int)$b['branch_id']!==(int)$user['branch_id'])) fail('Tidak memiliki akses.',403);
    }
}

$st=$pdo->prepare("INSERT INTO export_logs (user_id,branch_id,outlet_id,filename,row_count) VALUES (?,?,?,?,?)");
$st->execute([$user['user_id'],$branchId,$outletId,$filename,$rowCount]);
$id=(int)$pdo->lastInsertId();

audit($pdo,$user['user_id'],'EXPORT','export_logs',$id,"Export {$filename} ({$rowCount} baris).");
ok(['export_id'=>$id], 'Export dicatat.');
