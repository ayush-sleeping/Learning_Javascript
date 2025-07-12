// Q. Reverse a string :
const str = "We are happy to have you!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--){ // Logic : start from the end of the string
    // and concatenate each character to the result
    reversedStr += str[i];
}
console.log(reversedStr); // Output: !uoy evah ot yppah era eW


const str2 = "We are happy to have you!";
let reversedStr2 = "";
for (let i = 0; i < str2.length; i++) { // Logic: iterate through the string
    // and prepend each character to the result
    reversedStr2 = str2[i] + reversedStr2; // Prepend each character to the result
}
console.log(reversedStr2); // Output: !uoy evah ot yppah era eW


const str3 = "We are happy to have you!";
const reversedStr3 = str3.split("").reverse().join(""); // Logic: split the string into an array of characters,
// reverse the array, and join it back into a string
console.log(reversedStr3); // Output: !uoy evah ot yppah era eW
