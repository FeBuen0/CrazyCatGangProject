<?php
header('Content-Type: application/json');


$servername = "localhost";
$username = "root";
$password = "dado verde";
$dbname = "db_ong2";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die(json_encode(['error' => 'Erro na conexão com o banco de dados']));
}


$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$senha = $data->senha;


$stmt = $conn->prepare("SELECT * FROM cliente WHERE email = ? AND senha = ?");
$stmt->bind_param("ss", $email, $senha);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['message' => 'Login bem-sucedido']);
} else {
    echo json_encode(['error' => 'Email ou senha inválidos']);
}

$stmt->close();
$conn->close();
?>
