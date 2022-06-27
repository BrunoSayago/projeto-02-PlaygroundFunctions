// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string1) {
  let arrayPalavras = string1.split(' ');
  return arrayPalavras;
}

// Desafio 4
function concatName(arrayString) {
  // eslint-disable-next-line prefer-template , no-undef
  stringNova = arrayString[arrayString.length - 1] + ', ' + arrayString[0];
  // eslint-disable-next-line no-undef
  return stringNova;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNum) {
  let indice = 0;
  let maior;
  for (let index of arrayNum) {
    if (maior === undefined || index > maior) {
      maior = index;
    }
  }
  return (arrayNum.filter((number) => number === maior).length);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(Math.abs(cat1) - Math.abs(mouse)) < Math.abs(Math.abs(cat2) - Math.abs(mouse))) {
    return 'cat1';
  } if (Math.abs(Math.abs(cat1) - Math.abs(mouse)) > Math.abs(Math.abs(cat2) - Math.abs(mouse))) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
