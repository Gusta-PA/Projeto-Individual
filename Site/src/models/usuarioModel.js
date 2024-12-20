var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT 
            idUser, 
            nome, 
            email, 
            senha, 
            fkuser, 
            meta, 
            totalGuardado,
            perfil
        FROM usuarios JOIN cofrinhos ON usuarios.idUser = cofrinhos.fkUser
        JOIN perfil ON fkperfil = idperfil
             WHERE email = '${email}' AND senha = sha2('${senha}' , 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, dtNasc, senha, meta, totalGuarado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, dtNasc, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, dtNasc, senha, fkperfil) VALUES 
        ('${nome}', '${email}', '${dtNasc}', sha2('${senha}', 256), 0);    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then((resultado) => {
            const idUsuario = resultado.insertId

            var inserirCofrinho = `
            INSERT INTO cofrinhos (fkuser, meta, totalGuardado) VALUES
            (${idUsuario}, ${meta}, ${totalGuarado});
            `
            return database.executar(inserirCofrinho)
        })
            .catch((erro) => {
                console.error('erro ao cadastrar usuario e cofrinho: ', erro)
                throw erro
            })
}

function definirNovaMeta(novaMeta, idUsuario){
    console.log('Acessei o model DEFINIRNOVAMETA')

    var instrucaoSql = `
    UPDATE cofrinhos set meta = ${novaMeta}
        WHERE fkUser = ${idUsuario};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarProgressoCofrinho(atualizacao, idUsuario){
    console.log("ACESSEI O USUARIO MODEL ATUALIZAR_PROGRESSO_COFRINHO")

    var instrucaoSql = `
        UPDATE cofrinhos set totalGuardado = ${atualizacao}
            WHERE fkUser = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirPerfilInvestidorUsuario(fkPerfil, idUsuario){
    console.log('ACESSEI O MODEL InserirPerfilInvestidorUsuario')

    var instrucaoSql = `
    UPDATE usuarios SET fkPerfil = ${fkPerfil}
        WHERE idUser = ${idUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

async function buscarPerfis() {
    console.log("Acessando model: buscarPerfis");

    const instrucaoSql = `
        SELECT 
            COUNT(CASE WHEN fkPerfil = 1 THEN 1 END) AS conservador,
            COUNT(CASE WHEN fkPerfil = 2 THEN 1 END) AS moderado,
            COUNT(CASE WHEN fkPerfil = 3 THEN 1 END) AS agressivo
        FROM usuarios;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    definirNovaMeta,
    atualizarProgressoCofrinho,
    inserirPerfilInvestidorUsuario,
    buscarPerfis
};