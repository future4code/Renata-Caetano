export const calculo = (n: number, aux: number = 0): number => {
    if (n === 0) {
      return aux;
    }
    return calculo(n - 1, aux + n);
  };
  
  
  // Exemplos de uso:
  console.log(calculo(4));
