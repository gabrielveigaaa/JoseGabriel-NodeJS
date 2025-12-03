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
    marca :"honda",
    modelo : "civic",
    ligar : function (){
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
    nome : "Bruno",
    idade : 21,
    curso: "ADS"
}; console.log(aluno)


//2.
aluno.apresentar = `Meu nome é ${aluno.nome} e eu estudo ${aluno.curso}.`;
console.log(aluno.apresentar);