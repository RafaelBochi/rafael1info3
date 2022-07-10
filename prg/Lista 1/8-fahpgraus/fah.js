document.write ("<h1> Fahrenheit em graus celcius </h1>")

const fah = parseInt(prompt("Coloque os Graus Fahrenheit"))

const graus = (fah - 32) / 1.8

document.write (` ${fah} Fahrenheit convertido a Celsius é = ${graus}, Graus Celsius`)