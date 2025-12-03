let nome = "José"
let idade = 21
let cidade = 'Recife'
let estado = 'Pernambuco'

console.log("Me chamo " + nome + ", tenho " + idade + " anos, " + "e moro em " + cidade + "-" + estado + "!")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let n1 = 10, n2 = 5

console.log("Soma: ", n1+n2)
console.log("Subtração: ", n1-n2)
console.log("Divisão: ", n1/n2)
console.log("Multiplicação: ", n1*n2)


console.log("")//prox questao

let preco = "49.90"
let resultado = Number(preco) + 10
console.log(resultado)

console.log("")//prox questao

let total = 0.1 + 0.2
console.log(total)
console.log("Total com uma casa decimal: ", total.toFixed(1))// uma casa decimal

console.log("")//prox questao

/////////////////////////////////////////////////////////////////////////////////

let mensagem = "Olá, mundo!"

console.log(mensagem.toUpperCase)
console.log(mensagem.toLowerCase)

console.log("")//prox questao

let palavra = 'JavaScript'
console.log(palavra)
console.log("primeira:",palavra[0])
console.log("ultima:",palavra[palavra.length-1])
console.log("caracteres:",palavra.length)

console.log("")//prox questao

let idade2 = 20
let idadeMinima = 18
let podeEntrar = idade2 >= idadeMinima

console.log(podeEntrar)
