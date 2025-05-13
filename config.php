<?php
$host = 'localhost';
$dbname = 'plataforma_inclusiva';
$username = 'root';  // Mude se necessário
$password = '';      // Mude se necessário

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}
?>
