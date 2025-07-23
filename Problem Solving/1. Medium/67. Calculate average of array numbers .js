// Calculate average of array numbers  :
// --------------------------------------------------------------------------------------------------------------::


// MANUAL IMPLEMENTATION (NO BUILT-INS)
// ----------------------------------------------------------------------------------
function calculateAverageManual(arr) {
    // Step 1: Handle edge case using manual length calculation
    let arrLength = getArrayLength(arr);
    if (arrLength === 0) {
        return 0; // Return 0 for empty array
    }

    // Step 2: Initialize sum to store total of all numbers
    let sum = 0;

    // Step 3: Loop through each number using manual length
    for (let i = 0; i < arrLength; i++) {
        let currentNumber = arr[i]; // Get current number

        // Step 4: Add current number to our running sum
        sum = sum + currentNumber;
    }

    // Step 5: Calculate average manually (division)
    let average = sum / arrLength;

    // Step 6: Return the calculated average
    return average;
}

// Helper function to manually calculate array length without using .length property
function getArrayLength(arr) {
    let length = 0; // Start counting from 0

    // Keep checking elements until we hit undefined (end of array)
    while (arr[length] !== undefined) {
        length++; // Increment length counter
    }

    return length; // Return the total length
}

let test3 = [2, 4, 6, 8, 10];
let result3 = calculateAverageManual(test3);
console.log(result3); // Output: 6
/*
Explanation :
LOGIC BEHIND VERSION 3 (Manual Implementation):
1. No built-in functions like .length or .reduce()
2. Manual length calculation using undefined check
3. Manual sum calculation using simple addition
4. Manual average calculation using division
5. Pure algorithmic approach without any built-in helpers
*/



// SIMPLE APPROACH - LOOP AND DIVIDE
// ----------------------------------------------------------------------------------
function calculateAverage(arr) {
    // Step 1: Handle edge case - empty array
    if (arr.length === 0) {
        return 0; // Return 0 for empty array (or could return null/undefined)
    }

    // Step 2: Initialize sum to store total of all numbers
    let sum = 0;

    // Step 3: Loop through each number in the array
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]; // Get current number

        // Step 4: Add current number to our running sum
        sum = sum + currentNumber;
    }

    // Step 5: Calculate average by dividing sum by number of elements
    let average = sum / arr.length;

    // Step 6: Return the calculated average
    return average;
}
let test1 = [10, 20, 30, 40, 50];
let result1 = calculateAverage(test1);
console.log(result1); // Output: 30
/*
Explanation :
LOGIC BEHIND VERSION 1 (Simple Loop Approach):
1. Sum all numbers in the array using a loop
2. Divide the total sum by the number of elements
3. Handle edge case of empty array
4. Average = (sum of all elements) / (number of elements)
5. Time complexity O(n), space complexity O(1)
*/



// USING BUILT-IN REDUCE METHOD
// -------------------------------------------------------------------------
function calculateAverageReduce(arr) {
    // Step 1: Handle edge case - empty array
    if (arr.length === 0) {
        return 0; // Return 0 for empty array
    }

    // Step 2: Use reduce to calculate sum of all elements
    // reduce accumulates values: (accumulator, currentValue) => accumulator + currentValue
    let sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue; // Add current value to accumulator
    }, 0); // Start with initial value of 0

    // Step 3: Calculate average by dividing sum by array length
    let average = sum / arr.length;

    // Step 4: Return the calculated average
    return average;
}

let test2 = [5, 15, 25, 35];
let result2 = calculateAverageReduce(test2);
console.log(result2); // Output: 20
/*
Explanation :

LOGIC BEHIND VERSION 2 (Reduce Method):
1. Use JavaScript's built-in reduce method to sum all elements
2. Reduce takes a callback function and initial value
3. Callback receives accumulator (running total) and current value
4. Returns accumulator + currentValue to build up the sum
5. More functional programming style, concise code
*/



// HANDLING MIXED DATA TYPES
// ----------------------------------------------------------------------------------
function calculateAverageFiltered(arr) {
    // Step 1: Create array to store only valid numbers
    let numbers = [];
    let numberCount = 0;

    // Step 2: Filter out non-numeric values
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 3: Check if current element is a valid number
        if (typeof currentElement === 'number' && !isNaN(currentElement)) {
            numbers[numberCount] = currentElement; // Add to numbers array
            numberCount++; // Increment count of valid numbers
        }
        // Step 4: Skip non-numeric elements (strings, null, undefined, etc.)
    }

    // Step 5: Handle case where no valid numbers found
    if (numberCount === 0) {
        return 0; // Return 0 if no valid numbers
    }

    // Step 6: Calculate sum of valid numbers
    let sum = 0;
    for (let i = 0; i < numberCount; i++) {
        sum = sum + numbers[i]; // Add each valid number to sum
    }

    // Step 7: Calculate and return average
    let average = sum / numberCount;
    return average;
}

let test5 = [10, "hello", 20, null, 30, undefined, 40];
let result5 = calculateAverageFiltered(test5);
console.log(result5); // Output: 25 (average of 10, 20, 30, 40)

/*
Explanation :

LOGIC BEHIND VERSION 5 (Filtered Approach):
1. First pass: filter out non-numeric values
2. Store only valid numbers in separate array
3. Calculate average using only valid numbers
4. typeof check ensures element is a number
5. isNaN check ensures it's not NaN (Not a Number)
6. Robust solution for real-world data with mixed types

*/
