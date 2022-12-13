// Exercicio 19 - Maior numero
// Descrição: Solicita dois valores e exibe na tela o maior deles.

let numero1 = parseInt(prompt("Digite um valor"))
let numero2 = parseInt(prompt("Digite outro valor"))

if (numero1>numero2) {
    document.write("Número " + numero1 + " é o maior.")
} else {
    document.write("Número " + numero2 + " é o maior.")
}