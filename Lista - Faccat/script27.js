// Exercicio 27 - Positivo, negativo e zero
// Descrição: Algoritmo que solicita um número ao usuário e retorna se ele é positivo, negativo ou zero.

let numero = Number(prompt("Digite um número"))

if (numero>0) {
    document.write("É positivo")
} else if (numero == 0) {
    document.write("Zero")
} else {
    document.write("Negativo")
}