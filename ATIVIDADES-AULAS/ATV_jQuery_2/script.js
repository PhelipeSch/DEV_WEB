/*Sintaxe básica do jQuery*/
/*$(seletor).action();*/

$(document).ready(function () {
    $('#altera').click(altera);

    $('#dark').click(dark);
});

function altera() {
    $('h1, h2').toggleClass('dif');
}

function dark(){
    $('body').toggleClass('dark');
}
