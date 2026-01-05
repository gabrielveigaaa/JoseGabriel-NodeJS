//1.

function calculadora(a, b, operador) {
    let resultado;
    if (operador === '+') {
        resultado = a + b;
        console.log(resultado);
    } else if (operador === '-') {
        resultado = a - b;
        console.log(resultado);

    } else if (operador === '*') {
        resultado = a * b;
        console.log(resultado);
    } else if (operador === '/') {
        resultado = a / b;
        console.log(resultado);
    }
};
calculadora(5, 8, '*');

//////////////////////////////////////////////////////////

//2.

function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;

};
let valores = [2, 4, 8, 10];
let soma = somaArray(valores);
let media = soma / valores.length;
let maior = Math.max(...valores);
let menor = Math.min(...valores)

console.log('Resultado da soma:' + soma);
console.log('Média dos numeros:' + media);
console.log('Maior numero:' + maior);
console.log('Menor número:' + menor);

///////////////////////////////////

//3.

let idades = [14, 26, 38, 22, 12, 17, 19];

let maioresDeIdade = [];
let menoresDeIdade = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] <= 17) {
        menoresDeIdade.push(idades[i])
    } else {
        maioresDeIdade.push(idades[i])
    }
};
console.log('Maiores de idade:' + maioresDeIdade);
console.log('Menores de idade:' + menoresDeIdade);

////////////////////////////////////////////////////////////

//4.

let carro = {
    marca: 'Ford',
    modelo: 'Fusion',
    ano: 2016,
    velocidade: 215,
    acelerar: function () {
        carro.velocidade += 10;
        console.log(carro.velocidade)
    },
    frear: function () {
        carro.velocidade -= 10;
        console.log(carro.velocidade)
    }
}
carro.acelerar();
carro.frear();


// 5. Crie um array chamado estoque, onde cada item é um objeto com: produto, quantidade, preco. 
// ○ Crie uma função que calcule o valor total do estoque. 
// ○ Crie outra função que permita vender um produto (diminuindo sua quantidade). 

let estoque = [
    { produto: 'Argamassa', quantidade: 30, preco: 12 },
    { produto: 'Cimento', quantidade: 200, preco: 24 },
    { produto: 'Tinta 5l', quantidade: 50, preco: 19 },
];
function calcularValorEstoque() {
    let total = 0;
    for (let i = 0; i < estoque.length; i++) {
        total += estoque[i].quantidade * estoque[i].preco
    } console.log('Total de itens no estoque:' + total)
};
function vendaProduto(nomeProduto, quantidadeProduto) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].produto === nomeProduto) {
      if (estoque[i].quantidade < quantidadeProduto) {
        console.log('Quantidade desejada é maior que a disponível');
      } else {
        estoque[i].quantidade -= quantidadeProduto;
        console.log('Venda realizada! Restante no estoque: ' + estoque[i].quantidade);
      }
      return; 
    }
  }
  console.log('Produto não encontrado no estoque.');
}

calcularValorEstoque();
vendaProduto('Cimento', 30);


//6. Crie uma função que receba uma string e conte quantas vogais existem nela. 
function contarVogais(palavra){
    let vogais = 'AEIOUaeiou';
    let contador = 0; 

    for( let i = 0; i < palavra.length; i++){
        if (vogais.includes(palavra[i])){
            contador++;
        }       
    }   console.log('total de vogais:' + contador)
};
contarVogais('Gabriel');


//  7.Crie uma função verificarSenha(senha) que: 
//  ○ Retorne "Senha forte" se tiver mais de 8 caracteres, incluir pelo menos um número e uma letra maiúscula.
//  ○ Caso contrário, retorne "Senha fraca". 

function verificarSenha(senha){
   let maisDe8 = senha.length>8;
   let maiuscula = /[A-Z]/.test(senha);
   let numero = /[0-9]/.test(senha);

   if(maisDe8 && maiuscula && numero){
    console.log('Sua senha é FORTE!')
   } else {
     console.log('Sua senha é fraca...')
   }
};
verificarSenha('Gabriel12345');



//8.Usando o método map, crie um novo array que dobre os números de um array original. 
let numeros = [10, 20, 30];
let dobro = numeros.map(numero => numero*2)
console.log(numeros);
console.log(dobro);

// 9. Usando o método filter, crie um novo array apenas com números pares. 
let variosNumeros = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = variosNumeros.filter(numero => numero %2 == 0);
console.log(numerosPares);

// 11. Crie um sistema de carrinho de compras: 
// ● Cada item do carrinho é um objeto com nome, preco, quantidade. ● Crie funções para: 
// ○ adicionar itens, 
// ○ remover itens, 
// ○ calcular o valor total do carrinho, 
// ○ listar os itens no console.

let carrinho = [
    {nome: 'arroz',
    preco: 10,
    quantidade: 5,
    },

    {nome: 'feijão',
    preco: 14,
    quantidade: 4,
    },

    {nome: 'cuscuz',
    preco: 4,
    quantidade: 8,
    }
];
function addItens(nomeProduto,precoProduto, quantidadeProduto ){
    carrinho.push({
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: quantidadeProduto
    });
    console.log(nomeProduto + ' adicionado ao carrinho.');
    console.log(carrinho);
};
function rmvItens(nomeProduto){
    for (let i = 0; i < carrinho.length;  i++){
        if (carrinho[i].nome === nomeProduto){
            carrinho.splice(i, 1);
            console.log(nomeProduto + ' retirado do carrinho.');
            console.log(carrinho);
        }
    }
};
function totalValorCarrinho (){
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].quantidade * carrinho[i].preco
    } 
    console.log(carrinho);
    console.log('Valor total do carrinho:R$' + total)
};

addItens('Carne', 40, 3);
rmvItens('cuscuz');
totalValorCarrinho();