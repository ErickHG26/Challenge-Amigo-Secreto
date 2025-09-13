// Variables
let amigos = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const nombreGanador = document.getElementById('nombre-ganador');
const botonAnadir = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');
const botonReiniciar = document.querySelector('.button-reset');

// Funciones
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre) {
        amigos.push(nombre);
        inputAmigo.value = '';
        actualizarLista();
        inputAmigo.focus();
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
    botonSortear.disabled = amigos.length < 2;
}

function sortearAmigo() {
    if (amigos.length < 2) return;
    botonSortear.disabled = true;
    botonReiniciar.disabled = true;

    const duracionAnimacion = 3000; // duracion de la animacion 3 segundos
    const intervaloAnimacion = 75;  // velocidade la animacion 75ms

    const animacion = setInterval(() => {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        nombreGanador.textContent = amigos[indiceAleatorio];
    }, intervaloAnimacion);

    setTimeout(() => {
        clearInterval(animacion);
        const indiceGanador = Math.floor(Math.random() * amigos.length);
        nombreGanador.textContent = amigos[indiceGanador];
        botonSortear.disabled = false;
        botonReiniciar.disabled = false;
    }, duracionAnimacion);
}

function reiniciarSorteo() {
    amigos = [];
    nombreGanador.textContent = '';
    actualizarLista();
    botonReiniciar.disabled =true;
    console.log("Sorteo reiniciado.");
}

//Comando para los botones
botonAnadir.addEventListener('click', agregarAmigo);
inputAmigo.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
botonSortear.addEventListener('click', sortearAmigo);
botonReiniciar.addEventListener('click', reiniciarSorteo);