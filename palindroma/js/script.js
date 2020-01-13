var parola = prompt("inserisci una parola");
var arrayParola = [];
var arrayParolaReverse = [];
var messaggio;

if (isPalindrome(parola) == true) {
  messaggio = "palindroma";
} else {
  messaggio = "non è palindorma";
}
console.log(messaggio);


// =================== FUNZIONE
function isPalindrome(parola) {
  // rendere la parola un array
  for (var i = 0; i < parola.length; i++) {
    arrayParola.push(parola[i]);
  }
  // arrayParolaReverse
  for (var i = arrayParola.length - 1; i >= 0 ; i--) {
    arrayParolaReverse.push(arrayParola[i]);
  }
  // confronto
  for (var i = 0; i < arrayParola.length; i++) {
    if (arrayParola[i] == arrayParolaReverse[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}
