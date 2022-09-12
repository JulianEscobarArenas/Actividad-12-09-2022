import { data } from '../data/data.js'

console.log(data)

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let Like = [];

document.addEventListener("DOMContentLoaded", () => {
    LoadData(data)
})

const LoadData = data => {
    data.forEach(Personajes => {
        const { id, name, image } = Personajes
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    items.appendChild(fragment)
}
//..

items.addEventListener('click', e => {
    addLike(e);
})

const addLike = e => {
    if (e.target.classList.contains("btn-dark")) {
        setLike(e.target.parentElement);
    }
}

const setLike = objeto => {
    const Boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,

        cantidad: 0
    }
    if (Like.hasOwnProperty(Boton.id)) {
        Boton.cantidad = Like[Boton.id].cantidad + 1;
        objeto.querySelector('#Like').textContent = Boton.cantidad;
    }

    Like[Boton.id] = { ...Boton };

    console.log(Like[Boton.id]);

}


