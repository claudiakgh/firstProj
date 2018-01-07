// static methods
// use the 'static' keyword WHEN YOU DEFINE A CLASS
// static methodName() { ... }
// they are not callable on instances
// you can have 1 or more static methods in the same class

class myClass {
  static methd1() {
    return "I am the first methd and I am a static one";
  }
  static methd2() { // INSIDE a static methd, you MUST ONLY use the 'this' keyword to be able to call another STATIC methd
    return "We are calling through methd2, for ex, the first static methd. This is what that meth returns: " + this.methd1();
  }

  // some random function
  someRandFunc() {
    return "I am callable if you call me from an instance of this class like you just did";
  }
}

myClass.methd1(); // "I am the first methd and I am a static one"
myClass.methd2(); // "We are calling through methd2, for ex,
                  // the first static methd. This is what that meth returns: I am the first methd and I am a static one"

var myObj = new myClass();
console.log(myObj.someRandFunc()); // I am callable if you call me from an instance of this class like you just did
console.log(myObj.methd1()); // TypeError: myObj.methd1 is not a function
console.log(myObj.methd2()); // TypeError: myObj.methd2 is not a function
myClass.methd1(); // "I am the first methd and I am a static one"
                  // NOTE: when you create instances of that class, the STATIC methods CAN NOT BE CALLED


// for NON-STATIC methds
// WHEN you have to USE one/more of your static methds in the other functs or in your contructor funct
// you have 2 WAYS
// call it like you'll normally call outside your class: 'name_class.YourStaticMethd();'
// call it using: 'this.constructor.YourStaticMethd()'

class myClass {
  constructor() {
    this.example = 'It\'s an example';
    this.show = function() {
      return 'I\'m a methd defined in the constructor(). I\'m appending the static funct: ' + myClass.myStaticMethd();
    }
  }
  someFunct() {
    return "I am using at the END, the static funct cause I want it to show you --> " + this.constructor.myStaticMethd();
  }

  static myStaticMethd() {
    return "I'm the static methd. I was just called!"
  }
}

var myObj2 = new myClass();
console.log(myObj2.someFunct()); // I am using at the END, the static funct cause I want it to show you --> I'm the static methd. I was just called!
console.log(myObj2.show()); // I'm a methd defined in the constructor(). I'm appending the static funct: I'm the static methd. I was just called!
console.log(myObj2.myStaticMethd()); // TypeError: myObj2.myStaticMethd is not a function

// THERE'S ONE MORE way discovered to create a STATIC method
// see 'static_&_instance_methds.js'
