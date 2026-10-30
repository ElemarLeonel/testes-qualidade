import { filterEvenNumbers } from '../prova'

test('Deve filtrar apenas números pares de um array', () => {
    const result = filterEvenNumbers([1, 2, 3, 4, 5]);
    console.log(result);
    expect(result).toEqual([2, 4]);
});

