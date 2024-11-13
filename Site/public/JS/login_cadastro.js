// function cadastrar() {
//     const nome = input_nome.value
//     const email = input_email.value
//     const senha = input_senha.value
//     const confirmarSenha = input_confirmar_senha.value

//     if (nome <= 5) {
//         input_nome.style.border = 'solid 1px red'
//         console.log('nome não validado')
//     } else {
//         input_nome.style.border = 'none'
//         input_nome.style.borderBottom = 'var(--border-height) solid var(--border-before-color)'
//         console.log('nome validado')
//     }

//     if (email.indexOf('.') == -1 || email.indexOf('@') == -1) {
//         input_email.style.border = 'solid 1px red'
//         console.log('email não validado')
//     } else {
//         input_email.style.border = 'none'
//         input_email.style.borderBottom = 'var(--border-height) solid var(--border-before-color)'
//         console.log('email validado')
//     }

//     // alert('Cadastro realizado com sucesso')
//     // window.location = 'login.html'
// }

function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var dtNascVar = input_dtNasc.value
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;

    // Verificando se há algum campo em branco
    if (
        nomeVar == "" ||
        emailVar == "" ||
        dtNascVar == '' ||
        senhaVar == "" ||
        confirmarSenhaVar == ""
    ) {
        
        if (nomeVar <= 5) {
            input_nome.style.border = 'solid 1px red'
            console.log('nome não validado')
            return
        } else {
            input_nome.style.border = 'none'
            input_nome.style.borderBottom = 'var(--border-height) solid var(--border-before-color)'
            console.log('nome validado')
        }

        if (emailVar.indexOf('.') == -1 || emailVar.indexOf('@') == -1) {
            input_email.style.border = 'solid 1px red'
            console.log('email não validado')
            return

        } else {
            input_email.style.border = 'none'
            input_email.style.borderBottom = 'var(--border-height) solid var(--border-before-color)'
            console.log('email validado')
        }

        // finalizarAguardar();
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

// function login() {
//     alert('Login realizado com sucesso.')
//     window.location = 'TelaInicial.html'
// }


function verSenha(){
    input_senha.type = input_senha.type === 'password' ? 'text' : 'password'
}