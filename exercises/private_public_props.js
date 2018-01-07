// let's create a constructor function

function myClass(name, gender) {
  // public properties
  this.name = name;
  this.gender = gender;

  // private properties
  var age = '41';

  // public methods
  this.someFunct1 = function() {
    return 'The only INFO you can get is: ' + this.name + ', ' + this.gender;
  };
/* NOTE: we can't define like this the meths in a constr funct (as when we did for the classes created with the 'class' keyword)
  someFunc2() {
    return 'SAME and ONLY INFO you can get: ' + this.name + this.gender;
  }
  */
  this.someFunct3 = function() {
    return 'Let\'s try to access our private property: ' + age;
  };
}

var myObj = new myClass('Mary','Female');
console.log(myObj.name); // Mary
console.log(myObj.age); // undefined
console.log(myObj.someFunct1()); // The only INFO you can get is: Mary, Female
console.log(myObj.someFunct3()); // Let's try to access our private property: 41
                                 // we were ABLE to use the private prop internally
console.log(myObj.age); // undefined
