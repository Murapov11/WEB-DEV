// TASK 1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert(a + b);
// TASK 2
// 6.34999999999999964473 and 1.35000000000000008882
// TASK 3
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
alert(`Read: ${readNumber()}`);
  
// TASK 4
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );