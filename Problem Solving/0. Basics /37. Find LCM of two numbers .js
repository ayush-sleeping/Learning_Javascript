// find LCM of two numbers  :
// --------------------------------------------------------------------------------------------------------------::

const findLCM1 = (a, b) => {
    const findGCD = (x, y) => {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    };
    return (a * b) / findGCD(a, b);
};

// Terminal Input Handling
if (process.argv.length > 2) {
    const num1 = parseInt(process.argv[2]);
    const num2 = parseInt(process.argv[3]);

    console.log(`Finding LCM of ${num1} and ${num2}:`);
    console.log(`(GCD Formula) :  ${findLCM1(num1, num2)}`);
} else {
    // Test cases
    console.log("LCM of 12 and 18:", findLCM1(12, 18));
}


/*
EXPLANATION:
Using Mathematical Formula (LCM * GCD = a * b)
=======================================================
const findLCM1 = (a, b) => {
    const findGCD = (x, y) => {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    };
    return (a * b) / findGCD(a, b);
};

HOW IT WORKS:
- Uses mathematical relationship: LCM(a,b) × GCD(a,b) = a × b
- First calculates GCD using Euclidean algorithm
- Then applies formula: LCM = (a × b) / GCD

EXAMPLE: LCM(12, 18)
Step 1: Find GCD(12, 18)
  - 18 % 12 = 6, so GCD(12, 6)
  - 12 % 6 = 0, so GCD = 6
Step 2: LCM = (12 × 18) / 6 = 216 / 6 = 36
*/


// Method 2: Brute Force Approach
const findLCM2 = (a, b) => {
    let lcm = a > b ? a : b;
    while (true) {
        if (lcm % a === 0 && lcm % b === 0) {
            return lcm;
        }
        lcm++;
    }
};

// Method 3: Using Step Increment
const findLCM3 = (a, b) => {
    let max = a > b ? a : b;
    let min = a < b ? a : b;
    let lcm = max;

    while (lcm % min !== 0) {
        lcm += max;
    }
    return lcm;
};

// Method 4: Recursive Approach with GCD
const findLCM4 = (a, b) => {
    const gcd = (x, y) => {
        if (y === 0) return x;
        return gcd(y, x % y);
    };
    return (a * b) / gcd(a, b);
};

// Terminal Input Handling
if (process.argv.length > 2) {
    const num1 = parseInt(process.argv[2]);
    const num2 = parseInt(process.argv[3]);

    console.log(`Finding LCM of ${num1} and ${num2}:`);
    console.log(`Method 2 (Brute Force): ${findLCM2(num1, num2)}`);
    console.log(`Method 3 (Step Increment): ${findLCM3(num1, num2)}`);
    console.log(`Method 4 (Recursive GCD): ${findLCM4(num1, num2)}`);
} else {
    // Test cases
    console.log("LCM of 12 and 18:", findLCM2(12, 18));
    console.log("LCM of 15 and 25:", findLCM3(15, 25));
}


/*
EXPLANATION:

Brute Force Approach
==============================
const findLCM2 = (a, b) => {
    let lcm = a > b ? a : b;
    while (true) {
        if (lcm % a === 0 && lcm % b === 0) {
            return lcm;
        }
        lcm++;
    }
};

HOW IT WORKS:
- Starts from the larger number
- Increments by 1 until finding a number divisible by both
- First such number is the LCM

EXAMPLE: LCM(12, 18)
- Start with 18
- 18 % 12 = 6 (not 0), continue
- 19 % 12 = 7, 19 % 18 = 1, continue
- ...continue until 36
- 36 % 12 = 0, 36 % 18 = 0 ✓


Using Step Increment
==============================
const findLCM3 = (a, b) => {
    let max = a > b ? a : b;
    let min = a < b ? a : b;
    let lcm = max;

    while (lcm % min !== 0) {
        lcm += max;
    }
    return lcm;
};

HOW IT WORKS:
- Starts with the larger number
- Increments by the larger number (not by 1)
- More efficient than brute force

EXAMPLE: LCM(12, 18)
- max = 18, min = 12, lcm = 18
- 18 % 12 = 6 (not 0), lcm = 18 + 18 = 36
- 36 % 12 = 0 ✓

TIME COMPLEXITY: O(LCM/max(a,b))
SPACE COMPLEXITY: O(1)

Recursive Approach with GCD
====================================
const findLCM4 = (a, b) => {
    const gcd = (x, y) => {
        if (y === 0) return x;
        return gcd(y, x % y);
    };
    return (a * b) / gcd(a, b);
};

HOW IT WORKS:
- Same mathematical formula as Method 1
- Uses recursive GCD instead of iterative
- Cleaner code but uses function call stack

EXAMPLE: LCM(12, 18)
- gcd(12, 18) → gcd(18, 12) → gcd(12, 6) → gcd(6, 0) → 6
- LCM = (12 × 18) / 6 = 36

*/
