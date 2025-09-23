// Primeiro exercício
function ex1(event) {
    event.preventDefault();

    let hoje = new Date();
    let data_Inf = document.getElementById("data1").value;

    let partes = data_Inf.split("-");
    let ano = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let dia = parseInt(partes[2]);

    let dataNasc = new Date(ano, mes - 1, dia);

    let idade = hoje.getFullYear() - dataNasc.getFullYear();

    /*
        console.log(dataNasc);
        console.log(nascimento);
        console.log(hoje);
        console.log(idade);
    */

    let aniversario_passou = (hoje.getMonth() > dataNasc.getMonth()) || (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() >= dataNasc.getDate());

    if (!aniversario_passou) {
        idade = idade - 1;
    }

    let anoProximo = hoje.getFullYear();

    if (aniversario_passou) {
        anoProximo = anoProximo + 1;
    }

    let proximoAniversario = new Date(anoProximo, mes - 1, dia);

    let diferenca = proximoAniversario - hoje;
    let diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    let texto = "Idade: " + idade + " anos <br>" + "Dias até o próximo aniversário: " + diasRestantes;

    document.getElementById("resultado-1").innerHTML = texto;

}
//Fim do primeiro exercício

// Segundo exercício
function ex2(event) {
    event.preventDefault();

    let data_Inf = document.getElementById("data2").value;
    let numSemanas = document.getElementById("semanas").value;

    let partes = data_Inf.split("-");
    let ano = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let dia = parseInt(partes[2]);
    /*
        console.log(ano);
        console.log(mes);
        console.log(dia);
        console.log(numSemanas);
    */
    let data = new Date(ano, mes - 1, dia);

    let tempo = (numSemanas - 1) * 7;

    let texto = data.toLocaleDateString();
    document.getElementById("resultado-2").innerHTML = texto + '<br>';

    for (let i = 0; i < tempo; i++) {
        if (data.getMonth() === 0 || data.getMonth() === 2 || data.getMonth() === 4 || data.getMonth() === 6 || data.getMonth() === 7 || data.getMonth() === 9 || data.getMonth() === 11) {

            //Dezembro e 31
            if (data.getMonth() === 11 && data.getDate() === 31) {

                data.setDate(1);
                data.setMonth(0);
                data.setFullYear(data.getFullYear() + 1);
            } else {
                //Outro mês e 31
                if (data.getDate() === 31) {

                    data.setDate(1);
                    data.setMonth(data.getMonth() + 1);
                }
                else {
                    //Mês de 31 dias porém não é 31
                    data.setDate(data.getDate() + 1);
                }
            }
        } else {
            //Fevereiro
            if (data.getMonth() === 2) {
                //Ano bissexto
                if ((data.getFullYear() % 4 === 0 && data.getFullYear() % 100 !== 0) || (data.getFullYear() % 400 === 0)) {
                    //Fevereiro e 29
                    if (data.getDate() === 29) {
                        data.setDate(1);
                        data.setMonth(data.getMonth() + 1);
                    }
                    //Fevereiro, ano bissexto e não é 29
                    else {
                        data.setDate(data.getDate() + 1);
                    }
                }
            } else {
                if (data.getDate() !== 28) {
                    data.setDate(data.getDate() + 1);
                }
                else {
                    data.setDate(1);
                    data.setMonth(data.getMonth() + 1);
                }
            }
        }
        if ((i + 1) % 7 === 0) {
            let texto = data.toLocaleDateString();
            document.getElementById("resultado-2").innerHTML += `${texto} <br>`;
        }
    }
}
//Fim do segundo exercício

// Terceiro exercício
let vetor = new Array(6);

for (let i = 0; i < vetor.length; i++) {

    vetor[i] = Math.ceil(Math.random() * 60);

    for (let j = 0; j < i; j++) {
        if (vetor[i] === vetor[j]) {
            vetor[i] = Math.ceil(Math.random() * 60);
            j = -1;
        }
    }
    document.getElementById(i).innerHTML += `${vetor[i]}`;
}
// Fim do terceiro exercício