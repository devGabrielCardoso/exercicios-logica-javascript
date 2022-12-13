// Exercicio 22 - Horas Extras
// Descrição: Solicita horas trabalhadas no mês e o salário ganho por hora, em seguida retorna o salário mensal levando em consideração a possibilidade de horas extras acima de jorndas de 160h

let horasTrabalhadas = parseInt(prompt("Informe a quantidade de horas trabalhadas no mês"))
let salarioHora = parseFloat(prompt("Informe o salário por hora"))

var salarioMensal = horasTrabalhadas*salarioHora
var totalHorasExtras = horasTrabalhadas-160

if (horasTrabalhadas>160) {
    var extra = totalHorasExtras*(salarioHora+(salarioHora*0.5))
    var salarioTotal = salarioMensal + extra
    document.write("Salário hora: R$" + salarioHora.toFixed(2) + "<br>")
    document.write("Total de horas trabalhadas no mês: " + horasTrabalhadas + "h" + "<br>")
    document.write("Total de horas extras no mês: " + totalHorasExtras + "h" + "<br>")
    document.write("Bônus de horas extras: R$" + extra.toFixed(2) + "<br>")
    document.write("Salário sem extra: R$" + salarioMensal.toFixed(2) + "<br>")
    document.write("Salário com extra: " + salarioTotal.toFixed(2))
} else {
    document.write("Salário: R$" + salarioMensal.toFixed(2))
}

