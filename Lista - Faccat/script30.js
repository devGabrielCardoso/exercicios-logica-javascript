// Exercicio 30 - Ordem crescente dos números
// Descrição: Solicita três números ao usuário e retorna na tela a ordem crescente dos números dados.

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite um último número"))

if (n1<n3 && n1<n2 && n2<n3 && n2>n1) {
    document.write(`Ordem crescente dos números informados ${n1}, ${n2} e ${n3}`)
} else if (n2<n1 && n2<n3 && n1<n3 && n1>n2) {
    document.write(`Ordem crescente dos números informados ${n2}, ${n1} e ${n3}`)
} else if (n3<n2 && n3<n1 && n1<n2 && n1>n3) {
    document.write(`Ordem crescente dos números informados ${n3}, ${n1} e ${n2}`)
} else if (n1<n3 && n1<n2 && n3<n2 && n3>n1) {
    document.write(`Ordem crescente dos números informados ${n1}, ${n3} e ${n2}`)
} else if (n2<n3 && n2<n1 && n3<n1 && n3>n2) {
    document.write(`Ordem crescente dos números informados ${n2}, ${n3} e ${n1}`)
} else {
    document.write(`Ordem crescente dos números informados ${n3}, ${n2} e ${n1}`)
}