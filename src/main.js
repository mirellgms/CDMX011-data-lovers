import data from './data/athletes/athletes.js';
import { filterByTeam } from './data.js';

const root = document.getElementById("root");
const selectByTeam = document.getElementById("countries");

data.athletes.forEach(athletas => {
    let atleta = mostrarData(athletas)
    root.appendChild(atleta);
});

selectByTeam.addEventListener("change", function (e) {
    let seleccioncita = (filterByTeam(e.target.value))
    //console.log(seleccioncita)
    mostrarData(seleccioncita);
});


function mostrarData(seleccion) {
    limpiar()
    let card = document.createElement("div");
    card.classList.add("card");
    const names = document.createElement("p");
        names.textContent = `Nombre: ${seleccion.name.toUpperCase()}`
    const deporte = document.createElement("p");
        deporte.textContent = `Deporte: ${seleccion.sport}`
    const evento = document.createElement("p");
        evento.textContent = `Evento: ${seleccion.event}`
    const medalla = document.createElement("p");
        medalla.textContent = `Medalla: ${seleccion.medal.toUpperCase()}`
    const pais = document.createElement("p");
        pais.textContent = `Pais: ${seleccion.noc}`
    const edad = document.createElement("p");
        edad.textContent = `Edad: ${seleccion.age} años`
    const genero = document.createElement("p");
        genero.textContent = `Genero: ${seleccion.gender}`
    const altura = document.createElement("p");
        altura.textContent = `Estatura: ${seleccion.height} cm`
    const peso = document.createElement("p");
        peso.textContent = `Peso: ${seleccion.weight} kg`

    card.appendChild(names);
    card.appendChild(deporte);
    card.appendChild(evento);
    card.appendChild(pais);
    card.appendChild(medalla);
    card.appendChild(edad);
    card.appendChild(genero);
    card.appendChild(altura);
    card.appendChild(peso);
    return card;
}


function limpiar(){
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }
}