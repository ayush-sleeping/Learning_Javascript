// calculate power of a number  :
// --------------------------------------------------------------------------------------------------------------::

// Basic approach - manual power calculation using loop
// ---------------------------------------------------------------------------------
const base = 2;  // Number to be multiplied
const exponent = 3;  // How many times to multiply
let result = 1;  // Start with 1 (neutral multiplication value)
for (let i = 0; i < exponent; i++) {  // Loop exponent times
    result = result * base;  // Multiply by base each time: 1*2, 2*2, 4*2 = 8
}
console.log(result);  // 2^3 = 8


// Using built-in Math.pow() method
// ---------------------------------------------------------------------------------
const num1 = 5;
const power1 = 2;
const answer = Math.pow(num1, power1);  // JavaScript's built-in power function
console.log(answer);  // 5^2 = 25


// Function approach with edge case handling
// ---------------------------------------------------------------------------------
function calculatePower(base, exponent) {
    if (exponent === 0) return 1;  // Mathematical rule: any number^0 = 1
    if (exponent === 1) return base;  // Mathematical rule: any number^1 = itself

    let result = 1;  // Initialize result
    for (let i = 0; i < exponent; i++) {  // Multiply base by itself exponent times
        result *= base;  // Short form: result = result * base
    }
    return result;  // Return final calculated power
}
console.log(calculatePower(3, 4));  // 3*3*3*3 = 81
