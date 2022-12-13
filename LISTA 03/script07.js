// Exercicio 7 - Quadrado das Somas
// Descrição: Solicita três valores, faz o somatório e em seguida apresenta o quadrado da soma.

let a = parseInt(prompt("Digite um valor"))
let b = parseInt(prompt("Digite outro valor"))
let c = parseInt(prompt("Digite o último valor"))
let resultado = Math.pow((a+b+c), 2)

document.write("O quadrado da soma dos 3 valores é igual a: " + resultado)