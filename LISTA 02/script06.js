// Exercicio 6 - Converter Fahrenheit para Celsius
// Descrição: Solicita uma temperatura em graus Fahrenheit e faz a conversão para  graus Celsius.

let fahrenheit = parseInt(prompt("Digite a temperada em Fahrenheit para converter em Celsius"))
let celsius = (fahrenheit-32)*(5/9)
alert(fahrenheit + "°F em Celsius é: " + celsius + "°C")