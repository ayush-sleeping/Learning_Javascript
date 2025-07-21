// convert string to title case  :
// --------------------------------------------------------------------------------------------------------------::

// Convert each word's first letter to uppercase
const text = "hello world programming";
let result = "";
let isFirstLetter = true; // Track if we're at the start of a word

// Go through each character in the string
for (let i = 0; i < text.length; i++) {
    let char = text[i]; // Get current character

    if (char === " ") {
        result = result + char; // Add space as-is
        isFirstLetter = true; // Next non-space character will be first letter of new word
    } else {
        if (isFirstLetter === true) {
            // Convert to uppercase (first letter of word)
            if (char >= "a" && char <= "z") {
                // Convert lowercase to uppercase by subtracting 32
                let upperChar = String.fromCharCode(char.charCodeAt(0) - 32);
                result = result + upperChar;
            } else {
                result = result + char; // Already uppercase or not a letter
            }
            isFirstLetter = false; // Next letters in this word should be lowercase
        } else {
            // Convert to lowercase (not first letter of word)
            if (char >= "A" && char <= "Z") {
                // Convert uppercase to lowercase by adding 32
                let lowerChar = String.fromCharCode(char.charCodeAt(0) + 32);
                result = result + lowerChar;
            } else {
                result = result + char; // Already lowercase or not a letter
            }
        }
    }
}
console.log(result);
/*
EXPLANATION :

WHAT IS TITLE CASE:
- First letter of each word is uppercase
- All other letters are lowercase
- Spaces separate words
- Example: "hello world" → "Hello World"

THE ALGORITHM:
1. Track whether we're at the start of a word
2. For each character:
   - If space: add it and mark next letter as "first of word"
   - If first letter of word: make it uppercase
   - If not first letter: make it lowercase

KEY VARIABLE: isFirstLetter
- true = next non-space character should be uppercase
- false = current character should be lowercase
- Reset to true after each space

MANUAL CASE CONVERSION:
- Lowercase to uppercase: subtract 32 from ASCII
- Uppercase to lowercase: add 32 to ASCII
- 'a' = 97, 'A' = 65, difference = 32
*/



// HANDLE PUNCTUATION :
// -------------------------------------------------------------------------------
const sentence = "hello, world! how are you?";
let cleanResult = "";
let atWordStart = true;

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    // Check if character is a letter
    let isLetter = false;
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        isLetter = true;
    }

    if (isLetter === true) {
        if (atWordStart === true) {
            // First letter of word - make uppercase
            if (char >= "a" && char <= "z") {
                let upperChar = String.fromCharCode(char.charCodeAt(0) - 32);
                cleanResult = cleanResult + upperChar;
            } else {
                cleanResult = cleanResult + char; // Already uppercase
            }
            atWordStart = false; // Rest of word should be lowercase
        } else {
            // Not first letter - make lowercase
            if (char >= "A" && char <= "Z") {
                let lowerChar = String.fromCharCode(char.charCodeAt(0) + 32);
                cleanResult = cleanResult + lowerChar;
            } else {
                cleanResult = cleanResult + char; // Already lowercase
            }
        }
    } else {
        // Not a letter (space, punctuation, number)
        cleanResult = cleanResult + char; // Add as-is
        atWordStart = true; // Next letter will start a new word
    }
}
console.log(cleanResult);
/*
PUNCTUATION HANDLING EXPLANATION:
Real sentences have commas, periods, exclamation marks

KEY CHANGES:
- Check if character is a letter before processing
- Non-letters (spaces, punctuation) all act as word separators
- Add non-letters as-is to the result

EXAMPLE: "hello, world!"
- "hello" → "Hello" (normal word processing)
- "," → "," (add comma as-is, mark next letter as word start)
- " " → " " (add space as-is, confirm next letter as word start)
- "world" → "World" (normal word processing)
- "!" → "!" (add exclamation as-is)

*/



// MOST MANUAL - Avoid all built-in methods// -------------------------------------------------------------------------------
const originalText = "programming IS fun";

// Calculate string length manually
let textLength = 0;
while (originalText[textLength] !== undefined) {
    textLength = textLength + 1;
}

let finalResult = "";
let firstLetterOfWord = true;

// Process each character manually
for (let position = 0; position < textLength; position++) {
    let currentChar = originalText[position];

    if (currentChar === " ") {
        // Space - add it and mark next as word start
        finalResult = finalResult + currentChar;
        firstLetterOfWord = true;
    } else {
        // Check if it's a letter manually
        let isLowercase = false;
        let isUppercase = false;

        if (currentChar >= "a" && currentChar <= "z") {
            isLowercase = true;
        }
        if (currentChar >= "A" && currentChar <= "Z") {
            isUppercase = true;
        }

        if (firstLetterOfWord === true) {
            // Should be uppercase
            if (isLowercase === true) {
                // Convert to uppercase
                let asciiValue = currentChar.charCodeAt(0);
                let upperAscii = asciiValue - 32;
                let upperChar = String.fromCharCode(upperAscii);
                finalResult = finalResult + upperChar;
            } else {
                // Already uppercase or not a letter
                finalResult = finalResult + currentChar;
            }
            firstLetterOfWord = false;
        } else {
            // Should be lowercase
            if (isUppercase === true) {
                // Convert to lowercase
                let asciiValue = currentChar.charCodeAt(0);
                let lowerAscii = asciiValue + 32;
                let lowerChar = String.fromCharCode(lowerAscii);
                finalResult = finalResult + lowerChar;
            } else {
                // Already lowercase or not a letter
                finalResult = finalResult + currentChar;
            }
        }
    }
}
console.log(finalResult);

/*
MOST MANUAL EXPLANATION:
Shows complete understanding without any JavaScript conveniences

WHAT WE AVOID:
- .length property (calculate manually)
- .toUpperCase() / .toLowerCase() methods
- Complex boolean expressions
- Any built-in string methods

MANUAL TECHNIQUES:
- while (string[i] !== undefined) for length
- Separate checks for uppercase/lowercase
- Manual ASCII arithmetic
- Step-by-step character processing

INTERVIEW GOLD:
Demonstrates deep understanding of:
- Character encoding (ASCII values)
- String manipulation without helpers
- Algorithm logic without shortcuts
- Edge case handling
*/
