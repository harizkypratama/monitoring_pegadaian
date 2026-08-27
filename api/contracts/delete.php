<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();
$id = (int)($_GET['contract_id'] ?? 0);
if ($id <= 0) fail('contract_id wajib diisi.');

$stmt=$pdo->prepare("
    SELECT c.*,b.branch_id,b.area_id
    FROM contracts c
    JOIN outlets o ON o.outlet_id=c.outlet_id
    JOIN branches b ON b.branch_id=o.branch_id
    WHERE c.contract_id=?
");
$stmt->execute([$id]);
$old=$stmt->fetch();
if (!$old) fail('Kontrak tidak ditemukan.',404);

if ($user['role'] !== 'ADMIN') {
    if ((int)$old['area_id'] !== (int)$user['area_id']) fail('Tidak memiliki akses.',403);
    if (!empty($user['branch_id']) && (int)$old['branch_id'] !== (int)$user['branch_id']) fail('Tidak memiliki akses.',403);
}

$pdo->beginTransaction();
try {
    $pdo->prepare("DELETE FROM contracts WHERE contract_id=?")->execute([$id]);
    audit($pdo,$user['user_id'],'DELETE','contracts',$id,"Kontrak {$old['no_kontrak']} dihapus.",$old,null);
    $pdo->commit();
    ok(null,'Kontrak berhasil dihapus.');
} catch(Throwable $e) {
    if($pdo->inTransaction()) $pdo->rollBack();
    fail('Gagal menghapus kontrak: '.$e->getMessage(),500);
}
