<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "puc";
$dbname = "db_ong2";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Erro de conexão com o banco de dados."]);
    exit;
}

$idClinica = $_GET['idclinica'] ?? null;

if (!$idClinica) {
    echo json_encode(["success" => false, "message" => "ID da clínica não fornecido."]);
    exit;
}

$sql = "SELECT nome, idade, cor, raca, adotado FROM gatos WHERE clinica_idclinica = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idClinica);
$stmt->execute();
$result = $stmt->get_result();

$gatos = [];
while ($row = $result->fetch_assoc()) {
    $gatos[] = [
        "nome" => $row["nome"],
        "idade" => $row["idade"],
        "cor" => $row["cor"],
        "raca" => $row["raca"],
        "adotado" => $row["adotado"]
    ];
}

if (count($gatos) > 0) {
    echo json_encode(["success" => true, "gatos" => $gatos]);
} else {
    echo json_encode(["success" => false, "message" => "Nenhum gato encontrado."]);
}

$stmt->close();
$conn->close();
?>
