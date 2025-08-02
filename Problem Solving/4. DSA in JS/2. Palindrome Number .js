let num = 121;
let str = num.toString(); // Convert number to string
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
if (str === reversed) {
    console.log("true");
} else {
    console.log("false");
}

// Function to check if a number is a palindrome
var isPalindrome = function (x) {
    if (x < 0) return false; // Negative numbers cannot be palindromes
    let str = x.toString(); // Convert number to string
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Build reversed string
    }
    return str === reversed; // Compare original and reversed strings
};
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
