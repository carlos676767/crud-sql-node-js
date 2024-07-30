create DATABASE pessoas; --cria a db


CREATE TABLE pessoas(
name varchar(255) NOTNULL,
idade int NOTNULL,
sexo char(1) NOTNULL,
cpf char(11) NOTNULL PRIMARY KEY,
nascimento Date NOTNULL
);

INSERT INTO pessoas (name, idade, sexo, cpf, nascimento) 




