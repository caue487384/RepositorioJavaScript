//Linguagem Interpretada
//Node.js
//Tipagem Fraca
/*
let minhaVariavel = 10;
minhaVariavel = "Ola Mundo!";
minhaVariavel = true;

let numero = 10;
let texto = "20";
let resultado = numero + texto;
console.log(resultado);

console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String("123"));
console.log(Boolean("0"));
console.log(Boolean("1"));
console.log(Boolean(""));
console.log(Boolean("oi"));
const chovendo = true;

const solApareceu = false;

console.log(typeof chovendo);

    const idade = 20;

if (idade >= 20) {
console.log("maior de idade!")
}

const idade = 15;

if (idade >= 18) {
    console.log("Voce e maior de idade!");
    {else {
console.log("Voce e menor de idade!");
    }

    const idade = Number(prompt("Digite sua idade:"));

    if (idade >= 18) {
    console.log("Voce pode tirar carteira de motorista!");
    } else {
    console.log("Voce ainda nao pode dirigir.");
    }

        const idade = 20;
    const temDocumento = true;
    const estaLista = true;

    if (idade >= 18 && temDocumento && estaLista) { 
      console.log("Pode entrar!!")
    } else {
        console.log("Acesso negado!!")

        const temDinheiro = false;
        const temCartao = true;
        const temPix = false;

        if (temDinheiro || temCartao || temPix) { 
            console.log("Pode pagar")
        } else {
            console.log("Nao pode pagar")
        }

        const usuario = "admin";
        const senha = "1234";

        const senhaCorreta = (senha === "1234");
        const ehAdmin = (usuario === "admin")
        const ehGerente = (usuario === "gerente")

        if ((ehAdmin && senhaCorreta || ehGerente && senhaCorreta)) {
        console.log("Acesso Liberado!")
        } else {
        console.log("Acesso Negado!")
        }

        if (ehAdmin || ehGerente) && senhaCorreta) { 
        
        } else }

        }

        const usuario = prompt("Usuario:");
        const senha = prompt("Senha");

        const acessoAdmin = (usuario === "admin" && senha === "1234");
        const acessoUser = (usuario === "user" && senha === "senha1234");

        if (acessoAdmin || acessoUser) { 
        console.log("Acesso liberado!")
        } else {
        console.log("Acesso negado!")
        }
        
        const nota = 75;

        if (nota >= 80) { 
            console.log("Aprovado!")
        } else if(nota >= 60) {
            console.log("Recuperacao!")
        } else {
            console.log("Reprovado!")
        }
        
        */
      // Exercício — Classificação da Temperatura

      //  Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C) e classifique a temperatura de acordo com as faixas abaixo:

        /*Temperatura	Classificação
        Abaixo de 0°C	🥶 Muito frio
       De 0°C a 15°C	❄️ Frio
        De 16°C a 25°C	😊 Agradável
        De 26°C a 35°C	🌡️ Quente
        Acima de 35°C	🔥 Muito quente
        
        */
        const temp = Number(prompt("Temperatura atual (°C:"));

        if (Number.isNaN(temp)) {
        console.log("Temperatura invalida!")
        } else if(temp < 0) {