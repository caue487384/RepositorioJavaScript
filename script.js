
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
    System.out.print("Digite seu palpite:");
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