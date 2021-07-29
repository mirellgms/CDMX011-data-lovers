// estas funciones son de ejemplo

import athletes from './data/athletes/athletes.js';

let teams = [];
for (let i = 0; i < athletes.athletes.length; i++){
	teams.push(athletes.athletes[i].team);
  //teams.push(athletes.athletes[i].name); 
  //teams.push(athletes.athletes[i].noc);
  //teams.push(athletes.athletes[i].age);
  //teams.push(athletes.athletes[i].event);
  //teams.push(athletes.athletes[i].medal); 
}
teams.sort();
const set = new Set(teams);
Array.from(Set)

  export {teams,set};



/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */
