// Reverse Words in a String
/*
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"


Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.


Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


Topics: Two Pointers, String
*/


/**
APPROACH
- The goal is to reverse the order of words in a string.
- Words are separated by spaces, but there may be extra spaces at the start, end, or between words.
- We want the output to have only single spaces between words, and no leading/trailing spaces.

Lets solve it:
1. I'll go through the string and extract each word (ignore extra spaces).
2. I'll store each word in an array as I find it.
3. After collecting all words, I'll build a new string by adding the words from the end of the array to the start (so they're reversed).
4. I'll make sure to put only one space between words in the result, and no extra spaces at the start or end.
*/

/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function (s) {
    let words = [];
    let word = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char !== " ") {
            word = word + char;
        } else {
            if (word.length > 0) {
                words[words.length] = word;
                word = "";
            }
        }
    }

    if (word.length > 0) {
        words[words.length] = word;
    }

    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        result = result + words[i];
        if (i > 0) {
            result = result + " ";
        }
    }
    return result;
};
console.log(reverseWords("the sky is blue"));         // "blue is sky the"
console.log(reverseWords("  hello world  "));         // "world hello"
console.log(reverseWords("a good   example"));        // "example good a"



// okk lets understand this code using AI comments what actually we have done above :
var reverseWords = function (s) {
    let words = [];           // Array to store words
    let word = "";            // To build the current word

    // Step 1: Extract words manually (ignore extra spaces)
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char !== " ") {
            word = word + char;      // Build the word
        } else {
            if (word.length > 0) {   // If a word is completed
                words[words.length] = word; // Add to array
                word = "";           // Reset for next word
            }
            // If char is space and word is empty, just skip (ignore extra spaces)
        }
    }
    // Add the last word if there is one
    if (word.length > 0) {
        words[words.length] = word;
    }

    // Step 2: Build the result string in reverse order
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        result = result + words[i];
        if (i > 0) {
            result = result + " "; // Add space between words, but not after the last word
        }
    }
    return result;
};


// okk lets try to do this using mentioned topics ( Topics: Two Pointers, String ) :
/**
APPROACH (Two Pointers + String):

- We want to reverse the order of words in the string, handling extra spaces.
- We'll use two pointers to scan from the end of the string to the start.
- The 'end' pointer finds the end of each word (skipping spaces).
- The 'start' pointer finds the start of the word.
- We extract each word from end to start and add it to the result.
- We add a single space between words in the result, and skip extra spaces.
- No built-in split, trim, or reverse methods are used—just manual pointer movement and string building.
*/

var reverseWords = function (s) {
    let n = s.length;
    let result = "";
    let end = n - 1;

    while (end >= 0) {
        while (end >= 0 && s[end] === " ") {
            end--;
        }
        if (end < 0) break;

        let start = end;
        while (start >= 0 && s[start] !== " ") {
            start--;
        }

        for (let i = start + 1; i <= end; i++) {
            result = result + s[i];
        }

        if (start > 0) {
            result = result + " ";
        }

        end = start - 1;
    }

    if (result[result.length - 1] === " ") { // If the last character is a space
        // Remove the last character
        let newResult = "";
        for (let i = 0; i < result.length - 1; i++) {
            newResult = newResult + result[i];
        }
        result = newResult;
    }
    return result;
}
console.log(reverseWords("the sky is blue"));         // "blue is sky the"
console.log(reverseWords("  hello world  "));         // "world hello"
console.log(reverseWords("a good   example"));        // "example good a"




// now lets understand our code with AI good comments :
// Two Pointers + String approach (no built-in split/reverse/trim)
var reverseWords = function (s) {
    let n = s.length;                  // Length of the input string
    let result = "";                   // To build the reversed words string
    let end = n - 1;                   // Pointer to scan from end

    while (end >= 0) {
        // Skip trailing or extra spaces
        while (end >= 0 && s[end] === " ") {
            end--;                     // Move left if space
        }
        if (end < 0) break;            // If no more words, exit loop

        let start = end;               // Start pointer for current word
        while (start >= 0 && s[start] !== " ") {
            start--;                   // Move left to find start of word
        }

        // Copy the word to result
        for (let i = start + 1; i <= end; i++) {
            result = result + s[i];    // Add each character of word
        }

        if (start > 0) {               // If more words left, add space
            result = result + " ";
        }

        end = start - 1;               // Move end to before the current word
    }

    if (result[result.length - 1] === " ") { // If result ends with space
        let newResult = "";
        for (let i = 0; i < result.length - 1; i++) {
            newResult = newResult + result[i]; // Copy all but last char
        }
        result = newResult;            // Update result without trailing space
    }
    return result;                     // Return the final reversed string
};
console.log(reverseWords("the sky is blue"));         // "blue is sky the"
console.log(reverseWords("  hello world  "));         // "world hello"
console.log(reverseWords("a good   example"));        // "example good a"
