// Desafio 11
// eslint-disable-next-line complexity , sonarjs/cognitive-complexity
function generatePhoneNumber(arrayInt) {
  if (arrayInt.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let numero of arrayInt) {
    if (numero < 0 || numero > 9 || arrayInt.filter((number) => number === numero).length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let stringNumeros = '';
  for (let number of arrayInt) {
    stringNumeros += number;
  }
  let numeroFinal = `(${stringNumeros.substring(0, 2)}) ${stringNumeros.substring(2, 7)
  }-${stringNumeros.substring(7)}`;
  return numeroFinal;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let listaLine = [lineA, lineB, lineC];
  let condicaoTotal = true;
  for (let index = 1; index <= 3; index += 1) {
    if (listaLine[0] > listaLine[1] + listaLine[2]
      || listaLine[0] < Math.abs(listaLine[1] - listaLine[2])) {
      condicaoTotal = false;
    }
    let apoio = listaLine[0];
    let apoio2 = listaLine[1];
    let apoio3 = listaLine[2];
    listaLine[0] = apoio2;
    listaLine[1] = apoio3;
    listaLine[2] = apoio;
  }
  return condicaoTotal;
}

// Desafio 13
function hydrate(stringBebidas) {
  let achaNumero = /\d+/g;
  let listaNumeros = stringBebidas.match(achaNumero);
  let soma = 0;
  for (let numero of listaNumeros) {
    soma += Math.round(numero);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
