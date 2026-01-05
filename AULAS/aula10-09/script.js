/////1///////
function soma(){
    let n1 = 10
    let n2 = 20
    let resultado = n1 + n2
    console.log('O resultado da soma é: ' + resultado)
}



/////2/////
function numero (){
    let num = prompt('Digite um número: ')
    if (num % 2 == 0) {
        console.log('True/Par')
    } else {
        console.log('False/Impar')
    }
}



/////////3///////
function mediaNota(){
    let n1 = Number(prompt('Digite a primeira nota: '))
    let n2 = Number(prompt('Digite a segunda nota: '))
    let n3 = Number(prompt('Digite a terceira nota: '))
    let media = (n1 + n2 + n3 ) / 3;
    console.log('A média é: '+ media)
}


/////4/////
function listaCompras(){
let compras = ['arroz', 'feijão', 'macarrão', 'carne', 'frango']
for (let i = 0; i< compras.length; i++){
    console.log(compras[i])

}}


/////5/////
function numbers(){
    let numeros = [1, 2, 3, 4, 5];
    let soma2 = 0;
for (let i = 0; i < numeros.length; i++){
    soma2 += numeros[i];
    console.log('A soma é: ' + soma2);
}
}


/////6/////
function maiusculas(){
let nomes = ['jose', 'gabriel', 'veiga','de', 'andrade'];
for (let i = 0; i < nomes.length; i++){
    let res = nomes[i].toUpperCase();
    console.log(res);
}
}
/////7/////
function ehPar(num){
    return num % 2 ===   0;
} for (let i = 1; i <= 20; i++){
    if (ehPar(i)){
        console.log(i + ' é par');
    }
}
////8/////////
function tabu(){
let tabuada = prompt('Digite um número: ');
for (i=0; i<=10; i++){
    let resultado = tabuada * i;
    console.log('' + tabuada + ' x ' + i + ' = ' + resultado);
}
}