let lista1 = document.getElementById('lista1');
let el = document.createElement('li');
let eltxt = document.createTextNode('Pedro');

el.appendChild(eltxt);
lista1.appendChild(el);

clean(lista1);

let nome = prompt('Digite o nome que deseja remover: ');
let cont = 0;

for (let i = 0; i < lista1.childElementCount; i++) {

    let comp = lista1.childNodes[i].innerText;
    if (nome == comp) {
        cont++;
        lista1.childNodes[i].style.color = "red";
        //lista1.removeChild(lista1.childNodes[i]);
    }
}

alert('Foram achados  '+cont+' nome(s)');

//lista1.removeChild(lista1.childNodes[1]);-

document.write('<h1>Elementos da lista1: ' + lista1.childElementCount + '</h1>');

document.write('<h1> 1º Elemento ' + lista1.childNodes[0].innerText + '</h1>');


for (let i = 0; i < lista1.childElementCount; i++) {
    document.write('<p> ' + (i + 1) + '-' + lista1.childNodes[i].innerText + '</p>');
}


function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}
