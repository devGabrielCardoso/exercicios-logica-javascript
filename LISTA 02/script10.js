// Exercicio 10 - Troca de valores
// Descrição: Solicita dois valores para as variáveis A e B, em seguida, faz a inversão de armazenamento de dados, onde A passa a guardar informação de B e B passa a guardar informação de A.

var a = parseInt(prompt("Informe um valor para a variável A"))
var b = parseInt(prompt("Agora informe um valor para a variável B"))
var c = ''

var auxiliar = a
var a = b
var b = auxiliar


alert('Valor de A: ' + a + " | valor de B: " + b)
