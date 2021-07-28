import data from './data/athletes/athletes.js';

export const names = data.athletes
  names.sort((a,b) => {
  if(a.name > b.name){
    return 1;
  } else if (a.name < b.name){
    return -1;
  }
    return 0;
});

export let gold = names.filter((name)=>{
  if(name.medal=== "Gold"){
    return name;
  }
})
export function byTeam(){
  let teams=names
  for(let i=0; i<teams.length; i++) {
  console.log(teams[i].team);
}}


export let country = names.filter((name)=>{
  if(name.team=== "Algeria"){
    return name;
  }
})
