export const sumar = (a: number, b: number): number => {
  return a + b;
};

export const restar = (a: number, b: number): number => {
  return a - b;
};

export const multiplicar = (a: number, b: number): number => {
  return a * b;
};

export const dividir = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("no se puede dividir por 0");
  }

  return a / b;
};
