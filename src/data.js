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

// import data from './data/athletes/athletes.js';
//   //filtra por equipo(pais) 
// export function filterByTeam (countries){
//   let dataByTeam= data.athletes.filter(function(athlete){  
//  if(athlete.team== countries){
//    return athlete;
//  }
// })
// return dataByTeam;
// }
// //filtra por medalla 
// export function filterByMedal(medals){
//   let dataByMedal = data.athletes.filter(function(athlete){
//     if(athlete.medal== medals){
//       return athlete;
//     }
//   })
//   return dataByMedal;
// }
// //filtra por deporte 
// export function filterBySport(sports){
//   let dataBySport = data.athletes.filter(function(athlete){
//     if(athlete.sport== sports){
//       return athlete;
//     }
//   })
//   return dataBySport;
// }
//  //Funcion para ordenar de A-Z y de Z-A
//  export function sorter(select){
//   let datos=data.athletes
//   if(select=="De A-Z"){
//      datos.sort(function(a,b){
//       if (a.name>b.name){
//         return 1;
//       } else if (a.name<b.name){
//         return -1;
//       }
//       return 0;
//     });
//   }else if(select=="De Z-A")
//     datos.sort(function(a,b){
//       if (a.name<b.name){
//         return 1;
//       } else if (a.name>b.name){
//         return -1;
//       }
//       return 0;
//     })
//     return datos;
// }