// Exercicio 38 - Login Simulação
// Descrição: Algoritmo que solicita nome de usuário e senha, e confere se as informações estão corretas, caso sim, o login será efetuado.
// Login: 1234
// Senha: 9999

let usuario = prompt("Informe o nome de usuário");

if (usuario !== "1234") {
  document.write("Usuário Inválido");
} else {
  let senha = Number(prompt("Digite a senha"));
  if (senha !== 9999) {
    document.write("Senha inválida");
  } else {
    document.write("Login efetuado com sucesso.");
  }
}
