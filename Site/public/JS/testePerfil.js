function trocarTela(telaAtual) {

    const divIniciar = document.getElementsByClassName('div_testePerfil')[0]
    const divQuestao1 = document.getElementsByClassName('div_questao1')[0]
    const divQuestao2 = document.getElementsByClassName('div_questao2')[0]
    const divQuestao3 = document.getElementsByClassName('div_questao3')[0]
    const divQuestao4 = document.getElementsByClassName('div_questao4')[0]
    const divQuestao5 = document.getElementsByClassName('div_questao5')[0]

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

    }
}

var questoesSelecionadas = []

function armazenarQuestão(questao) {
    questoesSelecionadas.push(questao)
}

function verificarResultado(respostas) {

    const respostaTeste = document.getElementById('div_implantar_resultado')

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

    if (repeticoesConservador > repeticoesModerado && repeticoesConservador > repeticoesAgressivo) {
        respostaTeste.innerHTML = `
        <h3>Conservador</h3>
        
        `
    }
}