// perform a shallow copy of an object
// shallow copy: only the surface of the object is cloned, deeper objects are shared.
// Object.assign() can be used for shallow copy, but it does not create a deep copy.
// Object.assign is not the best option if you need to clone an object
// Object.assign(target, ...sources)

// perform a shallow copy of an object with for...in loop
// I think it's the same as Object.assign()
function naiveShallowCopy(original) {
  var copy1 = {}; // it will receive a copy of properties
  for(var key in original) {
    copy1[key] = original[key];
  }

  return copy1;
}

var obj1 = {a: "am", b: "cri", c: {ex: "nope"}};
var obj2 = naiveShallowCopy(obj1);
//console.log(obj2);
//console.log(obj1);
obj1.b = "gfjb";
console.log(obj2.b);
obj1.c.ex = "yesYes";
console.log(obj2.c.ex); // "yesYes" not "nope"

// Object.assign(target, ...sources)
var object1 = {
  a: 1,
  b: 2
};
var copy1 = Object.assign({},object1); // is NOT the same as saying copy1 = object1;
object1.a = 3;
console.log(copy1.a);

// shallow copy: using Object.assign
// Object.assign is not the best option if you need to clone an object
var object1 = {
  a: 1,
  b: {
    c: 3
  }
};
var copy1 = Object.assign({},object1);
object1.a = 3;
copy1.b.c = 7;
console.log(object1.a);
console.log(object1.b);
console.log(copy1.a);

// shallow copy: using Object.keys()
function shallowCopyOfEnumerableOwnProperties(original) {
  var copy1 = {};
  var keys = Object.keys(original);

  for(var i = 0; i < keys.length; i++) {
    copy1[keys[i]] = original[keys[i]];
  }

  return copy1;
}
var object1 = {
  a: 1,
  b: {
    c: 3
  }
};
var symb1 = Symbol("foo");
object1[symb1] = "symbolValueForFoo";
var obj2 = shallowCopyOfEnumerableOwnProperties(object1);
console.log(obj2);
console.log(object1);
object1.b.c = 9;
console.log(obj2.b.c); // 9 not 3

// shallow copy: using Object.getOwnPropertyNames()
function shallowCopyOfOwnProperties(original) {
  var copy1 = {};
  var keys = Object.getOwnPropertyNames(original);
  console.log("all the keys/props are: " + keys); // all the keys/props are: a,b,CODE
  for(var i = 0; i < keys.length; i++) {
    console.log("each key: " + keys[i]);
    copy1[keys[i]] = original[keys[i]];
  }

  return copy1;
}
var object1 = {
  a: 1,
  b: {
    c: 3
  }
};
var symb1 = Symbol("foo");
object1[symb1] = "symbolValueForFoo";
Object.defineProperty(object1, "CODE", {value: "27495030", enumerable: false});
var obj2 = shallowCopyOfOwnProperties(object1);
console.log(object1); // Object { a: 1, b: {…}, Symbol(foo): "symbolValueForFoo", … }
console.log(obj2); // Object { a: 1, b: {…}, CODE: "27495030" }
console.log(object1);
object1.b.c = 14;
console.log(obj2.b.c);

//
