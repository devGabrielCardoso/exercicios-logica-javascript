// Exercício 32 - Partida de Futebol
// Descrição: Algoritmo que solicita dois times e quantidade de gols marcados por eles, o resultado da partida será exibido.

let time1 = prompt("Time 1")
let time2 = prompt("Time 2")
let gols1 = Number(prompt(`Quantos gols o ${time1} marcou?`))
let gols2 = Number(prompt(`Quantos gols o ${time2} marcou?`))

if (gols1>gols2) {
    document.write(`O ${time1} venceu a partida por ${gols1}x${gols2}`)
} else if (gols1 == gols2) {
    document.write(`Empate. Placar final: ${gols1}x${gols2}`)
} else {
    document.write(`O ${time2} venceu a partida por ${gols2}x${gols1}`)
}