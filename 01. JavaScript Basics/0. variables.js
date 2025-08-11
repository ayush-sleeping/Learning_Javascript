// Three ways to define variables in JavaScript ::
// 1. var
var name = "John"; // can be re-declared and updated
console.log(name);
// Not recommended for modern JavaScript due to its function scope and hoisting behavior


// 2. let
let age = 22; // can be updated but not re-declared in the same scope
console.log(age);
// Recommended for block scope variables, preventing issues with variable hoisting


// 3. const
const pi = 3.14; // cannot be updated or re-declared
console.log(pi);
// Recommended for constants, ensuring values remain unchanged throughout the code


console.log("---------------------------- ::");

// var (Can be updated) example :
var score = 10;
console.log("Initial Score: ", score);
var score = 27;
console.log("After re-declaration: ", score);

// let (Can be updated) example :
let playerLevel = 1;
console.log("Original level: ", playerLevel);
playerLevel = 3;
console.log("Updated level: ", playerLevel);

// const (cannot be updated) example :
const gameTitle = "Super Mario";
console.log("Game title: ", gameTitle);
//gameTitle = "Zelda";
//console.log("erorr");
