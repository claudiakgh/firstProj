// let scope from ES6
// let is used to declare variables, like 'var', but it better scoping rules
// "let" declares a block scope local variable
// for the most part, in ES6 we should just use 'let' everywhere (instead of 'var')

// 'class' declarations behaive like 'let', not like 'var'

{
//  var car = "bmw";
  let car = "bmw";
}
console.log(car); // ReferenceError: car is not defined
//
if(true) {
  let he = "yes";
}
console.log(he); // ReferenceError: he is not defined
//
var z = 0;
for(let i = 0; i < 4; i++) {
  z += i;
  console.log(i);
} // 0 1 2 3
/*
0
1
2
3
*/
console.log(i); // ReferenceError: i is not defined
console.log(z); // 6

// and with var instead of let
var z = 0;
for(var i = 0; i < 4; i++) {
  z += i;
  console.log(i);
}
console.log(i); // 4 instead of error
