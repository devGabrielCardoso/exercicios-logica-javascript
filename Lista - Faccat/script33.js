// Exercicio 33 - Maior ou iguais
// Descrição: Solicita dois valores e retorna o maior número ou, se for igual, que são números iguais

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))

if (n1>n2) {
    document.write(`${n1} é o maior deles`)
} else if (n1 == n2){
    document.write("Os números são iguais")
} else {
    document.write(`${n2} é o maior deles`)
} 