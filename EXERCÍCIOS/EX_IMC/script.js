let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let altura = document.getElementById("altura");
let peso = document.getElementById("peso");

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validaForm);

function calculaIMC() {
    let ps = parseFloat(peso.value);
    console.log(ps);

    let h = parseFloat(altura.value);
    console.log(h);

    let imc = (ps / (Math.pow(h, 2))).toFixed(2);
    console.log(imc)

    let imcInput = document.getElementById("indice");
    imcInput.value = imc;

    let imagem = document.getElementById("imagem");

    if (imc < 18) {
        imagem.setAttribute("src", "normal.png");
    } else {
        if (imc > 28) {
            imagem.setAttribute("src", "obesidade.png");
        } else {
            imagem.setAttribute("src", "sobrepeso.png");
        }
    }
}

function validaForm(event) {
    let alturaValida = validarAltura();
    let pesoValido = validarPeso();

    if (!alturaValida || !pesoValido) {
        event.preventDefault();
        alert("Por favor, informe todos os dados corretamente.");
    } else {
        calculaIMC();
        event.preventDefault();
    }
}

document.getElementById("peso").addEventListener("blur", validarPeso);
document.getElementById("peso").addEventListener("keyup", validarPeso);

document.getElementById("altura").addEventListener("blur", validarAltura);
document.getElementById("altura").addEventListener("keyup", validarAltura);

function validarAltura() {

    if (altura.value.length <= 0) {
        altura.setAttribute("class", "erro");
        return false;

    } else {
        for (let i = 0; i < altura.value.length; i++) {
            if (!numeros.includes(altura.value[i])) {
                altura.setAttribute("class", "erro");
                return false;
            }
        }

        altura.setAttribute("class", "correto");
        return true;
    }
}

function validarPeso() {
    if (peso.value.length <= 0) {
        peso.setAttribute("class", "erro");
        return false;

    } else {
        for (let i = 0; i < peso.value.length; i++) {
            if (!numeros.includes(peso.value[i])) {
                peso.setAttribute("class", "erro");
                return false;
            }
        }

        peso.setAttribute("class", "correto");
        return true;
    }
}