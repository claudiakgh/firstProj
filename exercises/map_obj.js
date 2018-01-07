// the Map object holds key-value pairs
// new Map([iterable])
// iterates its elements in insertion order (this is random, not ordered)
// Maps are similar to Objects
// Maps may perform better when you have to add or remove key-value pairs frequently
// it can be directly iterated
// you can get easily the size of a Map with the 'size' property (you can't do that for Objects)
// when you name the keys of a Map you don't have restrictions as you do for Objects

var myMap = new Map();
var keyString = 'some str',
    keyObj = {},
    keyFunct = function() {};

// the set() method of a Map object is used to add/update an element
// you have to specify a key and a value for the function set()
// myMap.set(key, value);

myMap.set(keyString, 'we are adding a value for this str key');
myMap.set(keyObj, "we are adding a value for this obj key");
myMap.set(keyFunct, 'we are adding a value for this funct key');
myMap.set(keyFunct, 'we are updating now the value for this funct key');
myMap.size; // 3

myMap.set('age', 32)
     .set('gender','F')
     .set('city','LA');

// the get() method of a Map object is used to get the value of the specified key
// returns the element associated with the specified key
// myMap.get(key);

myMap.get('name'); // undefined

myMap.get('some str'); // "we are adding a value for this str key"
myMap.get({}); // undefined  -> keyObj !== {}

console.log(myMap); /* Map {
  "some str" → "we are adding a value for this str key",
  {} → "we are adding a value for this obj key",
   keyFunct() → "we are updating now the value for this funct key",
   age → 32,
   gender → "F",
   city → "LA"
 } */
console.log(JSON.stringify(myMap)); // doesn't work

// iterating Map objs with for..of
var myMap = new Map();
myMap.set(0,"apple");
myMap.set(1,"orange");
myMap.set(2,"banana");

for(var [key, value] of myMap) {
  console.log(key + ' -> ' + value);
}
/*
0 -> apple
1 -> orange
2 -> banana
*/

var myMap = new Map();
myMap.set("name","Lulu");
myMap.set("age","32");
myMap.set("gender","M");

for(var [key, value] of myMap) {
  console.log(key + ' => ' + value);
}
/*
name => Lulu
age => 32
gender => M
*/

for(var key of myMap.keys()) {
  console.log(key);
}
/*
name
age
gender
*/

for(var value of myMap.values()) {
  console.log(value);
}
/*
Lulu
32
M
*/

for(var [key, value] of myMap.entries()) { // for(var [key, value] of myMap) {
  console.log(key + " : " + value);
}
/*
name : Lulu
age : 32
gender : M
*/

// iterating Map objs with forEach
var myMap = new Map();
myMap.set("Helen", "Grigson");
myMap.set("Mark","Twein");
myMap.set("Cris","Lurnes");

myMap.forEach(function(key, value) { // NOTE that is should be here myMap.forEach(function(value, key) { ==> this will show diff results
  console.log(key + " " + value);
});
/*
Grigson Helen
Twein Mark
Lurnes Cris
*/

// transform 2D Array objs into Map obj
var myArr = [["Helen", "Grigson"], ["Mark","Twein"], ["Cris","Lurnes"]];
var myMap = new Map(myArr);
console.log(myMap); // Map { Helen → "Grigson", Mark → "Twein", Cris → "Lurnes" }
myMap.forEach(function(value, key) {
  console.log(key + ' ' + value);
});
/*
Helen Grigson
Mark Twein
Cris Lurnes
*/
myMap.get("Helen"); // "Grigson"
myMap.set("Mark","Second"); // nOTE: this will UPDATE the existing property and not add another one 
console.log(myMap); // Map { Helen → "Grigson", Mark → "Second", Cris → "Lurnes" }
