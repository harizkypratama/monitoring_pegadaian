<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();

$areas = $pdo->query("SELECT area_id, area_code, area_name FROM areas WHERE is_active=1 ORDER BY area_name")->fetchAll();

if ($user['role'] === 'ADMIN') {
    $branches = $pdo->query("SELECT branch_id, area_id, branch_code, branch_name FROM branches WHERE is_active=1 ORDER BY branch_name")->fetchAll();
    $outlets = $pdo->query("SELECT o.outlet_id, o.branch_id, o.outlet_code, o.outlet_name, o.outlet_type, b.branch_name FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.is_active=1 ORDER BY o.outlet_name")->fetchAll();
} else {
    $branchesStmt = $pdo->prepare("SELECT branch_id, area_id, branch_code, branch_name FROM branches WHERE is_active=1 AND branch_id=? ORDER BY branch_name");
    $branchesStmt->execute([(int)$user['branch_id']]);
    $branches = $branchesStmt->fetchAll();

    $outStmt = $pdo->prepare("SELECT o.outlet_id, o.branch_id, o.outlet_code, o.outlet_name, o.outlet_type, b.branch_name FROM outlets o JOIN branches b ON b.branch_id=o.branch_id WHERE o.is_active=1 AND o.branch_id=? ORDER BY o.outlet_name");
    $outStmt->execute([(int)$user['branch_id']]);
    $outlets = $outStmt->fetchAll();
}

ok([
    'areas' => $areas,
    'branches' => $branches,
    'outlets' => $outlets,
]);
