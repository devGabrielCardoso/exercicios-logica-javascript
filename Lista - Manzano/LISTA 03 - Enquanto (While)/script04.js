// Exercicio 4 - Pares existentes até 20
// Descrição: Algoritmo que reconhece os pares existentes dentro do intervalo de 1 a 20.

var numero = 1
var contadora = 0;

while (contadora < 20) {
    if (numero % 2 == 1) {
        document.write(numero + "<br>")
        numero++;
        contadora++;
    } else {
        numero++;
        contadora++;
    }
}