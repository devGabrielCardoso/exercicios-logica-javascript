// Exercício 1 - Tabuada
// Descrição: Algoritmo que solicita um número para o usuário e mostra na tela o resultado da tabuada do número informado, de 1 até 10.

let numero = parseInt(prompt("Escolha um número para iniciar a tabuada"));
let contadora = 1;

while (contadora < 11) {
    document.write(numero + "x" + contadora + " = " + numero*contadora + "<br>");
    contadora++;
}