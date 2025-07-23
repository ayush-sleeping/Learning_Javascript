// Find index of element in array  :
// --------------------------------------------------------------------------------------------------------------::

// MANUAL IMPLEMENTATION (NO BUILT-INS)
function findIndexManual(arr, target) {
    // Step 1: Get array length manually without using .length property
    let arrLength = getArrayLength(arr);

    // Step 2: Loop through each element in the array
    for (let i = 0; i < arrLength; i++) {
        let currentElement = arr[i]; // Get current element at index i

        // Step 3: Check if current element matches the target element
        if (currentElement === target) {
            // Step 4: If match found, return the current index
            return i;
        }
    }

    // Step 5: If no match found after checking all elements, return -1
    return -1;
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
let test1 = [10, 20, 30, 40, 50];
let result1 = findIndexManual(test1, 30);
console.log(result1); // Output: 2
/*
Explanation :
LOGIC BEHIND :
1. No built-in functions like .length, .indexOf(), .findIndex()
2. Manual length calculation using undefined check
3. Linear search through array comparing each element
4. Return index when match found, -1 if not found
5. Pure algorithmic approach without any built-in helpers

*/



// SIMPLE LOOP APPROACH
// -------------------------------------------------------------------------
function findIndex(arr, target) {
    // Step 1: Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element at index i

        // Step 2: Check if current element matches the target element
        if (currentElement === target) {
            // Step 3: If match found, return the current index
            return i;
        }
    }

    // Step 4: If no match found after checking all elements, return -1
    return -1;
}

let test2 = ["apple", "banana", "orange", "grape"];
let result2 = findIndex(test2, "orange");
console.log(result2); // Output: 2

/*
Explanation :

LOGIC BEHIND VERSION 2 (Simple Loop Approach):
1. Standard linear search algorithm
2. Compare each element with target using strict equality (===)
3. Return index immediately when match is found
4. Return -1 if element not found (JavaScript convention)
5. Time complexity O(n), space complexity O(1)

*/



// USING BUILT-IN indexOf METHOD
// ----------------------------------------------------------------------------------
function findIndexBuiltIn(arr, target) {
    // Step 1: Use JavaScript's built-in indexOf method
    // indexOf returns the first index where element is found, or -1 if not found
    let index = arr.indexOf(target);

    // Step 2: Return the index (could be -1 if not found)
    return index;
}

let test3 = [1, 2, 3, 4, 5];
let result3 = findIndexBuiltIn(test3, 4);
console.log(result3); // Output: 3

/*
Explanation :

LOGIC BEHIND VERSION 3 (Built-in indexOf):
1. Uses JavaScript's native indexOf method
2. Most concise implementation, single line of logic
3. Internally performs linear search like our manual versions
4. Returns -1 if element not found (same behavior as our manual version)
5. Highly optimized by JavaScript engine

*/



// FIND ALL OCCURRENCES (MULTIPLE INDICES)
// ----------------------------------------------------------------------------------
function findAllIndices(arr, target) {
    // Step 1: Create array to store all indices where target is found
    let indices = [];
    let indicesCount = 0; // Track how many indices we've found

    // Step 2: Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 3: Check if current element matches the target element
        if (currentElement === target) {
            // Step 4: If match found, add current index to indices array
            indices[indicesCount] = i;
            indicesCount++; // Increment count of found indices
        }
    }

    // Step 5: Return array of all indices (empty array if none found)
    return indices;
}

let test4 = [1, 2, 3, 2, 4, 2, 5];
let result4 = findAllIndices(test4, 2);
console.log(result4); // Output: [1, 3, 5]

/*
Explanation :

LOGIC BEHIND VERSION 4 (Find All Occurrences):
1. Instead of returning first match, find all occurrences
2. Store all matching indices in an array
3. Continue searching even after finding matches
4. Return array of all indices where target appears
5. Useful when element appears multiple times in array

*/
