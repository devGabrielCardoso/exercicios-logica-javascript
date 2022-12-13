// Exercicio 4 - Reais para Dólares
// Descrição: Algoritmo que transforma quantia dada pelo usuário em dólares através da cotação dada também pelo usuário.

let valorReal = parseFloat(prompt("Informe a quantia disponivel para conversão"))
let cotacaoDolar = parseFloat(prompt("Informe a cotação do dólar"))
let conversao = valorReal/cotacaoDolar

document.write("A quantia informa em dólares será: $" + conversao.toFixed(2))