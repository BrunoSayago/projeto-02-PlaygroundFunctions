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
function confereFizzBuzz(numero) {
  if (numero % 5 === 0 && numero % 3 === 0) {
    return 'fizzBuzz';
  }
  if (numero % 5 === 0) {
    return 'buzz';
  }
  if (numero % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(arrayInt) {
  let newArray = [];
  for (let number of arrayInt) {
    newArray.push(confereFizzBuzz(number));
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
function techList(arrayTec, stringName) {
  if (arrayTec === undefined || stringName === undefined || arrayTec.length === 0) {
    return 'Vazio!';
  }
  let lista = [];
  for (let tecnologia of arrayTec.sort()) {
    let objetoTec = {
      tech: tecnologia,
      name: stringName,
    };
    lista.push(objetoTec);
  }
  return lista;
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
