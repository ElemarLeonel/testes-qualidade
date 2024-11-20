import { 
    sum, 
    subtract, 
    multiplication, 
    division, 
    restDivision 
} from "../calc";

test('Adicionar 1 mais 2 para que seja igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Subtrair 6 menos 3 para que seja igual a 3', () => {
    expect(subtract(6, 3)).toBe(3);
});

test('Multiplicar 10 por 3 para que seja igual a 30', () => {
    expect(multiplication(10, 3)).toBe(30);
});

test('Dividir 10 por 5 para que seja igual a 2', () => {
    expect(division(10, 5)).toBe(2);
});

test('Pegar o resultado da divisão de 10 por 2', () => {
    expect(restDivision(10, 2)).toBe(0);
});

