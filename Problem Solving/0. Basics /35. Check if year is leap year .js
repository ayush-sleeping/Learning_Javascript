// check if year is leap year  :
// --------------------------------------------------------------------------------------------------------------::

let year = 2024;
let isLeap = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else {
        isLeap = true;
    }
} else {
    isLeap = false;
}

console.log(isLeap);

/*
LEAP YEAR RULES:
1. If divisible by 400 → Leap year
2. If divisible by 100 but not 400 → Not leap year
3. If divisible by 4 but not 100 → Leap year
4. If not divisible by 4 → Not leap year

EXPLANATION FOR BASIC METHOD:

let year = 2024;  // Year to check
let isLeap = false;  // Flag to track leap year status

// Check leap year conditions step by step
if (year % 4 === 0) {  // First check: divisible by 4
    if (year % 100 === 0) {  // Second check: if also divisible by 100
        if (year % 400 === 0) {  // Third check: if also divisible by 400
            isLeap = true;  // Divisible by 400 = leap year
        } else {
            isLeap = false;  // Divisible by 100 but not 400 = not leap year
        }
    } else {
        isLeap = true;  // Divisible by 4 but not 100 = leap year
    }
} else {
    isLeap = false;  // Not divisible by 4 = not leap year
}

EXECUTION for 2024:
2024 % 4 = 0 ✓ (divisible by 4)
2024 % 100 = 24 ✗ (not divisible by 100)
Result: leap year

EXECUTION for 1900:
1900 % 4 = 0 ✓ (divisible by 4)
1900 % 100 = 0 ✓ (divisible by 100)
1900 % 400 = 300 ✗ (not divisible by 400)
Result: not leap year
*/


// ------------------------------------------------------------------------------------
function checkLeapYear(inputYear) {
    let result = false;

    if (inputYear % 400 === 0) {
        result = true;
    } else if (inputYear % 100 === 0) {
        result = false;
    } else if (inputYear % 4 === 0) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

console.log("2000 :", checkLeapYear(2000));

/*
EXPLANATION FOR FUNCTION METHOD:

function checkLeapYear(inputYear) {
    let result = false;  // Default to not leap year

    // Check conditions in order of priority
    if (inputYear % 400 === 0) {  // Rule 1: divisible by 400
        result = true;  // Definitely leap year
    } else if (inputYear % 100 === 0) {  // Rule 2: divisible by 100 but not 400
        result = false;  // Definitely not leap year
    } else if (inputYear % 4 === 0) {  // Rule 3: divisible by 4 but not 100
        result = true;  // Leap year
    } else {  // Rule 4: not divisible by 4
        result = false;  // Not leap year
    }

    return result;
}

TEST CASES:
2000: 2000%400=0 → true (leap year)
1900: 1900%400≠0, 1900%100=0 → false (not leap year)
2020: 2020%400≠0, 2020%100≠0, 2020%4=0 → true (leap year)
2021: 2021%4≠0 → false (not leap year)

LOGIC FLOW: Check most restrictive condition first (400), then less restrictive (100, 4)
*/


// ------------------------------------------------------------------------------------
function isLeapYearOneLinear(yr) {
    return (yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0);
}

console.log("One-liner test - 2024:", isLeapYearOneLinear(2024));
console.log("One-liner test - 1900:", isLeapYearOneLinear(1900));

/*
EXPLANATION FOR ONE-LINER METHOD:

function isLeapYearOneLinear(yr) {
    return (yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0);
}

LOGICAL BREAKDOWN:
- (yr % 4 === 0 && yr % 100 !== 0): Divisible by 4 but NOT by 100
- (yr % 400 === 0): OR divisible by 400
- Combined: Leap if (divisible by 4 and not by 100) OR (divisible by 400)

EXECUTION for 2024:
(2024%4===0 && 2024%100!==0) = (true && true) = true
(2024%400===0) = false
Result: true || false = true (leap year)

EXECUTION for 1900:
(1900%4===0 && 1900%100!==0) = (true && false) = false
(1900%400===0) = false
Result: false || false = false (not leap year)

ADVANTAGE: Concise, readable, covers all cases in one expression
*/


// ------------------------------------------------------------------------------------
let builtInYear = 2024;
let testDate = new Date(builtInYear, 1, 29);
let isLeapBuiltIn = testDate.getMonth() === 1;

console.log("Built-in method - " + builtInYear + " is " + (isLeapBuiltIn ? "leap" : "not leap"));

/*
EXPLANATION FOR BUILT-IN METHOD:

let builtInYear = 2024;  // Year to test
let testDate = new Date(builtInYear, 1, 29);  // Try to create Feb 29th
let isLeapBuiltIn = testDate.getMonth() === 1;  // Check if month is still February (1)

LOGIC:
- Create date object for February 29th of given year
- If year is leap: February 29th exists, month remains 1 (February)
- If year is not leap: February 29th doesn't exist, date rolls to March, month becomes 2

EXECUTION for 2024 (leap year):
new Date(2024, 1, 29) creates valid Feb 29, 2024
getMonth() returns 1 (February)
isLeapBuiltIn = true

EXECUTION for 2023 (not leap year):
new Date(2023, 1, 29) rolls to March 1, 2023
getMonth() returns 2 (March)
isLeapBuiltIn = false

ADVANTAGE: Uses JavaScript's built-in date validation
DISADVANTAGE: May not be allowed in "no built-in" interviews
*/
