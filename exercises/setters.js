// the 'set syntax'
// binds a property and a function; this func will be calld if the prop is about to be changed
// { set prop(val) { . . . } }
// it appears in an obj literal
// ONLY one get and one set you can attach to this obj literal
// a setter executes a function when the specified property is attempted to be changed
// setters are often used with getters

var myObj = {
  set current(answer) {  // NOTE: current is a property! this prop is bound to the function
    this.log.push(answer);
  },
  log: []
};
myObj.current = "YES";
console.log(myObj.log); // Array [ "YES" ]
myObj.current = "No";
console.log(myObj.log); // Array [ "YES", "No" ]

var myGuestList = {
  set current(guest) { // ONLY ONE parameter can/must take (error if you try for ex.: name, firstname etc)
    this.list.push(guest);
  },
  list: []
};
myGuestList.current = "Mike Bolt"; // NOTE: current is a property!
myGuestList.current = "Flo Ernst";
myGuestList.current = "Anne Misha";
console.log(myGuestList.list); // Array [ "Mike Bolt", "Mike Bolt", "Flo Ernst", "Anne Misha" ]

// if you want to add LATER a setter to an obj
// you will need Object.defineProperty()
var myGuestList = {
  number: 0,
  type: 'ChristmasList',
  list: []
};
Object.defineProperty(myGuestList, 'current', { set: function(guest) { this.list.push(guest); this.number += 1; }});
myGuestList.current = "Marry Pop";
myGuestList.current = "Clark Len";
console.log(myGuestList.list); // Array [ "Marry Pop", "Clark Len" ]
console.log(myGuestList.number); // 2
