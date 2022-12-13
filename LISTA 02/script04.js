// Exercicio 4 - Imposto de um Carro novo
// Descrição: Algoritmo que calcula o valor final de um carro utilizando apenas um valor de fábrica (dado pelo usuário) e impostos pré-definidos pela lista de exercício.

let custoFabrica = parseInt(prompt("Digite o valor de um carro no custo de fábrica"))
let taxaDistribuidor = 0.28
let imposto = 0.45
let totalTaxas =  taxaDistribuidor + imposto
let custoConsumidor =  custoFabrica + (custoFabrica*totalTaxas)

alert("O preço final de um carro com os impostos é: " + custoConsumidor)