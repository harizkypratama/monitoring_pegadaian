<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();

$sql = "SELECT * FROM vw_dashboard_kpi WHERE 1=1";
$params=[];

if ($user['role'] !== 'ADMIN') {
    if (!empty($user['branch_id'])) {
        $sql .= " AND branch_id=?";
        $params[]=(int)$user['branch_id'];
    } else {
        $sql .= " AND area_id=?";
        $params[]=(int)$user['area_id'];
    }
}
$branchId=(int)($_GET['branch_id'] ?? 0);
if($branchId>0){
    $sql .= " AND branch_id=?";
    $params[]=$branchId;
}

$stmt=$pdo->prepare($sql);
$stmt->execute($params);
$rows=$stmt->fetchAll();

$totals = [
    'total_kontrak'=>0,
    'total_nasabah'=>0,
    'total_outlet'=>0,
    'total_kewajiban'=>0,
    'estimasi_total_diskon_lelang'=>0,
    'rata_rata_bjdpl'=>0,
    'kontrak_lebih_90_hari'=>0,
];

if ($rows) {
    foreach($rows as $r){
        foreach(['total_kontrak','total_nasabah','total_outlet','kontrak_lebih_90_hari'] as $k) $totals[$k]+=(int)($r[$k]??0);
        foreach(['total_kewajiban','estimasi_total_diskon_lelang','rata_rata_bjdpl'] as $k) $totals[$k]+=(float)($r[$k]??0);
    }
    $totals['rata_rata_bjdpl'] /= count($rows);
}

ok(['rows'=>$rows,'totals'=>$totals]);
