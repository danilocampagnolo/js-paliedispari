// scegliere pari o dispari
var pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari);
// scegliere numero da 1 a 5
var userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(userNumber);
// generare numero random da 1 a 5
var randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
// somma i due numeri
var somma = userNumber + randomNumber;
console.log(somma);
// vincitore
if (somma % 2 == 0 && pariDispari == "pari") {
  console.log("hai vinto");
} else if (somma % 2 != 0 && pariDispari == "dispari") {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
