function newContent(opcao) {

    if (opcao == 'div_adm_monetaria') {
        div_adm_monetaria.style.display = 'block'
        div_investimentos.style.display = 'none'
        div_controle_dividas.style.display = 'none'

        window.location = '#div_adm_monetaria'

    } else if (opcao == 'div_investimentos') {
        div_adm_monetaria.style.display = 'none'
        div_investimentos.style.display = 'block'
        div_controle_dividas.style.display = 'none'

        window.location = '#div_investimentos'

    } else if (opcao == 'div_controle_dividas') {
        div_adm_monetaria.style.display = 'none'
        div_investimentos.style.display = 'none'
        div_controle_dividas.style.display = 'block'

        window.location = '#div_controle_dividas'
    }
}

function abrirPilaresADMmonetaria(containerSelecionado) { // PILARES DE ORÇAMENTO
    div_poupanca = document.getElementById('containerPoupanca')
    div_orçamento = document.getElementById('containerOrçamento')
    div_planejamento = document.getElementById('containerPlanejamento')
    div_educacao = document.getElementById('containerEducacao')

    if (containerSelecionado == 'orçamento') {
        div_orçamento.style.height = '60vh'
        div_orçamento.style.transition = '0.5s'
    }

    if (containerSelecionado == 'poupança') {
        div_poupanca.style.height = '60vh'
        div_poupanca.style.transition = '0.5s'
    }

    if (containerSelecionado == 'planejamento') {
        div_planejamento.style.height = '60vh'
        div_planejamento.style.transition = '0.5s'
    }

    if (containerSelecionado == 'educacao') {
        div_educacao.style.height = '60vh'
        div_educacao.style.transition = '0.5s'
    }
}

function abrirPilaresInvestimento(containerSelecionado){
    div_perfil = document.getElementById('containerPerfil')
    div_riscoGanho = document.getElementById('containerRiscoGanho')
    div_disciplina = document.getElementById('containerDisciplina')
    div_educacao = document.getElementById('containerEducacao')

    if (containerSelecionado == 'orçamento') {
        div_riscoGanho.style.height = '60vh'
        div_riscoGanho.style.transition = '0.5s'
    }

    if (containerSelecionado == 'poupança') {
        div_perfil.style.height = '60vh'
        div_perfil.style.transition = '0.5s'
    }

    if (containerSelecionado == 'planejamento') {
        div_disciplina.style.height = '60vh'
        div_disciplina.style.transition = '0.5s'
    }

    if (containerSelecionado == 'educacao') {
        div_educacao.style.height = '60vh'
        div_educacao.style.transition = '0.5s'
    }
}