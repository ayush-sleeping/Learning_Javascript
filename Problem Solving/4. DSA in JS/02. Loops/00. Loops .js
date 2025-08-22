// Loops (for, while, do-while) - DSA :

/*
What are Loops?
- Loops let you repeat a block of code multiple times.
- They are essential for iterating over arrays, processing data, and solving DSA problems.

Subtopics:
1. for loop
2. while loop
3. do-while loop
4. for...of loop (for arrays)
5. for...in loop (for objects)

When to use each loop?

1. for loop
   - Use when you know exactly how many times you want to repeat a block of code.
   - Best for iterating over arrays with index, counting, or fixed number of iterations.
   - Example: Traversing an array, running code N times.

2. while loop
   - Use when you want to repeat code as long as a condition is true, but you may not know the exact number of iterations in advance.
   - Best for situations where the loop may run zero or more times.
   - Example: Reading input until a user enters 'exit', searching until found.

3. do-while loop
   - Use when you want the loop to run at least once, regardless of the condition.
   - Best for menu-driven programs, input validation, or when the first iteration must always happen.
   - Example: Prompting user for input at least once.

4. for...of loop (for arrays)
   - Use for directly iterating over the values of an array or iterable.
   - Best for clean, readable code when you don't need the index.
   - Example: Printing all elements of an array, summing values.

5. for...in loop (for objects)
   - Use for iterating over the keys (properties) of an object.
   - Best for working with objects, not arrays.
   - Example: Printing all key-value pairs in an object, copying properties.
*/


// 1. for loop
for (let i = 1; i <= 5; i++) {
    console.log("for loop:", i);
}

// 2. while loop
let j = 1;
while (j <= 5) {
    console.log("while loop:", j);
    j++;
}

// 3. do-while loop
let k = 1;
do {
    console.log("do-while loop:", k);
    k++;
} while (k <= 5);

// 4. for...of loop (arrays)
const arr = [10, 20, 30, 40];
for (const value of arr) {
    console.log("for...of loop:", value);
}

// 5. for...in loop (objects)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log("for...in loop:", key, obj[key]);
}

console.log("------------------------------------- ::");
// Some Basic Problem solving Q :
// -------------------- :: ---------------------
// Problem 1: Print numbers from 1 to N
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(5); // Output: 1 2 3 4 5


console.log("------------------------------------- ::");
// Problem 2: Find the sum of elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


console.log("------------------------------------- ::");
// Problem 3: Reverse an array (manual, no built-ins)
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i];
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]


console.log("------------------------------------- ::");
// Problem 4: Count digits in a number
function countDigits(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(12345)); // Output: 5


console.log("------------------------------------- ::");
// Problem 5: Print multiplication table for a number
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}
multiplicationTable(7); // Output: 7 x 1 = 7 ... 7 x 10 = 70
