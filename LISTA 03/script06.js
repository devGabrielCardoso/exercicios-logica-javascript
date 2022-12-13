// Exercicio 6 - Soma dos quadrados
// Descrição: Solicita três valores ao usuário e faz a somatório dos quadrados dos três números informados.

let a = parseInt(prompt("Informe um valor"))
let b = parseInt(prompt("Informe outro valor"))
let c = parseInt(prompt("Informe o último valor"))

let quadradoA = a**2
let quadradoB = b**2
let quadradoC = c**2


let somaQuadrados=  quadradoA+quadradoB+quadradoC

document.write("O quadrado de " + a + " é igual a: " + quadradoA + "<br>")
document.write("O quadrado de " + b + " é igual a: " + quadradoB + "<br>")
document.write("O quadrado de " + c + " é igual a: " + quadradoC + "<br>")
document.write("A soma dos quadrados dos três valores digitados é igual a: " + somaQuadrados)