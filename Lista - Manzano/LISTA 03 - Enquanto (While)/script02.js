// Exercicio 2 - Soma dos número até 100
// Algoritmo que mostra a soma de todos os valores presentes de 1 a 100.

var numero = 1
var contadora = 1

while (contadora < 101){
    var numero = numero+contadora
    contadora++;
}

document.write("A soma de todos os números de 1 a 100 é: " + numero)

