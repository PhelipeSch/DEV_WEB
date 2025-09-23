function atualizarhr() {
    /*Cria a variavel data e coloca o dia de hoje*/
    let data = new Date();

    /*Pega o lugar onde está o id data*/
    let dataTela = document.getElementById('data');

    /*Insere a data de hoje no formato do Brasil no local do id*/

    dataTela.innerText = 'Data: ' + data.toLocaleDateString() + ' Horas:  ' + data.toLocaleTimeString();
}

function bgChange() {
    var rndCol = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    document.body.style.backgroundColor = rndCol;
}

function congelar(){
    clearInterval(trcr);
}

function valida(){
    let nome = document.getElementById('nome');
    if(nome.value.length == 0){
        alert('Nome Inválido!');
    }
}

bgChange();
atualizarhr();

let atual = setInterval(atualizarhr, 1000);

let trcr = setInterval(bgChange, 2000);

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', atualizarhr);
btn1.addEventListener('dblclick', atualizarhr);
//btn1.addEventListener('mousemove', atualizarhr);

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', bgChange);

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', congelar);


let form1 = document.getElementById('form1');
form1.addEventListener('submit', valida);