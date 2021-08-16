import {athlet, mockData, mockAtoZ, mockZtoA}from'./dataMock.js'
import { sorter, filterByTeam, filterBySport, filterByMedal } from '../src/data.js';
const athletes= mockData

describe('Bloque que testea la funcion filtro por team', () => {
  it('is a funcion', () => {
    expect(typeof filterByTeam).toBe('function');
  });
  it('deberia retornar atletas de Canada', () => {
    expect(filterByTeam(athletes,'Canada')).toHaveLength(1);
  });
  it('deberia retornar atletas de France', () => {
    expect(filterByTeam(athletes,'France')).toHaveLength(1);
  });
  it('deberia retornar atletas de Canada',()=>{
    expect(filterByTeam(athletes,'Canada')).toEqual(athlet);
  })
});

describe('Bloque que testea la funcion filtro por medalla', () => {
  it('is a funcion', () => {
    expect(typeof filterByMedal).toBe('function');
  });
  it('retorna atletas por medalla de Bronze', () => {
    expect(filterByMedal(athletes,'Bronze')).toHaveLength(1);
  });
  it('retorna atletas por medalla de Bronze',()=>{
    expect(filterByMedal(athletes,'Bronze')).toEqual(athlet);
  })
});

describe('Bloque que testea la funcion filtro por deporte', () => {
  it('is a funcion', () => {
    expect(typeof filterBySport).toBe('function');
  });
  it('retorna atletas que participarton en Athletics', () => {
    expect(filterBySport(athletes,'Athletics')).toHaveLength(1);
  });
  it('retorna atletas que participarton en Athletics',()=>{
    expect(filterBySport(athletes,'Athletics')).toEqual(athlet);
  })
});

describe("Este bloque testea la funcion ordenado", () =>{
  it ("debe retornar atletas ordenados de la a-z", () => {
    const atletasOrdenados = sorter (athletes,'De A-Z')
    expect(mockData).toHaveLength(3);
    expect(atletasOrdenados).toEqual(mockAtoZ);
    expect(atletasOrdenados[0]).toEqual(athlet[0]);

  });
  it('debe retornar atletas ordenados de z-a', ()=>{
    const atletasOrdenados = sorter (athletes,'De Z-A')
    expect(mockData).toHaveLength(3);
    expect(atletasOrdenados).toEqual(mockZtoA);
    expect(atletasOrdenados[2]).toEqual(athlet[0]);
  })
});
   