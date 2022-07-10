document.write("<h1>QUANTAS HORAS DE VIAJEM?</h1>");

const velo = prompt("Informe a velocidade");
const kl = prompt("Informe a distancia");

const horas = (Date, kl / velo);
const viagemmin = horas * 60

const tempohoras = Math.floor(viagemmin / 60)
const tempomin = Math.floor(viagemmin % 60)

document.write(`Falta ${tempohoras}h${tempomin}min`);