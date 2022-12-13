// Exercício 28 - Maior número
// Descrição: Algoritmo que solicita ao usuário três números e retorna na tela o maior deles.

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite um último número"))

if (n1 > n2 && n1 > n3) {
    document.write(`O maior número informado é o ${n1}`)
} else if (n2 > n1 && n2 > n3)  {
    document.write(`O maior número informado é o ${n2}`)

} else if (n3 > n2 && n3 > n1) {
    document.write(`O maior número informado é o ${n3}`)

}