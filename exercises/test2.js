var products = Array.from(document.querySelectorAll(".product"));
products
  .filter(product => parseInt(product.innerHTML) < 2)
  .forEach(product => product.style.color = "red");
console.log(products);


/*var products = [1, 5, 6, 9];
products
  .filter(product => parseFloat(product.innerHTML) < 5)
  .forEach(product => product.style.color = "red");
console.log(products); */

var products2 = ["$0.98 cream $3", "$10 cucumber, 2LB", "$0.5 turkey souce, 4kg"];
var myreg = function (item, index, arr) {
  console.log(parseInt(item.match(/[0-9]+/)));
};
products2.forEach(myreg);
var resultFilt = products2.filter(product => parseInt(product.match(/[0-9]+/)) < 5);
console.log(resultFilt);

// the Promise object
var myPromise = new Promise(function(resolve, reject) {
  //do something

  var doSomething = false; //perhaps it's done or not
  if(doSomething) {
    console.log("It's done");
    resolve("Mission accomplished")
  } else {
    console.log("NOT done");
    reject("Failed mission");
  }
});
console.log(myPromise);

myPromise.then(function(fromResolve) {
  console.log("Finished, " + fromResolve);
}).catch(function() {
  console.log("Some error in doing smth");
});

//
var taskToDo1 = function() {
  return new Promise(function(resolve, reject) {
    resolve("Task 1 completed");
  });
};
var taskToDo2 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message+ " Task 2 completed");
  });
};
var taskToDo3 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " Task 3 completed");
  });
};
taskToDo1().then(function(result) {
  return taskToDo2(result);
}).then(function(result) {
  return taskToDo3(result);
}).then(function(result) {
  console.log("All 3 tasks are done" + result);
});

Promise.all([taskToDo1(),taskToDo2(),taskToDo3()]).then(function() {
  console.log("all 3 tasks done in parallel");
});
Promise.race([taskToDo1(),taskToDo2(),taskToDo3()]).then(function() {
  console.log("one of the 3 tasks is already done");
});
//
var resolvedProm = Promise.resolve(33);
var thenProm = resolvedProm.then(function(value){
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
   return value;
});
console.log(thenProm);

