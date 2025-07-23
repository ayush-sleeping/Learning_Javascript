// convert array of string to uppercase  :
// --------------------------------------------------------------------------------------------------------------::

function convertToUpperCase(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentString = arr[i];
        let newString = "";

        for (let j = 0; j < currentString.length; j++) {
            let char = currentString[j];

            if (char >= 'a' && char <= 'z') {
                let ascii = char.charCodeAt(0);
                let upperChar = String.fromCharCode(ascii - 32);
                newString += upperChar;
            } else {
                newString += char;
            }
        }

        result.push(newString);
    }

    return result;
}
let testWords = ["hello", "world", "Test123", "abc!@#"];
console.log(convertToUpperCase(testWords));
/*
Explanation :

LOGIC BEHIND VERSION 1:
1. We need to process each string in the array one by one
2. For each string, we examine every single character
3. If character is lowercase (a-z), we convert it to uppercase
4. ASCII conversion: lowercase letter - 32 = uppercase letter
5. We build a new string character by character
6. Finally, we collect all converted strings in a result array


function convertToUpperCase(arr) {
    // Create an empty array to store our final results
    let result = [];

    // Start a loop to go through each string in the input array
    // i starts at 0 and goes until we reach the end of the array
    for (let i = 0; i < arr.length; i++) {
        // Get the current string we're working on (at position i)
        let currentString = arr[i];

        // Create an empty string to build our uppercase version
        let newString = "";

        // Start another loop to go through each character in current string
        // j starts at 0 and goes until we reach the end of the string
        for (let j = 0; j < currentString.length; j++) {
            // Get the current character we're examining (at position j)
            let char = currentString[j];

            // Check if this character is a lowercase letter
            // 'a' to 'z' comparison works because of ASCII values
            if (char >= 'a' && char <= 'z') {
                // Get the ASCII number value of this character
                let ascii = char.charCodeAt(0);

                // Convert to uppercase by subtracting 32 from ASCII value
                // (lowercase 'a'=97, uppercase 'A'=65, difference is 32)
                let upperChar = String.fromCharCode(ascii - 32);

                // Add this uppercase character to our new string
                newString += upperChar;
            } else {
                // If it's not lowercase (already uppercase, number, symbol)
                // just add it as-is to our new string
                newString += char;
            }
        }

        // After processing all characters, add the complete uppercase string
        // to our result array
        result.push(newString);
    }

    // Return the array containing all uppercase strings
    return result;
}

// Test the function with sample data
let testWords = ["hello", "world", "Test123", "abc!@#"];
console.log(convertToUpperCase(testWords));

*/



// ----------------------------------------------------------------------------------
function toUpperCaseChar(c) {
    const ascii = c.charCodeAt(0);
    if (ascii >= 97 && ascii <= 122) {
        return String.fromCharCode(ascii - 32);
    }
    return c;
}

function convertArrayToUpperCase(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let upperStr = "";

        for (let j = 0; j < str.length; j++) {
            upperStr += toUpperCaseChar(str[j]);
        }

        result.push(upperStr);
    }

    return result;
}
const input = ["hello", "world", "js", "rocks123"];
const output = convertArrayToUpperCase(input);
console.log(output); // ['HELLO', 'WORLD', 'JS', 'ROCKS123']
/*
Explanation :

LOGIC BEHIND VERSION 2:
1. SEPARATION OF CONCERNS: Split the work into two functions
2. toUpperCaseChar() handles single character conversion
3. convertArrayToUpperCase() handles array processing
4. This makes code more modular and reusable
5. Helper function can be tested independently
6. Main function focuses only on array/string iteration

// Helper function to convert a single character to uppercase
function toUpperCaseChar(c) {
    // Get the ASCII value of the character
    const ascii = c.charCodeAt(0);

    // Check if ASCII value is between 97-122 (lowercase a-z range)
    if (ascii >= 97 && ascii <= 122) {
        // Convert to uppercase by subtracting 32 and return the character
        return String.fromCharCode(ascii - 32);
    }

    // If not lowercase, return the character unchanged
    return c;
}

// Main function that uses the helper function
function convertArrayToUpperCase(arr) {
    // Create empty array to store results
    let result = [];

    // Loop through each string in the input array
    for (let i = 0; i < arr.length; i++) {
        // Get current string from array
        let str = arr[i];

        // Initialize empty string to build uppercase version
        let upperStr = "";

        // Loop through each character in current string
        for (let j = 0; j < str.length; j++) {
            // Use our helper function to convert character and add to string
            // This makes the code cleaner and more readable
            upperStr += toUpperCaseChar(str[j]);
        }

        // Add the completed uppercase string to result array
        result.push(upperStr);
    }

    // Return array of all uppercase strings
    return result;
}

// Test the modular approach
const input = ["hello", "world", "js", "rocks123"];
const output = convertArrayToUpperCase(input);
console.log(output); // ['HELLO', 'WORLD', 'JS', 'ROCKS123']
 */



// Modern JavaScript style using map, split, join
// ----------------------------------------------------------------------------------
function convertToUpperCaseFunctional(arr) {
    return arr.map(str => {
        return str.split('').map(char => {
            return (char >= 'a' && char <= 'z') ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
        }).join('');
    });
}
const inputArray = ["hello", "world", "js", "rocks123"];
const outputArray = convertToUpperCaseFunctional(inputArray);
console.log(outputArray); // ['HELLO', 'WORLD', 'JS', 'ROCK
/*
Explanation :

LOGIC BEHIND VERSION 3:
1. FUNCTIONAL PROGRAMMING: Uses map() instead of manual loops
2. CHAIN OF OPERATIONS: arr.map -> str.split -> char.map -> join
3. NO MUTATIONS: Creates new arrays/strings instead of modifying existing ones
4. DECLARATIVE STYLE: Describes WHAT to do, not HOW to do it

STEP-BY-STEP BREAKDOWN:
- arr.map(): "Transform each string in this array"
- str.split(''): "Break string into array of characters"
- char.map(): "Transform each character"
- join(''): "Put characters back together into string"


// Modern JavaScript style using map, split, join
function convertToUpperCaseFunctional(arr) {
    // Use map() to transform each string in the array
    return arr.map(str => {
        // For each string, split it into individual characters array
        // Then map over each character to transform it
        return str.split('').map(char => {
            // For each character, check if it's lowercase and convert
            // This is a ternary operator: condition ? true_value : false_value
            return (char >= 'a' && char <= 'z')
                ? String.fromCharCode(char.charCodeAt(0) - 32)  // Convert to uppercase
                : char;  // Keep as-is
        }).join('');  // Join all characters back into a string
    });
}

// Test the functional approach
const inputArray = ["hello", "world", "js", "rocks123"];
const outputArray = convertToUpperCaseFunctional(inputArray);
console.log(outputArray); // ['HELLO', 'WORLD', 'JS', 'ROCKS123']
 */
