window.onload = function () {
    var metaCofrinho = Number(sessionStorage.getItem('META_COFRE')) || 0

    if (metaCofrinho > 0) {
        div_conteudoCofre.style.display = 'block'
        div_criarCofre.style.display = 'none'
        atualizarProgresso()
    } else {
        div_conteudoCofre.style.display = 'none'
        div_criarCofre.style.display = 'block'
    }
}

// Inicializa o progresso
atualizarProgresso()

function atualizarProgresso() {
    var metaCofrinho = Number(sessionStorage.getItem('META_COFRE')) || 0;
    var totalGuardado = Number(sessionStorage.getItem('TOTAL_GUARDADO')) || 0;

    if (metaCofrinho > 0) {
        const porcentagem = Math.min((totalGuardado / metaCofrinho) * 100, 100).toFixed(2);

        const progressElement = document.getElementById("progress");
        const guardadoElement = document.getElementById("guardado");
        const progressTextElement = document.getElementById("progress-text");

        if (progressElement) {
            progressElement.style.width = porcentagem + "%";
        }

        if (guardadoElement) {
            guardadoElement.textContent = totalGuardado;
        }

        if (progressTextElement) {
            progressTextElement.textContent = `${porcentagem}% da meta atingida`;
        }
        
        if(totalGuardado == metaCofrinho){
            alert('Parabéns! Você atingiu sua meta!')
        }
    }
    }



function atualizarProgressoAdicionarRetirar(botaoSelecionado) {
    var valorInput = Number(input_valor.value)
    var idUsuario = sessionStorage.getItem('ID_USER')
    let totalGuardado = Number(sessionStorage.getItem('TOTAL_GUARDADO')) || 0

    if (botaoSelecionado == 'adicionar') {
        totalGuardado += valorInput
    } else {
        totalGuardado -= valorInput // Impede valores negativos
    }

    sessionStorage.setItem('TOTAL_GUARDADO', totalGuardado)
    atualizarProgresso();

    fetch('/usuarios/atualizarTotalGuardado', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            totalGuardadoServer: totalGuardado,
            idUsuarioServer : idUsuario
        })
    })
}


function novaMeta() {
    div_criarCofre.style.display = 'block'
    div_conteudoCofre.style.display = 'none'

    const novaMetaVar = Number(input_nova_meta.value)
    const idUsuario = sessionStorage.getItem('ID_USER')

    if (novaMetaVar == '') {
        alert('Insira uma meta a ser alcançada!')
    } else {
        fetch('/usuarios/novaMeta', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                novaMetaServer: novaMetaVar,
                idUsuarioServer: idUsuario
            })
        })
            .then(resposta => {
                console.log('resposta: ', resposta)

                if (resposta.ok) {
                    return resposta.json()
                } else {
                    throw 'Houve um erro durante a transmissão...'
                }
            })
            .then(dadosUsuario => {
                console.log("Dados do usuário recebidos:", dadosUsuario);
                // Configurando o sessionStorage
                sessionStorage.setItem("META_COFRE", novaMetaVar);
                sessionStorage.setItem("TOTAL_GUARDADO", 0); // 'totalGuardado' está correto

                div_criarCofre.style.display = 'none'
                div_conteudoCofre.style.display = 'block'

                span_meta.textContent = novaMetaVar
                atualizarProgresso()

                alert('Meta atualizada com sucesso!')

            })
            .catch(erro => [
                console.error('erro: ', erro)
            ])
    }

    input_nova_meta.value = ''
}

