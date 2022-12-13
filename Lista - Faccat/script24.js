// Exercicio 24 - Comissão de 3% e 5$
// Descrição: Algoritmo que calcula o salário final de um vendendor com base na suas vendas efetuadas, ganhando bônus de 3% ou 5% dependendo da quantidade de vendas efetuadas no mês.

let salarioFixo = parseInt(prompt("Informe o seu salário fixo"))
let vendasEfetuadas = parseInt(prompt("Informe o total efetuado em vendas no mês"))

let comissao3 = vendasEfetuadas*0.03
let comissao5 = vendasEfetuadas*0.05

if (vendasEfetuadas<=1500){
    var salarioTotal = salarioFixo+comissao3
    document.write("Salário fixo : R$" + salarioFixo + "<br>")
    document.write("Total feito em vendas: R$" + vendasEfetuadas + "<br>")
    document.write("Ganhos extras com comissão de 3%: R$" + comissao3 + "<br>")
    document.write("O seu salário total com bônus de vendas efetuadas é: R$" + salarioTotal.toFixed(2))
} else {
    var salarioTotal = salarioFixo+comissao5
    document.write("Total feito em vendas: R$" + vendasEfetuadas + "<br>")
    document.write("Ganhos extras com comissão de 5%: R$" + comissao5 + "<br>")
    document.write("O seu salário total com bônus de vendas efetuadas é: R$" + salarioTotal.toFixed(2))
}
