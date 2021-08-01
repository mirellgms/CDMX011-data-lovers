import data from './data/athletes/athletes.js';
import { teams } from './data.js';
import athletes from './data/athletes/athletes.js';


//const btn= document.getElementById("btn");
//btn.addEventListener("click", function(){
//document.getElementById("central").style.display="none";
//document.getElementById("filter").style.display="block";

/*const root= document.getElementById("root");
data.athletes.forEach(unoporunodelosjugadores => {
    let jugadorcito=generadordeHTML(unoporunodelosjugadores)
    root.appendChild(jugadorcito)
});

 


/*const tabla= document.createElement("table");
const tblRoot= document.createElement("tbody");
for(let i=0;i<2;i++){
    let columnas=document.createElement("tr");
for(let j=0;j< 5; j++){
    let celda= document.createElement("td");
    let texto=document.createTextNode("hola")
    celda.appendChild(texto);
    columnas.appendChild(celda);
    tblRoot.appendChild(columnas);
    tabla.appendChild(tblRoot);
    root.appendChild(tabla);
    tabla.setAttribute("border","2");
}
}*/
//})
/*
const selector= document.getElementById("countries");
selector.addEventListener("change", function(e){
  console.log(teams(e.target.value));
})*/
/*const selectPais= document.getElementById("countries");
  selectPais.addEventListener("change",function(e){
  let filterData= paisito(e.target.value); 
  paises = Array.from(s);
  })*/
let paisSeleccionado;
const seleccionarElemento = document.querySelector('.country');


seleccionarElemento.addEventListener('change', (e) => {
    paisSeleccionado = e.target.value;
}

)


if (paisSeleccionado == data.athletes[.team]){
    tarjeta = 
} 
  /*
          document.getElementById('paises').innerHTML ='<li>' + paises.join('</li><li>') + '</li>'
*/

/*function generadordeHTML(unsolodato){
    let titulito = document.createElement("h2");                 // Create a <li> node
    titulito.textContent=`${unsolodato.name}`
    return titulito

}*/


/*
function generadordeHTML(atletas){
    let titulito = document.createElement("h2");                 // Create a <li> node
    titulito.textContent=`${atletas.noc}`
    //titulito.textContent=`${atletas.name}`
    return titulito




}


/*
titulito.textContent=`${atletas.name}`
    titulito.textContent=`${atletas.event}`
    titulito.textContent=`${atletas.medal}`*/