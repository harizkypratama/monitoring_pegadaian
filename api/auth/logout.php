<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = current_user();
if ($user) {
    audit($pdo, (int)$user['user_id'], 'LOGOUT', 'app_users', (int)$user['user_id'], 'Logout.');
}

$_SESSION = [];
if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'] ?? '', (bool)$params['secure'], (bool)$params['httponly']);
}
session_destroy();

ok(null, 'Logout berhasil.');
