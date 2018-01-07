// we have INTERNAL [[Prototype]] and EXTERNAL prototype
// all objs have an internal property called [[Prototype]]
// its value is either NULL or an OBJ
// you use it if you want to implement INHERITANCE

// the external 'prototype' prop is specific to FUNCTION objs
// use it to initialize the [[Prototype]] after you created a copy/instance with the 'new' keyword
// prototype is used to add/extend properties and methods on a class obj
// anything on the prototype is only in memory once
// use it IF you want to affect all copies/instances of your CLASS
// all your copies will then inherit the methds and props you put in the prototype
// the class-based object:
function Player() {
  this.name;
  this.hitpoints = 100;
  this.attack = function attack(opponent) {
    opponent.hitpoints -= 10;
  }
}
var p1 = new Player(); // these are separate Player instances
var p2 = new Player();

p1.name = "Mark";
p2.name = "Joe";

p1.attack(p2);
console.log("Player1: " + p1.name + " has " + p1.hitpoints + " hitpoints"); // Player1: Mark has 100 hitpoints
console.log("Player2: " + p2.name + " has " + p2.hitpoints + " hitpoints"); // Player2: Joe has 90 hitpoints

Player.prototype.energy = 200;
console.log(p1.energy); // 200
Player.prototype.heal = function heal(targetPlayer) {
  targetPlayer.hitpoints += 5;
}
console.log(p2.hitpoints); // 90
p1.heal(p2);
console.log(p2.hitpoints); // 95

p1.heal(p1);
console.log(p1.hitpoints); // 105
