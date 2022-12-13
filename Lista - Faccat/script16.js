// Exercicio 16 - Custo da Maça
// Descrição: Algoritmo que pede ao usuário quantidade de maças adquiridas e passa o valor final da compra, variando o preço através da quantidade levada pelo usuario

let quantidadeComprada = parseInt(prompt("Quantas maças serão compradas?"))

if (quantidadeComprada>=12) {
    var precoCada = 1.00
    var precoTotal = precoCada*quantidadeComprada
} else {
    var precoCada = 1.30
    var precoTotal = precoCada*quantidadeComprada
}

document.write("Preço da maça: R$" + precoCada.toFixed(2) + "<br>")
document.write("Quantidade comprada: " + quantidadeComprada + "<br>")
document.write("Valor da compra: R$" + precoTotal.toFixed(2))