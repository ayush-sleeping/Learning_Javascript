// check if string contains substring  :
// --------------------------------------------------------------------------------------------------------------::

// Check if main string contains substring
const mainString = "hello world programming";
const searchFor = "world";
let found = false;

// Calculate string lengths manually
let mainLength = 0;
while (mainString[mainLength] !== undefined) {
    mainLength = mainLength + 1;
}

let searchLength = 0;
while (searchFor[searchLength] !== undefined) {
    searchLength = searchLength + 1;
}

// Check each possible starting position in main string
for (let i = 0; i <= mainLength - searchLength; i++) {
    let matches = true;

    // Check if substring matches at this position
    for (let j = 0; j < searchLength; j++) {
        if (mainString[i + j] !== searchFor[j]) {
            matches = false;
            break; // Stop checking this position
        }
    }

    // If all characters matched, we found it
    if (matches === true) {
        found = true;
        break; // Stop searching
    }
}
console.log(found);
/*
EXPLANATION:
Check if smaller string exists inside bigger string

STEPS:
1. Calculate lengths of both strings manually
2. Try each possible starting position in main string
3. At each position, check if all characters of substring match
4. If complete match found, set found = true
5. Result: true if substring exists, false if not

EXAMPLE:
Main: "hello world"
Search: "world"
- Position 0: "hello" ≠ "world"
- Position 1: "ello " ≠ "world"
- Position 6: "world" = "world" ✓ FOUND!

WHY WE STOP AT mainLength - searchLength:
- If main string is 10 chars and search is 5 chars
- Last possible start position is 5 (positions 5,6,7,8,9)
- Position 6 would go beyond string bounds
*/



// Using basic logic
// ---------------------------------------------------------------------
const text = "javascript programming";
const target = "script";
let exists = false;

// Simple nested loop approach
for (let i = 0; i < text.length; i++) {
    let match = true;

    // Check if target string starts at position i
    for (let j = 0; j < target.length; j++) {
        // Check if we're within bounds and characters match
        if (i + j >= text.length || text[i + j] !== target[j]) {
            match = false;
            break;
        }
    }

    if (match === true) {
        exists = true;
        break;
    }
}
console.log(`Exists: ${exists}`);
/*
EXPLANATION:
Cleaner approach using .length property but still manual logic

STEPS:
1. Try each starting position in main text
2. At each position, check if target matches character by character
3. Include bounds checking: i + j < text.length
4. If complete match found, set exists = true

BOUNDS CHECKING:
- i + j >= text.length prevents reading beyond string
- Ensures we don't access undefined characters
- More robust than first version
*/



// Ignore uppercase/lowercase differences
// ---------------------------------------------------------------------
const sentence = "Hello JavaScript World";
const pattern = "javascript";
let foundIgnoreCase = false;

for (let i = 0; i <= sentence.length - pattern.length; i++) {
    let allMatch = true;

    for (let j = 0; j < pattern.length; j++) {
        // Convert both characters to lowercase for comparison
        let mainChar = sentence[i + j];
        let patternChar = pattern[j];

        // Manual lowercase conversion
        if (mainChar >= "A" && mainChar <= "Z") {
            // Convert uppercase to lowercase by adding 32 to ASCII value
            mainChar = String.fromCharCode(mainChar.charCodeAt(0) + 32);
        }

        if (patternChar >= "A" && patternChar <= "Z") {
            patternChar = String.fromCharCode(patternChar.charCodeAt(0) + 32);
        }

        if (mainChar !== patternChar) {
            allMatch = false;
            break;
        }
    }

    if (allMatch === true) {
        foundIgnoreCase = true;
        break;
    }
}
console.log(`Sentence: "${sentence}"`);
console.log(`Pattern: "${pattern}"`);
console.log(`Found (ignore case): ${foundIgnoreCase}`);
/*
EXPLANATION:
Convert characters to same case before comparing

MANUAL LOWERCASE CONVERSION:
- Check if character is uppercase: char >= "A" && char <= "Z"
- ASCII value of 'A' is 65, 'a' is 97
- Difference is 32, so add 32 to convert uppercase to lowercase
- String.fromCharCode() converts ASCII number back to character

EXAMPLE:
"Hello JavaScript" searching for "javascript"
- H → h, e → e, l → l, l → l, o → o (no match with "javas")
- J → j, a → a, v → v, a → a, S → s, c → c, r → r, i → i, p → p, t → t ✓

WHY MANUAL CONVERSION:
- Avoids using .toLowerCase() built-in method
- Shows understanding of ASCII values
- More control over character handling
*/
