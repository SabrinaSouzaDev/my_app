let btnn = document.getElementById("button") as HTMLButtonElement;
let inp1 = document.getElementById("input1") as HTMLInputElement;
let inp2 = document.getElementById("input2") as HTMLInputElement;
let devePrintar = true;
let frase = "O valor é: ";

function adicionarNumero(
    numero1: number, numero2: number, 
    devePrintar: boolean, frase: string
) {
    let resultado = numero1 + numero2;

    if (devePrintar) {
        console.log(frase + resultado);
    }
    
    return numero1 + numero2;
}

console.log(btnn);

// Works as expected
if  (btnn)
btnn.addEventListener('click', () => {
    if (inp1 &&  inp2) {
    console.log(adicionarNumero(Number(inp1.value), Number(inp2.value), devePrintar, frase));
  }
}
  );



