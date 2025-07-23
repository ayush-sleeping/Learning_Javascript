// find max difference between array elements  :
// --------------------------------------------------------------------------------------------------------------::


// MANUAL IMPLEMENTATION (NO BUILT-INS)
// ----------------------------------------------------------------------------------
function findMaxDifferenceManual(arr) {
    // Step 1: Handle edge case using manual length calculation
    let arrLength = getArrayLength(arr);
    if (arrLength < 2) {
        return 0; // No difference possible with less than 2 elements
    }

    // Step 2: Initialize min and max with first element
    let min = arr[0]; // Start with first element as minimum
    let max = arr[0]; // Start with first element as maximum

    // Step 3: Loop through array to find actual min and max values
    for (let i = 1; i < arrLength; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Update minimum if current element is smaller
        if (currentElement < min) {
            min = currentElement;
        }

        // Step 5: Update maximum if current element is larger
        if (currentElement > max) {
            max = currentElement;
        }
    }

    // Step 6: Calculate difference manually (always positive since max >= min)
    let difference = max - min;

    // Step 7: Return the maximum difference
    return difference;
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

let test3 = [4, 2, 1, 7, 8, 3];
let result3 = findMaxDifferenceManual(test3);
console.log(result3); // Output: 7 (difference between 8 and 1)

/*
Explanation :

LOGIC BEHIND VERSION 3 (Manual Implementation):
1. No built-in functions like .length, Math.abs(), Math.min(), Math.max()
2. Manual length calculation using undefined check
3. Manual min/max finding with simple comparisons
4. Since we know max >= min, difference is always positive
5. Pure algorithmic approach without any built-in helpers

*/


// SIMPLE APPROACH - COMPARE ALL PAIRS
function findMaxDifference(arr) {
    // Step 1: Handle edge case - array must have at least 2 elements
    if (arr.length < 2) {
        return 0; // No difference possible with less than 2 elements
    }

    // Step 2: Initialize maxDiff to store the maximum difference found
    let maxDiff = 0;

    // Step 3: Loop through each element as first element of pair
    for (let i = 0; i < arr.length; i++) {
        // Step 4: Loop through remaining elements as second element of pair
        for (let j = i + 1; j < arr.length; j++) {
            // Step 5: Calculate absolute difference between current pair
            let currentDiff = Math.abs(arr[i] - arr[j]);

            // Step 6: Update maxDiff if current difference is larger
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }
    }

    // Step 7: Return the maximum difference found
    return maxDiff;
}

// 🔍 Test Example
let test1 = [2, 7, 9, 5, 1, 3, 5];
let result1 = findMaxDifference(test1);
console.log(result1); // Output: 8 (difference between 9 and 1)

/*
Explanation :

LOGIC BEHIND VERSION 1 (Simple Approach):
1. Compare every possible pair of elements in the array
2. Calculate absolute difference for each pair
3. Keep track of the maximum difference found
4. Time complexity: O(n²) but easy to understand
5. Works for any array arrangement

*/

// OPTIMIZED APPROACH - FIND MIN AND MAX
// -------------------------------------------------------------------------
function findMaxDifferenceOptimized(arr) {
    // Step 1: Handle edge case - array must have at least 2 elements
    if (arr.length < 2) {
        return 0; // No difference possible with less than 2 elements
    }

    // Step 2: Initialize min and max with first element
    let min = arr[0]; // Start with first element as minimum
    let max = arr[0]; // Start with first element as maximum

    // Step 3: Loop through array to find actual min and max values
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Update minimum if current element is smaller
        if (currentElement < min) {
            min = currentElement;
        }

        // Step 5: Update maximum if current element is larger
        if (currentElement > max) {
            max = currentElement;
        }
    }

    // Step 6: Calculate and return the difference between max and min
    return max - min;
}

let test2 = [10, 3, 5, 6, 20, 26, 1];
let result2 = findMaxDifferenceOptimized(test2);
console.log(result2); // Output: 25 (difference between 26 and 1)

/*
Explanation :

LOGIC BEHIND VERSION 2 (Optimized Approach):
1. Maximum difference will always be between minimum and maximum elements
2. Find the smallest and largest elements in single pass
3. Calculate difference between max and min
4. Time complexity: O(n) - much more efficient
5. Space complexity: O(1) - only uses two variables

*/
