// read-only properties
// non enumerable props
// Object.defineProperty()
// loops/keys collection

var person = {
  name: "Cris",
  city: "LA",
  age: 24
};
person.gender = "M";
person["car"] = "BMW";

console.log(Object.keys(person));

Object.defineProperty(person, "CNP", {value: "27495030", enumerable: false});
Object.defineProperty(person, "CNP_2", {value: "27495030", enumerable: true});
console.log(Object.keys(person));

// non enumerable props

//.hasOwnProperty(prop) returns a boolean
// the boolean indicates whether the object has the specified property as own (not inherited) property
// using hasOwnProperty() to test for a property's existence
// some browsers don't support it and not all libraries use it
// don't rely on it

var person = {
  name: "Cris",
  city: "LA",
  age: 24
};
person.gender = "M";
person["car"] = "BMW";
var symb1 = Symbol("foo");
person[symb1] = "symbolValueForFoo";
Object.defineProperty(person, "CNP", {value: "27495030", enumerable: false});
console.log(Object.keys(person));
for(var key in person) { // only iterating enumerable items
  if(person.hasOwnProperty(key)) {
    console.log(key);
  }
}
console.log(person.hasOwnProperty("CNP")); // true

// get properties of an array, obj
var arr = ["a", "ss", "tt"];
// we can use for...in loop to access only the enumerable props or Object.keys
console.log(Object.keys(arr)); // Array [ "0", "1", "2" ] only the enumerable props
console.log(Object.getOwnPropertyNames(arr)); // Array [ "0", "1", "2", "length" ]

var person = {
  name: "Cris",
  city: "LA",
  age: 24
};
person.gender = "M";
person["car"] = "BMW";
var symb1 = Symbol("foo");
person[symb1] = "symbolValueForFoo";
Object.defineProperty(person, "CNP", {value: "27495030", enumerable: false});
console.log(Object.keys(person)); // [ "name", "city", "age", "gender", "car" ]
console.log(Object.getOwnPropertyNames(person)); // [ "name", "city", "age", "gender", "car", "CNP" ]

// added methods too for the tested obj
var someObj = {
  mh: "muu",
  aF: function() {
    return mh;
  }
};
Object.defineProperty(someObj, "CNP_3", {value: "27495030", enumerable: false});
console.log(Object.keys(someObj)); // Array [ "mh", "aF" ]
for(var key in someObj) {
  console.log(key);
}
console.log(Object.getOwnPropertyNames(someObj)); // Array [ "mh", "aF", "CNP_3" ]

// you can make inaccessible props and meths for shallow clones by adding them to the prototype
// you won't see them when using for...in or Object.keys() or Object.getOwnPropertyNames()

var someObj = {
  mh: "muu",
  aF: function() {
    return mh;
  }
};
Object.defineProperty(someObj, "CNP_3", {value: "27495030", enumerable: false});
Object.prototype.myColor = "red";
console.log(Object.keys(someObj)); // Array [ "mh", "aF" ]
for(var key in someObj) {
  console.log(key);
}
console.log(Object.getOwnPropertyNames(someObj)); // Array [ "mh", "aF", "CNP_3" ]
// and still not seeing what you added in prototype
console.log(someObj.myColor); // red
console.log(someObj.hasOwnProperty(myColor)); // false

// declare what is enumerable or not in prototype
// but again some browsers don't support it
// for that use .hasOwnProperty
Object.defineProperty(Object.prototype, "myMeth", {
  value: function() {
    // do smth
  },
  enumerable: false // or true, the default
});

// if I clone a copy of an obj that has non-enumerable props
// !! the non enumerable from original get's enumerable in the copy, not good
var someObj = {
  mh: "muu",
  aF: function() {
    return mh;
  }
};
Object.defineProperty(someObj, "CNP_3", {value: "27495030", enumerable: false});
console.log(someObj);
console.log(Object.keys(someObj)); // [ "mh", "aF" ]

function shallowCopyOfOwnProps(original) {
  var copy2 = {};
  var keys = Object.getOwnPropertyNames(original);

  for(var i = 0; i < keys.length; i++) {
    copy2[keys[i]] = original[keys[i]];
  }
  return copy2;
}

var newObj2 = shallowCopyOfOwnProps(someObj);
console.log(newObj2);
console.log(Object.keys(newObj2)); // [ "mh", "aF", "CNP_3" ] the non enumerable from original get's enumerable in the copy
/*
var newObj = Object.assign({}, someObj);
var keysCop = Object.keys(newObj);
console.log(keysCop);
var keysOwnProp = Object.getOwnPropertyNames(newObj);
console.log(keysOwnProp);
*/

// display only the inherited properties of the obj
// create a constructor for this to see it

for(var key in someObj2) {
  if(someObj2.hasOwnProperty(key)) {
    console.log("This is it: " + key);
  }
}
