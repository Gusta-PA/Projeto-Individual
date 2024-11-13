create database teste;
use teste;

create table usuarios(
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
dtNasc date,
senha varchar(50)
);

INSERT INTO usuarios(nome) VALUES
('gustavo');

SELECT * FROM usuarios;