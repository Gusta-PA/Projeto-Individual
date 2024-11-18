create database teste;
use teste;

create table usuarios(
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
dtNasc date,
senha varchar(300)
);

INSERT INTO usuarios(nome) VALUES
 ('gustavo');

INSERT INTO usuarios (nome, email, dtNasc, senha) VALUES
('Gustavo', 'gustavo@gmail.com', '2005-09-28', sha2('gustvo', 256));

SELECT * FROM usuarios;
truncate table usuarios;