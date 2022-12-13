// Exercicio 17 - Média das notas
// Descrição: Algoritmo que solicita as notas tiradas por um aluno em duas avaliações e calcula a média; em seguida mostra se o aluno foi aprovado ou reprovado.

let nota1 = parseInt(prompt("Digite a nota da primeria avaliação"))
let nota2 = parseInt(prompt("Digite a nota da segunda avaliação"))

let media = (nota1+nota2)/2

if (media>=6) {
    document.write("Média: " + media + "<br>")
    document.write("Aprovado")
} else {
    document.write("Média: " + media + "<br>")
    document.write("Reprovado")
}