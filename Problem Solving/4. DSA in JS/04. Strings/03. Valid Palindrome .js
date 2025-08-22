// Valid palindrome ::

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanString = ""; // Clean the string
    for (let i = 0; i < s.length; i++) { // each character in the original string
        let char = s[i];
        // Checking if character is a letter or number ::
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            cleanString = cleanString + char.toLowerCase(); // Building strings character by character and // Convert to lowercase and add to clean string
        }
    }
    let left = 0; // beginning
    let right = cleanString.length - 1; // end
    // Compare characters from both ends moving towards center ::
    while (left < right) {
        if (cleanString[left] != cleanString[right]) {
            return false;
        }
        // Moving pointers closer to center ::
        left = left + 1;
        right = right - 1;
    }
    return true;
};

let test = "A man, a plan, a canal: Panama";
console.log(isPalindrome(test)); // Output: true

test = "race a car";
console.log(isPalindrome(test)); // Output: false

test = " ";
console.log(isPalindrome(test)); // Output: true
