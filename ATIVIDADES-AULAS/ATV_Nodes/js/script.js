let tabela = document.getElementById('corpo');
clean(tabela);

for (let i = 0; i < tabela.childElementCount; i++) {
    var notas = parseFloat(corpo.childNodes[i].childNodes[1].innerText);
}

for(let i =0; i < notas.length; i++){
    if(notas[i]>= 7.0){
        corpo.childNodes[i].childNodes[2]
    }
}

function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        //types 1: element, 8:comentário, 3:texto
        if (
            child.nodeType === 8 ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}
