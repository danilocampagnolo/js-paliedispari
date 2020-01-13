var parola = prompt("inserisci una parola");
var arrayParola = [];
var arrayParolaReverse = [];
var messaggio;

// rendere la parola un array
for (var i = 0; i < parola.length; i++) {
  arrayParola.push(parola[i]);
  console.log(arrayParola);
}

// arrayParolaReverse
for (var i = arrayParola.length; i > 0 ; i--) {
  arrayParolaReverse.push(arrayParola[i]);
  console.log(arrayParolaReverse);
}
