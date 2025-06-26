// Difference between var, let, and const in JavaScript :
// 1. Scope
//    - var: function-scoped or globally scoped
//    - let: block-scoped
//    - const: block-scoped
// 2. Hoisting
//    - var: hoisted and initialized with undefined
//    - let: hoisted but not initialized
//    - const: hoisted but not initialized
// 3. Reassignment
//    - var: can be reassigned
//    - let: can be reassigned
//    - const: cannot be reassigned (but can mutate objects/arrays)
// 4. Redeclaration
//    - var: can be redeclared
//    - let: cannot be redeclared in the same scope
//    - const: cannot be redeclared in the same scope
// 5. Initialization
//    - var: can be declared without initialization
//    - let: must be declared before use, cannot be initialized without declaration
//    - const: must be initialized at the time of declaration
// *. Also var can add itself to the global object (window in browsers), while let and const do not.


// ----------------------------------------------------------


// using var
var x = 10;
if (true) {
    var x = 20; // update x
}
console.log(x); // 20, because var is function-scoped or globally scoped

// using let
let y = 10;
if (true) {
    let y = 20; // new y in this block
}
console.log(y);  // 10, because let is block-scoped

// using const
const z = 10;
if (true) {
    const z = 20; // new z in this block
}
console.log(z);  // 10, because const is block-scoped


// ----------------------------------------------------------


// Example of hoisting
console.log(a); // undefined, because var is hoisted and initialized with undefined
var a = 5;

/*
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10; // let is hoisted but not initialized

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15; // const is hoisted but not initialized
*/


// ----------------------------------------------------------


// Example of reassignment

var d = 11;
d = 13; // can be reassigned
console.log(d); // 13

let e = 11;
e = 13; // can be reassigned
console.log(e); // 13

const f = 11;
// f = 13; // TypeError: Assignment to constant variable.


// ----------------------------------------------------------


// Example of redeclaration
var g = 17;
var g = 19; // can be redeclared
console.log(g); // 19

// let h = 17;
// let h = 19; // SyntaxError: Identifier 'h' has already been declared

// const i = 17;
// const i = 19; // SyntaxError: Identifier 'i' has already been declared


// ----------------------------------------------------------


/*
JS mainly have two versions, that is ES5 and ES6.
ES5 is the old version of JavaScript, which uses var for variable declaration.
ES6 is the new version of JavaScript, which uses let and const for variable declaration.
*/


// Example of var, let, and const in a function scope :
function example() {
    var m = 1;
    let n = 2;
    const o = 3;

    if (true) {
        var m = 4; // redeclaring m
        let n = 5; // new n
        const o = 6; // new o
        console.log(m); // 4
        console.log(n); // 5
        console.log(o); // 6
    }

    console.log(m); // 4
    console.log(n); // 2
    console.log(o); // 3
}

example();
// In this example, m is redeclared using var, so it updates the value to 4.
// n and o are block-scoped, so they remain unchanged outside the if block.


function abcd(){
    for(var i = 1; i < 12; i++){
        console.log(i); // prints 1 to 11
    }
    console.log(i); // prints 12, because var is function-scoped or globally scoped
}
abcd(); // output: 1 to 11 and then 12


function abcd2(){
    for(let i = 1; i < 12; i++){
        console.log(i); // prints 1 to 11
    }
    //console.log(i); // ReferenceError: i is not defined
}
abcd2(); // output: 1 to 11 and then ReferenceError


function abcd3(){
    for(const i = 1; i < 12; i++){
        console.log(i); // prints 1 to 11
    }
    //console.log(i); // TypeError: Assignment to constant variable.
}
// abcd3(); // output: 1 to 11 and then TypeError
