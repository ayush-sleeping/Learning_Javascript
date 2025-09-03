// Find Words Containing Character
/*
You are given a 0 - indexed array of strings words and a character x.
Return an array of indices representing the words that contain the character x.
Note that the returned array may be in any order.


Example 1:
Input: words = ["leet", "code"], x = "e"
Output: [0, 1]
Explanation: "e" occurs in both words: "leet", and "code".Hence, we return indices 0 and 1.


Example 2:
Input: words = ["abc", "bcd", "aaaa", "cbc"], x = "a"
Output: [0, 2]
Explanation: "a" occurs in "abc", and "aaaa".Hence, we return indices 0 and 2.


Example 3:
Input: words = ["abc", "bcd", "aaaa", "cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words.Hence, we return an empty array.


Topics : Array, String
*/
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    var result = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var found = false;

        for (var j = 0; j < word.length; j++) {
            if (word[j] === x) {
                found = true;
                break;
            }
        }

        if (found) {
            result[result.length] = i;
        }
    }
    return result;
};




// ----------------------------------------------------------------------------------------- ::

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    var result = []; // Create an empty array to store the result indices

    for (var i = 0; i < words.length; i++) { // Loop through each word in the words array
        var word = words[i];
        var found = false; // Flag to check if x is found in the current word
        // console.log("Checking word at index", i, ":", word);

        for (var j = 0; j < word.length; j++) { // Loop through each character in the current word
            console.log("  Checking character at position", j, ":", word[j]); // If the character matches x, set found to true
            if (word[j] === x) {
                found = true;
                // console.log("    Found character", x, "in word", word, "at position", j);
                break;
            }
        }

        if (found) {  // If found is true, add the index i to the result array
            // console.log("  Adding index", i, "to result");
            result[result.length] = i;
        } else {
            // console.log("  Character", x, "not found in word", word);
        }
    }
    // console.log("Final result array:", result);
    return result; // Return the array of indices
};

var words1 = ["leet", "code"];
var x1 = "e";
console.log(findWordsContaining(words1, x1)); // Output: [0, 1]

var words2 = ["abc", "bcd", "aaaa", "cbc"];
var x2 = "a";
console.log(findWordsContaining(words2, x2)); // Output: [0, 2]

var words3 = ["abc", "bcd", "aaaa", "cbc"];
var x3 = "z";
console.log(findWordsContaining(words3, x3)); // Output: []


/*
- For each word, we check every character manually.
- If the character matches x, we add the word's index to the result.
*/
