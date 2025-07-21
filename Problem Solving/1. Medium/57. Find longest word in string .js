// find longest word in string  :
// --------------------------------------------------------------------------------------------------------------::

// Extract words and find longest one
const sentence = "JavaScript is a powerful programming language";
const words = []; // Array to store individual words
let currentWord = ""; // Build current word character by character
let longestWord = ""; // Track the longest word found
let longestLength = 0; // Track length of longest word

// Step 1: Extract words from sentence
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]; // Get current character

    if (char === " ") { // Space means end of current word
        if (currentWord !== "") { // If we have a word
            words[words.length] = currentWord; // Add word to array
            currentWord = ""; // Reset for next word
        }
    } else {
        currentWord = currentWord + char; // Add character to current word
    }
}

// Don't forget the last word (no space after it)
if (currentWord !== "") {
    words[words.length] = currentWord;
}

// Step 2: Find longest word
for (let i = 0; i < words.length; i++) {
    let word = words[i]; // Get current word

    // Calculate length of current word
    let wordLength = 0;
    while (word[wordLength] !== undefined) {
        wordLength = wordLength + 1;
    }

    // If this word is longer than current longest
    if (wordLength > longestLength) {
        longestWord = word; // Update longest word
        longestLength = wordLength; // Update longest length
    }
}
console.log(`Longest word: "${longestWord}"`);
console.log(`Length: ${longestLength}`);
/*
EXPLANATION

WHAT WE'RE DOING:
1. Break sentence into individual words
2. Measure each word's length
3. Keep track of which word is longest

STEP 1 - EXTRACTING WORDS:
- Go through sentence character by character
- Build up current word by adding non-space characters
- When we hit a space, we know current word is complete
- Add completed word to our words array
- Start building next word

EXAMPLE: "hello world"
- h: currentWord = "h"
- e: currentWord = "he"
- l: currentWord = "hel"
- l: currentWord = "hell"
- o: currentWord = "hello"
- (space): word complete! Add "hello" to array, reset currentWord
- w: currentWord = "w"
- ... continue until "world" is complete

STEP 2 - FINDING LONGEST:
- Look at each word in our array
- Measure its length (count characters manually)
- If longer than current longest, update our record
- Final result is the longest word found

WHY WE TRACK BOTH WORD AND LENGTH:
- longestWord: stores the actual word text
- longestLength: stores how long it is
- Makes it easy to compare and update
*/



// ONE-PASS APPROACH - Find longest without storing all words
// --------------------------------------------------------------------------
const text = "The quick brown fox jumps over lazy dog";
let longest = "";
let longestLen = 0;
let current = "";

for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if (ch === " ") { // End of word
        if (current !== "") {
            // Calculate current word length
            let currentLen = 0;
            while (current[currentLen] !== undefined) {
                currentLen = currentLen + 1;
            }

            // Check if it's longer than current longest
            if (currentLen > longestLen) {
                longest = current;
                longestLen = currentLen;
            }

            current = ""; // Reset for next word
        }
    } else {
        current = current + ch; // Add character to current word
    }
}

// Check the last word (no space after it)
if (current !== "") {
    let currentLen = 0;
    while (current[currentLen] !== undefined) {
        currentLen = currentLen + 1;
    }

    if (currentLen > longestLen) {
        longest = current;
        longestLen = currentLen;
    }
}

console.log(`\nText: "${text}"`);
console.log(`Longest word: "${longest}" (${longestLen} characters)`);
/*
ONE-PASS EXPLANATION:
More efficient - don't store all words, just track longest as we go

ADVANTAGES:
- Uses less memory (don't store all words)
- Find answer in single pass through string
- Update longest word immediately when found

THE LOGIC:
- As we build each word, check if it's longer than current longest
- If yes, update longest word and length
- If no, continue to next word
- Always check last word separately (no space after it)

MEMORY COMPARISON:
- Two-step approach: stores all words + finds longest
- One-pass approach: only stores current word + longest word
*/



// HANDLE PUNCTUATION - Real-world sentences have commas, periods, etc.
// --------------------------------------------------------------------------
const realSentence = "Hello, world! How are you doing today?";
let cleanLongest = "";
let cleanLongestLen = 0;
let cleanCurrent = "";

for (let i = 0; i < realSentence.length; i++) {
    let char = realSentence[i];

    // Check if character is a letter (a-z or A-Z)
    let isLetter = false;
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        isLetter = true;
    }

    if (isLetter === true) {
        cleanCurrent = cleanCurrent + char; // Add letter to current word
    } else {
        // Non-letter character (space, punctuation) ends the word
        if (cleanCurrent !== "") {
            // Calculate length
            let len = 0;
            while (cleanCurrent[len] !== undefined) {
                len = len + 1;
            }

            // Check if longest
            if (len > cleanLongestLen) {
                cleanLongest = cleanCurrent;
                cleanLongestLen = len;
            }

            cleanCurrent = ""; // Reset for next word
        }
    }
}

// Check last word
if (cleanCurrent !== "") {
    let len = 0;
    while (cleanCurrent[len] !== undefined) {
        len = len + 1;
    }

    if (len > cleanLongestLen) {
        cleanLongest = cleanCurrent;
        cleanLongestLen = len;
    }
}

console.log(`\nReal sentence: "${realSentence}"`);
console.log(`Longest word (clean): "${cleanLongest}" (${cleanLongestLen} characters)`);
/*
PUNCTUATION HANDLING EXPLANATION:
Real sentences have commas, periods, exclamation marks, etc.

LETTER CHECKING:
- char >= "a" && char <= "z" checks lowercase letters
- char >= "A" && char <= "Z" checks uppercase letters
- Only letters are part of words
- Everything else (spaces, punctuation) separates words

EXAMPLE: "Hello, world!"
- H,e,l,l,o are letters → build "Hello"
- , is not letter → end word "Hello"
- w,o,r,l,d are letters → build "world"
- ! is not letter → end word "world"

WHY THIS MATTERS:
- "Hello," should be treated as word "Hello"
- "world!" should be treated as word "world"
- Punctuation shouldn't be part of word length
*/
