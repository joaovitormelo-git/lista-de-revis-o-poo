const prompt = require("prompt-sync")();
let nome = prompt('seu nome???????????');
let idade = Number(prompt('sua idade?????????'));
let estudante = prompt('você é estudante???????')
if(estudante === 'sim'){
    estudante = true
}else{
    estudante = false
};
 
console.log(`NOME:${nome} IDADE:${idade} ANOS ,ESTUDANTE:${estudante} `);