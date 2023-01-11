
// EXERCÍCIO DO DESAFIO 01

alert('Iremos calcular 02 números')

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber
const restSum = sum % 2

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

// if (sum % 2 === 0) {
//     alert("A soma dos dois números é par: " + sum)

if (restSum === 0) {
  alert("A soma dos dois números é par: " + sum)

}

else {
    alert("A soma dos dois números é impar: " + sum)
}


if (firstNumber === secondNumber) {
  alert('Os números inseridos são iguais')
}
if (firstNumber != secondNumber) {
  alert ('Os números inseridos são diferentes')
}











// alert("A soma dos dois números é: " )
// alert("Os dois números inseridos são ")