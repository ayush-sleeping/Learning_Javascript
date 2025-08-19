// Calculate factorial using recursion  :
// --------------------------------------------------------------------------------------------------------------::

/*
problem asking?
- Given a number n, calculate its factorial (n!) using recursion.
- Factorial means: n! = n * (n-1) * (n-2) * ... * 1
- Example: 5! = 5*4*3*2*1 = 120

Approach to solve it:
- Use a function that calls itself (recursion).
- Base case: If n is 0 or 1, return 1 (because 0! = 1! = 1)
- Recursive case: n! = n * factorial(n-1)
- No built-in JS methods used, just basic function and math.

*/

function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Test cases
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(7)); // 5040
