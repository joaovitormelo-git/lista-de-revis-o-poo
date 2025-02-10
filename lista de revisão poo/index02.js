const prompt = require("prompt-sync")();

let numeros = [], soma = 0, i = 0;
while (i < 5) {
  let num = Number(prompt(`Digite o número ${i + 1}:`));
  numeros.push(num);
  soma += num;
  i++;
}
console.log("Números:", numeros, "Soma:", soma);
 

