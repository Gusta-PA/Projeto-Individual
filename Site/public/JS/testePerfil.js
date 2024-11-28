function trocarTela(telaAtual) {

    const divIniciar = document.getElementsByClassName('div_testePerfil')[0]
    const divQuestao1 = document.getElementsByClassName('div_questao1')[0]
    const divQuestao2 = document.getElementsByClassName('div_questao2')[0]
    const divQuestao3 = document.getElementsByClassName('div_questao3')[0]
    const divQuestao4 = document.getElementsByClassName('div_questao4')[0]
    const divQuestao5 = document.getElementsByClassName('div_questao5')[0]

    const resultado = document.getElementsByClassName('div_resultadoTestePerfil')[0]


    if (telaAtual == 'iniciar') {
        divIniciar.style.display = 'none'
        divQuestao1.style.display = 'flex'
        return
    }

    if (telaAtual == 'questao1') {
        divQuestao1.style.display = 'none'
        divQuestao2.style.display = 'flex'
        return
    }
    if (telaAtual == 'questao2') {
        divQuestao2.style.display = 'none'
        divQuestao3.style.display = 'flex'
        return
    }
    if (telaAtual == 'questao3') {
        divQuestao3.style.display = 'none'
        divQuestao4.style.display = 'flex'
        return
    }
    if (telaAtual == 'questao4') {
        divQuestao4.style.display = 'none'
        divQuestao5.style.display = 'flex'
        return
    }
    if (telaAtual == 'questao5') {
        divQuestao5.style.display = 'none'
        resultado.style.display = 'flex'

        verificarResultado()

    }
}

var questoesSelecionadas = []

function armazenarQuestão(questao) {
    questoesSelecionadas.push(questao)
}

function verificarResultado() {

    const respostaTeste = document.getElementById('div_implantar_resultado')

    var perfilEscolhidoVar = 0  // PERFIL A SER ENVIADO PARA A API

    var repeticoesConservador = 0
    var repeticoesModerado = 0
    var repeticoesAgressivo = 0

    for (var pos = 0; pos < questoesSelecionadas.length; pos++) {
        if (questoesSelecionadas[pos] == 'conservador') {
            repeticoesConservador++
        } else if (questoesSelecionadas[pos] == 'moderado') {
            repeticoesModerado++
        } else if (questoesSelecionadas[pos] == 'agressivo') {
            repeticoesAgressivo++
        }
    }

    respostaTeste.innerHTML = `
    <img src='Images/spinnerSemFundo.gif' style="width: 20vh;"> <br>
    
    <h2>Analisando suas respostas...</h2>
    `

    setTimeout(() => {

        if (repeticoesConservador > repeticoesModerado && repeticoesConservador > repeticoesAgressivo) {
            perfilEscolhidoVar = 1
            usuario.style.display = 'flex'
            respostaTeste.innerHTML = `
            
            <h2 id="tituloTestePerfil">Seu Perfil de Investidor é:</h2>
            <h1 id='h1Conservador'>Conservador</h1>
        
            <p>Seu perfil se encaixa nessa categoria porque você prioriza a segurança do seu dinheiro acima de tudo. Isso significa que prefere investimentos mais estáveis, mesmo que os ganhos sejam menores. Você valoriza a tranquilidade e evita correr riscos desnecessários</p>
            <img src="Images/perfilConservador.png" alt="" id='imgConservador'>


            <a href="" id="botaoVoltar">Voltar</a>`

        }


        if (repeticoesModerado > repeticoesConservador && repeticoesModerado > repeticoesAgressivo) {
            perfilEscolhidoVar = 2
            usuario.style.display = 'flex'
            respostaTeste.innerHTML = `
            
            <h2 id="tituloTestePerfil">Seu Perfil de Investidor é:</h2>
            <h1 id='h1Moderado'>Moderado</h1>
        
            <p>Seu perfil é equilibrado! Você busca o melhor dos dois mundos: segurança para proteger seu capital e retorno consistente ao longo do tempo. Está disposto a assumir riscos moderados quando acredita que o potencial de ganhos compensa.</p>
            <img src="Images/perfilModerado.png" alt="" id='imgModerado'>


            <a href="" id="botaoVoltar">Voltar</a>`

        }

        if (repeticoesAgressivo > repeticoesConservador && repeticoesAgressivo > repeticoesModerado) {
            perfilEscolhidoVar = 3
            usuario.style.display = 'flex'

            respostaTeste.innerHTML = `
            
            <h2 id="tituloTestePerfil">Seu Perfil de Investidor é:</h2>
            <h1 id='h1Agressivo'>Agressivo</h1>
        
            <p>Seu perfil é arrojado! Você não tem medo de correr riscos maiores, pois entende que isso pode trazer grandes recompensas. Seu foco está no longo prazo, e você está confortável com as oscilações naturais do mercado para alcançar seus objetivos financeiros</p>
            <img src="Images/perfilAgressivo.jpg" alt="" id='imgAgressivo'>


            <a href="" id="botaoVoltar">Voltar</a>`

        }


        var idUsuarioVar = sessionStorage.getItem('ID_USER')

        fetch('usuarios/armazenarPerfilInvestidor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                perfilEscolhidoServer: perfilEscolhidoVar,
                idUsuarioServer: idUsuarioVar
            })
        })
            .then(resposta => {
                console.log('resposta: ', resposta)

                if (resposta.ok) {
                    return resposta.json()
                } else {
                    throw 'Houve um erro durante a transmissão'
                }
            })
            .then(dadosUsuario => {
                console.log('Dados do usuário recebidos: ', dadosUsuario)

                sessionStorage.setItem('PERFIL', dadosUsuario.perfil)
            })
            .catch(erro => {
                console.log('erro: ',)
            })
    }, 3000);

}