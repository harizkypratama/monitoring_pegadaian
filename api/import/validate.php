<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_admin();
$data=json_input();
$rows=is_array($data['rows']??null)?$data['rows']:[];
$filename=trim((string)($data['filename']??''));

if(!$rows) fail('Data import kosong.');

$required=['No_Kontrak','Cabang','Outlet','Customer_NM'];
$errors=[];
$contractSet=[];

foreach($rows as $idx=>$row){
    $n=$idx+2;
    foreach($required as $field){
        if(trim((string)($row[$field]??''))===''){
            $errors[]=['row'=>$n,'field'=>$field,'message'=>'Wajib diisi'];
        }
    }
    $no=trim((string)($row['No_Kontrak']??''));
    if($no!==''){
        if(isset($contractSet[$no])) $errors[]=['row'=>$n,'field'=>'No_Kontrak','message'=>"Duplikat dalam file (baris {$contractSet[$no]})."];
        else $contractSet[$no]=$n;
    }
}

$existing=[];
if($contractSet){
    $placeholders=implode(',',array_fill(0,count($contractSet),'?'));
    $st=$pdo->prepare("SELECT no_kontrak FROM contracts WHERE no_kontrak IN ({$placeholders})");
    $st->execute(array_keys($contractSet));
    $existing=$st->fetchAll(PDO::FETCH_COLUMN);
}

foreach($existing as $no){
    $errors[]=['row'=>$contractSet[$no]??null,'field'=>'No_Kontrak','message'=>'Kontrak sudah ada di database. Saat import gunakan endpoint import untuk mode upsert jika ingin menimpa data.'];
}

ok([
    'filename'=>$filename,
    'total_rows'=>count($rows),
    'total_contracts'=>count($contractSet),
    'errors'=>$errors,
    'valid'=>count($errors)===0,
]);
