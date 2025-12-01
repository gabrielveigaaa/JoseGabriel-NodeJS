CREATE DATABASE fn1;
USE fn1;

CREATE TABLE produtos (
ProdutoId INT PRIMARY KEY AUTO_INCREMENT,
NomeProduto VARCHAR(50) NOT NULL,
Preco DECIMAL
);

CREATE TABLE categorias(
ProdutoId INT,
categoriaProduto VARCHAR(30),
FOREIGN KEY  (ProdutoId) REFERENCES produtos(ProdutoId)
);
-------------------------------------------------

CREATE TABLE turmas (
TurmaId INT PRIMARY KEY AUTO_INCREMENT,
NomeTurma VARCHAR(50) NOT NULL,
Professor VARCHAR(50)
);

CREATE TABLE alunos(
TurmaId INT,
Alunos VARCHAR(80),
FOREIGN KEY  (TurmaId) REFERENCES turmas(TurmaId)
);
-----------------------------

CREATE TABLE pedidos (
PedidoId INT PRIMARY KEY AUTO_INCREMENT,
Cliente VARCHAR(50) NOT NULL,
DataPedido DATE,
ValorTotal DECIMAL
);

CREATE TABLE itens(
PedidoId INT,
Item VARCHAR(50),
FOREIGN KEY  (PedidoId) REFERENCES pedidos(PedidoId)
);
-----------------------------
CREATE TABLE funcionarios (
FuncId INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(50) NOT NULL,
Cargo VARCHAR(50)
);

CREATE TABLE telefone(
FuncId INT,
Telefone VARCHAR(20),
FOREIGN KEY  (FuncId) REFERENCES funcionarios(FuncId)
);
-----------------------------------

CREATE TABLE alunos2 (
AlunoId INT PRIMARY KEY AUTO_INCREMENT,
NomeAluno VARCHAR(50) NOT NULL,
Media DECIMAL
);

CREATE TABLE notas(
AlunoId INT,
Nota DECIMAL,
FOREIGN KEY  (AlunoId) REFERENCES alunos2(AlunoId)
);
