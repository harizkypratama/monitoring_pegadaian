<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();
$data=json_input();

$areaId=(int)($data['area_id']??$user['area_id']);
$date=nullable_date($data['hdle_date']??date('Y-m-d'));
$value=num($data['hdle_value']??0);
$source=trim((string)($data['source']??'MANUAL'));
$notes=trim((string)($data['notes']??''));

if($user['role']!=='ADMIN' && $areaId!==(int)$user['area_id']) fail('Tidak memiliki akses.',403);
if(!$date || $value<=0) fail('Tanggal dan nilai HDLE wajib valid.');

$st=$pdo->prepare("INSERT INTO hdle_history (area_id,hdle_date,hdle_value,source,notes,created_by) VALUES (?,?,?,?,?,?)");
$st->execute([$areaId,$date,$value,$source,$notes,$user['user_id']]);
$id=(int)$pdo->lastInsertId();

audit($pdo,$user['user_id'],'INSERT','hdle_history',$id,'HDLE disimpan.');
ok(['hdle_id'=>$id], 'HDLE berhasil disimpan.');
