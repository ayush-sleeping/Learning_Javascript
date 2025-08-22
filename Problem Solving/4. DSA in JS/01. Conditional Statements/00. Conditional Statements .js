// Conditional Statements (if/else, switch) - DSA :

/*
What are Conditional Statements?
- Conditional statements let you run different code based on certain conditions.
- They are the foundation of decision-making in programming.
- They help in controlling the flow of execution based on specific criteria.
- They can be nested within each other to create complex decision trees.
- They can also be combined with logical operators (AND, OR) to form compound conditions.
- The choice of which conditional statement to use depends on the specific requirements of the problem being solved.
- Understanding the flow of control and the conditions that lead to different outcomes is crucial for effective problem-solving.

Subtopics:
1. if statement
2. if-else statement
3. else-if ladder
4. switch statement
5. Nested conditionals
6. Ternary operator (for simple conditions)


Subtopics & When to Use:

1. if statement
   - Use for a single condition that decides whether to run a block of code.
   - Example: If a number is positive, print it.

2. if-else statement
   - Use when you have two possible outcomes (true/false).
   - Example: If a number is even, print "Even"; else print "Odd".

3. else-if ladder
   - Use when you have multiple conditions to check in sequence.
   - Example: Grading system (A, B, C, D, F), checking ranges.

4. switch statement
   - Use when you need to compare one value against many possible cases (especially discrete values).
   - Example: Days of the week, menu selection, calculator operations.

5. Nested conditionals
   - Use when you need to check a condition inside another condition (multi-level decisions).
   - Example: Age groups (adult, senior, minor), eligibility checks.

6. Ternary operator (for simple conditions)
   - Use for short, simple true/false decisions, especially for assignments or inline returns.
   - Example: Assign "Pass" or "Fail" based on score.

*/

// Examples :

let num = 10;

// if
if (num > 5) {
    console.log("Number is greater than 5");
}

// 2. if-else statement
if (num % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// 3. else-if ladder
if (num < 0) {
    console.log("Negative");
} else if (num === 0) {
    console.log("Zero");
} else {
    console.log("Positive");
}

// 4. switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// 5. Nested conditionals
let age = 20;
if (age >= 18) {
    if (age < 60) {
        console.log("Adult");
    } else {
        console.log("Senior");
    }
} else {
    console.log("Minor");
}

// 6. Ternary operator
let result = (num > 0) ? "Positive" : "Not positive";
console.log(result);


console.log("------------------------------------- ::");
// Some Basic Problem solving Q :
// -------------------- :: ---------------------

// Problem 1: Find the largest of three numbers
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(largestOfThree(10, 50, 25));


console.log("------------------------------------- ::");
// Problem 2: Check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2024));


console.log("------------------------------------- ::");
// Problem 3: Grade calculator
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}


console.log("------------------------------------- ::");
// Problem 4: Simple calculator using switch
function calculator(a, b, op) {
    switch (op) {
        case `+`: return a + b;
        case `-`: return a - b;
        case `*`: return a * b;
        case `/`: return b !== 0 ? a / b : "Divide by zero error!";
        default: return "Invalid Operator"
    }
}
console.log(calculator(5, 5, `*`));


console.log("------------------------------------- ::");
// Problem 5: Check if a number is even or odd (ternary)
function evenOrOdd(n) {
    return (n % 2 === 0) ? "Even" : "Odd";
}
console.log(evenOrOdd(7));
