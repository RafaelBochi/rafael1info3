
const slporhora = parseInt(prompt("Quanto vc ganha por hora?"))

const horas = parseInt(prompt("Quantas horas vc trabalha no mes?"))

const salario = (horas*slporhora)

const inss = ((salario/100)*8)

const ir = ((salario/100)*11)

const sindicato = ((salario/100)*5)

const menos = (inss+ir+sindicato)

const resu = salario - menos

document.write (resu)


