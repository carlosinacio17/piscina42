<?php
print_r($_POST);
session_start();
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome_responsavel = trim($_POST['nome_responsavel']);
    $email = trim($_POST['email']);
    $nome_crianca = trim($_POST['nome_crianca']);
    $genero = $_POST['genero'];
    $idade = $_POST['idade'];
    $nivel_autismo = $_POST['nivel_autismo'];
    $senha = $_POST['senha'];
    $confirmar_senha = $_POST['confirmar_senha'];

    if ($senha !== $confirmar_senha) {
        die("Erro: As senhas não coincidem.");
    }

    $senha_hash = password_hash($senha, PASSWORD_BCRYPT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (nome_responsavel, email, nome_crianca, genero, idade, nivel_autismo, senha_hash) 
                               VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$nome_responsavel, $email, $nome_crianca, $genero, $idade, $nivel_autismo, $senha_hash]);
        
        echo "Cadastro realizado com sucesso! <a href='login.php'>Fazer login</a>";
        header("Location: login.php");
    } catch (PDOException $e) {
        die("Erro no cadastro: " . $e->getMessage());
    }
}
?>
