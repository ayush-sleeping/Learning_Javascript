// find frequency of elements in array  :
// --------------------------------------------------------------------------------------------------------------::

// SIMPLE OBJECT APPROACH ::
function findFrequency(arr) {
    // Step 1: Create an empty object to store frequency of elements
    let frequency = {};

    // Step 2: Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]; // Get current element

        // Step 3: Check if element already exists as a key in the object
        if (frequency[element]) {
            // If it exists, increment its count by 1
            frequency[element]++;
        } else {
            // If it doesn't exist, add it with count = 1
            frequency[element] = 1;
        }
    }

    // Step 4: Return the frequency object
    return frequency;
}

// 🔍 Test Example
let test1 = [1, 2, 3, 2, 1, 3, 1];
let result1 = findFrequency(test1);
console.log(result1); // Output: {1: 3, 2: 2, 3: 2}

/*
Explanation :

LOGIC BEHIND VERSION 1 (Object Approach):
1. Use an object to store each element as key and its count as value
2. Loop through the array once
3. For each element, check if it exists in frequency object
4. If exists, increment the count; if not, initialize to 1
5. Return the frequency object with all counts

*/



// USING SHORTHAND OPERATOR
// -------------------------------------------------------------------------
function findFrequencyShort(arr) {
    // Step 1: Create an empty object to store frequency of elements
    let frequency = {};

    // Step 2: Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]; // Get current element

        // Step 3: Use shorthand operator to increment frequency
        // (frequency[element] || 0) means: if element exists, use its value; otherwise use 0
        // Then add 1 to either the existing count or 0
        frequency[element] = (frequency[element] || 0) + 1;
    }

    // Step 4: Return the frequency object
    return frequency;
}

let test2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result2 = findFrequencyShort(test2);
console.log(result2); // {apple: 3, banana: 2, orange: 1}

/*
Explanation :

LOGIC BEHIND VERSION 2 (Shorthand Operator):
1. Same concept as Version 1 but using shorthand notation
2. (frequency[element] || 0) returns existing count or 0 if undefined
3. Then we add 1 to either the existing count or 0
4. More concise way to write the same logic
5. Works with any data type (numbers, strings, etc.)

*/



// MANUAL IMPLEMENTATION (NO OBJECTS)
// ----------------------------------------------------------------------------------
function findFrequencyManual(arr) {
    // Step 1: Create arrays to store unique elements and their counts manually
    let elements = [];   // Array to store unique elements we find
    let counts = [];     // Array to store count for each unique element
    let uniqueCount = 0; // Variable to track how many unique elements we have found

    // Step 2: Loop through each element of the input array
    for (let i = 0; i < getArrayLength(arr); i++) {
        let currentElement = arr[i]; // Get current element we're processing
        let found = false;           // Flag to track if we found this element before

        // Step 3: Search through our existing unique elements
        for (let j = 0; j < uniqueCount; j++) {
            // Check if current element matches any existing unique element
            if (elements[j] === currentElement) {
                counts[j]++;     // Increment the count for this element
                found = true;    // Mark that we found the element
                break;           // Stop searching once we found it
            }
        }

        // Step 4: If element was not found in existing unique elements
        if (!found) {
            elements[uniqueCount] = currentElement; // Add new unique element
            counts[uniqueCount] = 1;                // Set its initial count to 1
            uniqueCount++;                          // Increase unique element counter
        }
    }

    // Step 5: Convert our arrays to object format for consistent return type
    let result = {};
    for (let i = 0; i < uniqueCount; i++) {
        result[elements[i]] = counts[i]; // Create object property with element as key and count as value
    }

    // Step 6: Return the frequency object
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

let test3 = [5, 1, 3, 1, 5, 3, 1, 7];
let result3 = findFrequencyManual(test3);
console.log(result3); // {5: 2, 1: 3, 3: 2, 7: 1}

/*
Explanation :

LOGIC BEHIND VERSION 3 (Manual Implementation):
1. Use two separate arrays: one for unique elements, one for their counts
2. For each element, search through existing unique elements
3. If found, increment corresponding count; if not, add new element
4. Track number of unique elements manually
5. Finally convert to object format for consistent return type
6. No built-in object methods, pure array manipulation


*/
