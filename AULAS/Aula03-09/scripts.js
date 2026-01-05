// let nasc = Number(prompt("qual ano voce nasceu: "))
// let ano = new Date()
// ano.getFullYear()
// let idade = ano-nasc
// if (idade==18){
//     document.writeln('Você tem 18 anos')
// } else if (idade>=18){
//     document.writeln('voce tem  mais de 18 anos.')
// }else {
//     document.writeln('voce tem menos de 18 anos')
// }


//1.
// let soma = 1
// for(let num=0; num<=10; num++){
//     console.log(soma+num)
// }

//2.




//3.
// let numero = 1;

// while (numero <= 30) {
//     if (numero % 3 === 0) {
//         console.log(numero);
//     }
//     numero++;
// }


    
//4.
// n1 =50
// while( n1<=100){
//     console.log( n1+1);
//     n1++;
// }

//5.
// let n = 1;

// do {
//     console.log("Número: " + n);
//     n++;
// } while (n <= 10);


//exemplo função mostrar nome com prompt

function mostrarNome() {
    let nome = prompt('insira seu nome:');
    console.log(`Olá ${nome}!`);
    document.writeln(`Olá, ${nome}!`)
}
// mostrarNome();

//funçao calculo

function multiplica() {
    let a = prompt('insira o primero numero');
    let b = prompt('insira o segundo numero');
    let resultado = a*b
    console.log(`O resultado de ${a}X${b} é: ${resultado}`);
    document.writeln(`O resultado de ${a}X${b} é: ${resultado}`);
}
// multiplica();


//funcao calcular area

function calculaAreaRetangulo() {
    let largura = prompt('insira a largura em cm:');
    let altura = prompt('insira altura em cm:');
    let area = largura*altura
    console.log(`A área do retângulo é:  ${area}cm`);
    document.writeln(`A área do retângulo é:  ${area}cm`);
}
// calculaAreaRetangulo();


//funcao mostrar maior numero

function maiorNumero () {
    let n1 = Number(prompt('insira o primeiro numero:'));
    let n2 = Number(prompt('insira o segundo numero:'));    

    if(n1>n2){
        console.log(`O primeiro número é o maior! ${n1}`);
        document.writeln(`O primeiro número é o maior! ${n1}`);
    } else if (n1<n2){
        console.log(`O segundo número é o maior! ${n2}`);
        document.writeln(`O segundo número é o maior! ${n2}`);
    }else {
        console.log(`Os números são equivalentes`);
        document.writeln(`Os números são equivalentes`);
    }
}
maiorNumero();
