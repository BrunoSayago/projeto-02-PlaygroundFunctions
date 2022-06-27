// Desafio 11
// eslint-disable-next-line max-lines-per-function , complexity , sonarjs/cognitive-complexity
function generatePhoneNumber(arrayInt) {
  if (arrayInt.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let numero of arrayInt) {
    if (numero < 0 || numero > 9 || arrayInt.filter((number) => number === numero).length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let ddd = `(${arrayInt[0]}${arrayInt[1]})`;
  let corpo1 = '';
  let corpo2 = '';
  for (let index = 2; index <= 6; index += 1) {
    corpo1 += arrayInt[index];
  }
  for (let index2 = 7; index2 <= 10; index2 += 1) {
    corpo2 += arrayInt[index2];
  }
  let numeroFinal = `${ddd} ${corpo1}-${corpo2}`;
  return numeroFinal;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
