var parola = prompt("inserisci una parola");

if (isPalindrome(parola) == true) {
  console.log("palindroma");
} else {
  console.log("non è palindorma");
}


// =================== FUNZIONE
function isPalindrome(parola) {
  // arrayParolaReverse
  var parolaReverse = "";
  for (var i = parola.length - 1; i >= 0 ; i--) {
    parolaReverse += parola[i];
  }
  if (parolaReverse == parola) {
    return true;
  }
  else {
    return false;
  }
}
