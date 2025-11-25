import { sumar, restar, multiplicar, dividir } from "../index";

test("Suma de dos números", () => {
  expect(sumar(1, 5)).toBe(6);
});

test("Resta de dos números", () => {
  expect(restar(1, 5)).toBe(-4);
});

test("Multiplicación de dos números", () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test("División de dos números", () => {
  expect(dividir(10, 2)).toBe(5);
});

//Error intencional
// test("suma incorrecta (test fallido)", () => {
//   expect(sumar(2, 2)).toBe(5);
// });

test("División por cero lanza error", () => {
  expect(() => dividir(10, 0)).toThrow("no se puede dividir por 0");
});
