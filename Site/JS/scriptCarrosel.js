const containerGaleria = document.querySelector('.containerGaleria');
const controleContainerGaleria = document.querySelector('.controleGaleria');
const controlesGaleria = ['antes', 'depois'];
const itensGaleria = document.querySelectorAll('.itemGaleria')

class Carousel {

    constructor(container, items, controles) {
        this.containerCarrosel = container;
        this.controleCarrosel = controles;
        this.vetorCarrosel = [...items];
    }

    updateGallery() {
        this.vetorCarrosel.forEach(el => {
            el.classList.remove('item4');
            el.classList.remove('item1');
            el.classList.remove('item2');
            el.classList.remove('item3');
        });

        this.vetorCarrosel.slice(0, 5).forEach((e1, i) => {
            el.classList.add(`itemGaleria-${i + 1}`)
        })
    }

    setCurrentState(direcao) {
        if (direcao.className == 'controleGaleria-previous') {
            this.vetorCarrosel.unshift(this.vetorCarrosel.pop())
        } else {
            this.vetorCarrosel.push(this.vetorCarrosel.shift())
        }
        this.updateGallery()
    }

    setControls() {
        this.controleCarrosel.forEach(controle => {
            controleContainerGaleria.appendChild(document.createElement('button')).className = `controle-galeria-${controle}`;
            document.querySelector(`controle-galeria-${controle}`).innerText = controle
        });
    }

    useControls() {
        const triggers = [...controleContainerGaleria.childNodes];
        triggers.forEach(controle => {
            controle.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(controle);
            })
        })
    }
}

const exemploCarrosel = new Carousel(containerGaleria, itensGaleria, controlesGaleria)

exemploCarrosel.setControls()
exemploCarrosel.useControls()