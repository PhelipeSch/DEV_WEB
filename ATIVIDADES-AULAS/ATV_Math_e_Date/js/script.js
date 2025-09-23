
/*
let nr = parseInt( prompt('Digite a quantidade de números:') );

for (let i = 0; i < nr; i++) {
    let v = Math.random() * 60;
    document.write('<h1>' + Math.ceil(v) + '<\h1>');
    console.log(v);
}

let valor = 10.256;

document.write('<p>' + valor.toFixed(2) + '<\p>');


let email = 'ernani@gmail.com';
document.write ( '<h2>' + email.indexOf('#') + '<\h2>');

let mensagem = prompt('Digite o e-mail: ');

if(mensagem.indexOf('@') == -1){
    document.write('<h1 class="inval">'+ 'Email inválido! <\h1>');
}else{
    document.write('<h1 class = "val" >'+ 'Email válido!'+'<\h1>');
}

let email = prompt('Digite o seu e-mail: ');

document.write('<h1>'+email.indexOf('@')+'<\h1>');

var ind = email.indexOf('@');

document.write('<h1>'+email.lastIndexOf('@')+'<\h1>');

if(email.indexOf('@') != email.lastIndexOf('@')){
    alert('Email com mais de um @');
}

document.write('<h1> Substring dos 3 primeiros carácteres: '+ email.substring(0,3)+'<\h1>')

document.write('<h1> Usuário: '+ email.substring(0,ind)+'<\h1>');

document.write('<h1> Domínio: '+ email.substring((ind+1), email.length)+'<\h1>');
*/

document.write('<h1> Hoje é dia: '+ Date.now()+'<\h1>');

let hoje = new Date('2008-06-22 00:00:00');

document.write('<h1> Hoje é dia: '+ hoje.getDate()+'<\h1>');

document.write('<h1> Hoje é o Mês: '+ (hoje.getMonth()+1)+'<\h1>');

document.write('<h1> Hoje é: '+ hoje.getDay()+'<\h1>');

document.write('<h1> Hoje é o ano: '+ hoje.getFullYear()+'<\h1>');

document.write('<h1> A data de hoje é: '+ hoje.toLocaleDateString()+'<\h1>');

document.write('<h1> Agora são: '+ hoje.toLocaleTimeString()+'<\h1>');

document.write('<h1> Formato Padrão: '+ hoje.toString()+'<\h1>');