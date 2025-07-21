// find union of two arrays  :
// --------------------------------------------------------------------------------------------------------------::

// Simple arrays to work with
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const union = [];

// Add ALL elements from first array (no checking needed)
for (let i = 0; i < array1.length; i++) {
    union[union.length] = array1[i];
}
// Add elements from second array ONLY if not already there
for (let i = 0; i < array2.length; i++) {
    let found = false;
    // Check if element already exists in union
    for (let j = 0; j < union.length; j++) {
        if (union[j] === array2[i]) {
            found = true;
            break; // Stop checking once found
        }
    }
    // Add only if not found
    if (found === false) {
        union[union.length] = array2[i];
    }
}
console.log(union);
/*
EXPLANATION:
Union = combine both arrays but keep each element only once

SIMPLE STEPS:
1. Copy all elements from first array to result
2. Look at each element in second array
3. If element is NOT already in result, add it
4. If element IS already in result, skip it
5. Final result has all unique elements from both arrays

- First array: just copy everything (no duplicate checking)
- Second array: only check against what's already in result
- Less confusing logic for beginners
- Same result, easier to understand

EXAMPLE:
Array 1: [1, 2, 3, 4] → copy all → union: [1, 2, 3, 4]
Array 2: [3, 4, 5, 6] → check each:
- 3: already in union, skip
- 4: already in union, skip
- 5: not in union, add → union: [1, 2, 3, 4, 5]
- 6: not in union, add → union: [1, 2, 3, 4, 5, 6]
*/



// ---------------------------------------------------------------------
const array3 = [1, 2, 3, 4];
const array4 = [3, 4, 5, 6];
const union2 = [];                          // Create result array for union
for (let i = 0; i < array3.length; i++) {   // First, add all elements from array1
    let element = array3[i];
    let alreadyExists = false;

    for ( let j = 0; j < union2.length; j++) {  // Check if element already in union
        if (union2[j] === element) {
            alreadyExists = true;
            break;
        }
    }

    if (alreadyExists === false) {         // Add if not already present
        union2[union2.length] = element;   // Manual push
    }
}

for (let i = 0; i < array4.length; i++) {  // Then, add elements from array2 (if not already present)
    let element = array4[i];
    let alreadyExists = false;

    for (let j = 0; j < union2.length; j++) {  // Check if element already in union
        if (union2[j] === element) {
            alreadyExists = true;
            break;
        }
    }

    if (alreadyExists === false) {         // Add if not already present
        union2[union2.length] = element;
    }
}
console.log(union2);
/*
EXPLANATION - MACHINE CODING APPROACH:
Union = all unique elements from both arrays (no duplicates)

STEPS:
1. Start with empty result array
2. Add all elements from first array (checking for duplicates)
3. Add all elements from second array (checking for duplicates)
4. Result contains all unique elements from both arrays
*/



// OPTIMIZED MANUAL - Reduce duplicate checking
// ---------------------------------------------------------------------
const nums1 = [10, 20, 30, 40];
const nums2 = [30, 40, 50, 60];
const result = [];

// Add ALL elements from first array (no checking needed)
for (let i = 0; i < nums1.length; i++) {
    result[result.length] = nums1[i];
}

// Add elements from second array ONLY if not in first array
for (let i = 0; i < nums2.length; i++) {
    let element = nums2[i];
    let foundInFirst = false;

    // Check if element exists in first array
    for (let j = 0; j < nums1.length; j++) {
        if (nums1[j] === element) {
            foundInFirst = true;
            break;
        }
    }

    // Add only if not found in first array
    if (foundInFirst === false) {
        result[result.length] = element;
    }
}
console.log(result);

/*
OPTIMIZATION:
- First array: add all elements directly (no duplicates within same array)
- Second array: only add if not already in first array
- Reduces number of checks needed
*/



// STRING ARRAYS - Union of word lists
// ---------------------------------------------------------------------
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "banana", "potato", "apple"];
const allFood = [];

// Add all fruits first
for (let i = 0; i < fruits.length; i++) {
    allFood[allFood.length] = fruits[i];
}

// Add vegetables if not already present
for (let i = 0; i < vegetables.length; i++) {
    let veggie = vegetables[i];
    let isDuplicate = false;

    // Check against fruits (already in allFood)
    for (let j = 0; j < fruits.length; j++) {
        if (fruits[j] === veggie) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate === false) {
        allFood[allFood.length] = veggie;
    }
}
console.log(allFood);
/*
STRING ARRAYS EXPLANATION:
- Same algorithm works for strings
- Shows versatility of approach
- Real-world example with food categories
- Demonstrates algorithm works with different data types
*/
