let alunos = [
    { nome: 'Ana', idade: 20 },
    { nome: 'Carlos', idade: 17 },
    { nome: 'Bianca', idade: 22 },
    { nome: 'Diego', idade: 16 }
];

// alunos.forEach(aluno =>{
//     console.log(aluno.nome, aluno.idade)
// });

let nomes = alunos.map(aluno => aluno.nome);
console.log(nomes);

let idades = alunos.map(alunos => alunos.idade);
console.log(idades);

let maiores = alunos.filter(alunos => alunos.idade >= 18);
console.log(maiores);

let menores = alunos.filter(alunos => alunos.idade <= 18);
console.log(menores);


let alunoCarlos = alunos.find(alunos => alunos.nome === 'Carlos');
console.log(alunoCarlos);

let alunoAna = alunos.find(alunos => alunos.nome === 'Ana');
console.log(alunoAna);

//////////////////////////////////////////////////////////////////////////////////////////////

let livros = [
    { titulo: 'Dom Casmurro', preco: 25 },
    { titulo: 'O Hobbit', preco: 45 },
    { titulo: '1984', preco: 30 },
    { titulo: 'Harry Potter', preco: 60 }
];

livros.forEach(livros => {
    console.log(livros.titulo)
});

let precos = livros.map(livros => livros.preco);
console.log(precos);

let precoFiltro = livros.filter(livros => livros.preco <= 40);
console.log(precoFiltro);

let tituloDoLivro = livros.find(livros => livros.titulo === '1984');
console.log(tituloDoLivro);

/////////////////////////////////////////////////////////////////////////////////////////////

let biblioteca ={
    livros: [
        { titulo: 'Dom Casmurro', disponivel: true },
        { titulo: 'O Hobbit', disponivel: true },
        { titulo: '1984', disponivel: false },
        { titulo: 'Harry Potter', disponivel: true }
    ],
    emprestar: function (titulo){
        let livro = biblioteca.livros.find(livro => livro.titulo === titulo);
        if (livro && livro.disponivel) {
            livro.disponivel = false;
            console.log('Livro emprestado com sucesso!' );
        } else {
            console.log('Livro já está emprestado...')
        }
    },
    devolver: function (titulo){
        let livroDevolver = biblioteca.livros.find(livro => livro.titulo === titulo);
        if (livroDevolver && !livroDevolver.disponivel){
            livroDevolver.disponivel = true;
            console.log("Livro devolvido com sucesso!");
        } else {
            console.log('Livro já estava disponível....')
        }
    }

}; 

// biblioteca.emprestar('1984');
// console.log(biblioteca.livros);

biblioteca.devolver('1984');
console.log(biblioteca.livros);