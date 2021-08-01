import data from './data/athletes/athletes.js';
export function olimpics(gold){
  return gold;
}
export const names = data.athletes
  names.sort((a,b) => {
  if(a.name > b.name){
    return 1;
  } else if (a.name < b.name){
    return -1;
  }
    return 0;
});
/*export function golden(){
    let medalData= names.filter(function(atlet){
   if(atlet.medal== "Gold"){
     return atlet;
   }
  })
 return medalData;
}*/
export function teams (countries){
  let countryData= names.filter(function(team){
 if(team.team== countries){
   return team;
 }
})
return countryData;
}


/*
export let gold = names.filter((name)=>{
  if(name.medal=== "Gold"){
    return name;
  }
});

export let country = names.filter((team)=>{
  if(team.team=== "Algeria"){
    return team;
  }
})
*/