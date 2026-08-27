<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();
$no = trim((string)($_GET['no_kontrak'] ?? ''));
$id = (int)($_GET['contract_id'] ?? 0);

if ($no === '' && $id <= 0) fail('no_kontrak atau contract_id wajib diisi.');

$where = $id > 0 ? 'c.contract_id=?' : 'c.no_kontrak=?';
$value = $id > 0 ? $id : $no;

$sql = "
SELECT c.*, cu.customer_code,cu.customer_name,o.outlet_code,o.outlet_name,
       b.branch_id,b.branch_code,b.branch_name,a.area_id,a.area_name
FROM contracts c
JOIN customers cu ON cu.customer_id=c.customer_id
JOIN outlets o ON o.outlet_id=c.outlet_id
JOIN branches b ON b.branch_id=o.branch_id
JOIN areas a ON a.area_id=b.area_id
WHERE {$where}
LIMIT 1
";
$stmt = $pdo->prepare($sql);
$stmt->execute([$value]);
$contract = $stmt->fetch();

if (!$contract) fail('Kontrak tidak ditemukan.',404);

if ($user['role'] !== 'ADMIN') {
    $allowed = !empty($user['branch_id'])
        ? (int)$contract['branch_id'] === (int)$user['branch_id']
        : (int)$contract['area_id'] === (int)$user['area_id'];
    if (!$allowed) fail('Anda tidak memiliki akses ke kontrak ini.',403);
}

$itemStmt = $pdo->prepare("SELECT * FROM contract_items WHERE contract_id=? ORDER BY item_no");
$itemStmt->execute([(int)$contract['contract_id']]);
$items = $itemStmt->fetchAll();

$calcStmt = $pdo->prepare("SELECT * FROM contract_auction_calculations WHERE contract_id=? ORDER BY calculation_id DESC LIMIT 1");
$calcStmt->execute([(int)$contract['contract_id']]);
$auction = $calcStmt->fetch();

ok([
    'contract' => $contract,
    'items' => $items,
    'auction' => $auction,
]);
