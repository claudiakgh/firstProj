// the 'get' syntax
// binds a property and a function; the function will then be called when that prop will be looked up
// { get prop() { ... } }
// it appears in an obj literal
// ONLY one get and one set you can attach to this obj literal
// it MUST have 0 parameters as you can see above

var myChristmasList = {
  list: ['fruits',"candies","toys"],
  type: 'Christmas List',
  get latest() {
    if(this.list.length == 0) return "There's nothing yet in your list";

    return 'Your last item found in your Christmas list is: ' + this.list[this.list.length - 1];
  }
};

console.log(myChristmasList.latest); // Your last item found in your Christmas list is: toys

// let's use SET & GET togheter
var myChristmasList = {
  list: [],
  type: "Christmas List",

  set current(item) {
    this.list.push(item);
  },

  get lastItem() {
    if(this.list.length == 0) return "Your list is empty for the moment";

    return 'Your last item added to your Christmas List is: ' + this.list[this.list.length - 1];
  }

};

myChristmasList.current = "2 Chocolates";
myChristmasList.current = "1 Pair Christmas Slippers";
myChristmasList.current = "1 Perfume";
console.log(myChristmasList.list); // Array [ "2 Chocolates", "1 Pair Christmas Slippers", "1 Perfume" ]
console.log(myChristmasList.lastItem); // Your last item added to your Christmas List is: 1 Perfume

// if you want to add LATER a getter to an obj
// you will need Object.defineProperty() as we did for setter
var myChristmasList = {
  list: ["Candies","Slippers","Body Cream"]
};

Object.defineProperty(myChristmasList, 'lastItem', { get: function() { return this.list[this.list.length - 1]; } });
console.log(myChristmasList.lastItem); // Body Cream
