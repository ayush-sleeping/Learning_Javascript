// -----------------------:: Revision and Practice the IMPORTANT ::-----------------------
// - Reverse words in sentence without built-in reverse // DSA Topics: Strings, Arrays, Two Pointers
// - Check palindrome ignoring case and punctuation     // DSA Topics: Strings, Two Pointers, Character Processing
// - * Find first non repeated character                  // DSA Topics: Hash Tables/Maps, Strings, Order Tracking
// - * Check if string contains substring                  // DSA Topics: Strings, Pattern Matching, Nested Loops
// - * Find longest word in string                         // DSA Topics: Strings, Parsing, Max Tracking

// - Convert string to array of words                    // DSA Topics: Strings, Arrays, Manual Parsing
// - Capitalize first letter of each word / Title case    // DSA Topics: Strings, Character Manipulation, ASCII
// - Convert array of string to uppercase                // DSA Topics: Arrays, Strings, Character Transformation
// - Check if two strings are anagrams                   // DSA Topics: Hash Tables/Maps, Sorting, Frequency Counting
// - Generate Fibonacci series up to N terms             // DSA Topics: Math, Sequences, Dynamic Programming

// - Check if number is Armstrong number                 // DSA Topics: Math, Number Theory, Digit Manipulation
// - Find Factorial of a number                          // DSA Topics: Math, Recursion, Iteration
// - Calculate power of a number                         // DSA Topics: Math, Exponentiation, Fast Power Algorithm
// - Check if number is prime                            // DSA Topics: Math, Number Theory, Optimization
// - Reverse a number                                     // DSA Topics: Math, Number Manipulation, Modular Arithmetic

// - Count digits in a number                             // DSA Topics: Math, Number Processing, Counting
// - Swap two numbers without third variable              // DSA Topics: Math, Bitwise Operations, XOR Tricks
// - Check if year is leap year                           // DSA Topics: Math, Conditional Logic, Date Algorithms
// - Find GCD of two numbers                              // DSA Topics: Math, Euclidean Algorithm, Number Theory
// - Find LCM of two numbers                              // DSA Topics: Math, Number Theory, GCD Relation

// - Calculate average of array numbers                   // DSA Topics: Arrays, Math, Aggregation, Single-pass Traversal
// - Find frequency of elements in array (if separate)    // DSA Topics: Hash Tables/Maps, Arrays, Frequency Counting
// - Sort array of strings alphabetically                 // DSA Topics: Sorting, Strings, Lexicographic Comparison
// - Sort array of characters alphabetically              // DSA Topics: Sorting, Characters, ASCII Comparison

console.log("------------------------------------ ::");
// - Reverse words in sentence without built-in reverse // Reason: String+array logic
function reverseWord(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return reverse;
}
console.log(reverseWord("javascript"));


console.log("------------------------------------ ::");
// - Check palindrome ignoring case and punctuation     // Reason: Preprocessing + two-pointer
function checkPalindrome(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    if (reverse === str) {
        return "Palindrome";
    } else {
        return 'Not A Palindrome';
    }
}
console.log(checkPalindrome("javascript"));
console.log(checkPalindrome("noon"));
// Two pointer way :
function checkPalindromeTwoPointer(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return "Not A Palindrome!";
        }
        left++;
        right--;
    }
    return "Palindrome";
}
console.log(checkPalindromeTwoPointer("javascript"));
console.log(checkPalindromeTwoPointer("noon"));
// for both numbers and words :
function checkPalindromeWordAndNumber(input) {
    // Step 1: Convert input to string (handles both numbers and strings)
    let str = "" + input;

    // Step 2: Initialize pointers
    let left = 0;
    let right = str.length - 1;

    // Step 3: Compare characters from both ends
    while (left < right) {
        if (str[left] !== str[right]) {
            return "Not A Palindrome";
        }
        left++;
        right--;
    }
    return "Palindrome";
}
// Testing with words
console.log(checkPalindromeWordAndNumber("noon"));        // Palindrome
console.log(checkPalindromeWordAndNumber("javascript"));  // Not A Palindrome
// Testing with numbers
console.log(checkPalindromeWordAndNumber(121));           // Palindrome
console.log(checkPalindromeWordAndNumber(12345));         // Not A Palindrome


