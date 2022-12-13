// Exercicio 3 - Reajuste de salário
// Descrição: Algoritmo que calcula reasjuste de um salário com base nas informações fornecidas pelo usuário.

let salarioAtual = parseInt(prompt("Digite o seu salário atual"))
let reajuste = parseInt(prompt("De quantos % será o reajuste?"))
let salarioNovo = salarioAtual+((salarioAtual*reajuste)/100)
alert("Seu novo salário será: " + salarioNovo)
