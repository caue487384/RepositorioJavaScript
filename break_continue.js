const numeros = [5,12,8,3,19,7,25]
const procurado = 19

for (const num of numeros){

console.log("Numero analizado:" + num)
        if(num === procurado){
        console.log("Encontrado")
        breack;  // para o loop imediatamente
        }
    }

    console.log("Loop terminou.")

    //CONTINUE -> PULAR A ETAPA ATUAL

    console.log("Numeros impares de 1 a 10.")

    for( let i = 1; i <=10; i++){

        if(i%2 == 0){

            continue; //Pula todo o restante do codigo

        }
        console.log(numero)
    }

    const nomes = ["Guilherme", "Lailton", "Rita", "Miguel", "Vanessa", "Michael Jackson"]

    nomes.reverse() //Inverte a Ordem dos elementos.

    console.log (nomes) //Reverse e destrutivo, ele modifica o array original

    //**Exercicio - Alunos Aprovados

    //Uma escola possui uma lista de alunos com suas respectivas notas.
    //Considere que a **nota minima para aprovaçao e 7.0**

    //Crie um programa em JavaScript que:
    
    //1. Crie um **array de objetos** chamado **`alunos`**.
    //2. Cada objeto deve possuir as propriedades **`nome`** e **`nota`**.
    //3. Percorra todos os alunos utilizando o **`for...of**.
    //4. Verifique a nota de cada aluno.
    //5. Caso a nota seja **menor que 7**, utilize **`continue`** para pular esse aluno.
    //6. Exiba no console **somente os alunos aprovados**, mostrando o nome e a nota.

    // 1 e 2. Criar o array de objetos 'alunos' com nome e nota
const alunos = [
  {nome: "Ana", nota: 8.5},
  {nome: "Bruno", nota: 5.0},
  {nome: "Carla", nota: 7.0},
  {nome: "Diego", nota: 6.2},
  {nome: "Eduarda", nota: 9.1},
]

for (const aluno of alunos) {
 
  if (aluno.nota < 7.0) {
    continue;
  }

  console.log(`Aprovado(a): ${aluno.nome} - Nota: ${aluno.nota}`);
}