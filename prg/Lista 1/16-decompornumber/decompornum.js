//326
//resultado: 3,2,6


const numero = parseInt(prompt("Digite um numero menor que 1000"))

  
const centena = Math.floor(numero/100)


const dezenas = ((numero - (Math.floor(numero/100)*100))/10)

const dezenasArredondado = Math.floor(dezenas)


const unidades = (numero-(centena*100)-(dezenasArredondado*10))

const unidadesArredondado = Math.floor(unidades)


document.write(`${centena}, ${dezenasArredondado}, ${unidadesArredondado}`)
