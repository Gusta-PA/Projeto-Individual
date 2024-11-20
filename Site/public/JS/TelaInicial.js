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

        p_orcamento.style.display = 'block'
        p_orcamento.style.transition = '0.5s'
    }

    if (containerSelecionado == 'poupança') {
        div_poupanca.style.height = '60vh'
        div_poupanca.style.transition = '0.5s'

        p_poupanca.style.display = 'block'
        p_poupanca.style.transition = '0.5s'
    }

    if (containerSelecionado == 'planejamento') {
        div_planejamento.style.height = '60vh'
        div_planejamento.style.transition = '0.5s'

        p_planejamento.style.display = 'block'
        p_planejamento.style.transition = '0.5s'
    }

    if (containerSelecionado == 'educacao') {
        div_educacao.style.height = '60vh'
        div_educacao.style.transition = '0.5s'

        p_educacao.style.display = 'block'
        p_educacao.style.transition = '0.5s'
    }
}

function abrirPilaresInvestimento(containerSelecionado) {  // PILARES DE INVESTIMENTO
    div_perfil = document.getElementById('containerPerfil')
    div_riscoGanho = document.getElementById('containerRiscoGanho')
    div_disciplina = document.getElementById('containerDisciplina')
    div_diversificacao = document.getElementById('containerDiversificacao')

    if (containerSelecionado == 'perfil') {
        div_perfil.style.height = '60vh'
        div_perfil.style.transition = '0.5s'

        p_perfil.style.display = 'block'
        p_perfil.style.transition = '0.5s'
    }

    if (containerSelecionado == 'riscoGanho') {
        div_riscoGanho.style.height = '60vh'
        div_riscoGanho.style.transition = '0.5s'

        p_riscoganho.style.display = 'block'
        p_riscoganho.style.transition = '0.5s'
    }

    if (containerSelecionado == 'disciplina') {
        div_disciplina.style.height = '60vh'
        div_disciplina.style.transition = '0.5s'

        p_disciplina.style.display = 'block'
        p_disciplina.style.transition = '0.5s'
    }

    if (containerSelecionado == 'diversificacao') {
        div_diversificacao.style.height = '60vh'
        div_diversificacao.style.transition = '0.5s'

        p_diversificacao.style.display = 'block'
        p_diversificacao.style.transition = '0.5s'
    }
}

function abrirPilaresControle(containerSelecionado) { // PILARES DE CONTROLE DE DÍVIDAS
    div_Constancia = document.getElementById('containerConstancia')
    div_Pagamento = document.getElementById('containerPagamento')
    div_Reducao = document.getElementById('containerReducao')
    div_Habitos = document.getElementById('containerHabitos')

    if (containerSelecionado == 'constancia') {
        div_Constancia.style.height = '60vh'
        div_Constancia.style.transition = '0.5s'

        p_constancia.style.display = 'block'
        p_constancia.style.transition = '0.5s'
    }

    if (containerSelecionado == 'pagamento') {
        div_Pagamento.style.height = '60vh'
        div_Pagamento.style.transition = '0.5s'

        p_pagamento.style.display = 'block'
        p_pagamento.style.transition = '0.5s'
    }

    if (containerSelecionado == 'reducao') {
        div_Reducao.style.height = '60vh'
        div_Reducao.style.transition = '0.5s'

        p_reducao.style.display = 'block'
        p_reducao.style.transition = '0.5s'

    }

    if (containerSelecionado == 'habitos') {
        div_Habitos.style.height = '60vh'
        div_Habitos.style.transition = '0.5s'

        p_habitos.style.display = 'block'
        p_habitos.style.transition = '0.5s'
    }
}