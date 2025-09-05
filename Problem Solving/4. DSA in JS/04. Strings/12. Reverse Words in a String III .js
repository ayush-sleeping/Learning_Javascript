// Reverse Words in a String III
/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"


Example 2:
Input: s = "Mr Ding"
Output: "rM gniD


Topics: Two Pointers, String
*/


/**
 * Approach:
 * - We are given a string s containing words separated by spaces.
 * - We need to reverse the characters of each word, but keep the word order and spaces the same.
 * - To solve this manually (no built-in split, reverse, or join):
 *   1. Loop through the string character by character.
 *   2. For each word, collect its characters until a space or end of string is found.
 *   3. When a space or end is found, reverse the collected word manually using two pointers.
 *   4. Add the reversed word and the space (if any) to the result.
 *   5. Continue until the end of the string.
 * - This way, we process each word and reverse it in place, simulating the two
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var result = "";
    var word = [];

    for (var i = 0; i <= s.length; i++) {

        if (i < s.length && s[i] !== " ") {
            word[word.length] = s[i];
        } else {
            var left = 0;
            var right = word.length - 1;

            while (left < right) {
                var temp = word[left];
                word[left] = word[right];
                word[right] = temp;
                left = left + 1;
                right = right - 1;
            }

            for (var j = 0; j < word.length; j++) {
                result = result + word[j];
            }
            if (i < s.length) {
                result = result + " ";
            }
            word = [];
        }
    }
    return result;
};


// lets understand each steps more deeply

/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function (s) {
    var result = "";           // Step 1: To build the final string
    var word = [];             // Step 2: To collect characters of the current word

    // Step 3: Loop through the string, including one extra iteration for the last word
    for (var i = 0; i <= s.length; i++) { // Loop through each character (and one extra for last word)
        // Step 4: If current character is not a space and not end of string, collect it
        if (i < s.length && s[i] !== " ") { // If not space and not end, collect character
            word[word.length] = s[i];       // Add character to current word
        } else { // If space or end of string, process the collected word
            // Step 5: Reverse the collected word manually using two pointers
            var left = 0;                   // Left pointer for reversing
            var right = word.length - 1;    // Right pointer for reversing
            while (left < right) {          // While left is less than right
                var temp = word[left];      // Swap word[left] and word[right]
                word[left] = word[right];
                word[right] = temp;
                left = left + 1;            // Move left pointer right
                right = right - 1;          // Move right pointer left
            }
            // Step 6: Add the reversed word to result
            for (var j = 0; j < word.length; j++) { // Add each character of reversed word
                result = result + word[j];
            }
            // Step 7: Add the space (if not at the end)
            if (i < s.length) {             // If not at the end, add a space
                result = result + " ";
            }
            // Step 8: Reset word for the next word
            word = [];                      // Clear word array for next word
        }
    }
    // Step 9: Return the final result string
    return result;                          // Return the final reversed string
}

console.log(reverseWords("Let's take LeetCode contest"));

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
