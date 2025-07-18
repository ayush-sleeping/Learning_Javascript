// check if number is prime  :
// --------------------------------------------------------------------------------------------------------------::

// Basic approach without function
// -----------------------------------------------------------------------------------
const number = 7;  // Test number
let isPrime = true;  // Flag to track if number is prime

if (number <= 1) {  // Prime numbers must be greater than 1
    isPrime = false;
} else if (number === 2) {  // 2 is the only even prime number
    isPrime = true;
} else {
    for (let i = 2; i < number; i++){  // Check all numbers from 2 to number-1
        if (number % i === 0) {  // If number divides evenly, it has a divisor
            isPrime = false;  // Found a divisor, so not prime
            break;  // Stop checking further numbers
        }
    }
}
console.log(number + " is " + (isPrime ? "prime" : "not prime"));


// Function approach with same logic
// -----------------------------------------------------------------------------------
function isPrime2(num) {
    if (num <= 1) return false;  // Rule: primes must be > 1
    if (num === 2) return true;  // Special case: 2 is prime

    for (let i = 2; i < num; i++) {  // Test divisibility by all numbers
        if (num % i === 0) return false;  // If divisible, not prime
    }
    return true;  // No divisors found = prime
}
console.log(isPrime2(11));


// Terminal input with validation
// -----------------------------------------------------------------------------------
const args = process.argv.slice(2);  // Get command line arguments (skip 'node' and 'filename')
if (args.length > 0) {  // Check if user provided any argument
    const inputNumber = parseInt(args[0]);  // Convert first argument string to integer
    if (!isNaN(inputNumber)) {  // Validate if conversion was successful
        const result = isPrime2(inputNumber);  // Apply prime check function
        console.log(inputNumber + " is " + (result ? "prime" : "not prime"));  // Display result
    } else {
        console.log("Please provide a valid number");  // Handle invalid input
    }
}

// Prime Logic Explanation:
// A prime number has exactly 2 divisors: 1 and itself
// We check if any number from 2 to n-1 divides our number
// If we find ANY divisor, it's not prime
// If we find NO divisors, it's prime
