// ES6 modules
// there's no 'module' keyword
// but there are module systems
// a module is a file containing JS code
// a module contains code that is not a script but it reads like a script
// all the declarations will be scoped to that module, so the declarations will not be globally visible across all the modules and scripts
// we can use 'import' and 'export' in a module
// the code in a module is in a strict-mode
// the code in a module is local to the module
// to make public some code (vars, lets, functions, classes etc.) to other modules to be able to use it, we have to use the 'export' keyword
// there are named exports(that means we can make several exports per module) and default exports (than means only one export per module)
export function mX() {
  ...
}
export class Y {
  ...
}

function notPublic() { // this isn't exported
  ...
}

// OR we can export a list of them
export {mX, Y};
// or
export {
  mX as myFunc,
  Y as myClass,
  Y as myClassDefault // we can export a part of a module more that one and use different names for it
};

import {myFunc} from "myFirstModule.js";
function someFunct() {
  var someVar = myFunct(); // here we use what we have just imported
  ...
}

import {myFunc, myClass, myClassDefault} from "myFirstModule.js";
import {myClass as myClassNo1} from "myFirstModule.js"; // we can use/rename what we import

// what implies 'export default' ???
// what means a default export?
// they are popular in Node.js
// when a module export a SINGLE value (var, let, const, function, class etc.)
export {mX as default};
import mX from "myFirstModule.js"; // let us not having to use {} when we import ...
export default function() { // it often doesn't have a name the exported value with default but when imported we use the MODULE'S NAME
  ...
};
import myFirstModule from "myFirstModule";

// export-from statements
// import "myFirstModule" module and export ALL of its exports
export * from "myFirstModule";
// import "myFirstModule" and export / re-export SOME of its exports (myFunc, myClass)
export {myFunc, myClass} from "myFirstModule";

// module loading
// you should use a tool like 'webpack' when importing lots of modules to have them into a single file and save time
// webpack can detect errors at compile time (like links between modules)
// if you don't use webpack or a compiler then if anything fails to load or link, your app won't run, nothing runs and no error is recovered
// you can't use 'import' in a try/catch block for errors
// make use of the loader API to break the rules for how modules work
// compilers: Traceur, Babel, webpack needed if you want to use modules
// https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
