// Exercicio 29 - Soma dos dois maiores
// Descrição: Solicita três números ao usuário e retorna a soma dos dois maiores números.

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite um último valor"))

if (n1 > n3 && n2 > n3) {
    document.write(`Os dois maiores números são ${n1} e ${n2} <br>`)
    document.write(`A soma dos dois maiores números é: ${n1+n2}`)
} else if (n2>n1 && n3>n1) {
    document.write(`Os dois maiores números são ${n2} e ${n3} <br>`)
    document.write(`A soma dos dois maiores números é: ${n2+n3}`)
} else {
    document.write(`Os dois maiores números são ${n3} e ${n1} <br>`)
    document.write(`A soma dos dois maiores números é: ${n3+n1}`)
}