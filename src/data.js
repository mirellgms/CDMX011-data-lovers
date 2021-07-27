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

export let country = names.filter((name)=>{
  if(name.team=== "Algeria"){
    return name;
  }
})

export function byTeam(pais){
  let filterPerTeam=data.athletes.filter(function(team) {
  return team.team == pais;
})
return filterPerTeam
}