console.log("------------------------------------ ::");
// - Find first non repeated character                  // Reason: Frequency + order
function firstNonRepeatedChar(str) {
    // Step 1: Count frequency of each character
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freq[char]) {                          // If character already exists in freq object
            freq[char] = freq[char] + 1;           // Increment its count by 1
        } else {                                   // If character is seen for the first time
            freq[char] = 1;                        // Set its count to 1
        }
    }

    // Step 2: Find the first character with frequency 1
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freq[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }
    return null; // If all characters are repeated
}
console.log(firstNonRepeatedChar("aabbccdeff")); // Output: "d"
console.log(firstNonRepeatedChar("swiss"));      // Output: "w"
console.log(firstNonRepeatedChar("aabbcc"));     // Output: null



console.log("------------------------------------ ::");
// - Check if string contains substring                  // Reason: Substring search (manual)
function checkSubstring(mainStr, subStr) {
    if (subStr.length === 0) {
        return true;
    }

    // Loop through main string, stopping so there's enough room for subStr
    for (let i = 0; i <= mainStr.length - subStr.length; i++) {
        let found = true;
        // Check each character of subStr
        for (let j = 0; j < subStr.length; j++) {
            if (mainStr[i + j] !== subStr[j]) {
                found = false;  // Mismatch found
                break;
            }
        }
        if (found) {
            return true;    // Substring found
        }
    }
    return false;
}
console.log(containsSubstring("hello world", "world")); // true
console.log(containsSubstring("javascript", "script")); // true
console.log(containsSubstring("javascript", "java"));   // true
console.log(containsSubstring("javascript", "python")); // false
console.log(containsSubstring("abc", ""));              // true


console.log("------------------------------------ ::");
// - Find longest word in string                         // Reason: Parsing + max tracking
function findLongestWord(sentence) {
    let longest = "";           // To store the longest word found
    let current = "";           // To build the current word

    for (let i = 0; i <= sentence.length; i++) { // Go one past the end to catch last word
        let char = sentence[i];

        // If character is a space or end of string, check the word
        if (char === " " || i === sentence.length) {
            if (current.length > longest.length) {
                longest = current; // Update if current word is longer
            }
            current = ""; // Reset for next word
        } else {
            current = current + char; // Build the current word
        }
    }
    return longest;
}
console.log(findLongestWord("I love JavaScript programming")); // Output: "programming"
console.log(findLongestWord("hello world"));                   // Output: "hello" or "world"
console.log(findLongestWord("a ab abc abcd"));                 // Output: "abcd"
console.log(findLongestWord("one"));                           // Output: "one"


console.log("------------------------------------ ::");
// - Convert string to array of words                    // Reason: Manual split logic
function stringToWords(sentence) {
    let words = [];
    let current = "";

    // Go one past the end to catch last word
    for (let i = 0; i <= sentence.length; i++) {
        let char = sentence[i];

        if (char === " " || i === sentence.length) { // If space or end of string
            if (current.length > 0) {                // If current word is not empty
                words[words.length] = current;       // Add word to array
                current = "";                        // Reset for next word
            }
        } else {
            current = current + char;                // Build the current word
        }
    }
    return words;
}
console.log(stringToWords("I love JavaScript programming")); // ["I", "love", "JavaScript", "programming"]
console.log(stringToWords("hello world"));                   // ["hello", "world"]
console.log(stringToWords("  a  b   c "));                   // ["a", "b", "c"]
console.log(stringToWords("one"));                           // ["one"]


