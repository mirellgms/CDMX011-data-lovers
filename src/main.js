/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);*/
import {filterPerTeam} from "./data.js";

const btn= document.getElementById("btn");
    btn.addEventListener("click", function(){
        document.getElementById("central").style.display="none";
        document.getElementById("filter").style.display="block";
       console.log (filterPerTeam);
    })