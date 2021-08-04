import data from './data/athletes/athletes.js';
export const names = data.athletes
names.sort((a, b) => {
  if (a.name > b.name) {
  return 1;
  } else if (a.name < b.name) {
  return -1;
    }
  return 0;
  });
export function filterByTeam(countries) {
  let dataByTeam = data.athletes.filter(function (team) {
    if (team.team == countries) {
    return team;
    }
  })
  return dataByTeam;
}
export function filterByMedall(medalla){
  let dataByMedal= data.athletes.filter(function(medal){
    if(medal.medal== medalla){
    return medal;
    }
  })
  return dataByMedal;
}
export function filterBySport(deporte){
  let dataBySport= data.athletes.filter(function(sport){
    if(sport.sport== deporte){
    return sport;
    }
  })
  return dataBySport;
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