<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_admin();
$data=json_input();
$batchId=(int)($data['import_batch_id']??0);
if($batchId<=0) fail('import_batch_id tidak valid.');

$st=$pdo->prepare("SELECT * FROM import_batches WHERE import_batch_id=? LIMIT 1");
$st->execute([$batchId]);
$batch=$st->fetch();
if(!$batch) fail('Batch import tidak ditemukan.',404);

$pdo->beginTransaction();
try{
    // Remove contracts currently owned by this import batch as their source.
    // If a later import updated the same contract, its source_import_batch_id
    // points to the later batch and it is therefore preserved.
    $pdo->prepare("DELETE FROM contracts WHERE source_import_batch_id=?")->execute([$batchId]);
    $pdo->prepare("DELETE FROM import_batches WHERE import_batch_id=?")->execute([$batchId]);
    audit($pdo,$user['user_id'],'DELETE','import_batches',$batchId,'Batch import dihapus.', $batch, null);
    $pdo->commit();
    ok(['import_batch_id'=>$batchId],'Batch import berhasil dihapus.');
}catch(Throwable $e){
    if($pdo->inTransaction())$pdo->rollBack();
    fail('Gagal menghapus batch import: '.$e->getMessage(),500);
}
