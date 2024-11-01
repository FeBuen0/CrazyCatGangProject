<?php
$servername = "localhost";
$username = "root";
$password = "puc";
$dbname = "db_ong2";


$connexao = new mysqli($servername, $username, $password, $dbname);


if ($connexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}


$nome = $_POST['nome'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];
$senha = $_POST['senha'];

if(empty($nome) || empty($email) || empty($email) || empty($email) || empty($email) || empty($email)){
    $resposta = "Preencha todos os dados";
} 
else {
   
    $stmt = $connexao->prepare("INSERT INTO cliente (email,senha,nome,cpf,telefone,endereco) VALUES (?, ?, ?,?,?,?)");
    $stmt->bind_param("ssssss", $email,$senha,$nome,$cpf,$telefone,$endereco);

    if ($stmt->execute()) {
        $resposta = "Usuário cadastrado com sucesso!";
    } else {
        $resposta = "Erro: " . $stmt->error;
    }
   
    $stmt->close();
    $connexao->close();
}

echo(json_encode($resposta));
?>



