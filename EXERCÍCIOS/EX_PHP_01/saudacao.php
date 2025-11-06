<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saudações</title>
</head>
<body>

<form action="saudacao.php" method="GET">
    <label for="nome">Nome: </label>
    <input type="text" name="nome">

    <label for="sobrenome">Sobrenome: </label>
    <input type="text" name="sobrenome">

    <label for="time">Hora: </label>
    <input type="time" name="time">

    <input type="submit" value="Enivar" name="enviar">
</form>
<br>
<h1>Resultado: </h1>

<?php
if (isset($_GET["enviar"])) {
    $nome = $_GET["nome"];
    $sobrenome = $_GET["sobrenome"];
    $hora = $_GET["time"];
    $mensagem = 0;

    if ($hora < 13) { //Dia 00:00 até 12:59
        $mensagem = "Bom Dia, ";
    } else {
        if ($hora >= 19) { // Noite 19:00 até 23:59
            $mensagem = "Boa Noite, ";
        } else { // Tarde de 13 até 18:59
            $mensagem = "Boa Tarde, ";
        }
    }

    echo $mensagem . $nome . " " . $sobrenome;
}
?>
<a href="index.html">Início</a>
</body>
</html>