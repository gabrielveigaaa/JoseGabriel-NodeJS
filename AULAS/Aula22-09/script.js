let celular = {
    marca: 'iPhone',
    modelo: 'Xr',
    ligado: false
}
celular.ligado = true;
console.log(celular);

////////////////////////////////////

//2.
let filme = {
    titulo: 'A Bela e a Fera',
    idadeMinima: 14
}
filme.genero = "Ficção";
console.log(filme);
//////////////////////

//3.
let produto = {
    nome: 'Arroz',
    preco: 5,
    estoque: 20
};
produto.estoque += 10;
console.log(produto);
///////////////////////////////

//4.
let lampada = {
    cor: 'branca',
    acesa: false
}
function ligar() {
    lampada.acesa = true;
    console.log(lampada);
};
function desligar() {
    lampada.acesa = false;
    console.log(lampada);
};
ligar();
desligar();

////////////////////////////////

//5.
let usuario = {
    nome: 'Anssu',
    senha: 'fati123',
    login: function (senhaDigitada) {
        if (senhaDigitada == usuario.senha) {
            console.log('Acesso Permitido!');
        } else {
            console.log('Acesso Negado!')
        }
    }
};
usuario.login('fati123');

////////////////////////////////////

//6.

let aluno = {
    nome: 'Joaquim',
    endereco: {
        rua: 'Olegario Fonseca',
        numero:  1294,
        cidade: 'Condado'
    }
}; console.log(`O aluno ${aluno.nome} mora na rua ${aluno.endereco.rua}, nº ${aluno.endereco.numero}, em ${aluno.endereco.cidade}.`);

////////////////////////////////

//7.

let pedido = {
    cliente: {
        nome: 'José',
        telefone: '4002-8922'
    },
    itens: ['Cimento', 'Pá quadrada']
}; console.log(pedido.cliente.nome ,pedido.itens[0])