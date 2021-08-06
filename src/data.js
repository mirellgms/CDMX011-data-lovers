import data from './data/athletes/athletes.js';
 
export function sortNames(data){
  let names = data.athletes
  names.sort((a,b) => {
  if(a.name > b.name){
    return 1;
  } else if (a.name < b.name){
    return -1;
  }
    return 0;
<<<<<<< HEAD
  })
}
/*export function filterByMedall(){
    let medalData= names.filter(function(atlet){
   if(atlet.medal== "Gold"){
     return atlet;
   }
  })
 return medalData;
}*/
=======
});

>>>>>>> 590b241be65688fe826c16a7113abdc7cbc6b786
export function filterByTeam (countries){
  let dataByTeam= data.athletes.filter(function(team){  
 if(team.team== countries){
   return team;
 }
})
return dataByTeam;
<<<<<<< HEAD
}
=======
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
>>>>>>> 590b241be65688fe826c16a7113abdc7cbc6b786
