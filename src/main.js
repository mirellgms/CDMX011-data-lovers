

import {teams,set} from './data.js';
console.log(set);
const btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    document.getElementById("filter").style.display = "block";
    document.getElementById("central").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("show").innerHTML = Array.from(set);
    
});




//import {example, anotherExample}  from "./data.js"  
//console.log(example);