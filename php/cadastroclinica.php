<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "puc";
$dbname = "db_ong2"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Conexão falhou: " . $conn->connect_error]));
}


$bairro = $_POST['bairro'];
$rua = $_POST['rua'];
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$senha = $_POST['senha']; 
$cnpj = $_POST['cnpj'];


$sql = "INSERT INTO clinica (bairro, rua, nome, telefone, email, senha, cnpj)
        VALUES ('$bairro', '$rua', '$nome', '$telefone', '$email', '$senha', '$cnpj')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Erro: " . $conn->error]);
}

$conn->close();
?>
