// Exercicio 2 - Contagem de votos
// Descrição: Algoritmo que calcula mostra porcentagem de votos válidos, nulos e brancos de uma eleição simples.

let totalEleitores = parseInt(prompt("Digite o total de eleitores nessa eleição"))
let totalValidos = parseInt(prompt("Total de votos válidos"))
let totalNulos = parseInt(prompt("Total de votos nulos"))
let totalBrancos = parseInt(prompt("Total de votos em brancos"))
let percentualValidos = (totalValidos*100)/totalEleitores
let percentualNulos = (totalNulos*100)/totalEleitores
let percentualBrancos = (totalBrancos*100)/totalEleitores

alert("Total de votos válidos: " + percentualValidos.toFixed(2) + "% | nulos: " + percentualNulos.toFixed(2) + "% | brancos: " + percentualBrancos.toFixed(2) + "%")


