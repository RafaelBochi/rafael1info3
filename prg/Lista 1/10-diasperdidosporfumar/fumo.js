document.write ("<h1>Dias perdidos por fumar</h1>")

const cigarros = Number(prompt("Quantos cigarros você fuma por dia?"))

const anos = Number(prompt("Há quantos anos você fuma?"))

const fumou = (anos*365) * cigarros

const min = fumou*10 

const dias = (min/60) / 24

document.write (parseInt(dias))