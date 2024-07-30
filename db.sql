create DATABASE pessoas; --cria a db

CREATE TABLE pessoas(
name varchar(255) NOTNULL,
idade int NOTNULL,
sexo char(1) NOTNULL,
cpf char(11) NOTNULL PRIMARY KEY,
nascimento Date NOTNULL
);

--tipo notnull e para ser um valor obrigatorio
-- char e que a string sera mesmo daquele tamanho
-- primary key e uma chave unica


INSERT INTO pessoas (name, idade, sexo, cpf, nascimento) -- add os dados

TRUNCATE TABLE pessoas --limpa a tabela

SELECT * FROM pessoas -- traz todos os dados

UPDATE pessoas SET nascimento = "05/04/1990" WHERE cpf = '544455444545'

