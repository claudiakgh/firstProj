// Symbols do NOT show up on an Object using for...in, for of or Object.getOwnPropertyNames
// the only way to get the Symbols within an Object is Object.getOwnPropertySymbols:
var object1 = {
  a: 1,
  b: {
    c: 3
  }
};
var symb1 = Symbol("foo");
object1[symb1] = "symbolValueForFoo11";
var symb2 = Symbol("foo2");
object1[symb2] = "symbolValueForFoo22";
console.log(Object.getOwnPropertySymbols(object1));


function shallowCopyOfOwnProperties(original) {
  var copy1 = {};
  var keys = Object.getOwnPropertyNames(original);
//  console.log("all the keys/props are: " + keys);
  for(var i = 0; i < keys.length; i++) {
    console.log("all the keys/props are: " + keys[i]);
    copy1[keys[i]] = original[keys[i]];
  }

  return copy1;
}

var obj2 = shallowCopyOfOwnProperties(object1);
console.log(object1);
console.log(obj2);
