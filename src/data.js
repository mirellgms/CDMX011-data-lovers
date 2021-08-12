import data from './data/athletes/athletes.js';
  //Funcion para ordenar de A-Z y de Z-A
export function sort (selectOrder){
  let datos=data.athletes
  if(selectOrder=="De A-Z"){
     datos.sort(function(a,b){
      if (a.name>b.name){
        return 1;
      } else if (a.name<b.name){
        return -1;
      }
      return 0;
    });
  }else if(selectOrder=="De Z-A")
    datos.sort(function(a,b){
      if (a.name<b.name){
        return 1;
      } else if (a.name>b.name){
        return -1;
      }
      return 0;
    })
    return datos;
}
  //filtra por equipo(pais) 
export function filterByTeam (countries){
  let dataByTeam= data.athletes.filter(function(athlete){  
 if(athlete.team== countries){
   return athlete;
 }
})
return dataByTeam;
}
//filtra por medalla 
export function filterByMedal(medals){
  let dataByMedal = data.athletes.filter(function(athlete){
    if(athlete.medal== medals){
      return athlete;
    }
  })
  return dataByMedal;
}
//filtra por deporte 
export function filterBySport(sports){
  let dataBySport = data.athletes.filter(function(athlete){
    if(athlete.sport== sports){
      return athlete;
    }
  })
  return dataBySport;
}
