create database aulaPratica;
use aulaPratica;
-- 1)
create TABLE aluno (
    id_aluno INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60),
    data_nasc DATE,
    curso VARCHAR(50)
);

-- 2)
create table categoria (
id_categoria INT AUTO_INCREMENT PRIMARY KEY,
nome_categoria VARCHAR(40)
);
create table produto (
id_produto INT auto_increment primary key,
nome_produto varchar(50),
preco decimal(10,2),
id_categoria int,
foreign key (id_categoria) references categoria(id_categoria)
);
INSERT INTO categoria(nome_categoria)
VALUES ('Eletrica'), 
('Pintura');

INSERT INTO produto(nome_produto, preco, id_categoria)
VALUES ('Cabo 2,5MM', 249, 1),
('Tomada externa', 15, 1),
('Esmalte preto 900ml', 49, 2);

-- 3)
CREATE TABLE cliente (
id_cliente INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
telefone varchar(11)
);

CREATE TABLE pedido (
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
data_pedido DATE,
valor_total DECIMAL(10,2),
id_cliente INT,
FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

INSERT INTO cliente (nome, telefone)
VALUES ('Jose', 81992915458),
('Spike', 81936386567);

INSERT INTO pedido (data_pedido, valor_total, id_cliente)
VALUES ('25-10-27', 250, 1),
('25-10-27', 60, 1),
('25-10-28', 130, 2);

SELECT cliente.nome, pedido.data_pedido FROM pedido
JOIN cliente ON pedido.id_cliente = cliente.id_cliente;

-- 4)
CREATE TABLE livro (
id_livro INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(50),
autor VARCHAR(50),
ano_publicacao int
);

CREATE TABLE emprestimo(
id_emprestimo INT AUTO_INCREMENT PRIMARY KEY,
data_emprestimo DATE,
data_devolucao DATE,
id_livro int,
FOREIGN KEY (id_livro) REFERENCES livro(id_livro)
);

INSERT INTO livro (titulo, autor, ano_publicacao)
VALUES ('A Bela e a Fera', 'Sei la', 1990),
('Harry Potter', 'Alguém', 1995),
('Sonic', 'Joao da Silva', 2002);

INSERT INTO emprestimo (data_emprestimo, data_devolucao, id_livro)
VALUES ('25-10-27', '25-11-03', 1),
('25-10-27', '25-11-05', 3);

SELECT livro.titulo, data_devolucao FROM emprestimo 
JOIN livro ON emprestimo.id_livro = livro.id_livro;

-- 5)
CREATE TABLE medico(
id_medico INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
especialidade VARCHAR(50)
);

CREATE TABLE paciente(
id_paciente INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
telefone VARCHAR(11)
);

CREATE TABLE consulta(
id_consulta INT AUTO_INCREMENT PRIMARY KEY,
data_consulta DATE,
id_medico INT,
id_paciente INT,
FOREIGN KEY (id_medico) REFERENCES medico(id_medico),
FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente)
);

INSERT INTO medico (nome, especialidade)
VALUES 
    ('Dr. Carlos', 'Cardiologista'),
    ('Dra. Ana', 'Dermatologista'),
    ('Dr. Pedro', 'Ortopedista');

INSERT INTO paciente (nome, telefone)
VALUES 
    ('José', '81992915458'),
    ('Maria', '81988887777'),
    ('Lucas', '81912345678');

INSERT INTO consulta (data_consulta, id_medico, id_paciente)
VALUES 
    ('2025-11-02', 1, 1),
    ('2025-11-03', 2, 2),
    ('2025-11-04', 3, 3),
    ('2025-11-05', 1, 2);
    
    SELECT 
    m.nome AS medico,
    p.nome AS paciente,
    c.data_consulta
FROM consulta c
JOIN medico m ON c.id_medico = m.id_medico
JOIN paciente p ON c.id_paciente = p.id_paciente;


