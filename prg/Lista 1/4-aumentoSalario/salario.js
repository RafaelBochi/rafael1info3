document.write ("<h1>Salario com % do aumento</h1>")
const salario = parseInt(prompt("Valor do salario"))
const por = parseInt(prompt("Valor em % do aumento"))
const aumento = salario/100 * por
const resu = aumento + salario
document.write ("Seu salario com o aumento = ", resu)