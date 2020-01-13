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
for (var i = arrayParola.length - 1; i >= 0 ; i--) {
  arrayParolaReverse.push(arrayParola[i]);
  console.log(arrayParolaReverse);
}

// confronto
for (var i = 0; i < arrayParola.length; i++) {
  if (arrayParola[i] == arrayParolaReverse[i]) {
    messaggio = "palindroma";
  }
  else {
    messaggio = "non è palindorma";
  }
}
console.log(messaggio);
