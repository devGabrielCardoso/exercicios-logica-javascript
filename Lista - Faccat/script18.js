// Exercicio 19 - Pode ou não votar 
// Descrição: Solicita ano de nascimento e atual ano para calcular idade e reconhecer se o usuário já pode ou não votar. 

let anoNascimento = parseInt(prompt("Digite o ano de seu nascimento"))
let anoAtual = parseInt(prompt("Informe o atual ano"))

let idade = anoAtual-anoNascimento

if (idade >= 18) {
    document.write(idade + " anos" + "<br>")
    document.write("Obrigatório votar")
} else if (idade >=16){
    document.write(idade + " anos" + "<br>")
    document.write("Pode votar, mas não é obrigatório")
} else {
    document.write(idade + " anos" + "<br>")
    document.write("Não pode votar ainda")
}