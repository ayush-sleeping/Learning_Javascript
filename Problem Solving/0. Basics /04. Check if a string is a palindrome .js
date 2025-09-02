// Q. Check if a string is a palindrome :
// ------------------------------------------------------------------------ ::

let str = "mam";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}
// Output: Palindrome




// ------------------------------------------------------------------------ ::
// ------------------------------------------------------------------------ ::
function checkStrPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    if (str === reversed) {
        return "Palindrome";
    }
    return "Not a palindrome";
};
console.log(checkStrPalindrome("mam")); // "Palindrome"
console.log(checkStrPalindrome("hello")); // "Not a palindrome"
