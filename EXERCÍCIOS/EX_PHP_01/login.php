<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
<form action="./login.php" method="POST">

    <label for="email">Email: </label>
    <input type="text" name="email"><br>

    <label for="senha">Senha: </label>
    <input type="password" id="senha" name="senha">
    <label for="mostraSenha">Exibir senha: </label>
    <input type="checkbox" id="mostraSenha" name="mostraSenha"> <br>

    <input type="submit" value="Log-In" name="logar" id="logar">
</form>

<br>

<?php
/*
Get: aparece na url o que foi informado
Post: não aparece nada na url
*/
if (isset($_POST['logar'])) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    if (isset($_POST['logar'])) {
        if ($email == "admin" && $senha == "admin") {
            echo "Conexão estabelecida com sucesso";
        } else {
            echo "Usuario e/ou senha incorretos";
        }
    }
}
?>

<a href="index.html">Início</a>

<script>

    function mostrarSenha(event) {
        let botaoMostra = document.getElementById('mostraSenha');
        let senha = document.getElementById('senha');
        if (senha.type === "password") {
            senha.type = "text";
        } else {
            senha.type = "password";
        }
    }

    let botao = document.getElementById('mostraSenha');
    botao.addEventListener('click', mostrarSenha);
</script>
</body>
</html>