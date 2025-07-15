"use strict"; // treat all JS code as newer version 

// alert( 3 + 3  ) // we are using nodejs, not browser

console.log(3 
    + 3)  // code readability should be priority

console.log("Ayush")


// Declare variables of different data types
let name = "Ayush"; // string datatype 
let age = 20; // number type 
let isLoggedIn = false; // boolean data type - true or false
let car = null; // null type, it means there is no value assigned to this variable
let state; //  undefined type , if any variable declared but not initialized with any value then it will have 'undefined'
let obj = {name: 'ayush', age : 21}; // object data type , contains key value pairs
let symbolExample = Symbol("A unique symbol"); //  symbol data type, used when you want a private variable in an object

// Log the variable types to the console
console.log(typeof undefined); // returns 'undefined' which is a special keyword
console.log(typeof null); //  returns 'object' but why ? because js treats null as an object  
                         // in some cases and in other cases as a special keyword

// Log the values of the variables to the console
console.log(name); // returns 'Ayush'
console.log(age); // returns 20
console.log(isLoggedIn); // returns false
console.log(car); // returns null
console.log(state); // returns undefined
console.log(obj); // returns {name: 'ayush', age : 21}
console.log(symbolExample); // returns a unique symbol