import { filterByTeam , filterByMedal, filterBySport} from './data.js';


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
    pais.innerHTML = "País: " + atleta.noc;
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

const selectByMedal = document.getElementById("medalSelect");

selectByMedal.addEventListener("change", function (e) {
    limpiar();
    let seleccioncita = (filterByMedal(e.target.value))
    seleccioncita.forEach((athletas) => {
        root.appendChild(mostrarMedalla(athletas));
    });
});
function mostrarMedalla(medal) {
    let card = document.createElement("div");
    card.classList.add("card");
    const names = document.createElement("p");
    card.classList.add("contentcard");
    names.innerHTML = "Nombre: " + medal.name;
    const deporte = document.createElement("p");
    card.classList.add("contentcard");
    deporte.innerHTML = "Deporte: " + medal.sport;
    const evento = document.createElement("p");
    card.classList.add("contentcard");
    evento.innerHTML = "Evento: " + medal.event;
    const medalla = document.createElement("p");
    card.classList.add("contentcard");
    medalla.innerHTML = "Medalla: " + medal.medal;
    const pais = document.createElement("p");
    card.classList.add("contentcard");
    pais.innerHTML = "País: " + medal.noc;
    const edad = document.createElement("p");
    card.classList.add("contentcard");
    edad.innerHTML = "Edad: " + medal.age + "años";
    const genero = document.createElement("p");
    card.classList.add("contentcard");
    genero.innerHTML = "Genero: " + medal.gender;
    const altura = document.createElement("p");
    card.classList.add("contentcard");
    altura.innerHTML = "Estatura: " + medal.height + "cm";
    const peso = document.createElement("p");
    card.classList.add("contentcard");
    peso.innerHTML = "Peso: " + medal.weight + "kg";
    card.appendChild(names);
    card.appendChild(medalla);
    card.appendChild(pais);
    card.appendChild(evento);
    return card;
}
const selectBySport = document.getElementById("sport");

selectBySport.addEventListener("change", function (e) {
    limpiar();
    let seleccioncita = (filterBySport(e.target.value))
    seleccioncita.forEach((athletas) => {
        root.appendChild(mostrarDeporte(athletas));
    });
});
function mostrarDeporte(sport) {
    let card = document.createElement("div");
    card.classList.add("card");
    const names = document.createElement("p");
    card.classList.add("contentcard");
    names.innerHTML = "Nombre: " + sport.name;
    const deporte = document.createElement("p");
    card.classList.add("contentcard");
    deporte.innerHTML = "Deporte: " + sport.sport;
    const evento = document.createElement("p");
    card.classList.add("contentcard");
    evento.innerHTML = "Evento: " + sport.event;
    const medalla = document.createElement("p");
    card.classList.add("contentcard");
    medalla.innerHTML = "Medalla: " + sport.medal;
    const pais = document.createElement("p");
    card.classList.add("contentcard");
    pais.innerHTML = "País: " + sport.noc;
    const edad = document.createElement("p");
    card.classList.add("contentcard");
    edad.innerHTML = "Edad: " + sport.age + "años";
    const genero = document.createElement("p");
    card.classList.add("contentcard");
    genero.innerHTML = "Genero: " + sport.gender;
    const altura = document.createElement("p");
    card.classList.add("contentcard");
    altura.innerHTML = "Estatura: " + sport.height + "cm";
    const peso = document.createElement("p");
    card.classList.add("contentcard");
    peso.innerHTML = "Peso: " + sport.weight + "kg";
    card.appendChild(names);
    card.appendChild(deporte);
    card.appendChild(evento);
    card.appendChild(pais);
    return card;
}
function limpiar() {
    while (root.firstChild) {
        root.removeChild(root.firstChild)
    }
}