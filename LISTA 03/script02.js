// Exercicio 2 - Volume da caixa
// Descrição: Algoritmo que solicita ao usuário comprimento, largura e altura de uma caixa para calcula a área.

let comprimento = parseInt(prompt("Informe o comprimento da caixa"))
let largura = parseInt(prompt("Informe a largura da caixa"))
let altura = parseInt(prompt("Informe a altura da caixa"))
let volume = comprimento*largura*altura

document.write("O volume da caixa é: " + volume + "cm")