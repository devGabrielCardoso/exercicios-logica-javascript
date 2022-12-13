// Exercicio 9 - Prestação com Juros
// Descrição: Solicita o valor inicial de uma prestação, o tempo de atraso e a taxa para calcular o valor final de uma prestação em atraso.

let prestacaoInicial = parseInt(prompt('Informe o valor inicial da prestação'))
let tempo = parseInt(prompt("Informe o tempo de atraso"))
let taxa = parseInt(prompt("Taxa por atraso"))

let prestacaoFinal =  prestacaoInicial + (prestacaoInicial*taxa/100*tempo)

alert('O valor da prestação com taxa ficou: R$' + prestacaoFinal)