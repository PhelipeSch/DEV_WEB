document.body.style.backgroundColor = 'gray';

/*
let info = document.getElementsByClassName('info');

for(let i =0; i< info.length; i++){
    info[i].style.color='white';
}
*/

let h = document.getElementsByTagName('h1');

for(let i =0; i<h.length; i++){
    h[i].style.color='brown';
}

let l2 = document.getElementById('l1');
l2.style.color ='wheat';

let y = document.getElementById('l1');

//y.innerHTML='texto de <i>novo</i>';

let oi = Math.random() * 60;
let formatado = Math.floor(oi);
y.innerHTML=`${formatado}`;

y.setAttribute('class','dif');

let im1 = document.getElementById('im1');
im1.setAttribute('src', 'IMG/imagem.jpg');