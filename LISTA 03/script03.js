// Exercicio 3 - Quadrado da Diferença
// Descrição: Algoritmo que solicita dois valores, calcula a diferença e exibe o quadrado da diferença.

let a = parseInt(prompt("Digite um valor"))
let b = parseInt(prompt("Digite outro valor"))
let resultado = Math.pow((a-b), 2)

document.write("O quadrado da diferença dos valores apresentados é: " + resultado)