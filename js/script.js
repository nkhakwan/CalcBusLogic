var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var div = function(number1, number2) {
  return number1  / number2;
};

var cToF = function(giveCel){
  return  (((9/5) * giveCel) +32);
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
//var result = sub(number1, number2);
//var result = mult(number1, number2);
//var result = div(number1, number2);
//var result = cToF(number1);
alert(result);