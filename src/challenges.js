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
  let stringNova = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
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
// eslint-disable-next-line complexity , sonarjs/cognitive-complexity
function fizzBuzz(arrayInt) {
  let newArray = [];
  for (let numero of arrayInt) {
    if (numero % 5 === 0 && numero % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (numero % 3 === 0) {
      newArray.push('fizz');
    } else if (numero % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string2) {
  let palavraCodificada = string2;
  let vogais = 'aeiou';
  let index = 1;
  for (let letra of vogais) {
    palavraCodificada = palavraCodificada.replaceAll(letra, index);
    index += 1;
  }
  return palavraCodificada;
}

function decode(string3) {
  let palavraDecodificada = string3;
  let numeros = '12345';
  let vogais = 'aeiou';
  let index = 0;
  for (let letra of numeros) {
    palavraDecodificada = palavraDecodificada.replaceAll(letra, vogais[index]);
    index += 1;
  }
  return palavraDecodificada;
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
