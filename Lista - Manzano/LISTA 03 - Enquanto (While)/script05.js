// Exercicio 5 - Potência de 3 sem sinal de potenciação
// Descrição: Algoritmo que calcula os resultados da potência de 3 do expoente 0 até o 15

var contadora = 0;
var resultado = 1;

while (contadora < 16) {
    document.write("3 elevado a " , contadora , " = " , resultado , "<br>");
    resultado = resultado * 3 ;
    contadora++;
}