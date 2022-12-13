// Exercicio 8 - Produto e Soma
// Descrição: Solicita 4 valores e exibe o produto de A com C e soma de B com D

let a = parseInt(prompt("Dê um valor para A"))
let b = parseInt(prompt("Dê um valor para B"))
let c = parseInt(prompt("Dê um valor para C"))
let d = parseInt(prompt("Dê um valor para D"))

let produto = a*c 
let soma = b+d

document.write("O produto de " + a + " com " + c + " é igual a: " + produto + "<br>")
document.write("A soma de " + b + " com " + d + " é igual a: " + soma)