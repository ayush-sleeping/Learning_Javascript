// Find largest and smallest in array  :
// --------------------------------------------------------------------------------------------------------------::

// MANUAL IMPLEMENTATION (NO BUILT-INS)
// ----------------------------------------------------------------------------------
function findLargestAndSmallestManual(arr) {
    // Step 1: Handle edge case using manual length calculation
    let arrLength = getArrayLength(arr);
    if (arrLength === 0) {
        return { largest: null, smallest: null }; // Return null for empty array
    }

    // Step 2: Initialize both largest and smallest with first element
    let largest = arr[0];  // Start with first element as largest
    let smallest = arr[0]; // Start with first element as smallest

    // Step 3: Loop through remaining elements starting from index 1
    for (let i = 1; i < arrLength; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Check if current element is larger than current largest
        if (currentElement > largest) {
            largest = currentElement; // Update largest
        }

        // Step 5: Check if current element is smaller than current smallest
        if (currentElement < smallest) {
            smallest = currentElement; // Update smallest
        }
    }

    // Step 6: Create result object manually
    let result = {};
    result.largest = largest;   // Set largest property
    result.smallest = smallest; // Set smallest property

    // Step 7: Return the result object
    return result;
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

let test3 = [4, 8, 2, 12, 1, 6];
let result3 = findLargestAndSmallestManual(test3);
console.log(result3); // Output: { largest: 12, smallest: 1 }

/*
Explanation :

LOGIC BEHIND VERSION 3 (Manual Implementation):
1. No built-in functions like .length, Math.max(), Math.min()
2. Manual length calculation using undefined check
3. Manual comparison using simple > and < operators
4. Manual object creation without object literal shorthand
5. Pure algorithmic approach showing fundamental understanding

*/



// SIMPLE APPROACH - LINEAR SEARCH
// -------------------------------------------------------------------------
function findLargestAndSmallest(arr) {
    // Step 1: Handle edge case - array must have at least 1 element
    if (arr.length === 0) {
        return { largest: null, smallest: null }; // Return null for empty array
    }

    // Step 2: Initialize both largest and smallest with first element
    let largest = arr[0];  // Start with first element as largest
    let smallest = arr[0]; // Start with first element as smallest

    // Step 3: Loop through remaining elements starting from index 1
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Check if current element is larger than current largest
        if (currentElement > largest) {
            largest = currentElement; // Update largest
        }

        // Step 5: Check if current element is smaller than current smallest
        if (currentElement < smallest) {
            smallest = currentElement; // Update smallest
        }
    }

    // Step 6: Return both values as an object
    return { largest: largest, smallest: smallest };
}

// 🔍 Test Example
let test1 = [3, 7, 2, 9, 1, 5, 8];
let result1 = findLargestAndSmallest(test1);
console.log(result1); // Output: { largest: 9, smallest: 1 }

/*
Explanation :

LOGIC BEHIND VERSION 1 (Simple Linear Search):
1. Start with first element as both largest and smallest
2. Compare each remaining element with current largest and smallest
3. Update largest if current element is bigger
4. Update smallest if current element is smaller
5. Return both values in a single pass through array

*/



// USING BUILT-IN METHODS
// -------------------------------------------------------------------------
function findLargestAndSmallestBuiltIn(arr) {
    // Step 1: Handle edge case - array must have at least 1 element
    if (arr.length === 0) {
        return { largest: null, smallest: null }; // Return null for empty array
    }

    // Step 2: Use Math.max() to find largest element
    // ...arr spreads the array elements as individual arguments
    let largest = Math.max(...arr);

    // Step 3: Use Math.min() to find smallest element
    // ...arr spreads the array elements as individual arguments
    let smallest = Math.min(...arr);

    // Step 4: Return both values as an object
    return { largest: largest, smallest: smallest };
}

let test2 = [15, 3, 9, 1, 12, 7];
let result2 = findLargestAndSmallestBuiltIn(test2);
console.log(result2); // Output: { largest: 15, smallest: 1 }

/*
Explanation :

LOGIC BEHIND VERSION 2 (Built-in Methods):
1. Use JavaScript's built-in Math.max() and Math.min() functions
2. Spread operator (...) converts array to individual arguments
3. Math.max(...arr) is equivalent to Math.max(arr[0], arr[1], arr[2], ...)
4. Much shorter code but relies on built-in functions
5. Less control over the process but very efficient

*/
