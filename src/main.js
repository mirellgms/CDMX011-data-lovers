import data from './data/athletes/athletes.js';
import { filterByTeam } from './data.js';
//Toma el id="root" del html para guardar la funcion de mostrarData
const root = document.getElementById("root");
data.athletes.forEach(athletas => {
    let atleta = mostrarData(athletas)
    root.appendChild(atleta);
});
//Muestra toda la data en interfaz
function mostrarData(athleta) {
    let card = document.createElement("div");
    card.classList.add("card");
    const names = document.createElement("p");
    names.textContent = `Nombre: ${athleta.name.toUpperCase()}`
    const deporte = document.createElement("p");
    deporte.textContent = `Deporte: ${athleta.sport}`
    const evento = document.createElement("p");
    evento.textContent = `Evento: ${athleta.event}`
    const medalla = document.createElement("p");
    medalla.textContent = `Medalla: ${athleta.medal.toUpperCase()}`
    const pais = document.createElement("p");
    pais.textContent = `Pais: ${athleta.noc}`
    const edad = document.createElement("p");
    edad.textContent = `Edad: ${athleta.age} años`
    const genero = document.createElement("p");
    genero.textContent = `Genero: ${athleta.gender}`
    const altura = document.createElement("p");
    altura.textContent = `Estatura: ${athleta.height} cm`
    const peso = document.createElement("p");
    peso.textContent = `Peso: ${athleta.weight} kg`
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
//Remueve el nodo que contiene la funcion que muestra toda la data
function clear() {
    while (root.firstChild) {
        root.removeChild(root.firstChild)
    }
}
//Filtro por pais
const selectByTeam = document.getElementById("countries");
selectByTeam.addEventListener("change", function (e) {
    clear()
    console.log(filterByTeam(e.target.value));
});

/*
function generadordeHTML(unsolodato){
    let titulito = document.createElement("p");
    titulito.textContent=`Pais: ${unsolodato.team}`
    return titulito
}
const root= document.getElementById("root");
   data.athletes.forEach(unoporunodelosjugadores => {
       let jugadorcito=generadordeHTML(unoporunodelosjugadores)
       root.appendChild(jugadorcito)
   });
selectPais.addEventListener("change",function(e){
  let filterData= paisito(e.target.value);
  paises = Array.from(s);
          document.getElementById('paises').innerHTML ='<li>' + paises.join('</li><li>') + '</li>'
*/