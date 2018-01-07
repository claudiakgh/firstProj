// hoisting is the default behaviour of JS of moving declarations to the top
// the declarations are hoisted
// be aware that only the declarations are hoisted, not the initializations
// if you declare or if you use a variable BEFORE giving it a value, you will get an error of undefined
// so, the initializations are not hoisted
// even if the declarations are hoisted, it is best to declare the variables at the beginning of EVERY scope to avoid bugs

function seeScope() {
  var testVar = "first";

  function showF() {
    console.log(testVar);
  //  var testVar = "second";
  }

  showF();
}

seeScope(); // returns 'first'

function seeScope() {
  var testVar = "first";

  function showF() {
    console.log(testVar); // now the var testVar reffers to the new inner variable bellow
    var testVar = "second";
  }

  showF();
}

seeScope(); // returns undefined since it hasn't been declared just after it was used
