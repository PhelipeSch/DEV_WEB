$(document).ready(function () {
    $('#p1').attr('class', 'dif');
    $('#p1').text('Novo texto via jQuery');
    $('#p1').hide(); //Oculta

    let nom = prompt('Qual o seu nome?');
    $('#nome').text('Nome: '+nom);

    $('#btn1').click(testeclick);
});


function testeclick(){
    let cidade = $('#cidade').val();
    alert($('#nome').text() +' de '+cidade);
}
/*Sintaxe básica do jQuery*/
/*$(seletor).action();*/

//Pelo jQuery

//$('p, h1').attr('class','dif');

/*
//Pelo js
let par = document.getElementsByTagName('p');
for(let i=0; i< par.length; i++){
    par[i].setAttribute('class', 'dif');
}

let tit = document.getElementsByTagName('h1');
for(let i=0; i< par.length; i++){
    tit[i].setAttribute('class', 'dif');
}
*/
