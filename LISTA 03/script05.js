// Exercicio 5 - Conversão para Real
// Descrição: Algoritmo que solicita quantia em dólares e a atual cotação do real para mostrar a conversão da quantia disponivel em reais. 

let quantiaDolar = parseFloat(prompt("Informe a quantia disponível em dólares"))
let cotacaoReal = parseFloat(prompt("Informe a cotação do real"))
let conversao = quantiaDolar*cotacaoReal

document.write("A quantia de dólares convertidas em reais fica: R$" + conversao)