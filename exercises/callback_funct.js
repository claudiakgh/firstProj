//callback functions-> when u wanna use/call in your functions, functions from some libraries, or another funct defined by u
//as exmaple, arr.sort(compareFunction) -- Specify a function that defines the sort order.
var myArr = [
  {
    num: 5,
    name: "apple"
  },
  {
    num: 6,
    name: "orange"
  },
  {
    num: 1,
    name: "banana"
  },

];
// the sort() method sorts the elements of the array, in place, and returns the same array but sorted
// it is better to provide a callback funct becauze the default sort() sorts according to string Unicode code, so it's not what you want
/*
    var notes = [1, 10, 21, 2];
    notes.sort(); // Array [ 1, 10, 2, 21 ]
*/
//  arr.sort(compareFunction) -- Specify a function that defines the sort order.
myArr.sort(function(a,b) {
  if(a.num < b.num) {
    return -1;
  } else {
    return 1;
  }
});
console.log(myArr);
console.log(JSON.stringify(myArr)); // [{"num":1,"name":"banana"},{"num":5,"name":"apple"},{"num":6,"name":"orange"}]

myArr.sort(function(a,b) {
  if(a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log(JSON.stringify(myArr)); // [{"num":5,"name":"apple"},{"num":1,"name":"banana"},{"num":6,"name":"orange"}]
console.log(JSON.stringify(myArr,null,2));
