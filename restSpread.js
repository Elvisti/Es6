//REST irá pegar o resto das propriedades.
const usuario = {
    nome: 'Pedro',
    idade: 35,
    empresa: 'Piccinin'
}

const {nome, ...resto} = usuario
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const [a, b, ...c] = arr
console.log(a, b, c);

function soma(...params){
    console.log(params);
    
}
soma(4, 5, 6)

function soma1(...params){
    return params.reduce((total, next) => total += next)
}
console.log(soma1(3, 4, 5));

function soma2(a, b, ...params){
    return params
}
console.log(soma2(5, 6, 8, 7));

function soma3(a, b, ...params){
    return params.map((item) => item * 2)
}
console.log(soma3(4, 5, 6, 8, 9, 4, 5));

//SPREAD irá repassar os dados para uma outra estrutura

const arr1 = [3, 4, 5]
const arr2 = [6, 7, 8]
// Unindo 2 arrays em um novo array
const arr3 = [...arr1, ...arr2]  
console.log(arr3);

//Pegando toda estrutura e modificando somente o necessário

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'RocketSeat'
}
const usuario2 = {...usuario, nome: 'Elvis'}
console.log(usuario2);


//Template literals. Elas eram chamadas "template strings" nas versões anteriores à especificação ES2015.
const tenis = "Nike"
const tamanho = 42
console.log(`Tenho um tenis ${tenis} com numero ${tamanho} `);


// Object Short Syntax: Sintaxe curta de objeto Es6

const cargo = 'Desenvolvedor front end'
const salario = 2562

const emprego = {
    cargo,
    salario,
    descricao: "Desenvolver aplicações web"
}
console.log(emprego);

// Classe

class List{
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data)
        console.log(this.data);
        
    }
}
class TodoList extends List{
        constructor(){
            super()

            this.usuario = 'Elvis'
        }

        mostrarUsuario(){
            console.log(this.usuario);
            
        }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo')
}

MinhaLista.mostrarUsuario()