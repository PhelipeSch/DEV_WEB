//Exercicio 01

let num = Math.ceil(Math.random() * 3);
console.log(num);
let img = document.getElementById('imagem');

if (num == 1) {
    img.innerHTML = '<img src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg">';
} else {
    if (num == 2) {
        img.innerHTML = '<img src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg">';
    } else {
        img.innerHTML = '<img src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg">';
    }
}
// Fim do exercicio 01

//Exercicio 02
let nota01 = prompt('Digite a primeira nota:');
let nota02 = prompt('Digite a segunda nota:');
let nota03 = prompt('Digite a terceira nota:');

let soma = 0;
soma += parseFloat(nota01);
soma += parseFloat(nota02);
soma += parseFloat(nota03);

let media = soma / 3;

let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let mediaFinal = document.getElementById('media');
let situacao = document.getElementById('situacao');

n1.innerHTML = `<p>Nota 1: ${nota01}</p>`;
n2.innerHTML = `<p>Nota 2: ${nota02}</p>`;
n3.innerHTML = `<p>Nota 3: ${nota03}</p>`;
mediaFinal.innerHTML = `<p>A média do estudante é: ${media.toFixed(1)}</p>`;

if (media >= 7) {
    situacao.innerHTML = `<p>Aprovado!</p>`;
    situacao.style.color='blue'
} else {
    situacao.innerHTML = `<p>Reprovado!</p>`;
    situacao.style.color = 'red';
}
//Fim do exercicio 02

//Exercicio 03
let nome = prompt('Digite o nome do estudante:');

let lugar = document.getElementById('nome');
lugar.innerHTML = `<h1>Nome do estudante: ${nome}</h1>`;
//Fim do exercicio 03

//Exercicio 04
let lugar2 = document.getElementById('data');
let dataNum = new Date();

let data = dataNum.toLocaleDateString('pt-BR');
let diaSemana = dataNum.getDay();
let diasdaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let diaS = diasdaSemana[diaSemana];

lugar2.innerHTML = `<h2>Data: ${data}</h2>`;
lugar2.innerHTML += `<h2>Dia da semana: ${diaS}</h2>`;
//Fim do exercicio 04

//Exercicio 05
let p = document.getElementById('frase');
p.style.color = 'red';
p.style.backgroundColor = 'gray';
p.style.fontWeight="bold";
//Fim do exercicio 05
