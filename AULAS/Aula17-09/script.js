// 1. 
let nome = "José";
let idade = 21;
let email = "jose@gmail.com";
let estudando =  true; 

console.log(`Meu nome é ${nome}, tenho ${idade} anos, meu email é ${email} e estou  estudando: ${estudando}.`)


/////////////////////////////////////////////////////////////////

//2. 
let percoUnitario = 2;
let quantidade = 5;
let totalCompra = percoUnitario*quantidade;
let desconto = totalCompra*0.9

    if (totalCompra>100){
        console.log(`o valor após desconto é: ${desconto}.`);
    }    else if (totalCompra%2===0 && totalCompra>5 && totalCompra<20){
        console.log(`Sua compra tem valor PAR e está entre 5 e 20!`);
    };
///////////////////////////////////////////////////////////////////////////

//3.

let nota = 80;

if (nota>=90){
    console.log(`O Aluno tirou nota ${nota} e conceito A.`)
} else if (nota>=80){
    console.log(`O Aluno tirou nota ${nota} e conceito B.`)
} else if (nota>=70){
    console.log(`O Aluno tirou nota ${nota} e conceito C.`)
} else if (nota>=60){
    console.log(`O Aluno tirou nota ${nota} e conceito D.`)
} else if (nota<60){
    console.log(`O Aluno tirou nota ${nota} e conceito F.`)
} else {
    console.log(`Insira uma nota válida!`)
};

///////////////////////////////////////////////////////////////

//4.

let numInt = 2;

// for ( let i=0; i<=10; i++){
//     console.log(`${numInt}*${i} = ${numInt*i}`)
// };
let i = 0;
while (i <=10){
    console.log(`${numInt}*${i} = ${numInt*i}`);
    i++
};

///////////////////////////////////////////////////////////////////


//5. 
let compras = ['Pão', 'arroz', 'suco', 'beterraba', 'limao']
 console.log(`1. ${compras[0]}`)
 console.log(`2. ${compras[1]}`)
 console.log(`3. ${compras[2]}`)
 console.log(`4. ${compras[3]}`)
 console.log(`5. ${compras[4]}`)

/////////////////////////////////

//6.
function calcularMedia(a, b, c = 0){
if (c === 0 ){
    return (a+b)/2;
} else {
   return (a+b+c)/3;
}
} 

function resultadoFinal(media){
        if (media>=60){
            console.log('APROVADO')
        } else if (media>=40){
            console.log('RECUPERAÇÃO')
        } else{
            console.log('REPROVADO')
        }
    }  let media = calcularMedia(60, 70, 70);
        resultadoFinal(media);

/////////////////////////////////////////////////////////////////////////////

//7. 

let aluno = {
    nome: 'Veiga',
    idade: 21,
    curso: 'BFD NODE.JS'
}; aluno.apresentar = `Meu nome é ${aluno.nome}, tenho ${aluno.idade} anos e curso ${aluno.curso}.`;
console.log(aluno.apresentar);

///////////////////////////////////////////////////////////////////////////////

//8. 
let carrinho = [
    { 
        nome: 'Ração de Cachorro 15kg',
        preco: 90,
        quantidade: 1      
    },
        { 
        nome: 'Coca-Cola',
        preco: 8,
        quantidade: 2      
    },
        { 
        nome: 'Biscoito',
        preco: 4,
        quantidade: 6      
    }
]; console.log(carrinho);

function totalCarrinho(itens){
    let soma = 0;
    for(let item of itens){
        soma += item.preco * item.quantidade;
    }
    return soma;
}
console.log('Total do carrinho: R$ ' + totalCarrinho(carrinho).toFixed(2));

function filtrarCarro(itens){
    for (let item of itens){
        if (item.preco > 50){
            console.log("Custa mais de R$50: " + item.nome + ' ->R$' +  item.preco);
        }
    }
}
filtrarCarro(carrinho);

/////////////////////////////////////////////////////////////////////////////////////////

//9. SISTEMA DE CADASTRO DE ALUNOS

function cadastrarALunos() {
    let aluno = [{
        nome: 'Betinha',
        idade: 22,
        curso: 'NodeJs-BFD',
        nota: 8
    },
    {   nome: 'Zé',
        idade: 18,
        curso: 'NodeJs-BFD',
        nota: 9
        
    }];
    return aluno; 
}

function listarAlunos() {
    let alunoCadastrado = cadastrarALunos(); 
    console.log(alunoCadastrado);
    document.writeln(alunoCadastrado);
}

listarAlunos();

function mediaNotaAlunos(alunos) {
    let media = 0;
    for( let aluno of alunos ){
        media += aluno.nota; 
    } return media / alunos.length;
}

let alunos = cadastrarALunos();
console.log(`Média dos alunos:` + mediaNotaAlunos(alunos));
document.writeln(`Média dos alunos:` + mediaNotaAlunos(alunos));