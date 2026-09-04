//DOCUMENT   --> PAGINA INTEIRA DO MEU HTML 
// getElementByID -> procura pelo atributo id=""

// titulo-filme -> ID que queremos. 

//const elemento = document.getElementById('filme-principal')
//console.log(elemento)
//console.log(elemento.tagName)

function selecionarPorId(){

const tituloFilme = document.getElementById('titulo-filme')

console.log(tituloFilme)
console.log(tituloFilme.tagName) //H3
console.log(tituloFilme.textContent) //o conteudo do H3
console.log(tituloFilme.id) //titulo-filme

//adicionei uma classe do elemento.
tituloFilme.classList.add('elemento-selecionado')
}

function selecionarPorClasse(){

    const elementos = document.getElementsByClassName("genero-acao")

    console.log('Quantidade:' + elementos.length)

    for (i = 0; i < elementos.length; i++){ 

        console.log(elementos[i].textContent.trim())
        elementos[i].classList.add('elemento-selecionado')


    }
}

//QuerySelector - > retorna o PRIMEIRO elemento.

function selecionarPorQuery() {

    const elemento = document.querySelector('.filme-mini')
    console.log(elemento)

    elemento.classList.add('elemento-selecionado')
    }

    function selecionarTodos(){

        const elementos = document.querySelectorAll('.filme-mini')

        elementos.forEach( (el, idice) => {
            console.log(Indice, el.textContent.trim())
            el.classList.add('elemento-selecionado')
            }
        )
    }

    function mudarTexto(){ 

        //selecionar o elemento que     ueremos mudar
        const titulo = document.getElementById('titulo-destaque')

        titulo.textContent = document.getElementById('input-busca').value

        console.log('Novo Teste', titulo.textContent)
    }

    function adicionarBadge() {

        const badge = document.createElement('span')

        badge.className = 'badge'
        badge.textContent = '⭐ Em Alta'

        const container = document.getElementById('badge-container')

        container.innerHTML = ''
        
        container.appendChild(badge)
    }