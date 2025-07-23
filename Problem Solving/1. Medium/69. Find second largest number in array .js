// Find second largest number in array  :
// --------------------------------------------------------------------------------------------------------------::

// MANUAL IMPLEMENTATION (NO BUILT-INS)
function findSecondLargestManual(arr) {
    // Step 1: Get array length manually without using .length property
    let arrLength = getArrayLength(arr);

    // Step 2: Handle edge cases - need at least 2 elements
    if (arrLength < 2) {
        return null; // Cannot find second largest with less than 2 elements
    }

    // Step 3: Initialize largest and secondLargest with very small values
    let largest = -999999;      // Start with very small number
    let secondLargest = -999999; // Start with very small number

    // Step 4: Loop through each element in the array
    for (let i = 0; i < arrLength; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 5: Check if current element is larger than current largest
        if (currentElement > largest) {
            // Update second largest to previous largest before updating largest
            secondLargest = largest;
            largest = currentElement; // Update largest
        }
        // Step 6: Check if current element is larger than second largest but not largest
        else if (currentElement > secondLargest && currentElement !== largest) {
            secondLargest = currentElement; // Update second largest
        }
    }

    // Step 7: Check if we found a valid second largest
    if (secondLargest === -999999) {
        return null; // All elements were the same
    }

    // Step 8: Return the second largest number
    return secondLargest;
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
let test1 = [3, 7, 1, 9, 5, 2];
let result1 = findSecondLargestManual(test1);
console.log(result1); // Output: 7
/*
Explanation :

LOGIC BEHIND VERSION 1 (Manual Implementation):
1. No built-in functions like .length, Math.max(), .sort()
2. Manual length calculation using undefined check
3. Track both largest and second largest in single pass
4. Handle duplicates by checking currentElement !== largest
5. Pure algorithmic approach without any built-in helpers
*/



// SIMPLE TWO-PASS APPROACH
// -------------------------------------------------------------------------
function findSecondLargestTwoPass(arr) {
    // Step 1: Handle edge cases - need at least 2 elements
    if (arr.length < 2) {
        return null; // Cannot find second largest with less than 2 elements
    }

    // Step 2: First pass - find the largest number
    let largest = arr[0]; // Start with first element as largest
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Update largest if current element is bigger
        if (currentElement > largest) {
            largest = currentElement;
        }
    }

    // Step 3: Second pass - find largest number that is smaller than the largest
    let secondLargest = null; // Initialize as null
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Check if current element is smaller than largest but larger than current second largest
        if (currentElement < largest) {
            // If secondLargest is null or current element is larger than secondLargest
            if (secondLargest === null || currentElement > secondLargest) {
                secondLargest = currentElement; // Update second largest
            }
        }
    }

    // Step 4: Return the second largest number
    return secondLargest;
}

let test2 = [10, 5, 8, 20, 3, 15];
let result2 = findSecondLargestTwoPass(test2);
console.log(result2); // Output: 15
/*
Explanation :

LOGIC BEHIND  (Two-Pass Approach):
1. First pass: find the absolute largest number
2. Second pass: find largest number excluding the maximum
3. Easier to understand logic, separated concerns
4. Handles duplicates naturally
5. Clear separation between finding max and second max
*/



// SINGLE-PASS OPTIMIZED APPROACH
// ----------------------------------------------------------------------------------
function findSecondLargestOptimized(arr) {
    // Step 1: Handle edge cases - need at least 2 elements
    if (arr.length < 2) {
        return null; // Cannot find second largest with less than 2 elements
    }

    // Step 2: Initialize largest and secondLargest
    let largest = -Infinity;      // Start with negative infinity
    let secondLargest = -Infinity; // Start with negative infinity

    // Step 3: Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Check if current element is larger than current largest
        if (currentElement > largest) {
            // Move current largest to second largest before updating
            secondLargest = largest;
            largest = currentElement; // Update largest
        }
        // Step 5: Check if current element is second largest
        else if (currentElement > secondLargest && currentElement !== largest) {
            secondLargest = currentElement; // Update second largest
        }
    }

    // Step 6: Check if we found a valid second largest
    if (secondLargest === -Infinity) {
        return null; // All elements were the same
    }

    // Step 7: Return the second largest number
    return secondLargest;
}
let test3 = [25, 40, 15, 30, 35];
let result3 = findSecondLargestOptimized(test3);
console.log(result3); // Output: 35
/*
Explanation :
LOGIC BEHIND (Single-Pass Optimized):
1. Most efficient approach - only one pass through array
2. Uses -Infinity for better initialization (handles negative numbers)
3. Simultaneously tracks largest and second largest
4. Handles duplicates by checking !== largest
5. Time complexity O(n), space complexity O(1)

*/



// REMOVE DUPLICATES THEN FIND SECOND
// ----------------------------------------------------------------------------------
function findSecondLargestUnique(arr) {
    // Step 1: Handle edge cases - need at least 2 elements
    if (arr.length < 2) {
        return null; // Cannot find second largest with less than 2 elements
    }

    // Step 2: Remove duplicates manually
    let uniqueNumbers = [];
    let uniqueCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element
        let isDuplicate = false;

        // Step 3: Check if current element already exists in unique array
        for (let j = 0; j < uniqueCount; j++) {
            if (uniqueNumbers[j] === currentElement) {
                isDuplicate = true; // Mark as duplicate
                break; // Stop checking
            }
        }

        // Step 4: If not duplicate, add to unique array
        if (!isDuplicate) {
            uniqueNumbers[uniqueCount] = currentElement;
            uniqueCount++; // Increment unique count
        }
    }

    // Step 5: Check if we have at least 2 unique numbers
    if (uniqueCount < 2) {
        return null; // Need at least 2 unique numbers
    }

    // Step 6: Find largest and second largest from unique numbers
    let largest = uniqueNumbers[0];
    let secondLargest = uniqueNumbers[1];

    // Ensure largest is actually larger than secondLargest
    if (secondLargest > largest) {
        let temp = largest;
        largest = secondLargest;
        secondLargest = temp;
    }

    // Step 7: Check remaining unique numbers
    for (let i = 2; i < uniqueCount; i++) {
        let currentElement = uniqueNumbers[i];

        if (currentElement > largest) {
            secondLargest = largest; // Previous largest becomes second
            largest = currentElement; // Update largest
        } else if (currentElement > secondLargest) {
            secondLargest = currentElement; // Update second largest
        }
    }

    // Step 8: Return the second largest unique number
    return secondLargest;
}

let test5 = [7, 7, 2, 9, 2, 9, 5];
let result5 = findSecondLargestUnique(test5);
console.log(result5); // Output: 7

/*
Explanation :
LOGIC (Remove Duplicates First):
1. First remove all duplicate values from array
2. Then find second largest from unique values
3. Guarantees true second largest (not duplicate of largest)
4. More memory usage but clearer logic for duplicates
5. Good for arrays with many duplicate values
*/
