// the 'super' keyword
// to access and call functions on an object's parent
// when used in a constructor, 'super' appears alone and must be used before the 'this' keyword is used
// super.functionOnParent([arguments]);
// super.prop or super[expr]

// let's create a class and a subclass
class myClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
  methd1() {
    return 'I\'m a method in this class';
  }
}

class subClass extends myClass {
  constructor(prop3) { // USE 'super' inside the constructor methd
    this.mass = 88; // error
    super(prop1, prop2);
    ths.prop3 = prop3;
  }

  methd2() {
    return "I'm a methd in a subclass, using props from the parent: " + this.prop1 + ', ' + this.prop2;
  }
}

var myObj = new subClass('30');
console.log(myObj.methd2());
