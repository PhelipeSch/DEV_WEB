<html>
<head>
    <meta charset="utf-8">
    <title>Aula 21/10</title>
</head>

<body>

<form action = "./index.php" method = "GET"> 
    <label for="name">Nome: </label>
    <input type = "text" name = "name"> 

    <label for="last_name">Sobrenome: </label>
    <input type = "text" name = "last_name">

    <label for="time">Hora: </label>
    <input type = "time" name = "time">

    <label for="email">e-mail: </label>
    <input type="email" name="email">

    <label for="password">Senha: </label>
    <input type="password" name="password" >

    <input type = "submit" value = "Enivar"> 
</form>

<br>

<h1>Resultado: </h1>

<?php 

    $nome = $_GET["name"]; 
    $sobrenome = $_GET["last_name"]; 
    $hora = $_GET["time"];
    $saudacao = 0;
    $email = $_GET["email"];
    $senha = $_GET["password"];

    if ($hora < 13){
        $saudacao = "Bom Dia, ";
    }else{
        if($hora > 19){
            $saudacao = "Boa Noite, ";
        } else{
            $saudacao = "Boa Tarde, ";}
    }

    echo "$saudacao $nome $sobrenome $email $senha"; 
?>
</body>
</html>