<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();

$q = trim((string)($_GET['q'] ?? ''));
$branchId = (int)($_GET['branch_id'] ?? 0);
$outletId = (int)($_GET['outlet_id'] ?? 0);
$limit = min(3000, max(1, (int)($_GET['limit'] ?? 500)));

$sql = "
SELECT
 c.contract_id,c.no_kontrak,c.product,c.tgl_kredit,c.tgl_cut_off,c.bjdpl_hari,c.rubrik,
 c.up,c.sewa_modal,c.denda_sewa_modal,c.denda_keterlambatan,c.kewajiban,c.status,
 cu.customer_code,cu.customer_name,
 o.outlet_id,o.outlet_code,o.outlet_name,
 b.branch_id,b.branch_code,b.branch_name,
 a.area_id,a.area_name,
 ci.contract_item_id,ci.item_no,ci.jenis_barang,ci.karatase,ci.bk,ci.bb,
 ci.taksir_ulang_karatase,ci.taksir_ulang_bb,ci.berlian,ci.npbl AS item_npbl,
 ac.calculation_id,ac.hdle_id,ac.npbl AS total_npbl,
 ac.harga_minimal_lelang,ac.harga_limit_lelang,ac.bea_lelang_pembeli,
 ac.bea_lelang_penjual,ac.hmls,ac.status_diskon,ac.diskon_lelang_rp,
 ac.diskon_lelang_persen,ac.minimal_penjualan_lelang,
 ac.minimal_kewajiban_pembeli_lelang
FROM contracts c
JOIN customers cu ON cu.customer_id=c.customer_id
JOIN outlets o ON o.outlet_id=c.outlet_id
JOIN branches b ON b.branch_id=o.branch_id
JOIN areas a ON a.area_id=b.area_id
LEFT JOIN contract_items ci ON ci.contract_id=c.contract_id
LEFT JOIN contract_auction_calculations ac ON ac.contract_id=c.contract_id
WHERE 1=1
";

$params = [];
if ($q !== '') {
    $sql .= " AND (c.no_kontrak LIKE ? OR cu.customer_name LIKE ? OR o.outlet_name LIKE ? OR b.branch_name LIKE ?)";
    $like = "%{$q}%";
    array_push($params,$like,$like,$like,$like);
}
if ($branchId > 0) { $sql .= " AND b.branch_id=?"; $params[]=$branchId; }
if ($outletId > 0) { $sql .= " AND o.outlet_id=?"; $params[]=$outletId; }

if ($user['role'] !== 'ADMIN') {
    if (!empty($user['branch_id'])) { $sql .= " AND b.branch_id=?"; $params[]=(int)$user['branch_id']; }
    else { $sql .= " AND a.area_id=?"; $params[]=(int)$user['area_id']; }
}

$sql .= " ORDER BY c.updated_at DESC, c.contract_id DESC, ci.item_no ASC LIMIT {$limit}";

$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$rows = $stmt->fetchAll();

ok([
    'rows' => $rows,
    'count' => count($rows),
]);
