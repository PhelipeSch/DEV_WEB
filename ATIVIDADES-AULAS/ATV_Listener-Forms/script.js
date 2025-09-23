let form1 = document.getElementById('form1');
form1.addEventListener('submit', validaform);

let nome = document.getElementById('nome');
nome.addEventListener('blur', validanome);
nome.addEventListener('keyup', validanome);


let end = document.getElementById('end');
end.addEventListener('blur', validaend);
end.addEventListener('keyup', validaend);


function validaform(event) {
    if ((validanome() == false) || (validaend() == false)) {
        event.preventDefault(); // cancela o envio dos dados
        alert('Dados Inválidos');
    } else {
        alert('Dados Válidos')
    }
}

function validanome() {
    let nome = document.getElementById('nome');
    if (nome.value.length < 5) {
        nome.setAttribute('class', 'erro');
        return false;
    } else {
        nome.setAttribute('class', 'correto');
        return true;
    }
}

function validaend() {
    let end = document.getElementById('end');

    if (end.value.length == 0) {
        end.setAttribute('class', 'erro');
        return false;
    } else {
        end.setAttribute('class', 'correto');
        return true;
    }
}