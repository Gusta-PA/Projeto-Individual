function cadastro() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var dtNascVar = input_dtNasc.value
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;

    var metaVar = 0
    var totalGuardadoVar = 0

    // Verificando se há algum campo em branco
    if (
        nomeVar == "" ||
        emailVar == "" ||
        dtNascVar == '' ||
        senhaVar == "" ||
        confirmarSenhaVar == ""
    ) {
        console.log('algum campo não foi validado')
        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            dtNascServer: dtNascVar,
            senhaServer: senhaVar,
            metaServer: metaVar,
            totalGuardadoServer: totalGuardadoVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

                setTimeout(() => {
                    window.location = "login.html";
                });

                limparFormulario();
                // finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });

    return false;
}

// Exemplo de login no frontend
function entrar() {
    const email = document.getElementById("input_email").value;
    const senha = document.getElementById("input_senha").value;

    fetch('/usuarios/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailServer: email, senhaServer: senha }),
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Retorna os dados do usuário
            } else {
                throw new Error("Falha no login. Verifique suas credenciais.");
            }
        })
        .then(dadosUsuario => {
            console.log("Dados do usuário recebidos:", dadosUsuario);

            // Configurando o sessionStorage
            sessionStorage.setItem("ID_USER", dadosUsuario.id); // 'id' está vindo do backend como 'idUser'
            sessionStorage.setItem("NOME_USUARIO", dadosUsuario.nome);
            sessionStorage.setItem("META_COFRE", dadosUsuario.meta); // 'meta' enviado do backend
            sessionStorage.setItem("TOTAL_GUARDADO", dadosUsuario.totalGuardado); // 'totalGuardado' está correto
            sessionStorage.setItem("PERFIL", dadosUsuario.perfil);
            ;

            // Redirecionar para outra página após o login, se necessário
            window.location.href = "dashboard.html";
        })
        .catch(erro => {
            console.error("Erro ao fazer login:", erro);
            alert("Falha no login. Tente novamente.");
        });
}

function verSenha() {
    input_senha.type = input_senha.type === 'password' ? 'text' : 'password'
}

function sair(){
    sessionStorage.clear()
    window.location = 'index.html'
}