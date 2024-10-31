<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "felipe060906";
$dbname = "db_ong2"; // Substitua pelo nome do seu banco de dados

// Criação da conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação da conexão
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Conexão falhou: " . $conn->connect_error]));
}

// Captura dos dados do formulário
$bairro = $_POST['bairro'];
$rua = $_POST['rua'];
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha']; // Hash da senha
$cnpj = $_POST['cnpj'];

// Inserção dos dados no banco
$sql = "INSERT INTO clinica (bairro, rua, nome, telefone, email, senha, cnpj)
        VALUES ('$bairro', '$rua', '$nome', '$telefone', '$email', '$senha', '$cnpj')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Erro: " . $conn->error]);
}

$conn->close();
?>
