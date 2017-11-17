##Callback exercises

1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?
_.each([1,2,3,4], function(val,i,arr){
	console.log(val);
	});
	_.each(["Me","You","Him"], function(val,i,arr){
		console.log(val);
		});
		_.each(["Me","You","Him"], function(val,i,arr){
			console.log(i);
			});
			_.each({list: ["Me","You","Him"], loan: [10, 30, 50], username: "Mike", contact: "gdgvd@fdv"}, function(val,i,arr){
				console.log(i);
				});
				_.each({list: ["Me","You","Him"], loan: [10, 30, 50], username: "Mike", contact: "gdgvd@fdv"}, function(val,i,arr){
					console.log(val);
					});
					_.each({list: ["Me","You","Him"], loan: [10, 30, 50], username: "Mike", contact: "gdgvd@fdv"}, function(val,i,arr){
						console.log(arr);
						});
2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.
var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
	var result = "false";
	for(var i = 0; i < arr.length; i++) {
		if(val === arr[i]) {
			result = "true";
		}
	}
	return result;
}
checkValue(helloArr, 'hola');

var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
	for(var i = 0; i < arr.length; i++) {
		if(val === arr[i]) {
			return true;
		}
	}
	return false;
}
checkValue(helloArr, 'hola');



3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.
var helloArr = ['bonjour', 'hello', 'hola'];
var checkValue = function(arr, val) {
	var result = false;
	_.each(arr, function(value,i,list){
		if(val === value) {
			result = true;
		}
		});
		return result;
}		
checkValue(helloArr, "hello");
4. Write a loop that pushes all the values in an object to an array.
		var outputArr = [];
		_.each({two: 2, four: 4, three: 3, twelve: 12}, function(val,i,list){
			outputArr.push(val);
			});
			console.log(outputArr);
		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]

5. Use _.map to mimic the previous behavior.

var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, function(val,i,list){
	return val;
	});
	console.log(myNums);

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]
6. Use _.filter to return all the even numbers in an array.
_.filter([9,8,7,6,5,2], function(val) {
	return val % 2 == 0;
	});
		input: [9,8,7,6,5,2]
		output: [8,6,2]
