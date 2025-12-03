let carro = {
    marca: "Chevrolet",
    modelo: "Montana",
    ano: 2024,
    cor: "Cinza"

};  console.log(carro.modelo);
    console.log(carro["cor"]);


carro.portas = 4; //criando propriedade 
carro.cor = "Preto"; //alterando valor de propriedade ja existente 
    console.log(carro);


let carro2 = {
    marca:"honda",
    modelo: "civic",
    ligar: function (){
        console.log("O carro esá ligado!"); //criando função dentro de caracteristicas
    }
}; carro2.ligar();



let pessoa = {
    nome: "Ana",
    idade: 25,
    endereço: {
    rua:"Av. Brasil",
    numero:123
    }
}; console.log(pessoa.endereço.rua);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////PRÁTICA///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//1.
let aluno = {
    nome: "Bruno",
    idade: 21,
    curso: "ADS"
}; console.log(aluno)


//criando METODO  apresentar
aluno.apresentar = `Meu nome é ${aluno.nome} e eu estudo ${aluno.curso}.`;
console.log(aluno.apresentar);


//2.
let livro = {
    titulo:"Só para baixinhos" ,
    autor: "Xuxa",
    ano: 2020,
    disponivel: true,
};
    livro.emprestar = function(){
    livro.disponivel=false
    }    
    console.log(livro.disponivel);
    livro.emprestar();
    console.log(livro.disponivel);


//3.
let produto = {
    nome: "Arroz",
    preco: 8,
    estoque: 45
}; produto.vender = function(){
    produto.estoque -= 10;
}; produto.repor = function(){
    produto.estoque += 10;
};
    console.log(produto.estoque);
    produto.vender();
    console.log(produto.estoque);
    produto.repor();
    console.log(produto.estoque);


//4.

let contaBancaria = {
    titular: "Zé",
    saldo: 25
}; contaBancaria.depositar = function(){
    
}