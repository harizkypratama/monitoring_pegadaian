<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();
$areaId=(int)($_GET['area_id']??$user['area_id']);

if($user['role']!=='ADMIN' && $areaId!==(int)$user['area_id']) fail('Tidak memiliki akses.',403);

$st=$pdo->prepare("SELECT * FROM hdle_history WHERE area_id=? ORDER BY hdle_date DESC,hdle_id DESC");
$st->execute([$areaId]);
ok($st->fetchAll());
