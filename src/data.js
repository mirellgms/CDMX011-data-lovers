//Filtrado por pais
export function filterByTeam(data, team){
  let dataByTeam= data.filter(function(athlete){
    if(athlete.team===team){
      return athlete
    }
  })
  return dataByTeam
}
//Filtro por medalla
export function filterByMedal(data, medal){
  let dataByMedal= data.filter(function(athlete){
    if(athlete.medal===medal){
      return athlete
    }
  })
  return dataByMedal
}
//Filtro por deporte
export function filterBySport(data, sport){
  let dataBySport= data.filter(function(athlete){
    if(athlete.sport===sport){
      return athlete
    }
  })
  return dataBySport
}
 //Funcion para ordenar de A-Z y de Z-A
 export function sorter(data, select){
   if(select=="De A-Z"){
     data.sort(function(a,b){
      if (a.name>b.name){
        return 1;
      } else if (a.name<b.name){
        return -1;
      }
      return 0;
    });
  }else if(select=="De Z-A")
    data.sort(function(a,b){
      if (a.name<b.name){
        return 1;
      } else if (a.name>b.name){
        return -1;
      }
      return 0;
    })
    return data;
}