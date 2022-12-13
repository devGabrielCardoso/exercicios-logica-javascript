// Exercicio 1 - Idade em dias
// Descrição: Algoritmo que calcula quantos dias, meses, semanas e anos de vida o usuário tem com base na sua idade atual.
let idade = parseInt(prompt("Digite a sua idade"))
let mesesDeVida = 12*idade
let semanasDeVida = idade*48
let diasDeVida = 365*idade

alert('Você tem ' + idade + ' anos, ' + mesesDeVida + " meses, " + semanasDeVida + " semanas e " + diasDeVida + " dias de vida")

