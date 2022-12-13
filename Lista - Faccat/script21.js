// Exercicio 21 - Partida de Xadrez
// Descrição: Algoritmo que calcula duração total de uma partida de xadrez com base no horário de inicio e fim dados pelo usuário.

let inicio = parseInt(prompt("Informe o horário de inicio da partida"))
let fim = parseInt(prompt("Informe o horário de término da partida"))

var duracao = fim-inicio 

if (duracao<0) {
    duracao = (fim-inicio)+24
} else if (duracao==0) {
    duracao = 24
}

document.write("Duração da partida: " + duracao + "h")