// Exercicio 23 - Peso Ideal
// Descrição: Algoritmo que solicita altura e sexo para descobrir o peso ideal da pessoa.

let nome = prompt("Informe seu nome")
let altura = parseFloat(prompt("Informe sua altura (coloque ponto. exemplo: 1.93)"))
let sexo = prompt("Sexo (M) ou (F)")

if (sexo == "M") {
    var pesoIdeal = (72.7*altura)-58
    document.write(nome + ","+ "<br>")
    document.write("Tendo uma altura de " + altura + " e sendo homem" + "<br>")
    document.write("Seu peso ideal é: " + pesoIdeal.toFixed(2) + "kg")
} else if (sexo == "F"){
    var pesoIdeal = (62.1*altura)-44.7
    document.write(nome + "<br>")
    document.write("Tendo uma altura de " + altura + " e sendo mulher" + "<br>")
    document.write("Seu peso ideal é: " + pesoIdeal.toFixed(2) + "kg")
} else {
    document.write ("Erro. Certifique-se de que o sexo foi informado com um único caractere maiúsculo sendo M para masculino e F para feminino")
}

