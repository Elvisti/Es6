"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//REST irá pegar o resto das propriedades.
var usuario = {
  nome: 'Pedro',
  idade: 35,
  empresa: 'Piccinin'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a, b, c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  console.log(params);
}

soma(4, 5, 6);

function soma1() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return params.reduce(function (total, next) {
    return total += next;
  });
}

console.log(soma1(3, 4, 5));

function soma2(a, b) {
  for (var _len3 = arguments.length, params = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    params[_key3 - 2] = arguments[_key3];
  }

  return params;
}

console.log(soma2(5, 6, 8, 7));

function soma3(a, b) {
  for (var _len4 = arguments.length, params = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    params[_key4 - 2] = arguments[_key4];
  }

  return params.map(function (item) {
    return item * 2;
  });
}

console.log(soma3(4, 5, 6, 8, 9, 4, 5)); //SPREAD irá repassar os dados para uma outra estrutura

var arr1 = [3, 4, 5];
var arr2 = [6, 7, 8]; // Unindo 2 arrays em um novo array

var arr3 = [].concat(arr1, arr2);
console.log(arr3); //Pegando toda estrutura e modificando somente o necessário

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'RocketSeat'
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Elvis'
});

console.log(usuario2); //Template literals. Elas eram chamadas "template strings" nas versões anteriores à especificação ES2015.

var tenis = "Nike";
var tamanho = 42;
console.log("Tenho um tenis ".concat(tenis, " com numero ").concat(tamanho, " ")); // Object Short Syntax: Sintaxe curta de objeto Es6

var cargo = 'Desenvolvedor front end';
var salario = 2562;
var emprego = {
  cargo: cargo,
  salario: salario,
  descricao: "Desenvolver aplicações web"
};
console.log(emprego);
