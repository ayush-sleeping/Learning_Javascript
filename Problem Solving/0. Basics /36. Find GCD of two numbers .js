// find GCD of two numbers  :
// --------------------------------------------------------------------------------------------------------------::

let a = 48;
let b = 18;
let gcd = 1;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}

console.log("GCD of " + a + " and " + b + " is: " + gcd);

/*
GCD (Greatest Common Divisor) is the largest number that divides both numbers evenly.

EXPLANATION FOR BASIC METHOD:

let a = 48;  // First number
let b = 18;  // Second number
let gcd = 1; // Initialize GCD to 1 (minimum possible GCD)

// Check all numbers from 1 to minimum of a and b
for (let i = 1; i <= a && i <= b; i++) {  // Loop from 1 to smaller number
    if (a % i === 0 && b % i === 0) {  // If i divides both numbers evenly
        gcd = i;  // Update GCD to current divisor
    }
}

EXECUTION for GCD(48, 18):
i=1: 48%1=0, 18%1=0 → gcd=1
i=2: 48%2=0, 18%2=0 → gcd=2
i=3: 48%3=0, 18%3=0 → gcd=3
i=6: 48%6=0, 18%6=0 → gcd=6
i=9: 48%9≠0, skip
i=18: 48%18≠0, skip
Final: gcd=6

LOGIC: Check every number, keep updating GCD when we find a common divisor
*/

function findGCDEuclidean(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

console.log("Euclidean method - GCD(56, 98):", findGCDEuclidean(56, 98));
console.log("Euclidean method - GCD(48, 18):", findGCDEuclidean(48, 18));

/*
EXPLANATION FOR EUCLIDEAN METHOD:

function findGCDEuclidean(num1, num2) {
    while (num2 !== 0) {  // Continue until second number becomes 0
        let temp = num2;  // Store num2 temporarily
        num2 = num1 % num2;  // Replace num2 with remainder
        num1 = temp;  // Replace num1 with old num2
    }
    return num1;  // When num2 becomes 0, num1 is the GCD
}

EUCLIDEAN ALGORITHM:
GCD(a, b) = GCD(b, a % b) until one number becomes 0

EXECUTION for GCD(48, 18):
Step 1: num1=48, num2=18 → temp=18, num2=48%18=12, num1=18
Step 2: num1=18, num2=12 → temp=12, num2=18%12=6, num1=12
Step 3: num1=12, num2=6 → temp=6, num2=12%6=0, num1=6
Step 4: num2=0, return num1=6

ADVANTAGE: Much faster than checking all numbers, O(log min(a,b)) complexity
*/

let x = 24;
let y = 36;
let smaller = x < y ? x : y;
let result = 1;

for (let i = smaller; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) {
        result = i;
        break;
    }
}

console.log("Optimized method - GCD(" + x + ", " + y + "):", result);

/*
EXPLANATION FOR OPTIMIZED BRUTE FORCE:

let x = 24;  // First number
let y = 36;  // Second number
let smaller = x < y ? x : y;  // Find smaller of the two numbers
let result = 1;  // Initialize result

// Start from smaller number and go down to 1
for (let i = smaller; i >= 1; i--) {  // Count down from smaller number
    if (x % i === 0 && y % i === 0) {  // Check if i divides both numbers
        result = i;  // Found GCD
        break;  // Exit loop immediately (first match is largest)
    }
}

EXECUTION for GCD(24, 36):
smaller = 24
i=24: 24%24=0, 36%24≠0 → not divisible
i=23: 24%23≠0 → not divisible
i=22: 24%22≠0 → not divisible
...
i=12: 24%12=0, 36%12=0 → found GCD=12, break

ADVANTAGE: Starts from largest possible, exits early when found
LOGIC: First common divisor found when counting down is the greatest
*/

function gcdRecursive(a, b) {
    if (b === 0) {
        return a;
    }
    return gcdRecursive(b, a % b);
}

console.log("Recursive method - GCD(72, 48):", gcdRecursive(72, 48));

/*
EXPLANATION FOR RECURSIVE METHOD:

function gcdRecursive(a, b) {
    if (b === 0) {  // Base case: when second number is 0
        return a;  // Return first number as GCD
    }
    return gcdRecursive(b, a % b);  // Recursive call with swapped and remainder
}

RECURSIVE EUCLIDEAN ALGORITHM:
Same logic as iterative but uses function calls instead of loops

EXECUTION for GCD(72, 48):
gcdRecursive(72, 48) → gcdRecursive(48, 72%48) → gcdRecursive(48, 24)
gcdRecursive(48, 24) → gcdRecursive(24, 48%24) → gcdRecursive(24, 0)
gcdRecursive(24, 0) → return 24

CALL STACK:
gcdRecursive(72, 48)
  └─ gcdRecursive(48, 24)
      └─ gcdRecursive(24, 0) → returns 24

ADVANTAGE: Clean, mathematical representation of Euclidean algorithm
*/

function findGCDManual(num1, num2) {
    let a = num1;
    let b = num2;

    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
}

console.log("Manual subtraction - GCD(15, 25):", findGCDManual(15, 25));

/*
EXPLANATION FOR MANUAL SUBTRACTION METHOD:

function findGCDManual(num1, num2) {
    let a = num1;  // Copy first number
    let b = num2;  // Copy second number

    while (a !== b) {  // Continue until both numbers become equal
        if (a > b) {  // If first number is larger
            a = a - b;  // Subtract smaller from larger
        } else {  // If second number is larger
            b = b - a;  // Subtract smaller from larger
        }
    }

    return a;  // When equal, that's the GCD
}

EXECUTION for GCD(15, 25):
a=15, b=25 → b>a, so b=25-15=10
a=15, b=10 → a>b, so a=15-10=5
a=5, b=10 → b>a, so b=10-5=5
a=5, b=5 → equal, return 5

LOGIC: Keep subtracting smaller from larger until both become equal
ADVANTAGE: No modulo operator needed, pure subtraction
DISADVANTAGE: Slower than Euclidean for large numbers
*/
