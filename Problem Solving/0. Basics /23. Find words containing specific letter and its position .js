// find words containing specific letter and its position  :
// --------------------------------------------------------------------------------------------------------------::

// Basic approach - find first occurrence only
// ---------------------------------------------------------------------
const words = ["apple", "mango", "orange", "grape", "banana"];  // Test data
const targetLetter = "g";  // Letter to search for

// THINKING PROCESS:
// 1. We have multiple words and need to search each one
// 2. For each word, we check every character position
// 3. When we find the target letter, note the position
// 4. Track if we found the letter or not for each word

for (let i = 0; i < words.length; i++) {  // OUTER LOOP: Go through each word in array
    const word = words[i];  // Get current word from array
    let found = false;  // Flag to track if we found the letter in this word

    for (let j = 0; j < word.length; j++) {  // INNER LOOP: Go through each character in current word
        if (word[j] === targetLetter) {  // Compare current character with target letter
            console.log(word + ":  - Letter '" + targetLetter + "' at position " + j);  // Found it! Show position
            found = true;  // Mark as found
            break;  // Exit inner loop (stop searching this word)
        }
    }

    if (!found) {  // After checking entire word, if not found
        console.log(word + ":  - Letter '" + targetLetter + "' not found");  // Report not found
    }
}

// ALGORITHM BREAKDOWN:
// Step 1: Take first word "apple"
// Step 2: Check 'a' at position 0 → not 'g'
// Step 3: Check 'p' at position 1 → not 'g'
// Step 4: Check 'p' at position 2 → not 'g'
// Step 5: Check 'l' at position 3 → not 'g'
// Step 6: Check 'e' at position 4 → not 'g'
// Step 7: Entire word checked, letter not found
// Step 8: Move to next word "mango"
// Step 9: Check 'm' at position 0 → not 'g'
// Step 10: Check 'a' at position 1 → not 'g'
// Step 11: Check 'n' at position 2 → not 'g'
// Step 12: Check 'g' at position 3 → FOUND! Report position 3


// Function approach - find all occurrences
// ---------------------------------------------------------------------
function findLetterPositions(word, letter) {
    const positions = [];  // Array to store all positions where letter is found
    for (let i = 0; i < word.length; i++) {  // Check each character in word
        if (word[i] === letter) {  // If character matches our target letter
            positions[positions.length] = i;  // Add position to array (manual push)
        }
    }
    return positions;  // Return array of all positions found
}

const testWords = ["programming", "windows", "debugging", "google"];  // Words with multiple 'g's
const searchLetter = "g";

for (let i = 0; i < testWords.length; i++) {  // Loop through each test word
    const word = testWords[i];  // Get current word
    const positions = findLetterPositions(word, searchLetter);  // Get all positions of letter

    if (positions.length > 0) {  // If letter found at least once
        console.log(word + ": positions " + positions);  // Show all positions
    } else {
        console.log(word + ": Not Found");  // Letter not found in this word
    }
}
