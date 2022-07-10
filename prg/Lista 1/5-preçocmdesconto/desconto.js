document.write("<h1>Descubra o Desconto </h1>")

const valor = parseInt(prompt("Valor do produto"))

const por = parseInt(prompt("% do desconto"))

const valor2 = valor/100 * por

const resu = valor - valor2

document.write (`Seu produto com desconto ficara, ${resu} R$`)