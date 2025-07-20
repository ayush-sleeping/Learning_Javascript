// remove duplicates from array  :---------------------------------::

// BASIC MANUAL - Remove duplicates by checking each element
const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

// Create result array for unique elements
const unique = [];

// Check each element in original array
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    let alreadyExists = false;

    // Check if current number already exists in unique array
    for (let j = 0; j < unique.length; j++) {
        if (unique[j] === currentNumber) {
            alreadyExists = true;
            break; // Stop checking once found
        }
    }

    // If not found, add it to unique array
    if (alreadyExists === false) {
        unique[unique.length] = currentNumber; // Manual push
    }
}
console.log(unique);

/*
BASIC EXPLANATION:
1. Go through each element in original array
2. For each element, check if it already exists in result array
3. If not found, add it to result array
4. If found, skip it (it's a duplicate)
5. Result array contains only unique elements
Simple logic: "add only if not already there"
*/


// SUPER MANUAL - Without using break statement// -----------------------------------------------------------------------------
const testArray = [5, 3, 5, 7, 3, 9, 5];
const result = [];

// Go through each element
for (let i = 0; i < testArray.length; i++) {
    let current = testArray[i];
    let isDuplicate = false;

    // Check against all elements already in result
    for (let j = 0; j < result.length; j++) {
        if (result[j] === current) {
            isDuplicate = true;
        }
    }

    // Add only if not duplicate
    if (isDuplicate === false) {
        result[result.length] = current;
    }
}
console.log(result);

/*
SUPER MANUAL EXPLANATION:
- Even simpler - no break statement used
- Just check every element in result array
- Set flag to true if duplicate found
- Add to result only if flag is false
- Pure basic logic with minimal features
*/


// STRING VERSION - Remove duplicate strings
// -----------------------------------------------------------------------------
const words = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueWords = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let found = false;

    // Check if word already exists
    for (let j = 0; j < uniqueWords.length; j++) {
        if (uniqueWords[j] === word) {
            found = true;
        }
    }

    // Add if not found
    if (found === false) {
        uniqueWords[uniqueWords.length] = word;
    }
}
console.log(uniqueWords);

/*
STRING VERSION EXPLANATION:
- Exact same logic works for strings!
- String comparison using === operator
- Shows algorithm works for any data type
- Same manual array building approach
- No special string handling needed
*/
