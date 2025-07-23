// Count occurrences of each character  :
// --------------------------------------------------------------------------------------------------------------::



// MANUAL IMPLEMENTATION (NO BUILT-INS)
// ----------------------------------------------------------------------------------
function countCharacterOccurrencesManual(str) {
    // Step 1: Create arrays to store unique characters and their counts manually
    let characters = [];    // Array to store unique characters we find
    let counts = [];        // Array to store count for each unique character
    let uniqueCount = 0;    // Variable to track how many unique characters we have found

    // Step 2: Loop through each character of the input string
    for (let i = 0; i < getStringLength(str); i++) {
        let currentChar = str[i]; // Get current character we're processing
        let found = false;        // Flag to track if we found this character before

        // Step 3: Search through our existing unique characters
        for (let j = 0; j < uniqueCount; j++) {
            // Check if current character matches any existing unique character
            if (characters[j] === currentChar) {
                counts[j]++;     // Increment the count for this character
                found = true;    // Mark that we found the character
                break;           // Stop searching once we found it
            }
        }

        // Step 4: If character was not found in existing unique characters
        if (!found) {
            characters[uniqueCount] = currentChar; // Add new unique character
            counts[uniqueCount] = 1;               // Set its initial count to 1
            uniqueCount++;                         // Increase unique character counter
        }
    }

    // Step 5: Convert our arrays to object format for consistent return type
    let result = {};
    for (let i = 0; i < uniqueCount; i++) {
        result[characters[i]] = counts[i]; // Create object property with character as key and count as value
    }

    // Step 6: Return the character count object
    return result;
}

// Helper function to manually calculate string length without using .length property
function getStringLength(str) {
    let length = 0; // Start counting from 0

    // Keep checking characters until we hit undefined (end of string)
    while (str[length] !== undefined) {
        length++; // Increment length counter
    }

    return length; // Return the total length
}

let test3 = "programming";
let result3 = countCharacterOccurrencesManual(test3);
console.log(result3); // Output: {p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1}
/*
Explanation :

LOGIC BEHIND VERSION 3 (Manual Implementation):
1. Use two separate arrays: one for unique characters, one for their counts
2. For each character, search through existing unique characters
3. If found, increment corresponding count; if not, add new character
4. Track number of unique characters manually
5. Finally convert to object format for consistent return type
6. No built-in string methods, pure character-by-character processing

*/



// SIMPLE OBJECT APPROACH
function countCharacterOccurrences(str) {
    // Step 1: Create an empty object to store character frequencies
    let charCount = {};

    // Step 2: Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // Get current character

        // Step 3: Check if character already exists in our count object
        if (charCount[char]) {
            // If it exists, increment its count by 1
            charCount[char]++;
        } else {
            // If it doesn't exist, add it with count = 1
            charCount[char] = 1;
        }
    }

    // Step 4: Return the character count object
    return charCount;
}

// 🔍 Test Example
let test1 = "hello world";
let result1 = countCharacterOccurrences(test1);
console.log(result1); // Output: {h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1}
/*
Explanation :

LOGIC BEHIND VERSION 1 (Simple Object Approach):
1. Use an object where keys are characters and values are their counts
2. Loop through each character in the string
3. For each character, check if it exists in our count object
4. If exists, increment count; if not, initialize to 1
5. Return the complete character frequency object

*/



// USING SHORTHAND OPERATOR
// -------------------------------------------------------------------------
function countCharacterOccurrencesShort(str) {
    // Step 1: Create an empty object to store character frequencies
    let charCount = {};

    // Step 2: Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // Get current character

        // Step 3: Use shorthand operator to increment character count
        // (charCount[char] || 0) means: if character exists, use its value; otherwise use 0
        // Then add 1 to either the existing count or 0
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 4: Return the character count object
    return charCount;
}

let test2 = "javascript";
let result2 = countCharacterOccurrencesShort(test2);
console.log(result2); // Output: {j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1}

/*
Explanation :

LOGIC BEHIND VERSION 2 (Shorthand Operator):
1. Same concept as Version 1 but using shorthand notation
2. (charCount[char] || 0) returns existing count or 0 if undefined
3. Then we add 1 to either the existing count or 0
4. More concise way to write the same logic
5. Single line handles both initialization and increment

*/


// FILTER SPECIFIC CHARACTERS (LETTERS ONLY)
// ----------------------------------------------------------------------------------
function countLetterOccurrences(str) {
    // Step 1: Create an empty object to store letter frequencies
    let letterCount = {};

    // Step 2: Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); // Convert to lowercase

        // Step 3: Check if character is a letter (a-z)
        if (char >= 'a' && char <= 'z') {
            // Step 4: Count only if it's a letter
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
        // Step 5: Skip non-letter characters (spaces, numbers, symbols)
    }

    // Step 6: Return the letter count object
    return letterCount;
}

let test5 = "Hello World! 123";
let result5 = countLetterOccurrences(test5);
console.log(result5); // Output: {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

/*
Explanation :

LOGIC BEHIND VERSION 5 (Letters Only):
1. Same algorithm but adds character filtering
2. Only counts characters that are letters (a-z)
3. Ignores spaces, numbers, symbols, and punctuation
4. Useful for text analysis focusing only on alphabetic content
5. char >= 'a' && char <= 'z' checks if character is a lowercase letter

*/
