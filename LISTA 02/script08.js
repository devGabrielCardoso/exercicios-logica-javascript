let tempoGasto = parseInt(prompt("Informe o tempo gasto de viagem"))
let velocidadeMedia = parseInt(prompt("Informe a velocidade média do veículo durante a viagem"))
let distancia = tempoGasto*velocidadeMedia
let litros = distancia/12

alert("Tempo Gasto " + tempoGasto + "h | Velocidade média: " + velocidadeMedia + "km/h | Distância percorrida: " + distancia + "km | Total de gasolina usada: " + litros.toFixed(1) + "L")