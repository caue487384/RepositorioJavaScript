//WHILE (enquanto)
//Permite criar logos que sao executados zero ou mais vezes.

//Enquanto a condicao for TRUE, executa o bloco de codigo!

//while(true){
    //console.log("Ao infinito e... Alem")
//}

//CONTADOR QUE EXIBIR NA TELA DE 1 A 5

//contador inicia como numero 1 
//let contador = 1

//enquanto o meu contador for menor ou igual a 5, continue. 

//while (contador <= 5){

   // console.log ("Contagem: " + contador)

    //contador = (contador + 1)

    //contador = 2
////}

// CONTAGEM REGRESSIVA
/*
let tempo = 10

while(tempo > 0){

    console.log(tempo)

    //tempo = tempo - 1 //Retira 1 do tempo

    tempo--  //retira 1 do tempo


}
console.log("Codigo acabou.")
*/
//VALIDACAO SENHA 

//const senhaCorreta = "148supersenha"
//let tentativa = ""

//while(tentativa != senhaCorreta){
        
    //tentativa = prompt("Digite a senha:")

   // if(tentativa === senhaCorreta){
        //console.log("Senha Correta! Acesso Liberado.")
    //}
    //else{
        //console.log("Senha incorreta. Tente novamente.")
    //}

    //Criar um codigo com While que some numeros ate passar de 100!

//let soma = 0;
//let numero = 0;

//while(soma <= 100){

   // numero = Number (prompt("Informe em numero"))

   // soma = soma + numero

//}

//console.log("A soma dos numeros chegou em: " + soma)

//let repetir = false
//do{
    //console.log("So uma vez")

//while (repetir) //ENQUANTO a condicao for TRUE

//While vs Do...While 

//let num = 10;

//while (x < 5)
    //console.log("Isso NAO vai aparecer.")
//}

//do {
    //console.log("Isso VAI aparecer pelo menos 1x")
//} while(num < 5)


//ADVINHE O NUMERO


const numeroSecreto = Math.floor (Math.random()* 10) + 1;

let palpite;
let tentativas = 0;

console.log("Advinhe o numero entre 1 a 10")

do {
//alert(Math.random()* 10) + 1))
palpite = Number(prompt("Seu palpite"))
tentativas++

if (Number .isNaN(palpite)){
    alert("Digite um numero valido.")
}

else if (palpite == numeroSecreto){
    alert("Acertou!!!" + "Em" + tentativas + "tentivas.")
}
else if (palpite < numeroSecreto){
        alert("Muito baixo! Tente um numero maior.")
}
else if (palpite > numeroSecreto){
       alert("Muito alto! Tente um numero menor.")}

}while (palpite != numeroSecreto)
