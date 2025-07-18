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
