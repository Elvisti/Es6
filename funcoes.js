export default function div(a, b){
    return a / b
}

export function sub(a, b){
    return a - b
}
export function mult(a, b){
    return a * b
}
export function rest(a, b){
    return a % b
}


/*
(main.js)

//import div, { sub as subFunction } from './funcoes'
//import possoUtilizarQualquerNome from './soma'
import * as funcoes from './funcoes'

console.log(funcoes.mult(5, 60));
console.log(funcoes.sub(10, 8));
console.log(funcoes.rest(23, 5));

//console.log(possoUtilizarQualquerNome(1, 2));
//console.log(subFunction(10, 2));
//console.log(div(10, 2));
*/