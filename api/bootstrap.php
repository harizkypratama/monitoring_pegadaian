<?php
declare(strict_types=1);

session_name('monitoring_pegadaian');
session_start();

require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function json_input(): array {
    $raw = file_get_contents('php://input');
    if ($raw === false || trim($raw) === '') return [];
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function respond(array $payload, int $status = 200): never {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function ok(mixed $data = null, string $message = 'OK'): never {
    respond(['success' => true, 'message' => $message, 'data' => $data]);
}

function fail(string $message, int $status = 400, mixed $errors = null): never {
    $out = ['success' => false, 'message' => $message];
    if ($errors !== null) $out['errors'] = $errors;
    respond($out, $status);
}

function current_user(): ?array {
    return $_SESSION['user'] ?? null;
}

function require_login(): array {
    $user = current_user();
    if (!$user) fail('Belum login.', 401);
    return $user;
}

function require_admin(): array {
    $user = require_login();
    if (($user['role'] ?? '') !== 'ADMIN') fail('Akses admin diperlukan.', 403);
    return $user;
}

function client_ip(): string {
    return $_SERVER['REMOTE_ADDR'] ?? '';
}

function audit(PDO $pdo, ?int $userId, string $action, ?string $table = null,
               ?int $recordId = null, ?string $description = null,
               mixed $oldData = null, mixed $newData = null): void {
    $sql = "INSERT INTO audit_logs
            (user_id, action, table_name, record_id, description, old_data, new_data, ip_address, user_agent)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $userId,
        $action,
        $table,
        $recordId,
        $description,
        $oldData === null ? null : json_encode($oldData, JSON_UNESCAPED_UNICODE),
        $newData === null ? null : json_encode($newData, JSON_UNESCAPED_UNICODE),
        client_ip(),
        substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500),
    ]);
}

function num(mixed $v): float {
    if ($v === null || $v === '') return 0.0;
    if (is_string($v)) {
        $v = str_replace(['Rp', 'rp', ' ', '.'], '', $v);
        $v = str_replace(',', '.', $v);
    }
    return is_numeric($v) ? (float)$v : 0.0;
}

function nullable_date(mixed $v): ?string {
    if ($v === null || trim((string)$v) === '') return null;
    $v = trim((string)$v);
    $d = DateTime::createFromFormat('Y-m-d', $v);
    return ($d && $d->format('Y-m-d') === $v) ? $v : null;
}

function user_scope_sql(array $user, string $alias = 'o'): array {
    if (($user['role'] ?? '') === 'ADMIN') return ['', []];
    if (!empty($user['branch_id'])) return [" AND {$alias}.branch_id = ?", [(int)$user['branch_id']]];
    return [" AND EXISTS (SELECT 1 FROM branches bx WHERE bx.branch_id = {$alias}.branch_id AND bx.area_id = ?)", [(int)$user['area_id']]];
}
