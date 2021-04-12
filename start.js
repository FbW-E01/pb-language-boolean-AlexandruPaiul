// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
// * Which comparison operator should we generally use? Why?
// * What would happen if we were to use `=`?

console.log("1. ", 3=="3");
// It's true because is just checking only the value

console.log("2. ", 3==="3");
// It's false because is checking first the type of value and after that the value

// generally it is recommended to use strict comparison, just because we checking the type and the value at the same type
// console.log("3. ", 3 ="3"); = > SyntaxError: Invalid left-hand side in assignment

// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
let username = "Tom"
console.log((username ==="John") ? "OK" : "not ok");
// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);


// ``` it is showing Stacey because the givenName is undefined, and the next variable has a value 