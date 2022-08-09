"use strict";
let btnn = document.getElementById("button");
let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let devePrintar = true;
let frase = "O valor é: ";
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
console.log(btnn);
// Works as expected
if (btnn)
    btnn.addEventListener('click', () => {
        if (inp1 && inp2) {
            console.log(adicionarNumero(Number(inp1.value), Number(inp2.value), devePrintar, frase));
        }
    });
