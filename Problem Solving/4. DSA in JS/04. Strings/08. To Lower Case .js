// To Lower Case

/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:
Input: s = "Hello"
Output: "hello"


Example 2:
Input: s = "here"
Output: "here"


Example 3:
Input: s = "LOVELY"
Output: "lovely"


Topics : String
*/


// Approach ::
// 1. We are given a string `s`. We need to convert uppercase letters (A–Z) into lowercase letters (a–z).
// 2. Normally, we'd use built-in functions like toLowerCase(), charCodeAt(), etc. But we are avoiding all of them.
// 3. So, we must do this manually:
//      - Create a mapping of uppercase letters to their lowercase counterparts.
//      - Example: { 'A': 'a', 'B': 'b', ... , 'Z': 'z' }.
// 4. Loop through each character in the string `s`.
// 5. If the character is uppercase (exists in our mapping), replace it with the mapped lowercase letter.
// 6. If it is already lowercase or a non-alphabet character, keep it unchanged.
// 7. Build the final string manually and return it.

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // mapping of uppercase to lowercase
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";

    // Empty result string
    let result = "";

    // Loop over input string
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        let found = false;

        // Check if `ch` is in uppercase list
        for (let j = 0; j < uppercase.length; j++) {
            if (ch === uppercase[j]) {
                result += lowercase[j]; // convert manually
                found = true;
                break;
            }
        }

        // If not uppercase, keep as is
        if (!found) {
            result += ch;
        }
    }

    return result;
};
console.log(toLowerCase("Hello"));   // "hello"
console.log(toLowerCase("here"));    // "here"
console.log(toLowerCase("LOVELY"));  // "lovely"
console.log(toLowerCase("123!ABC")); // "123!abc"
