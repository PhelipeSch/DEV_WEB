

$(document).ready(function () {
    $('#btn').click(valida);
    $('#btn').click(operacoes);
});

function operacoes() {
    let numero1 = parseFloat($('#primeiro').val());
    let numero2 = parseFloat($('#segundo').val());

    if ($('#operacao').val() == 'adicao') { // soma
        $('img').attr('src', 'img/mais.png');
        let resSoma = (numero1 + numero2);
        $('#resultado').attr('value', resSoma);

    } else {

        if ($('#operacao').val() == 'subtracao') { //subtracao
            $('img').attr('src', 'img/menos.png');
            let resSubtracao = (numero1 - numero2);
            $('#resultado').attr('value', resSubtracao);

        } else {

            if ($('#operacao').val() == 'multiplicacao') { //multiplicacao
                $('img').attr('src', 'img/vezes.png');
                let resMult = (numero1 * numero2);
                $('#resultado').attr('value', resMult);

            } else {
                $('img').attr('src', 'img/divisao.png');
                let resDiv = (numero1 / numero2); //divisao
                $('#resultado').attr('value', resDiv);
            }
        }
    }
}

function valida() {
    let num1 = $('#primeiro').val();
    let num2 = $('#segundo').val();

    if (num1 == '') {
        $('#primeiro').attr('class', 'erro');
        $('p').text('Erro, preencha os campos com números!!!');
    }else{
        $('#primeiro').attr('class', '');
    }
    if (num2 == '') {
        $('#segundo').attr('class', 'erro');
        $('p').text('Erro, preencha os campos com números!!!');
    }else{
        $('#segundo').attr('class', '');

    }

}
/*Sintaxe básica do jQuery*/
/*$(seletor).action();*/