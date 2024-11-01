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
$cnpj = $_POST['cnpj'] ?? null;
$email = $_POST['email'] ?? null;
$senha = $_POST['senha'] ?? null;

if (!$nome || !$cnpj || !$email || !$senha) {
    echo json_encode(["success" => false, "message" => "Todos os campos são obrigatórios."]);
    exit;
}

$sql = "SELECT idclinica, senha FROM clinica WHERE nome = ? AND cnpj = ? AND email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $cnpj, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if ($senha === $row['senha']) {
        echo json_encode(["success" => true, "idclinica" => $row['idclinica']]);
    } else {
        echo json_encode(["success" => false, "message" => "Senha incorreta."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Nome, CNPJ ou Email incorretos."]);
}

$stmt->close();
$conn->close();
?>
