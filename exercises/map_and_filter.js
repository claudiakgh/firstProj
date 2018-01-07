// map method with a callback function -- good in Asyncronous Programming
// map() returns a new array based on the callback function,
// each returned element in the array is a result of the callback funct
/*
var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
*/
// map does not mutate the array on which it is called (but callback may do so)

function getStockSymbols(arr) {
  return arr.map(function(val) {
    return val.symbol;
  });
}

var symbols = getStockSymbols([
  { symbol: "ANKH", price: 24 },
  { symbol: "DGFR", price: 24 },
  { symbol: "BRSD", price: 24 },
  { symbol: "GRGG", price: 24 },
]);
console.log(symbols); // Array [ "ANKH", "DGFR", "BRSD", "GRGG" ]
console.log(JSON.stringify(symbols)); // ["ANKH","DGFR","BRSD","GRGG"]

// filter method
// creates a new array with all the elements that pass the test in the callback function
// the callback funct is a predicate -> from this we can obtain a true or a false statement

function getExpensiveStocks(arr,minPrice) {
  return arr.filter(function(item) {
    return item.price > minPrice;
  });
}

var expensiveStocks = getExpensiveStocks([
  { symbol: "FAF", price: 52345 },
  { symbol: "HHG", price: 255 },
  { symbol: "JHY", price: 34646 },
  { symbol: "AWS", price: 557 },
], 500);

console.log(JSON.stringify(expensiveStocks)); // [{"symbol":"FAF","price":52345},{"symbol":"JHY","price":34646},{"symbol":"AWS","price":557}]
console.log(expensiveStocks);

// chaining array map and filter

var stocks = [
  { symbol: "ANKH", price: 24 },
  { symbol: "DGFR", price: 45 },
  { symbol: "BRSD", price: 23 },
  { symbol: "GRGG", price: 3 },
];
var selectedStocks =
  stocks.
    filter(function(stock) {
      return stock.price > 10;
    }).
    map(function(stock) {
      return stock.symbol;
    });

  console.log(selectedStocks); // Array [ "ANKH", "DGFR", "BRSD" ]
  selectedStocks.forEach(function(val) {
    console.log(val);
  });

// flat arrays and nested arrays

  var arr = [
    [{ name: "Mike A", age: 20, gender: "M" }, { name: "Criss Q", age: 14, gender: "F" }, { name: "Jon W", age: 35, gender: "M" }],
    [{ name: "Lian L", age: 15, gender: "M" }, { name: "Anne Z", age: 22, gender: "F" }, { name: "Francis M", age: 55, gender: "M" }],
    [{ name: "Zoltan X", age: 40, gender: "M" }, { name: "Lian A", age: 30, gender: "F" }, { name: "Jonny H", age: 45, gender: "M" }]
  ];

// selecting, returning all the names into a flat arr
var allNames =  [];
arr.forEach(function(val) {
    val.forEach(function(item) {
      allNames.push(item.name);
    });
  });
  console.log(JSON.stringify(allNames)); // ["Mike A","Criss Q","Jon W","Lian L","Anne Z","Francis M","Zoltan X","Lian A","Jonny H"]

// selecting, returning all males into a flat arr
// why map and not foreach? map returns smth, foreach does not; map does not alter the array, foreach does that
  var allMales = arr.map(function(item) {
    return item.
      filter(function(val) {
        return val.gender === "M";
      }).
      map(function(val) {
        return val.name;
      });
  });
  console.log(JSON.stringify(allMales)); // [["Mike A","Jon W"],["Lian L","Francis M"],["Zoltan X","Jonny H"]]
  var allNamesMale = [];
  allMales.forEach(function(val) {
      val.forEach(function(item) {
        allNamesMale.push(item);
      });
    });

  console.log(JSON.stringify(allNamesMale)); // ["Mike A","Jon W","Lian L","Francis M","Zoltan X","Jonny H"]
