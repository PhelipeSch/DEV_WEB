<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensagens</title>
</head>

<body>
<form action="msgs.php" method="POST">

    <label for="mensagem">Mensagem: </label>
    <input type="text" id="mensagem" name="mensagem">

    <p>Máximo 80 caracteres</p>

    <input type="submit" value="Salvar" name="salvar" id="salvar">
</form>
<br>

<?php
if (isset($_POST['salvar'])) {
    $mensagem = $_POST['mensagem'];
    $arquivo = fopen("mensagem.txt", "a+");
    fwrite($arquivo, $mensagem . "\n");
    fclose($arquivo);
    echo 'Arquivo gravado com sucesso.';
}

$linhas = file("mensagem.txt");
echo "<h3>Todas as mensagens:</h3>";
foreach ($linhas as $linha) {
    echo $linha . "<br>";
}
?>

<br>

<a href="index.html">Início</a>
</body>
</html>