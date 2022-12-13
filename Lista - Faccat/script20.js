// Exercicio 20 - Ordem crescente
// Descrição: Solicita dois valores e exibe-os na tela em ordem crescente

let numero1 = parseInt(prompt("Digite um valor"))
let numero2 = parseInt(prompt("Digite outro valor"))

if (numero1<numero2) {
    document.write("Ordem crescente dos números: " + numero1 + ", " + numero2)
} else {
    document.write("Ordem crescente dos números: " + numero2 + ", " + numero1)
}   