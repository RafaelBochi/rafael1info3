const nota1 = parseFloat(prompt("Digite a nota da primeira prova"))
const nota2 = parseFloat(prompt("Digite a nota do primeiro exercicio"))
const nota3 = parseFloat(prompt("Digite a nota da segunda prova"))
const nota4 = parseFloat(prompt("Digite a nota do segundo exercicio"))

const media = ((nota1*7)+(nota2*3)+(nota3*7)+(nota4*3))/(7+3+7+3)


if(media >= 6)
document.write(`Parabens, aprovado! Media ${media}`);
else
document.write(`Reprovado! Media ${media}`)
