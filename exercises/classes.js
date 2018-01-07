// there are no classes in JS
// JS is a class-less language
// to simulate classes in JS we can use functions
// classes are SPECIAL FUNCTIONS
// everything's an obj, so objs inherits from objs (not classes from classes)

// 3 ways to define a class

// 1. using a function to define a class: CONSTRUCTOR FUNCTIONS and then CREATE one or MORE instances of it
// the usual way
// step1. create a normal function BUT use the keyword 'this' to define properties and methods
// step2. create an object using the keyword 'new' and the above function

function Car(type, year) {   // the Car constructor function
  this.type = type;
  this.year = year;
  this.usage;
  this.getInfo = getCarInfo; // we can define these methods used in the constructor function externally or internally
} // by adding methods to the constructor func inside its body, the methods are recreated every time we create a new obj (NOT so good!)

function getCarInfo() {  //
  return 'Car: ' + this.type + ' ' + this.year + ', ' + this.usage;
}

var myObj = new Car('BMW', '2017'); // we instantiate our obj using the constructor function
myObj.usage = 'second';
myObj.getInfo(); // "Car: BMW 2017, second"

// a better way of definind your constructor function
function Car(type, year) {   // the Car constructor function with a better way of defining the methods than externally
  this.type = type;
  this.year = year;
  this.usage;
  this.getInfo = function () {  // defining methods inside the constructor function (inside the constructor function we avoid naming conflicts in the global namespace)
    return 'Car: ' + this.type + ' ' + this.year + ', ' + this.usage;
  };
}

// a MORE better way of definind your constructor function
// WHEN we don't add methods inside the body of the constructor function
// to add methods to the constr funct it's far more better to make use of it's 'prototype'
function Car(type, year) {   // no methods inside
  this.type = type;
  this.year = year;
  this.usage;
}
Car.prototype.getInfo = function () {
  return 'Car: ' + this.type + ' ' + this.year + ', ' + this.usage;
};

var myObj = new Car('Ford','2000');
myObj.getInfo(); // "Car: Ford 2000, undefined"

 // 2. another way to define a class is by using DIRECTLY the object literal notation BUT
 // BUT this way you are immediatly instantiate (like 2 in 1) and you can not create other instances
 // the created obj is called a singleton
var myObj = { // as you see, the usual obj that has props and methds
  type: "Ford",
  year: "2000",
  getInfo: function () {
    return 'Car: ' + this.type + ' ' + this.year + ', ' + this.usage;
  }
};
myObj.getInfo(); // "Car: Ford 2000, undefined"

// 3. another way is to combine the 2 methods from above
// SINGLETON + using a function
var myObj = new function() { // you define the constructor function and invoke it with 'new' + creating the SINGLE instance
  this.type = "BMW";
  this.year = "2017";
  this.usage = "SECOND";
  this.getInfo = function () {
    return 'Car: ' + this.type + ' ' + this.year + ', ' + this.usage;
  };
};
myObj.getInfo(); // "Car: BMW 2017, SECOND"


// CLASSES introduced with ES5
// class syntax
// JS classes provide a much SIMPLER and CLEARER way to create an OBJ and deal with inheritance
// classes are SPECIAL FUNCTIONS
// use the 'class' keyword + a name for your class
// USE the 'constructor' method to create and initialize an obj
class MyClass {
  constructor(year, number) { // the body is ALIKE your constructor functions from above
    this.year = year;
    this.number = number;
  }
}

// you first need to define/declare your class and then to create instances of it
// meaning: class declarations are not hoisted (UNLIKE function declarations)
var myObj = new MyClass(); // ReferenceError
class MyClass{...}

// you can NAME or UNNAME your class
var myObj1 = class Named {
  ...
}
var myObj2 = class { // NO name used
  ...
}

// the 'constructor' method of a class created with the 'class' keyword is a special method
// it creates and initializes an obj

class myClass {
  constructor(year, number) {
    this.year = year;
    this.number = number;
    this.list = [];
  }

  get Info() { // the getter (binds the prop to a function)
    return this.getInfo();
  }
  getInfo() {
    return 'What you\'ll know is just: ' + this.year + ' and ' + this.number;
  }
}

var myObj = new myClass(2010, 444);
console.log(myObj.Info); // What you'll know is just: 2010 and 444

Object.defineProperty(myObj, 'name', { set: function(currentEntry) { this.list.push(currentEntry); } });
myObj.name = "Opel"; // it's like you have a current input and you want to do smth with it (bind it to a function)...
myObj.name = "Mazda"; // you can NOT call that function or this prop
myObj.name = "Touran"; // it's like it's an intermediary?? less props and meths
console.log(myObj.list); // Array [ "Opel", "Mazda", "Touran" ]
console.log(myObj.name); // undefined
console.log(myObj.name()); // error myObj.name is not a function



class Employee { // my class
  constructor(name, age) {
    this._name = name;
    this.age = age;
    this.names;
  }
  set name(worker) { // USE the SAME prop name for the setter and getter
                    // and you'll be able to access and retrieve the status/value of this prop
                    // you will be ABLE to not only to set, make changes in your class
                    // but ALSO to retrieve them, show them with a 2 in 1 command, accessing this intermediary prop
    if(worker) {
    //  this.name = worker;
      this.names += ", " + worker; }
  }
  get name() {
    return "The names of your employees are: " + this.names;
  }
}

var myObj = new Employee('Cris Mario', "33");
console.log(myObj.name, myObj.age); // The names of your employees are: undefined 33
myObj.name = "Lupe Fontana";
myObj.name = "Anne Misha";
console.log(myObj.name, myObj.age); // The names of your employees are: undefined, Lupe Fontana, Anne Misha 33

class Category {
  constructor(name) {
    this.name = name;
    this.list = [];
  }
  set item(name) {
    this.list.push(name);
  }
  get item() {
    console.log('In your category of ' + this.name + " you have " + this.list);
  }
}
var my1Category = new Category('Fruits');
my1Category.item = 'apple';  // you just introduce a current value to this prop and the magic will do smth with it and show the result
my1Category.item = 'banana';
my1Category.item = 'orange';
console.log(my1Category.item); // In your category of Fruits you have apple,banana,orange
