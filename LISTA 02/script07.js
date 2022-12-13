// Exercicio 7 - Volume da lata de óleo
// Descrição: Solicita raio e altura de uma lata para calcular o volume dela.

let raio = parseInt(prompt("Informe o raio da lata de óleo"))
let altura = parseInt(prompt("Informe a altura da lata de óleo"))
let volume = Math.PI*raio**2*altura

alert('O volume da lata de óleo é: ' + volume.toFixed(0) + "ml")