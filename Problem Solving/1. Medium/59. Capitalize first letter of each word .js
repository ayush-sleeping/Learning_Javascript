// capitalize first letter of each word  :
// --------------------------------------------------------------------------------------------------------------::

// Track word beginnings and capitalize them
const text = "hello world programming";
let result = "";
let isFirstLetter = true; // Track if we're at the start of a word

// Go through each character
for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char === " ") {
        // Space found - next letter will be start of new word
        result = result + char; // Add the space
        isFirstLetter = true; // Next non-space will be first letter
    } else {
        // Non-space character
        if (isFirstLetter === true) {
            // This is first letter of a word - capitalize it
            if (char >= "a" && char <= "z") {
                // Convert lowercase to uppercase (subtract 32 from ASCII)
                let upperChar = String.fromCharCode(char.charCodeAt(0) - 32);
                result = result + upperChar;
            } else {
                // Already uppercase or not a letter - keep as is
                result = result + char;
            }
            isFirstLetter = false; // No longer at word start
        } else {
            // This is not first letter - make it lowercase
            if (char >= "A" && char <= "Z") {
                // Convert uppercase to lowercase (add 32 to ASCII)
                let lowerChar = String.fromCharCode(char.charCodeAt(0) + 32);
                result = result + lowerChar;
            } else {
                // Already lowercase or not a letter - keep as is
                result = result + char;
            }
        }
    }
}
console.log(result);
/*
THE LOGIC:

WHAT WE'RE DOING:
Converting text to "Title Case" - first letter of each word is uppercase

THE CORE LOGIC:
1. Track whether we're at the beginning of a word
2. Space means "next letter will start new word"
3. First letter of word → make uppercase
4. Other letters in word → make lowercase

THE isFirstLetter FLAG:
- true = next non-space character should be capitalized
- false = we're in middle of word, make lowercase
- Resets to true after each space

MANUAL CASE CONVERSION:
- Lowercase to uppercase: subtract 32 from ASCII value
- Uppercase to lowercase: add 32 to ASCII value
- 'a' = 97, 'A' = 65, difference = 32

EXAMPLE TRACE: "hi world"
- h: isFirstLetter=true → capitalize → H, set isFirstLetter=false
- i: isFirstLetter=false → lowercase → i
- (space): add space, set isFirstLetter=true
- w: isFirstLetter=true → capitalize → W, set isFirstLetter=false
- o,r,l,d: isFirstLetter=false → lowercase → o,r,l,d
- Result: "Hi World"
*/



// HANDLE MULTIPLE SPACES
// -------------------------------------------------------------------------------
const messyText = "hello    world   javascript";
let cleanResult = "";
let atWordStart = true;

for (let i = 0; i < messyText.length; i++) {
    let ch = messyText[i];

    if (ch === " ") {
        // Add space and prepare for next word
        cleanResult = cleanResult + ch;
        atWordStart = true; // Next non-space will be word start
    } else {
        // Non-space character
        if (atWordStart === true) {
            // Capitalize first letter of word
            if (ch >= "a" && ch <= "z") {
                cleanResult = cleanResult + String.fromCharCode(ch.charCodeAt(0) - 32);
            } else {
                cleanResult = cleanResult + ch;
            }
            atWordStart = false;
        } else {
            // Lowercase middle letters
            if (ch >= "A" && ch <= "Z") {
                cleanResult = cleanResult + String.fromCharCode(ch.charCodeAt(0) + 32);
            } else {
                cleanResult = cleanResult + ch;
            }
        }
    }
}
console.log(cleanResult);
/*
EXPLANATION:
Real-world text often has irregular spacing

WHY IT WORKS:
- Multiple spaces are just multiple space characters
- Each space sets atWordStart = true
- Only the FIRST non-space after spaces gets capitalized
- Handles any amount of spacing naturally

EXAMPLE: "hello    world"
- "hello" → "Hello" (normal processing)
- "    " → "    " (multiple spaces, all set flag to true)
- "w" → "W" (first letter after spaces, gets capitalized)
- "orld" → "orld" (rest of word, stays lowercase)
*/



// HANDLE PUNCTUATION
// -------------------------------------------------------------------------------
const punctuated = "hello, world! how are you?";
let punctResult = "";
let newWord = true;

for (let i = 0; i < punctuated.length; i++) {
    let character = punctuated[i];

    // Check if character is a letter
    let isLetter = false;
    if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
        isLetter = true;
    }

    if (isLetter === false) {
        // Non-letter (space, punctuation) - word boundary
        punctResult = punctResult + character;
        newWord = true; // Next letter will start new word
    } else {
        // Letter character
        if (newWord === true) {
            // First letter of word - capitalize
            if (character >= "a" && character <= "z") {
                punctResult = punctResult + String.fromCharCode(character.charCodeAt(0) - 32);
            } else {
                punctResult = punctResult + character;
            }
            newWord = false;
        } else {
            // Middle of word - lowercase
            if (character >= "A" && character <= "Z") {
                punctResult = punctResult + String.fromCharCode(character.charCodeAt(0) + 32);
            } else {
                punctResult = punctResult + character;
            }
        }
    }
}
console.log(punctResult);
/*
EXPLANATION:
Punctuation marks should also trigger new words

LETTER DETECTION:
- (char >= "a" && char <= "z") checks lowercase letters
- (char >= "A" && char <= "Z") checks uppercase letters
- Everything else is non-letter (spaces, punctuation, numbers)

WORD BOUNDARIES:
- Any non-letter character creates word boundary
- Comma, period, exclamation mark all start new words
- More robust than just checking spaces

EXAMPLE: "hello, world!"
- "hello" → "Hello"
- "," → "," (punctuation, sets newWord = true)
- " " → " " (space, keeps newWord = true)
- "world" → "World" (first letter after punctuation)
- "!" → "!" (punctuation)
*/
