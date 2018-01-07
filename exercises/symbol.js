// Symbols are primitives like Numbers, String, Boolean
// but are important for objects
// for objs they provide a kind of hidden

// symbols have a function to create symbols
// they don't have a constructor so do not use 'new', you'll get error
// they don't have literal syntax as for String, ''
// to create a symbol:
var mySymb = Symbol();
// the descriptor in the (...) if it is used one, it's only for debugging
console.log(Symbol('whatever')); // Symbol('whatever')

// Symbols can be used as Object keys!!
// these Symbol keys will never conflict with String keys or other unique Symbols

var mySymb1 = Symbol();
var mySymb2 = Symbol();

var obj1 = {};
obj1['car'] = "bmw";
obj1[mySymb1] = "em1";
obj1[mySymb2] = "em2";
/*
var obj1 = {
  [mySymb1]: "dog",
  [mySymb2]: "bird"
};
*/
console.log(obj1); // { car: "bmw", Symbol(): "em1", Symbol(): "em2" }

console.log(obj1.car);
console.log(obj1[mySymb1]); // em1
console.log(obj1[mySymb2]); // em2

// use the variable names for getting the value of the Symbols
var mySymb3 = Symbol("test");
obj1[mySymb3] = "lets_see";
console.log(obj1); // { car: "bmw", Symbol(): "em1", Symbol(): "em2", Symbol(test): "lets_see" }
console.log(obj1[Symbol("test")]); // undefined
console.log(obj1[mySymb3]); // lets_see

// symbols do not show up in the array of keys and with for...in loop
// even with Object.getOwnPropertyNames
console.log(Object.keys(obj1)); // Array [ "car" ]
console.log(Object.getOwnPropertyNames(obj1)); // Array [ "car" ]

// use Object.getOwnPropertySymbols to get the symbols from an obj
console.log(Object.getOwnPropertySymbols(obj1)); // Array [ Symbol(), Symbol(), Symbol(test) ]

// if they have the same descriptor that does NOT mean that the symbols are equal
var mySymb1 = Symbol("cathegory1");
var mySymb2 = Symbol("cathegory1");

var obj1 = {
  [mySymb1]: "dog",
  [mySymb2]: "bird"
};
console.log(obj1); // { Symbol(cathegory1): "dog", Symbol(cathegory1): "bird" }

// testing diff ways to add symbs to an obj
var someSymb = Symbol('random');
var obj2 = {
  DEBUG: Symbol('debug'),
  WARN: Symbol('warn'),
  info: Symbol('info'),
  [someSymb]: "different"
};
console.log(obj2.info);
console.log(obj2.DEBUG);
console.log(obj2[someSymb]);

console.log(Object.getOwnPropertySymbols(obj2)); // Array [ Symbol(random) ] ???

var someSymb = Symbol('random');
var obj2 = {
  DEBUG: Symbol.for('debug'),
  WARN: Symbol.for('warn'),
  info: Symbol('info'),
  [someSymb]: "different"
};
var someSymb2 = Symbol.for('random');
console.log(Object.getOwnPropertySymbols(obj2)); // Array [ Symbol(random) ] still...
console.log(Symbol.keyFor(someSymb1)); // undefined
console.log(Symbol.keyFor(someSymb2)); // random
var someSymb3 = Symbol.for('random3');
console.log(Symbol.keyFor(someSymb3)); // random3

console.log(Object.getOwnPropertyNames(obj2)); // Array [ "DEBUG", "WARN", "info" ]
