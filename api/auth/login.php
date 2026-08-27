<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$data = json_input();
$username = trim((string)($data['username'] ?? ''));
$password = (string)($data['password'] ?? '');

if ($username === '' || $password === '') fail('Username dan password wajib diisi.');

$stmt = $pdo->prepare("
    SELECT u.user_id, u.username, u.full_name, u.password_hash, u.role,
           u.area_id, u.branch_id, u.is_active,
           a.area_name,
           b.branch_name
    FROM app_users u
    JOIN areas a ON a.area_id = u.area_id
    LEFT JOIN branches b ON b.branch_id = u.branch_id
    WHERE u.username = ?
    LIMIT 1
");
$stmt->execute([$username]);
$user = $stmt->fetch();

if (!$user || (int)$user['is_active'] !== 1) {
    audit($pdo, null, 'LOGIN_FAILED', 'app_users', null, "Username tidak valid: {$username}");
    fail('Username atau password salah.', 401);
}

$valid = password_verify($password, (string)$user['password_hash']);

// Kompatibilitas sementara dengan SQL awal yang masih berisi password plaintext.
// Setelah login berhasil, password otomatis di-upgrade menjadi password_hash().
if (!$valid && hash_equals((string)$user['password_hash'], $password)) {
    $valid = true;
    $newHash = password_hash($password, PASSWORD_DEFAULT);
    $up = $pdo->prepare("UPDATE app_users SET password_hash=?, password_managed_by='ADMIN', updated_at=NOW() WHERE user_id=?");
    $up->execute([$newHash, $user['user_id']]);
}

if (!$valid) {
    audit($pdo, (int)$user['user_id'], 'LOGIN_FAILED', 'app_users', (int)$user['user_id'], 'Password salah.');
    fail('Username atau password salah.', 401);
}

unset($user['password_hash']);
$user['user_id'] = (int)$user['user_id'];
$user['area_id'] = (int)$user['area_id'];
$user['branch_id'] = $user['branch_id'] !== null ? (int)$user['branch_id'] : null;

session_regenerate_id(true);
$_SESSION['user'] = $user;

$up = $pdo->prepare("UPDATE app_users SET last_login_at=NOW() WHERE user_id=?");
$up->execute([$user['user_id']]);

audit($pdo, $user['user_id'], 'LOGIN', 'app_users', $user['user_id'], 'Login berhasil.');

ok($user, 'Login berhasil.');
