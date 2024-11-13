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