var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    console.log(resultadoAutenticar)
                    console.log('resultado da consulta: ', resultadoAutenticar[0].totalGuardado)

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idUser,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email,
                            meta: resultadoAutenticar[0].meta,
                            totalGuardado: resultadoAutenticar[0].totalGuardado,
                            perfil: resultadoAutenticar[0].perfil
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var dtNasc = req.body.dtNascServer;
    var senha = req.body.senhaServer;
    var meta = req.body.metaServer
    var totalGuardado = req.body.totalGuardadoServer

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, dtNasc, senha, meta, totalGuardado)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function definirNovaMeta(req, res) {
    var novaMeta = req.body.novaMetaServer
    var idUsuario = req.body.idUsuarioServer

    if (novaMeta == undefined) {
        res.status(400).send('novaMeta está undefined')
    } else {
        usuarioModel.definirNovaMeta(novaMeta, idUsuario)
            .then(() => {
                res.status(200).json({
                    meta: novaMeta
                })
            })
            .catch(erro => {
                console.lerror('Erro ao Atualizar meta: ', erro)
                res.status(500).send('Erro ao atualizar a meta.')
            })
    }
}

function atualizarTotalGuardado(req, res){
    var totalGuardadoSQL = req.body.totalGuardadoServer
    var idUsuario = req.body.idUsuarioServer

    if(totalGuardadoSQL == undefined){
        res.status(400).send('totalGuardado está undefined')
    } else {
        usuarioModel.atualizarProgressoCofrinho(totalGuardadoSQL, idUsuario)
            .then(() => {
                res.status(200).json({
                    totalGuardado : totalGuardadoSQL
                })
            })
            .catch(erro => {
                console.error('erro ao atualizar o totalGuarado: ', erro)
                res.status(500).send('Erro ao atualizar o totalGuardado')
            })
    }
}

function inserirPerfilInvestidor(req,res){
    var perfilEscolhidoUsuario = req.body.perfilEscolhidoServer
    var idUsuario = req.body.idUsuarioServer

    if(perfilEscolhidoUsuario == undefined){
        res.status(400).send('perfilEscolhido está undefined')
    } else {
        usuarioModel.inserirPerfilInvestidorUsuario(perfilEscolhidoUsuario, idUsuario)
            .then(() => {

                let perfilTexto = ''

                if(perfilEscolhidoUsuario == 1){
                    perfilTexto = 'Conservador'
                } else if(perfilEscolhidoUsuario == 2) {
                    perfilTexto = 'Moderado'
                } else{
                    perfilTexto = 'Agressivo'
                }
                res.status(200).json({
                    perfil : perfilTexto
                })
            })
            .catch(erro => {
                console.log('erro ao enviar o perfilEscolhido: ', erro)
                res.status(500).send('Erro ao enviar o perfilEscolhido')
            })
    }
}

// Controller (usuarioController.js ou similar)
async function buscarPerfis(req, res) {
    console.log("Acessando controller: buscarPerfis");

    try {
        const resultados = await usuarioModel.buscarPerfis();
        res.status(200).json(resultados[0]); // Envia apenas o primeiro objeto do array
    } catch (erro) {
        console.error("Erro ao buscar perfis:", erro);
        res.status(500).send("Erro ao buscar perfis.");
    }
}


module.exports = {
    autenticar,
    cadastrar,
    atualizarTotalGuardado,
    definirNovaMeta,
    inserirPerfilInvestidor,
    buscarPerfis
}