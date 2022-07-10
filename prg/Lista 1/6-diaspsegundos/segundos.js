document.write ("<h1>Data em segundos</h1>")

const dia = parseInt(prompt("DIgite o dia"))
const hora = parseInt(prompt("Digite a hora"))
const min = parseInt(prompt("Digite o minuto"))
const seg = parseInt(prompt("DIgite os segundos"))

const resu = parseInt(((((dia * 24)+hora)* 60)+min) * 60)

document.write (`Essa data equivale a, ${resu} segundos`)