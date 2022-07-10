document.write ("<h1> Preço do aluguel do carro </h1>")

const dias = Number(prompt("Quantos dias o carro ficou alugado?"))

const km = Number(prompt("Quantos kl o carro andou?"))

const preçodias = (dias*60)

const preçokm = (km*0.15)

const preçototal = preçodias+preçokm

document.write ("Preço do aluguel: " + preçototal)