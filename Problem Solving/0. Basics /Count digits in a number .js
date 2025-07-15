// Q. Count digits in a number :

let num = 50000000000;
let count = 0;
while (num != 0) {
    num = Math.floor(num / 10);
    count++;
}
console.log("Number of digits:", count); // Output: Number of digits: 11

// more beginner friendly way
let number = 50000000000;
let digitCount = number.toString().length;
console.log("Number of digits:", digitCount); // Output: Number of digits: 11
