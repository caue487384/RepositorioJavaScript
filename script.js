/*
console.log("Numeros pares de 0 a 20:\n")

pares = pares + 2
pares += 2 - pula de 2 em 2 
for(let pares = 0; pares <=20; pares += 2 ){

    console.log(pares)
}

//CONTAGEM REGRESSIVA COM FOR 

console.log("Lançamento em : \n")

conta--
conta = conta - 1

for (let conta = 10; conta >= 1; conta--)

{
    console.log(conta + "...")
}

console.log ("Decolar!")


DESAFIO

Crie um programa que mostre os numeros de 1 a 3.
Cada numero deve aparecer 3 vezes na mesma linha.

Saida esperada 
1 1 1
2 2 2 
3 3 3

Dica:
Use um for para controlar os numeros
e outro for dentro para repetir cada numero.

for (let i = 1; i <= 3; i++){
let linha = " ";

for (let j = 0; j < 3; j++){
linha += i + " ";

/*
DESAFIO 2 

DESENHAR PIRAMIDE DE ASTERISCOS

for (let i = 1; i <= linhas; i++)
{
    const espacos = ' '.repeat(linhas - i);
    const asteriscos = '*'.repeat(2 * i - 1);
    console.log(espaços + asteriscos);

    Exercicios Nivel Basico

1 - 
    for (let i = 1; i <= 10; i++) {
  console.log(i);
}

2 - 
readline.question('Digite um número: ', (input) => {
    const numero = parseInt(input);
    
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
  
3 - 
if (numero > 0) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
    soma += i;
}
    
    console.log(`Resultado: ${soma}`);
} else {
    console.log("Por favor, digite um número maior que zero.");
}

INTERMEDIARIO

1 - 

        for (int i = 2; i <= 50; i += 2) {
    System.out.println(i);
    }

2 - 

        int numeroSecreto = random.nextInt(100) + 1;
        int palpite = 0;

        System.out.println("Tente adivinhar o número entre 1 e 100!");

        while (palpite != numeroSecreto) {
        System.out.print("Digite seu palpite: ");
        palpite = scanner.nextInt();

        if (palpite > numeroSecreto) {
        System.out.println("O número secreto é menor.");
        }else if (palpite < numeroSecreto) {
        System.out.println("O número secreto é maior.");
            }
        }
            
        System.out.println("Parabéns! Você acertou o número secreto!");
    }
}