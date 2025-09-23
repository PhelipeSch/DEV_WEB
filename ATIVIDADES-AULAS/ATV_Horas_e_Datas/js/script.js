let hoje = new Date();

let dtnasc = new Date('2008-06-22 09:30:00');

let idade = hoje - dtnasc;

document.write('<h1>' + "De 1º de Janeiro de 1970 até agora, se passaram: " + Math.floor(Date.now()) + " ms" + '<\h1>');
document.write('<h1>' + "De 1º de Janeiro de 1970 até agora, se passaram: " + Math.floor(Date.now()/1000) + " s" + '<\h1>');
document.write('<h1>' + "De 1º de Janeiro de 1970 até agora, se passaram: " + Math.floor(Date.now()/1000/60) + " m" + '<\h1>');
document.write('<h1>' + "De 1º de Janeiro de 1970 até agora, se passaram: " + Math.floor(Date.now()/1000/60/60) + " h" + '<\h1>');
document.write('<h1>' + "De 1º de Janeiro de 1970 até agora, se passaram: " + Math.floor(Date.now()/1000/60/60/24) + " dias" + '<\h1>');
document.write('<h1>' + "De 1º de Janeiro de 1970 até agora, se passaram: " + Math.floor(Date.now()/1000/60/60/24/365) + " anos" + '<\h1>');

document.write('<h1> Data atual: '+ hoje.toLocaleDateString() +'<\h1>');

document.write('<h1> Data que o Pillipo nasceu: '+ dtnasc.toLocaleDateString() +'<\h1>');

document.write('<h1> Pillipo tem: '+ idade +'ms de idade <\h1>');
document.write('<h1> Pillipo tem: '+ Math.floor(idade/1000/60/60/24/365) +' anos de idade <\h1>');