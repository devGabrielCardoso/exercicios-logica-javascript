// Exercicio 25 - Conta Bancária
// Descrição: Algoritmo que simula saldo de uma conta bancária, mostrando se é postivo ou negativo com base no saldo, débito e crédito dados pelo próprio usuário.

let numeroConta = prompt("Informe o número da conta")
let saldo = parseFloat(prompt("Informe o saldo pendente"))
let debito = parseFloat(prompt("Informe a quantia disponível no débito"))
let credito = parseFloat(prompt("Informe a quantia disponível no crédito"))

let saldoAtual = (debito+credito)-saldo

if (saldoAtual>=0) {
    document.write("Conta: " + numeroConta + "<br>")
    document.write("Saldo positivo: R$" + saldoAtual)
} else {
    document.write("Conta: " + numeroConta + "<br>")
    document.write("Saldo negativo: R$" + saldoAtual)
}



