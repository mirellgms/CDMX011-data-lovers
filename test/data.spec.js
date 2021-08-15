import {mockData, sortMock}from'./dataMock.js'
import { sorter } from '../src/data.js';
describe("Este bloque testea la funcion ordenado", () =>{
  it ("debe retornar atletas ordenados de la a-z", () => {
    const atletasOrdenados = sorter (mockData,'De A-Z')
    expect(mockData).toHaveLength(4);
    expect(atletasOrdenados).toEqual(sortMock);
  });
});
   

// describe("filterByTeam", () =>{
//   it ("is a function", () => {
//     expect(typeof filterByTeam).toBe("function");
//   });
//   it ("returns 'dataByTeam'", () => {
//     expect(typeof filterByTeam).toBe("function");
//   });
// });

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/