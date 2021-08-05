import { filterByTeam } from './data.js';
filterByTeam();

const root = document.getElementById("root");
const selectByTeam = document.getElementById("countries");

selectByTeam.addEventListener("change", function (e) {
    limpiar();
    let seleccioncita = (filterByTeam(e.target.value))
    seleccioncita.forEach((athletas) => {
        root.appendChild(mostrarData(athletas));
    });
});

function mostrarData(atleta) {
    let card = document.createElement("div");
    card.classList.add("card");
    const names = document.createElement("p");
    card.classList.add("contentcard");
    names.innerHTML = "Nombre: " + atleta.name;
    const deporte = document.createElement("p");
    card.classList.add("contentcard");
    deporte.innerHTML = "Deporte: " + atleta.sport;
    const evento = document.createElement("p");
    card.classList.add("contentcard");
    evento.innerHTML = "Evento: " + atleta.event;
    const medalla = document.createElement("p");
    card.classList.add("contentcard");
    medalla.innerHTML = "Medalla: " + atleta.medal;
    const pais = document.createElement("p");
    card.classList.add("contentcard");
    pais.innerHTML = "Pais: " + atleta.noc;
    const edad = document.createElement("p");
    card.classList.add("contentcard");
    edad.innerHTML = "Edad: " + atleta.age + "años";
    const genero = document.createElement("p");
    card.classList.add("contentcard");
    genero.innerHTML = "Genero: " + atleta.gender;
    const altura = document.createElement("p");
    card.classList.add("contentcard");
    altura.innerHTML = "Estatura: " + atleta.height + "cm";
    const peso = document.createElement("p");
    card.classList.add("contentcard");
    peso.innerHTML = "Peso: " + atleta.weight + "kg";

    card.appendChild(names);
    card.appendChild(pais);
    card.appendChild(evento);
    card.appendChild(medalla);
    return card;
}

function limpiar() {
    while (root.firstChild) {
        root.removeChild(root.firstChild)
    }
}