    // Você foi encarregado de realizar uma pesquisa sobre Inclusão Digital. A sua pesquisa deverá apresentar o percentual de alunos da sua escola que possuem acesso à Internet. Para isso, elabore um algoritmo que leia o número total de alunos da sua escola e o número de alunos que possuem acesso à Internet, por fim, com base nestes dados, escreva o percentual de alunos com acesso à Internet.
    // Por exemplo, em uma escola com 200 alunos, apenas 50 alunos possuem acesso à Internet, o que equivale a 25% destes 200 alunos.

    // entrada de dados

    document.write("<h1>Simulado 2</h1>")

    const alunos = parseInt(prompt("Informe o numero de alunos"))

    const alunoscominternet = parseInt(prompt("Informe quantos alunos tem acesso a internet "))

    // processamento

    const porcentagemdealunoscominternet = (Number(alunos/alunoscominternet)*100)

    // saída

    document.write (`Alunos: ${alunos}</br>`)
    document.write(`Alunos com Internet: ${alunoscominternet}</br>`)
    document.write(`Porcentagem de Alunos com Internet: ${porcentagemdealunoscominternet.toFixed(1)}`)
