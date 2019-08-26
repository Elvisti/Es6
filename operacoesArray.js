const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//map = Serve para percorrer o vetor e retornar uma nova informação.
const newNumeros = numeros.map(function(item){
    return item * 2
})
console.log(newNumeros);

// Reduce irá consumir todo o Array e tranformar em uma única variável(geralmente um número)
const sum = numeros.reduce(function(total, next){
    return total += next
  // 0
  // 1

  // 1
  // 2

  // 3
  // 3

  // 6
  // 4

  // 10
  // 5
})
console.log(sum);

// filter irá percorrer o Array e retornar true para o novo Array ou false para ser filtrado, ou seja, removido do Array
const filter = numeros.filter(function(item){
    return item % 2 === 0
})
console.log(filter);

// find irá verificar se existe alguma informação dentro do Array ou tentar encontrar a informação
const find = numeros.find(function(item){
    return item === 25
    // busca pelo valor 25 dentro do Array caso exista(true), retorna o valor, caso contrário(false) retorna undefined 
})
console.log(find);
