<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "puc";
$dbname = "db_ong2";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Erro de conexão com o banco de dados."]));
}


$nome = $_POST['nome'] ?? null;
$idade = $_POST['idade'] ?? null;
$cor = $_POST['cor'] ?? null;
$raca = $_POST['raca'] ?? null;
$idClinica = $_POST['idclinica'] ?? null;


if (!$nome || !$idade || !$cor || !$raca || !$idClinica) {
    echo json_encode(["success" => false, "message" => "Todos os campos são obrigatórios."]);
    exit;
}


$sql = "INSERT INTO gatos (nome, idade, cor, raca, adotado, clinica_idclinica) VALUES (?, ?, ?, ?, 0, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sissi", $nome, $idade, $cor, $raca, $idClinica);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao cadastrar gato."]);
}

$stmt->close();
$conn->close();
?>