console.log("------------------------------------ ::");
// - Capitalize first letter of each word / Title case    // Reason: String manipulation
function capitalizeWords(sentence) {
    let result = "";                // Final result string
    let capitalize = true;          // Flag to capitalize next letter

    for (let i = 0; i < sentence.length; i++) {      // Loop through each character
        let char = sentence[i];     // Current character
        if (char === " ") {         // If current character is a space
            result = result + char; // Add space as is
            capitalize = true;      // Next letter should be capitalized
        } else if (capitalize && char >= "a" && char <= "z") { // If first letter of word and lowercase
            let upperChar = String.fromCharCode(char.charCodeAt(0) - 32); // Convert to uppercase
            result = result + upperChar; // Add uppercase letter
            capitalize = false;     // Only first letter of word
        } else {                   // For all other characters
            result = result + char; // Add character as is
            capitalize = false;     // Only first letter should be capitalized
        }
    }
    return result;                  // Return the final string
}
console.log(capitalizeWords("i love javascript programming")); // "I Love Javascript Programming"
console.log(capitalizeWords("hello world"));                   // "Hello World"
console.log(capitalizeWords("  a  b   c "));                   // "  A  B   C "
console.log(capitalizeWords("one"));                           // "One"


console.log("------------------------------------ ::");
// - Convert array of string to uppercase                // Reason: Transformations
function arrayToUppercase(arr) {
    let result = []; // Array to store uppercase strings

    for (let i = 0; i < arr.length; i++) {           // Loop through each string in array
        let str = arr[i];
        let upperStr = "";                           // To build uppercase version

        for (let j = 0; j < str.length; j++) {       // Loop through each character
            let char = str[j];
            // If char is lowercase a-z, convert to uppercase
            if (char >= "a" && char <= "z") {
                let code = char.charCodeAt(0);       // Get ASCII code
                let upperChar = String.fromCharCode(code - 32); // Convert to uppercase
                upperStr = upperStr + upperChar;
            } else {
                upperStr = upperStr + char;          // Add as is (already uppercase or not a letter)
            }
        }
        result[result.length] = upperStr;            // Add uppercase string to result array
    }
    return result;
}
console.log(arrayToUppercase(["hello", "world"]));         // ["HELLO", "WORLD"]
console.log(arrayToUppercase(["JavaScript", "is", "fun"])); // ["JAVASCRIPT", "IS", "FUN"]
console.log(arrayToUppercase(["a", "b", "C"]));             // ["A", "B", "C"]


console.log("------------------------------------ ::");
// - Check if two strings are anagrams                   // Reason: Counting/sorting approach


console.log("------------------------------------ ::");
// - Generate Fibonacci series up to N terms             // Reason: Sequence generation


console.log("------------------------------------ ::");
// - Check if number is Armstrong number


console.log("------------------------------------ ::");
// - Find Factorial of a number                          // Reason: Recursion/iteration basics


console.log("------------------------------------ ::");
// - Calculate power of a number                         // Reason: Loops/fast power


console.log("------------------------------------ ::");
// - Check if number is prime                            // Reason: Looping & optimization


console.log("------------------------------------ ::");
// - Reverse a number                                     // Reason: Numeric manipulation



console.log("------------------------------------ ::");
// - Count digits in a number                             // Reason: Numeric/string counting


console.log("------------------------------------ ::");
// - Swap two numbers without third variable              // Reason: XOR/math trick


console.log("------------------------------------ ::");
// - Check if year is leap year                           // Reason: Conditional logic


console.log("------------------------------------ ::");
// - Find GCD of two numbers                              // Reason: Euclidean algorithm


console.log("------------------------------------ ::");
// - Find LCM of two numbers                              // Reason: Relation with GCD


console.log("------------------------------------ ::");
// - Calculate average of array numbers                   // Reason: Aggregation/traversal


console.log("------------------------------------ ::");
// - Find frequency of elements in array (if separate)    // Reason: Counting for arrays


console.log("------------------------------------ ::");
// - Sort array of strings alphabetically                 // Reason: Sorting with lexicographic order


console.log("------------------------------------ ::");
// - Sort array of characters alphabetically              // Reason: Character sorting
