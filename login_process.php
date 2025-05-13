<?php
session_start();
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $senha = $_POST['senha'];

    try {
        $stmt = $pdo->prepare("SELECT id, nome_responsavel, senha_hash FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($senha, $user['senha_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['nome_responsavel'] = $user['nome_responsavel'];
            header("Location: dashboard.php");
            exit;
        } else {
            echo "E-mail ou senha incorretos.";
        }
    } catch (PDOException $e) {
        die("Erro no login: " . $e->getMessage());
    }
}
?>
