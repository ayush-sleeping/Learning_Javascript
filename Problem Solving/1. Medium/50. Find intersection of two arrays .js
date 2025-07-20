// find intersection of two arrays  :
// --------------------------------------------------------------------------------------------------------------::

// BASIC MANUAL - Find elements that exist in both arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const intersection = []; // Create result array for common elements

// Check each element in first array
for (let i = 0; i < array1.length; i++) {
    let element = array1[i];
    let foundInSecond = false;

    // Check if this element exists in second array
    for (let j = 0; j < array2.length; j++) {
        if (array2[j] === element) {
            foundInSecond = true;
            break; // Stop searching once found
        }
    }

    // If found in both arrays, add to result
    if (foundInSecond === true) {
        intersection[intersection.length] = element; // Manual push
    }
}
console.log(intersection);

/*
BASIC EXPLANATION:
Intersection = elements that appear in BOTH arrays
1. Look at each element in first array
2. Check if that element also exists in second array
3. If found in both, add to result array
4. Result contains only common elements
Simple rule: "keep only elements that exist in both arrays"
*/

// STRING ARRAYS - Find common words
// --------------------------------------------------------------------------------
const words1 = ["apple", "banana", "cherry", "date"];
const words2 = ["banana", "date", "elderberry", "fig"];
const commonWords = [];

for (let i = 0; i < words1.length; i++) {
    let word = words1[i];
    let exists = false;
    // Search for word in second array
    for (let j = 0; j < words2.length; j++) {
        if (words2[j] === word) {
            exists = true;
        }
    }
    // Add if found in both
    if (exists === true) {
        commonWords[commonWords.length] = word;
    }
}
console.log("Common words:", commonWords);

/*
STRING ARRAYS EXPLANATION:
- Same logic works for strings
- String comparison using === operator
- Find words that appear in both lists
- Shows algorithm works for any data type
*/

// AVOID DUPLICATES - Don't add same element twice
// --------------------------------------------------------------------------------
const numbers1 = [1, 2, 2, 3, 4];
const numbers2 = [2, 2, 3, 5, 6];
const unique = [];

for (let i = 0; i < numbers1.length; i++) {
    let num = numbers1[i];
    let inSecondArray = false;
    let alreadyAdded = false;

    // Check if exists in second array
    for (let j = 0; j < numbers2.length; j++) {
        if (numbers2[j] === num) {
            inSecondArray = true;
        }
    }

    // Check if already added to result
    for (let k = 0; k < unique.length; k++) {
        if (unique[k] === num) {
            alreadyAdded = true;
        }
    }

    // Add only if in both arrays AND not already added
    if (inSecondArray === true && alreadyAdded === false) {
        unique[unique.length] = num;
    }
}
console.log("Unique intersection:", unique);

/*
AVOID DUPLICATES EXPLANATION:
- Prevents adding same element multiple times
- First check: is element in second array?
- Second check: is element already in result?
- Add only if both conditions are met
- Result has each common element only once
*/

// MOST MANUAL - Without using length property
// --------------------------------------------------------------------------------
const firstArray = [10, 20, 30, 40];
const secondArray = [20, 30, 50, 60];

// Calculate sizes manually
let firstSize = 0;
while (firstArray[firstSize] !== undefined) {
    firstSize = firstSize + 1;
}

let secondSize = 0;
while (secondArray[secondSize] !== undefined) {
    secondSize = secondSize + 1;
}

// Create result manually
const result = new Array();
let resultIndex = 0;

// Process each element in first array
for (let i = 0; i < firstSize; i++) {
    let current = firstArray[i];
    let foundMatch = false;

    // Search in second array manually
    for (let j = 0; j < secondSize; j++) {
        if (secondArray[j] === current) {
            foundMatch = true;
        }
    }

    // Add to result if match found
    if (foundMatch === true) {
        result[resultIndex] = current;
        resultIndex = resultIndex + 1;
    }
}
console.log("Manual result:", result);

/*
MOST MANUAL EXPLANATION:
- Calculate array sizes manually (no .length)
- Manual result array creation and indexing
- Manual searching through both arrays
- Track result index manually
- Shows complete manual approach
- Same logic but avoiding all JavaScript conveniences
*/
