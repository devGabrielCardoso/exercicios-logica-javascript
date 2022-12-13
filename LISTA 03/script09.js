// Exercicio 9 - Salário com reajuste
// Descrição: Solicita o salário mensal e a porcentagem de reajuste para calcular o salário novo.

let salarioAtual = parseFloat(prompt("Informe o seu salário atual"))
let reajuste = parseFloat(prompt("% de reajuste no salário"))
let salarioNovo = salarioAtual+(salarioAtual*reajuste/100)

document.write("Seu novo salário com reajuste de " + reajuste + "%  é: R$" + salarioNovo.toFixed(2))