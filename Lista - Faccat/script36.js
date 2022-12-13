// Exercicio 36 - Soma e produto das idades
// Descrição: Algoritmo que solicita idade de 2 homens e 2 mulheres para retornar a soma e produto das idades.

let h1 = Number(prompt("Informe a idade do homem"))
let h2 = Number(prompt("Informe a idade de outro homem"))
let m1 = Number(prompt("Informe a idade da mulher"))
let m2 = Number(prompt("Informe a idade de outra mulher"))

if (h1>h2 && m1<m2) {
    document.write(`Idade do homem mais velho: ${h1}<br>`)
    document.write(`Idade da mulher mais nova: ${m1}<br>`)
    document.write(`Idade do homem mais novo: ${h2}<br>`)
    document.write(`Idade da mulher mais velha: ${m2}<br>`)
    document.write(`A soma da idade do homem mais velho com a mulher mais nova é: ${h1+m1}<br>`)
    document.write(`O produto da idade do homem mais novo com a mulher mais velha é: ${h2*m2}<br>`)
} else if (h2>h1 && m2<m1) {
    document.write(`Idade do homem mais velho: ${h2}<br>`)
    document.write(`Idade da mulher mais nova: ${m2}<br>`)
    document.write(`Idade do homem mais novo: ${h1}<br>`)
    document.write(`Idade da mulher mais velha: ${m1}<br>`)
    document.write(`A soma da idade do homem mais velho com a mulher mais nova é: ${h2+m2}<br>`)
    document.write(`O produto da idade do homem mais novo com a mulher mais velha é: ${h1*m1}<br>`)
} else if (h1>h2 && m2<m1) {
    document.write(`Idade do homem mais velho: ${h1}<br>`)
    document.write(`Idade da mulher mais nova: ${m2}<br>`)
    document.write(`Idade do homem mais novo: ${h2}<br>`)
    document.write(`Idade da mulher mais velha: ${m1}<br>`)
    document.write(`A soma da idade do homem mais velho com a mulher mais nova é: ${h1+m2}<br>`)
    document.write(`O produto da idade do homem mais novo com a mulher mais velha é: ${h2*m1}<br>`)
} else if (h2>h1 && m1<m2) {
    document.write(`Idade do homem mais velho: ${h2}<br>`)
    document.write(`Idade da mulher mais nova: ${m1}<br>`)
    document.write(`Idade do homem mais novo: ${h1}<br>`)
    document.write(`Idade da mulher mais velha: ${m2}<br>`)
    document.write(`A soma da idade do homem mais velho com a mulher mais nova é: ${h2+m1}<br>`)
    document.write(`O produto da idade do homem mais novo com a mulher mais velha é: ${h1*m2}<br>`)
}