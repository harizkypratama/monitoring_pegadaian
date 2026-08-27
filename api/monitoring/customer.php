<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();
$q=trim((string)($_GET['q']??''));
$limit=min(500,max(1,(int)($_GET['limit']??100)));

$sql="
SELECT cu.customer_id,cu.customer_code,cu.customer_name,
       COUNT(DISTINCT c.contract_id) total_kontrak,
       COALESCE(SUM(c.kewajiban),0) total_kewajiban
FROM customers cu
JOIN contracts c ON c.customer_id=cu.customer_id
JOIN outlets o ON o.outlet_id=c.outlet_id
JOIN branches b ON b.branch_id=o.branch_id
WHERE cu.is_active=1
";
$params=[];

if($q!==''){
    $sql.=" AND (cu.customer_name LIKE ? OR cu.customer_code LIKE ? OR c.no_kontrak LIKE ?)";
    $like="%{$q}%";
    array_push($params,$like,$like,$like);
}
if($user['role']!=='ADMIN'){
    if(!empty($user['branch_id'])){$sql.=" AND b.branch_id=?";$params[]=(int)$user['branch_id'];}
    else {$sql.=" AND b.area_id=?";$params[]=(int)$user['area_id'];}
}
$sql.=" GROUP BY cu.customer_id,cu.customer_code,cu.customer_name ORDER BY total_kewajiban DESC LIMIT {$limit}";

$st=$pdo->prepare($sql);
$st->execute($params);
ok($st->fetchAll());
