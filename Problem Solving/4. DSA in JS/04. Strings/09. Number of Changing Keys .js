// Number of Changing Keys

/*
You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.
Return the number of times the user had to change the key.

Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.


Example 1:
Input: s = "aAbBcC"
Output: 2
Explanation:
From s[0] = 'a' to s[1] = 'A', there is no change of key as caps lock or shift is not counted.
From s[1] = 'A' to s[2] = 'b', there is a change of key.
From s[2] = 'b' to s[3] = 'B', there is no change of key as caps lock or shift is not counted.
From s[3] = 'B' to s[4] = 'c', there is a change of key.
From s[4] = 'c' to s[5] = 'C', there is no change of key as caps lock or shift is not counted.


Example 2:
Input: s = "AaAaAaaA"
Output: 0
Explanation: There is no change of key since only the letters 'a' and 'A' are pressed which does not require change of key.

Topic : String
*/

// ---------------- Approach ----------------
//
// Problem: We need to count how many times the user "changed the key" while typing string `s`.
// Important: 'a' and 'A' should be considered the SAME key (case does not matter).
//
// Steps:
//
// 1. We are given a string `s`.
//    Example: "aAbBcC"
// 2. We need to move through the string character by character.
// 3. At each step, we compare the current character with the previous one.
// 4. BUT: Since uppercase and lowercase of the same letter mean the same key,
//    we must treat 'a' and 'A' as equal.
//    Example: 'a' == 'A', 'b' == 'B', etc.
// 5. To do this without built-in functions (like toLowerCase, toUpperCase, charCodeAt, etc):
//    - We will create our own manual mapping for A–Z ↔ a–z.
//    - Example: 'A' = 'a', 'B' = 'b', etc.
//    - So before comparing characters, we normalize both into lowercase manually.
// 6. If normalized current character ≠ normalized previous character,
//    that means a key change happened, so increase a counter.
// 7. At the end, return the counter.
//
// Example Dry Run ::
// Input: "aAbBcC"
// Compare step by step:
//   'a' vs 'A' → same key → no change
//   'A' vs 'b' → different keys → change = 1
//   'b' vs 'B' → same key → no change
//   'B' vs 'c' → different keys → change = 2
//   'c' vs 'C' → same key → no change
// Result = 2
//
//  According to me ----------------
// - Build manual uppercase-to-lowercase mapping.
// - Initialize counter = 0
// - Loop through s from index 1 → n-1
// - For each character: normalize prev & current to lowercase
// - If different, counter++
// - Return counter


/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    // Manual lowercase mapping using lookup string
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Helper: convert ch to lowercase manually
    function toLower(ch) {
        // Loop through upper, if match, return corresponding lower
        for (var i = 0; i < 26; i++) {
            if (ch === upper[i]) {
                return lower[i];
            }
        }
        // If not uppercase, return as is
        return ch;
    }

    var count = 0; // Number of key changes

    // Loop through string from index 1 to end
    for (var i = 1; i < s.length; i++) {
        var prev = toLower(s[i - 1]); // Normalize previous character
        var curr = toLower(s[i]);     // Normalize current character
        if (prev !== curr) {
            count = count + 1; // Increment if key changed
        }
    }
    return count;
};
console.log(countKeyChanges("aAbBcC"));    // Output: 2
console.log(countKeyChanges("AaAaAaaA"));  // Output: 0
console.log(countKeyChanges("bBBb"));      // Output: 0
console.log(countKeyChanges("abcABC"));    // Output: 2
