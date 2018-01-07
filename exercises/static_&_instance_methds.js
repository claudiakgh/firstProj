// you may ALSO see it as an example of classical and prototypal inheritance
// let's create a constructor function in 2 ways
function myClass(prop1, prop2) {
  this.prop1 = prop1;
  this.prop2 = prop2;
  var prop3 = 'some private prop';
   this.methd1 = function() {
     return "I'm method 1";
   }
}
// OR
var myClass = function(prop1, prop2) {
  this.prop1 = prop1;
  this.prop2 = prop2;
  var prop3 = 'some private prop';
   this.methd1 = function() {
     return "I'm method 1";
   }
}

// a STATIC method
// now let's create a STATIC method
// this way is new from what it is shown in 'static_methods.js'
// this methd exists ONLY on the class
// on child objs doen't exists
myClass.methd2 = function() {
  return "I am method 2. I am a STATIC method!"
};

var myObj = new myClass('red', 'yellow');
console.log(myObj.prop2); // yellow
console.log(myObj.methd1()); // I'm method 1
console.log(myObj.methd2()); // TypeError: myObj.methd2 is not a function
                            // it is NOT callable within instances of our class

// you may call it an instance methd because all instances will have/inherit/can access this method
// 'prototype' is used to add/extend properties and methods on a class obj
myClass.prototype.methd3 = function() {
  return 'I am methd 3, created with the "prototype" property. I am NOT a STATIC methd.'
};
console.log(myObj.methd3()); // I am methd 3, created with the "prototype" property. I am NOT a STATIC methd.
