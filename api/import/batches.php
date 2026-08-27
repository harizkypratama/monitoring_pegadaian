<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();

$sql="SELECT ib.*,a.area_name,u.username,u.full_name FROM import_batches ib JOIN areas a ON a.area_id=ib.area_id LEFT JOIN app_users u ON u.user_id=ib.imported_by WHERE 1=1";
$params=[];
if($user['role']!=='ADMIN'){$sql.=" AND ib.area_id=?";$params[]=(int)$user['area_id'];}
$sql.=" ORDER BY ib.import_batch_id DESC LIMIT 200";

$st=$pdo->prepare($sql);$st->execute($params);
ok($st->fetchAll());
