"use strict";

var arr = [2, 4, 6, 8, 10];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return [1, 2, 3];
};

console.log(teste);

var teste1 = function teste1() {
  return 'Elvis';
};

console.log(teste1); // Quando retornar um objeto, precisa inserir os parênteses antes das chaves.

var teste2 = function teste2() {
  return {
    idade: 25
  };
};

console.log(teste2);
