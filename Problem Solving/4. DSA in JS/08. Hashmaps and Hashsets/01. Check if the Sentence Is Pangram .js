// Check if the Sentence Is Pangram

/*
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false
*/

/*
Approach :

 * Checks if a sentence is a pangram (contains every letter a-z at least once)
 * Approach:
 * 1. Create an empty object to store seen letters.
 * 2. Loop through each character in the sentence.
 * 3. For each character, mark it as seen in the object.
 * 4. After the loop, check if the object has 26 unique letters.
 * 5. If yes, return true; else, return false.
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; // Reference string
    var found = [];
    for (var i = 0; i < 26; i++) {
        found[i] = false;
    }

    // Go through each character in the sentence
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence[i];
        // Find the index of the letter in the alphabet string (manual search)
        for (var j = 0; j < 26; j++) {
            if (letter === alphabet[j]) {
                found[j] = true;
                break; // Stop searching once found
            }
        }
    }

    // Check if all letters are found
    for (var i = 0; i < 26; i++) {
        if (!found[i]) {
            return false;
        }
    }
    return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false
