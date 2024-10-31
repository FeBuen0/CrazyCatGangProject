<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "PUC@1234";
$dbname = "db_ong"; // Substitua pelo nome do seu banco de dados

// Criação da conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação da conexão
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Erro de conexão com o banco de dados."]));
}

// Captura dos dados do formulário
$nome = $_POST['nome'] ?? null;
$cnpj = $_POST['cnpj'] ?? null;
$email = $_POST['email'] ?? null;
$senha = $_POST['senha'] ?? null;

// Verificação de campos vazios
if (!$nome || !$cnpj || !$email || !$senha) {
    echo json_encode(["success" => false, "message" => "Todos os campos são obrigatórios."]);
    exit;
}

// Verifica se o nome da clínica, CNPJ e email existem e se a senha corresponde
$sql = "SELECT senha FROM clinica WHERE nome = ? AND cnpj = ? AND email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $cnpj, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verifica a senha diretamente
    if ($senha === $row['senha']) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Senha incorreta."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Nome, CNPJ ou Email incorretos."]);
}

$stmt->close();
$conn->close();
?>
