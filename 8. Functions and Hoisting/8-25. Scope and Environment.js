// Scope and Environments _
/* Scope : The Scope defines the part of the program where a variable or
a function is visible/accessbile. */
console.clear()

//-------------------------------------------------------

/*The variables defines outside all the functions and blocks are 
available throughout the code. These are called Global Variables. */

var num1 = 10; // num1 is a Global variable
function sum(num2) {
    var total = num1 + num2; //total is a Local Variable
    console.log(total);
}
console.log(num1)

//-------------------------------------------------------

var num3 = 10;
console.log(num3)

function sum(num4){
    console.log(num3 + num4)
}
sum(20)

//-------------------------------------------------------

var num5 = 10;
console.log(num5)

function sum(num6){
    var total = num5 + num6;
    console.log(total)
}
sum(30)

//-------------------------------------------------------

var num7 = 10;

function sum(num8){
    var total = 0;
    console.log(total);
    total = num7 + num8;
    console.log(total);
}
sum(30)

//-------------------------------------------------------

