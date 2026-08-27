<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_admin();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $rows = $pdo->query("
        SELECT u.user_id,u.username,u.full_name,u.role,u.area_id,u.branch_id,u.is_active,
               u.must_change_password,a.area_name,b.branch_name,u.last_login_at,u.created_at,u.updated_at
        FROM app_users u
        JOIN areas a ON a.area_id=u.area_id
        LEFT JOIN branches b ON b.branch_id=u.branch_id
        ORDER BY u.user_id
    ")->fetchAll();
    ok($rows);
}

$data = json_input();
$action = $_GET['action'] ?? 'save';

if ($action === 'delete') {
    $id = (int)($data['user_id'] ?? 0);
    if ($id <= 0) fail('user_id tidak valid.');
    if ($id === $user['user_id']) fail('Admin yang sedang login tidak dapat dihapus.');
    $stmt = $pdo->prepare("UPDATE app_users SET is_active=0 WHERE user_id=?");
    $stmt->execute([$id]);
    audit($pdo, $user['user_id'], 'DELETE', 'app_users', $id, 'User dinonaktifkan.');
    ok(null, 'User dinonaktifkan.');
}

$username = trim((string)($data['username'] ?? ''));
$fullName = trim((string)($data['full_name'] ?? ''));
$role = (($data['role'] ?? 'USER') === 'ADMIN') ? 'ADMIN' : 'USER';
$areaId = (int)($data['area_id'] ?? $user['area_id']);
$branchId = isset($data['branch_id']) && $data['branch_id'] !== '' ? (int)$data['branch_id'] : null;
$password = (string)($data['password'] ?? '');

if ($username === '' || $fullName === '' || $areaId <= 0) fail('Username, nama, dan area wajib diisi.');

$id = (int)($data['user_id'] ?? 0);

if ($id > 0) {
    if ($password !== '') {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("UPDATE app_users SET username=?,full_name=?,password_hash=?,password_managed_by='ADMIN',role=?,area_id=?,branch_id=?,updated_at=NOW() WHERE user_id=?");
        $stmt->execute([$username,$fullName,$hash,$role,$areaId,$branchId,$id]);
    } else {
        $stmt = $pdo->prepare("UPDATE app_users SET username=?,full_name=?,role=?,area_id=?,branch_id=?,updated_at=NOW() WHERE user_id=?");
        $stmt->execute([$username,$fullName,$role,$areaId,$branchId,$id]);
    }
    audit($pdo, $user['user_id'], 'UPDATE', 'app_users', $id, 'User diperbarui.');
    ok(['user_id'=>$id], 'User diperbarui.');
}

if ($password === '') fail('Password wajib diisi untuk user baru.');

$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO app_users (username,full_name,password_hash,password_managed_by,role,area_id,branch_id,is_active) VALUES (?,?,?,'ADMIN',?,?,?,?,?)");
$stmt->execute([$username,$fullName,$hash,$role,$areaId,$branchId,1]);
$newId = (int)$pdo->lastInsertId();
audit($pdo, $user['user_id'], 'INSERT', 'app_users', $newId, 'User dibuat.');
ok(['user_id'=>$newId], 'User dibuat.');
