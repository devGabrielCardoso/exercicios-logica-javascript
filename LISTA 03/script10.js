// Exercicio 10 - Eleição completa
// Descrição: Algoritmo que simula uma eleição completa, mostrando o percentual de todos os votos dados pelo usuário.

alert("Eleição 2022 - Simulação")
let totalA = parseInt(prompt("Informe o total de votos para o candidato A"))
let totalB = parseInt(prompt("Informe o total de votos para o candidato B"))
let totalC = parseInt(prompt("Informe o total de votos para o candidato C"))
let totalBrancos = parseInt(prompt("Informe o total de votos brancos"))
let totalNulos = parseInt(prompt("Informe o total de votso nulos"))

let totalValidos = totalA+totalB+totalC
let totalVotos = totalBrancos + totalNulos + totalValidos

let perceA = totalA*100/totalVotos
let perceB = totalB*100/totalVotos
let perceC = totalC*100/totalVotos
let perceBrancos = totalBrancos*100/totalVotos
let perceNulos = totalNulos*100/totalVotos


document.write("TOTAL DE VOTOS: " + totalVotos + "<br><br>")
document.write("Total de votos ao candidato A: " + perceA.toFixed(2) + "%" + "<br>")
document.write("Total de votos ao candidato B: " + perceB.toFixed(2) + "%" + "<br>")
document.write("Total de votos ao candidato C: " + perceC.toFixed(2) + "%" + "<br>")
document.write("Total de votos nulos: " + perceNulos.toFixed(2) + "%" + "<br>")
document.write("Total de votos brancos: " + perceBrancos.toFixed(2) + "%" + "<br>")

