create database wealthWise;
use wealthWise;

create table usuarios(
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
dtNasc date,
senha varchar(300),
fkPerfil int,

foreign key (fkperfil) references perfil(idperfil)
);

create table perfil(
idPerfil int primary key auto_increment,
perfil varchar(20)
);

create table cofrinhos(
id int primary key auto_increment,
fkUser int,
meta decimal(10,2),
totalGuardado decimal(10,2),

constraint fkCofrinhoUsuario foreign key (fkUser) references usuarios(idUser)
);

select * from cofrinhos;