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

export function filterByTeam (countries){
  let dataByTeam= data.athletes.filter(function(team){  
 if(team.team== countries){
   return team;
 }
})
return dataByTeam;
}

export function filterByMedal(medals){
  let dataByMedal = data.athletes.filter(function(medal){
    if(medal.medal== medals){
      return medal;
    }
  })
  return dataByMedal;
}


export function filterBySport(sports){
  let dataBySport = data.athletes.filter(function(sport){
    if(sport.sport== sports){
      return sport;
    }
  })
  return dataBySport;
}
