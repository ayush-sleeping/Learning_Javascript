// find first non repeated character  :
// --------------------------------------------------------------------------------------------------------------::

// Find first character that appears only once
const text = "programming";
let firstUnique = "";

// Check each character in the string
for (let i = 0; i < text.length; i++) {
    let currentChar = text[i]; // Get character at position i
    let count = 0; // Count how many times this character appears

    // Count occurrences of this character in entire string
    for (let j = 0; j < text.length; j++) {
        if (text[j] === currentChar) { // If characters match
            count = count + 1; // Increase count
        }
    }

    // If character appears exactly once, it's our answer
    if (count === 1) {
        firstUnique = currentChar;
        break; // Stop searching, we found the first unique one
    }
}
console.log(`First non-repeated character: "${firstUnique}"`);

/*
EXPLANATION
WHAT WE'RE LOOKING FOR:
- Non-repeated = appears only once in the string
- First = the earliest one we encounter from left to right

LOGIC:
1. Look at each character one by one (outer loop)
2. For each character, count how many times it appears in the whole string
3. If a character appears exactly 1 time, it's non-repeated
4. The first such character we find is our answer

EXAMPLE WITH "programming":
Position 0: 'p' → count all 'p' in string → found 1 'p' → count = 1 ✓
Since count = 1, 'p' is our first non-repeated character!

WHY THE NESTED LOOPS:
- Outer loop: goes through each position (i = 0, 1, 2...)
- Inner loop: counts how many times character at position i appears
- We need to check the ENTIRE string to count properly

WHAT count VARIABLE DOES:
- Starts at 0 for each character
- Gets +1 every time we find the character in the string
- If count = 1 at the end, character appears only once
- If count > 1, character is repeated
*/



// MANUAL APPROACH - Without break statement
// ----------------------------------------------------------------------------
const word = "abcabc";
let result = "";
let found = false;

for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let letterCount = 0;

    // Only check if we haven't found an answer yet
    if (found === false) {
        // Count occurrences of this letter
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letter) {
                letterCount = letterCount + 1;
            }
        }

        // If letter appears only once, it's our answer
        if (letterCount === 1) {
            result = letter;
            found = true; // Mark that we found the answer
        }
    }
}
console.log(`First non-repeated: "${result}"`);

/*
EXPLANATION:
Same logic but without using 'break' statement

WHY found VARIABLE:
- found = false means "still looking for answer"
- found = true means "already found answer, stop looking"
- We check 'if (found === false)' before doing work
- Once we find answer, we skip all remaining characters

EXAMPLE WITH "abcabc":
- Check 'a': appears 2 times → not unique
- Check 'b': appears 2 times → not unique
- Check 'c': appears 2 times → not unique
- No character appears only once!
- Result: "" (empty string means no unique character found)
*/