// generator functions, yield and next()
function* countApple() {
  var saleList = [3, 6, 1];
  for(var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
var appleStore = countApple();
//console.log(appleStore);
console.log(appleStore.next());
console.log(appleStore.next());
console.log(appleStore.next());
console.log(appleStore.next());

function* greet() {
  console.log("You called 'next()'");
}

greet();
console.log(greet().next());
console.log(greet().next().value);

// maps
var myMap = new Map();
//API
/*
set()
get()
size
has()
clear()
*/
myMap.set("friend","John");
myMap.set("brother","Mike");

console.log(myMap.get("friend"));
console.log(myMap.size);
// console.log(myMap.clear());
console.log(myMap.has("brother"));

//Iterators
/*
keys()
entries()
values()
*/
for(var key of myMap.keys()) {
  console.log(key);
}
for(var value of myMap.values()) {
  console.log(value);
}
for(var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}

 var newDiv = document.createElement("div");
 var newContent = document.createTextNode("Just me");
 newDiv.appendChild(newContent);
 document.body.appendChild(newDiv);

 // convert an obj or an array into a JSON string
 // null means all properties/keys are passes/returned
 // 2 means how many whitespaces are used between the key/value list in string
 JSON.stringify({ type, url, data, success, error, isAsync }, null, 2))

 var myObj = {
   name: "Mike",
   address: "L.A.",
   tel: "125654 254",
   parents: ["Jon", "Jenna"]
 };
 //console.log(JSON.stringify(myObj));
 console.log(JSON.stringify(myObj,null,9));

var toBeSent = {
  type: "get",
  url: "http://hgiuhnroglj",
  data: {name: "Mike", position: "JD"},
  success: () => {console.log("You did it");},
  error: () => { console.log("Not passed man");},
  isAsync: true
};
function ajax(toBeSent = {}) {
  console.log(JSON.stringify(toBeSent),null,2);
}
console.log();
ajax({
  url: "http://later",
  success: () => { console.log("Hmmm later");}
});

//

function ajax({
  type = "get",
  url = "http://hgiuhnroglj",
  data = {name: "Mike", position: "JD"},
  success = () => { console.log("You did it");},
  error = () => { console.log("Not passed man");},
  isAsync = true
} = {}) {
  console.log(JSON.stringify({type, url, data, success, error, isAsync}),null,3);
//  console.log(JSON.stringify({type}),["data","isAsync"],3);
  //console.log(JSON.stringify({type}));
}
console.log();
ajax({
  url: "http://later",
  success: () => { console.log("Hmmm later");}
});


//
function ajax({
  type = "",
  url = requiredParam("url"),
  data = {},
  success = () => {},
  error = () => {},
  isAsync = true
} = {}) {
  console.log(JSON.stringify({type, url, data, success, error, isAsync}),null,3);
//  console.log(JSON.stringify({type}),["data","isAsync"],3);
  //console.log(JSON.stringify({type}));
}

function requiredParam(name) {
  throw new Error(`Missing parameter "${name}"`);
}

try {
  ajax({});
} catch (e) {console.warn(e.message);}

console.log();

ajax({
  url: "http://later",
  success: () => { console.log("Hmmm later");}
});

// the error constructor creates an error object
var e = new Error("I'm setting and overwritting the message property that until now it was empty");
// e.message = "I'm setting and overwritting the message property that until now it was empty";
// var e = new Error("Could not parse input");
// e.message = "Could not parse input";
throw e;

try {
  throw new Error("Another error message set by me");
} catch(e) {
  console.log(e.name + " : " + e.message);
}

// the rest parameter syntax !! the LAST argument has to have the "..." prefix in order to be a rest parameter syntax
//

function f(...[a, b, c]) {
  return a + b + c;
}

function f(a, b, c) {
  return a + b + c;
}

f(1);
f(1, 2, 3);
f(1, 2, 3, 4);

function fun1(...theArgs) {
  console.log(theArgs.length);
}
function fun1(theArgs) {
  console.log(arguments.length);
}

fun1(1, 2, 3, 4);
fun1(5,4);
function myFunct() {
  console.log(arguments);
}
myFunct(6,8,9,6);

//
function exmp(arg1, arg2, arg3) {
  console.log(arguments["2"]);
  console.log(arguments["0"]);
}
exmp(7,9,3);

function addEntry(squirrel) {
  var entry = {
    events: [],
    squirrel: squirrel
  };

  for(var i = 1; i < arguments.length; i++) {
    entry.events.push(arguments[i]);
  }

  journal.push(entry);
}
addEntry(true,"work","pizza","running","tv");

// exercises eloquentjavascript
var myFunc = function(start, end) {
  var arr = [];
  var range = end - start;
  for(var i = 0; i <= range; i++) {
    //arr[i] = start++;
   arr.push(start);
    start++;
  }
  console.log(arr);
}

myFunc(5,10);

//
var range = function(start, end) {
  var arr = [];
  while(start <= end) {
   arr.push(start);
    start++;
  }
  return arr;
}

range(1,10);

var sum = function(arr) {
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
sum(range(1,10));

//
var range = function(start, end, step) {
  var arr = [];
  if(step != undefined && step >= 0) {
    while(start <= end) {
     arr.push(start);
      start += step;
    }
  }
  else if(step != undefined && step < 0) {
    while(start >= end) {
     arr.push(start);
      start += step;
    }
  }
  else {
    if(start < end) {
      while(start <= end) {
       arr.push(start);
        start++;
      }
    }
    else {
      while(start >= end) {
       arr.push(start);
        start--;
      }
    }
  }
  return arr;
}

range(5,2,-1);
range(1,10,2);
range(1,10);
range(5,2);
var sum = function(arr) {
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
sum(range(1,10));

//
var reverseArray = function(arr) {
  var reversedArr = [];
  reversedArr = arr.reverse();
  return reversedArr;
}
reverseArray([1,2,3]);

//
var reverseArray = function(arr) {
  var reversedArr = [];

  for(var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
reverseArray([1,2,3]);
var ex1 = [3,4,5];
reverseArray(ex1);
console.log(ex1);

var reverseArrayInPlace = function(arr) {
  var reversedArr = [];

  for(var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  for(var i = 0; i < arr.length; i++) {
    arr[i] = reversedArr[i];
  //  arr.push(reversedArr[i]);
  }
  return arr;
}
var ex2 = [6,8,10];
reverseArrayInPlace(ex2);

//
var reverseArrayInPlace = function(arr) {
  var interm;
  for(var i = 0; i < Math.floor(arr.length/2); i++) {
    interm = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = interm;
  }
  return arr;
}
var ex2 = [6,8,10];
reverseArrayInPlace(ex2);

//

var arrayToList = function(arr) {
  return {
    value: arr[0],
    rest: {
      value: arr[1],
      rest: {
        value: arr[2],
        rest: null
      }
    }
  }
};
arrayToList([1,2,3]);
JSON.stringify(arrayToList([1,2,3]), null, 2);

//
var arrayToList = function(arr) {
  var list = {
    value: arr[arr.length-1],
    rest: null
  };
  for(var i = arr.length-2; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}
//arrayToList([10,20]);
//arrayToList([1,2,3]);
JSON.stringify(arrayToList([10,20]), null, 2);

var listToArray = function(list) {
  var arr = [];
  for(var node = list; node; node = node.rest) {
    if(node.value != undefined) {
      arr.push(node.value);
    }

  }
  return arr;
}
listToArray(arrayToList([1,2,3]));

var prepend = function(el, list) {
  return {
    value: el,
    rest: list
  }
}
prepend(4,(arrayToList([1,2,3])));

JSON.stringify(prepend(4,(arrayToList([1,2,3]))), null, 2);
console.log(prepend(10, prepend(20, null)));
JSON.stringify(prepend(10, prepend(20, null)), null, 2);

var nth = function(list, nr) {
  var node = list;
  for(var i = 0; i <= nr; i++) {
    if(i != nr && node.rest != null) {
      node = node.rest;
    }
    else if(i == nr){
      return node.value;
    }
    else {
      return undefined;
    }
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1));

// NOT good, not succeeded
var deepEqual = function(val1, val2) {
  if(val1 === val2) {
    return true;
  }
  else if((typeof val1 === "object" && val1 != null) && (typeof val2 === "object" && val2 != null)) {
    var count1 = 0;
    var count2 = 0;
    for(var key1 in val1) {
      count1++;
    }
    for(var key2 in val2) {
      count2++;
    }
    console.log("Val1 has " + count1 + " properties");
    console.log("Val2 has " + count2 + " properties");
    if(count1 != count2) {
      return false;
    }
    else if(count1 == count2) {
/*      for(var key1 in val1) {
          for(var key2 in val2) { // not good...
            if(key1 in val2) {
            deepEqual(key1,key2);
            } else {
              return false;
            }
          }
      } */
      var a = Object.keys(val1).sort();
      var b = Object.keys(val2).sort();

      var c = Object.values(val1).sort();
      var d = Object.values(val2).sort();
      if(JSON.stringify(a) === JSON.stringify(b)){
        console.log(JSON.stringify(a));
        console.log(JSON.stringify(b));
        console.log(JSON.stringify(c));
        console.log(JSON.stringify(d));
      }
      else {
        return false;
      }
    }
  }
  else {
    return false;
  }
}

var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {red: "red", here: 1, object: 2}));

// ex of class creation but OLD maybe or not preffered
// class/constructor with function
//baseClass
function exampleClass() {
  this.age = age;
  this.prop2 = prop2;
  this.method1 = function someFunc() {
    //returns smth
  }
}
var instance1 = new exampleClass();

// subClass/subConstructor with function and call() method inside the subClass + set the prototype and the cunstructor properties of the child
function exampleClassChild() {
  exampleClass.call(this); //to make it a subClass of the above baseClass

  this.addr = addr;
  this.pet = pet;
  this.method1 = function() {
    //do smth
  }
}

exampleClassChild.prototype = Oject.create(exampleClass.prototype);
exampleClassChild.prototype.constructor = exampleClassChild;

//class = constructor in JS
// ex of class creation with ECMA6 -- just the class seems to be changed, the instantiation and calling the methods of the class did not changed
//make 1st letter capital for classes/constructors
class exampleClass {
  constructor(name) {
    this.name = name;
    //other properties
  }
  method1() {
    //return or do smth
    return this.name + " Just returned";
  }
}

var instance1 = new exampleClass("Grig");
instance1.method1();

// make subClasses/subConstructors -> using extends... and inheritance of course

class childClass extends exampleClass {
  constructor(arg1, arg2) {
    super(arg1);
    this.prop2 = arg2;
    this.prop3;
  }
  methodChild() {
    return super.method1() + " and now the child can go too. He got $" + this.prop2;
  }
}

var aSubclass = new childClass("Mark",20);
aSubclass.methodChild();
