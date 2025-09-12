// -----------------------:: Revision and Practice the IMPORTANT ::-----------------------
// - Reverse words in sentence without built-in reverse // Reason: String+array logic
// - Check palindrome ignoring case and punctuation     // Reason: Preprocessing + two-pointer
// - * Find first non repeated character                  // Reason: Frequency + order
// - * Check if string contains substring                  // Reason: Substring search (manual)
// - * Find longest word in string                         // Reason: Parsing + max tracking

// - Convert string to array of words                    // Reason: Manual split logic
// - Capitalize first letter of each word / Title case    // Reason: String manipulation
// - Convert array of string to uppercase                // Reason: Transformations
// - Check if two strings are anagrams                   // Reason: Counting/sorting approach
// - Generate Fibonacci series up to N terms             // Reason: Sequence generation

// - Check if number is Armstrong number
// - Find Factorial of a number                          // Reason: Recursion/iteration basics
// - Calculate power of a number                         // Reason: Loops/fast power
// - Check if number is prime                            // Reason: Looping & optimization
// - Reverse a number                                     // Reason: Numeric manipulation

// - Count digits in a number                             // Reason: Numeric/string counting
// - Swap two numbers without third variable              // Reason: XOR/math trick
// - Check if year is leap year                           // Reason: Conditional logic
// - Find GCD of two numbers                              // Reason: Euclidean algorithm
// - Find LCM of two numbers                              // Reason: Relation with GCD

// - Calculate average of array numbers                   // Reason: Aggregation/traversal
// - Find frequency of elements in array (if separate)    // Reason: Counting for arrays
// - Sort array of strings alphabetically                 // Reason: Sorting with lexicographic order
// - Sort array of characters alphabetically              // Reason: Character sorting


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


console.log("------------------------------------ ::");
// - Convert array of string to uppercase                // Reason: Transformations


console.log("------------------------------------ ::");
// - Check if two strings are anagrams                   // Reason: Counting/sorting approach


console.log("------------------------------------ ::");
// - Generate Fibonacci series up to N terms             // Reason: Sequence generation
