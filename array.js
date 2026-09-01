//ARRAY
//UM ARRAY E UM TIPO DE DADOS QUE SERVE PARA ARMAZENAR VALOR
//SEQUENCIALMENTO EM FORMA DE LISTA

//ITENS COMEÇAM DO NUMERO ZERO

const numeros= [ 1,2,3,4,5 ]
const nomes = ["Ana", "Caio", "Lucas"]


//na minha lista de numeros
//eu quero a posicao 0
console.log(numeros[0])

console.log(nomes[0])

//LENGTH
//E UMA PROPRIEDADE PARA OBTER O COMPRIMENTO DE UMA ARRAY

console.log(nomes.length) //


//vamos percorrer toda a lista
//e colocar no console cada item.

for ( let i = 0; i < 3; i++ ){

    console.log(nomes[i])
}


//For of
const frutas = ["Maça", "Laranja", "Uva", "Morango"]

for ( const fruta of frutas ){
    console.log(fruta)
}


//FACA A SOMA DE TODOS OS NUMEROS DE UM ARRAY

const listaNumeros = [10, 25, 8, 42, 15, 7]

let soma = 0;

//of listaNumeros - Percorra toda a lista!

for ( const numero of listaNumeros ){
    soma += numero
}

console.log("Numeros", numeros)

console.log("Soma", soma)


const notas = [7.5, 9.0, 6.5, 8.8, 10.0, 5,5];
//utilize o for of e retorne a maior nota

let maiorNota = ListaNota[0]

for (const nota of ListaNota){

    if(nota > maiorNota)
        maiorNota = nota
}

console.log("Maior nota:" + maiorNota)