// with destructuring assignment we can assign the properties of an array/obj to variables using syntax that looks similar to array/obj literal
// to bind variables to different properties of an array/object
// [ var1, var2, ..., varN ] = someArray;
// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

// destructuring assignment with an array assignment pattern

var [first, second, third] = myArr; // syntax looking similar to array literal
var [var1, var2, var3] = someArr;
var [x, y, z] = someArr2;

// without destructuring assignment
var first = myArr[0];
var second = myArr[1];
var third = myArr[2];

var var1 = someArr[0];
var var2 = someArr[1];
var var3 = someArr[2];

// we can skip over items when destructuring
var [,, var3] = [1,2,3];
console.log(var3); // 3

// we can assign a variable only to the tail if we want
var [head, ...tail] = [1,2,3,4,5];
console.log(tail); // Array [ 2, 3, 4, 5 ]

var [var1, ...var2] = [1,2,3,4,5];
console.log(var2); // Array [ 2, 3, 4, 5 ]
console.log(var1); // 1

// when the variable is assigned to a not existing property
var [missing] = [] ;
console.log(missing); // undefined


// destructuring objects
// to bind variables to different properties of an object
var myObj = {
  name: "Miha",
  age: 26,
  city: "L.A."
};

var { city: nameOfCity } = myObj;
console.log(nameOfCity); // L.A.
var { age: realAge, name: realName } = myObj;
console.log(realName); // Miha
console.log(realAge); // 26

// when the name of the variables is the same with the name of the properties
var myObj = {
  name: "Miha",
  age: 26,
  city: "L.A."
};

var { name } = myObj;
console.log(name); // Miha
console.log(name); // instead of console.log(myObj.name);

// when you bind properties that are not undefined
var { missing } = {};
console.log(missing); // undefined

// when you don't use var, let, const
{ notGood } = { notGood: "Not Good" }; // SyntaxError: ...
// solution
({ notGood } = { notGood: "Not Good" });
console.log(notGood); // Not Good

// default vaules - how to provide them

var [ firstVar ] = [];
console.log(firstVar); // undefined

var [ firstVar = "first prop in this array" ] = [];
console.log(firstVar); // first prop in this array

var { myVar } = {};
console.log(myVar); // undefined

var { method1: myVar = "some funct for ex could be" } = {};
console.log(myVar); // some funct for ex could be

var { myVar = "some funct for ex could be" } = {}; // var { myVar: myVar = "some funct for ex could be" } = {};
console.log(myVar); // some funct for ex could be

var myEmptyObj = {};
var { method1: myVar = "some funct for ex could be" } = myEmptyObj;
console.log(myVar); // some funct for ex could be
console.log(myEmptyObj); // Object {  }
