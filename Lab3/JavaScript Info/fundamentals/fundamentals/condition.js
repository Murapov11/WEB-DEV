if ("0"){
    alert( 'Hello' );
}
//------
let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}
// ------

let value_ = prompt('Type a number', 0);

if (value_ > 0) {
  alert( 1 );
} else if (value_ < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


// -------
let result = (a + b < 4) ? 'Below' : 'Over';
// -------
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
