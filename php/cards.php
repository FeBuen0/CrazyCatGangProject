<?php

    $db = mysqli_connect("localhost:3306","root","felipe060906",'db_ong2');
    $query = "SELECT * FROM clinica";

    $dados = mysqli_query($db,$query);

    $array = Array();
    $array = mysqli_fetch_all($dados,MYSQLI_ASSOC);

    echo json_encode($array);

?>