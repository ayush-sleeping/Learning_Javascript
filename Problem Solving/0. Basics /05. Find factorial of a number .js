// Q. Find Factorial of a number :
// ------------------------------------------------------------------------ ::

let num = 7;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log("Factorial of", num, "is", factorial); // Output: Factorial of 7 is 5040


// ------------------------------------------------------------------------
let num2 = 7;
let factorial2 = 1;
let i = 1;
while (i <= num2) {
    factorial2 = factorial2 * i;
    i++;
}
console.log("Factorial of", num2, "is", factorial2); // Output: Factorial of 7 is 5040
