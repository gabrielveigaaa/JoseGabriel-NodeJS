CREATE DATABASE subConjuntosSQL;
USE subConjuntosSQL;

CREATE TABLE clientes(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
telefone VARCHAR(11)
);

ALTER TABLE clientes ADD COLUMN email VARCHAR(100); 

CREATE TABLE pedidos(
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
data_pedido date,
id_cliente INT,
FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

DROP TABLE pedidos;

INSERT  INTO clientes (nome, telefone)
VALUES ('Jose Gabriel', '81992915458'),
	('Fernanda Veiga', '81927450234'),
    ('Maria Jose', '81965678382'),
    ('Joaquim Gomes', '81989873429');
    
UPDATE clientes 
SET telefone = '81994482212'
WHERE id = 2;

DELETE FROM clientes WHERE id=3;

SELECT * FROM clientes;
SELECT * FROM clientes WHERE nome LIKE 'J%';

GRANT SELECT ON clientes TO usuario_ti; --  serve para dar permissão de leitura (isto é, de executar comandos SELECT) na tabela clientes para o usuário usuario_ti.

REVOKE INSERT ON clientes FROM usuario_ti; --  Depois de executar esse comando, o usuário usuario_ti não poderá mais inserir dados na tabela clientes.

-- Exemplo de não conceder acesso total a usuário: um funcionario de um banco poderia alterar valores de contas bancarias ou realizar transações.

BEGIN TRANSACTION;
INSERT INTO clientes (id, nome, telefone) VALUES (10, 'João', '9999-9999');
ROLLBACK;
SELECT * FROM clientes;

BEGIN TRANSACTION;
INSERT INTO clientes (id, nome, telefone) VALUES (11, 'Maria', '8888-8888');
COMMIT;

SELECT * FROM clientes;