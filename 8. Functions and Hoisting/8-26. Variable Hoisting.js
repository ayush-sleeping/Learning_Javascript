/* Variable Hosting : 
Hositing : This mechanism where variables and function can be used 
before declaring them is called Hositing in Javascript. */

console.clear()

num1 = 10;
console.log(num1);
var num1;

//-------------------------------------------------------


strl = "Demo string";
console.log(strl);
var strl;

//-------------------------------------------------------
/*
The variables and function declarations are moved to the top
of their scope before code execution.
JavaScript has two steps in excuting a particular script.
step 1 : Creation.
step 2 : Execution.
 */

console.log(num2);
num2 = 20;
console.log(num2);
var num2;

//-------------------------------------------------------

console.log(strl2);
strl2 = "Demo string";
console.log(strl2);
var strl2;