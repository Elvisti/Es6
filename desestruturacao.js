// Com a desestruturação podemos acessar dados de um objeto com mais facilidade, acessando através de variáveis.
const usuarios = {
    nome: 'Elvis',
    idade: 27,
    endereco: {
        cidade: 'São Carlos',
        numero: 447
    }
}
/*const {nome, idade, endereco: {cidade, numero}} = usuarios
*console.log(nome);
*console.log(idade);
*console.log(cidade);
*/

function mostrarNome({nome, idade}){
    console.log(nome, idade);
    
}
mostrarNome(usuarios)