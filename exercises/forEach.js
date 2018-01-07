// forEach method with callback funct -- good in Asyncronous Programming
// forEach will return undefined and is not chainable
// forEach may or may not mutate the array on which it is called, depends on the callback funct
// does not return a new array

function getStockSymbols(stocks) {
  var symbols = [];
  stocks.forEach(function(val,index) {
    if(index == 2){
      symbols.push(val.symbol);
    }
  });
//  console.log(JSON.stringify(stocks));
  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "MSH", price: 203, volume: 2833 },
  { symbol: "HDB", price: 34, volume: 567 },
  { symbol: "AWS", price: 236, volume: 2345 }
]);

console.log(JSON.stringify(symbols)); // ["AWS"]
