// get unique characters from string  :
// --------------------------------------------------------------------------------------------------------------::

// Add characters only if not already present
const text = "programming";
let uniqueChars = ""; // Result string with unique characters

// Go through each character in the original string
for (let i = 0; i < text.length; i++) {
    let currentChar = text[i]; // Get current character
    let alreadyExists = false; // Flag to check if character exists

    // Check if this character is already in our result
    for (let j = 0; j < uniqueChars.length; j++) {
        if (uniqueChars[j] === currentChar) {
            alreadyExists = true; // Found duplicate
            break; // Stop checking, we found it
        }
    }

    // Add character only if it's not already there
    if (alreadyExists === false) {
        uniqueChars = uniqueChars + currentChar; // Add to result
    }
}
console.log(uniqueChars);
/*
APPROACH:
"I'll check each character and add it only if it's not already in my result"

ALGORITHM STEPS:
1. Go through each character in original string
2. Check if that character is already in result string
3. If not found, add it to result
4. If found, skip it (it's a duplicate)
5. Final result has each character only once

EXAMPLE WITH "programming":
- p: not in result → add → result: "p"
- r: not in result → add → result: "pr"
- o: not in result → add → result: "pro"
- g: not in result → add → result: "prog"
- r: already in result → skip
- a: not in result → add → result: "proga"
- m: not in result → add → result: "progam"
- m: already in result → skip
- i: not in result → add → result: "progami"
- n: not in result → add → result: "progamin"
- g: already in result → skip

FINAL: "progamin"
*/



// ARRAY-BASED APPROACH
// ----------------------------------------------------------------------------
const source = "javascript";
const uniqueArray = []; // Store unique characters in array

for (let i = 0; i < source.length; i++) {
    let character = source[i];
    let isDuplicate = false;

    // Check if character already in array
    for (let j = 0; j < uniqueArray.length; j++) {
        if (uniqueArray[j] === character) {
            isDuplicate = true;
            break;
        }
    }

    // Add if not duplicate
    if (isDuplicate === false) {
        uniqueArray[uniqueArray.length] = character; // Manual push
    }
}

// Convert array back to string
let arrayResult = "";
for (let i = 0; i < uniqueArray.length; i++) {
    arrayResult = arrayResult + uniqueArray[i];
}
console.log(arrayResult);

/*
ARRAY-BASED EXPLANATION:
"Alternative approach using array to collect unique characters"

WHY USE ARRAY APPROACH:
- Sometimes easier to work with arrays
- Can access individual unique characters later
- Shows different problem-solving approaches
- Good for follow-up questions about character positions

*/
