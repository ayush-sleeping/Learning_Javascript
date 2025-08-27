//  Problem 1: Sum of first N numbers
// Take a number n.
// Find the sum of numbers from 1 to n(use a loop).
//     Example: n = 5 → sum = 15.
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);



console.log("------------------------------------ ::");
//  Problem 2: Multiplication table
// Take a number and print its multiplication table from 1 to 10.
// Example: 5 → 5x1 = 5, 5x2 = 10, ....
let x = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
}


console.log("------------------------------------ ::");
//  Problem 3: Reverse a string
// Take a string and print it in reverse order.
//     Example: "hello" → "olleh".
let str = "hello";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) { // Loop through the string in reverse, from last to first
    reverseStr = reverseStr + str[i];
}
console.log(reverseStr);

console.log("------------------------------------ ::");
//  Problem 4: Find largest number in an array
// Example: [5, 10, 27, 8] → largest is 27.
let arr = [5, 10, 27, 8];
let largest = arr[0]; // Assume the first element is the largest initially
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    console.log(`Current largest is ${largest}`);
}
console.log(`Largest is ${largest}`);


console.log("------------------------------------ ::");
//  Problem 5: Count vowels in a string
// Example: "Ayush" → 2 vowels(A, u).
let string = "Ayush";
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < string.length; i++) {
    let ch = string[i];

    if (ch === 'A') ch = 'a';
    if (ch === 'E') ch = 'e';
    if (ch === 'I') ch = 'i';
    if (ch === 'O') ch = 'o';
    if (ch === 'U') ch = 'u';

    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
        if (ch === vowels[j]) {
            isVowel = true;
            break;
        }
    }
    if (isVowel) {
        count++;
    }
}
console.log(`Count of vowels is ${count}`);


console.log("------------------------------------ ::");
// Problem 6: Find max & min in an array.
// Approach : Use a loop to find both max and min in a single pass.
// Steps :
// 1. Initialize max and min to the first element of the array.
// 2. Loop through each element in the array.
// 3. Compare each element with max and min, and update them accordingly.
// 4. After the loop, max will contain the largest element and min will contain the smallest element.
// 5. Return or print the max and min values.

let numbers = [5, 10, 27, 8, -3, 0];
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(`Max is ${max}`);
console.log(`Min is ${min}`);


console.log("------------------------------------ ::");
// Problem 7: Check if a string is palindrome.
// Approach : Use a loop to compare characters from both ends.
// Steps :
// 1. Initialize a variable isPal to true.
// 2. Loop through the first half of the string.
// 3. Compare characters from both ends.
// 4. If they are not equal, set isPal to false and break.
// 5. After the loop, isPal will indicate if the string is a palindrome.

let palStr = "madam";
let isPal = true;

// Loop through the first half of the string
for (let i = 0; i < palStr.length / 2; i++) { //  palStr.length / 2 means we only need to check up to the middle
    // Compare the character from the start (palStr[i])
    // with the character from the end (palStr[palStr.length - 1 - i])
    // If they are not equal, the string is not a palindrome
    if (palStr[i] !== palStr[palStr.length - 1 - i]) {
        isPal = false; // Set flag to false if mismatch found
        break;         // Exit loop early since it's not a palindrome
    }
    // If matched, print the matching characters for clarity
    console.log(`Characters matched: ${palStr[i]} and ${palStr[palStr.length - 1 - i]}`);

}
console.log(`Is palindrome: ${isPal}`);


console.log("------------------------------------ ::");
// Problem 8: Merge two arrays without duplicates.
// Approach: Use a loop to add elements from both arrays to a new array if they are not already present.
// Steps :
// 1. Create an empty array called merged.
// 2. Loop through each element in arr1 and check if it is already in merged.
// 3. If not found, add it to merged.
// 4. Repeat the process for arr2.

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let merged = [];

// Merge arr1 into merged
for (let i = 0; i < arr1.length; i++) {
    // check if arr1[i] is already in merged
    let found = false;
    for (let j = 0; j < merged.length; j++) {
        if (arr1[i] === merged[j]) {
            found = true;
            break;
        }
    }
    // If not found, add arr1[i] to merged
    if (!found) {
        merged[merged.length] = arr1[i];
    }
}
console.log("After merging arr1: " + merged);

for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < merged.length; j++) {
        if (arr2[i] === merged[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        merged[merged.length] = arr2[i];
    }
}
console.log("After merging arr2: " + merged);


console.log("------------------------------------ ::");
// Problem 9: Find the frequency of a given element in an array.
// Approach : Use a loop to iterate through the array and count occurrences of the target.
// Steps :
// 1. Initialize a variable freq to 0.
// 2. Loop through each element in arrX.
// 3. If the element is equal to target, increment freq.
// 4. After the loop, freq will contain the count of target in arrX.

let arrX = [1, 2, 3, 2, 4, 2, 5, 2, 3];
let target = 2;
let freq = 0;

for (let i = 0; i < arrX.length; i++) {
    if (arrX[i] === target) {
        freq = freq + 1;
    }
}
console.log(freq);




console.log("------------------------------------ ::");
// Problem 10: Remove all spaces from a string.
// Approach : Use a loop to iterate through each character and build a new string without spaces.
// Steps :
// 1. Initialize an empty string noSpaceStr.
// 2. Loop through each character in inputStr.
// 3. If the character is not a space, add it to noSpaceStr.
// 4. If it's a space, we simply skip it.

let inputStr = "H e l l o    W o r l d  !";
let noSpaceStr = "";

// loop through each character in input string
for (let i = 0; i < inputStr.length; i++) {
    // If the character is not a space, add it to noSpaceStr
    if (inputStr[i] !== ' ') {
        noSpaceStr = noSpaceStr + inputStr[i];
    }
    // If it's a space, we simply skip it
}
console.log(noSpaceStr);


console.log("------------------------------------ ::");
// Problem 11: Find the second largest number in an array (manual way, no built-ins)

// Approach:
// 1. Initialize two variables: largest and secondLargest.
// 2. Loop through each element in the array.
// 3. If the current element is greater than largest, update secondLargest to largest, and largest to current element.
// 4. Else if the current element is less than largest but greater than secondLargest, update secondLargest.
// 5. After the loop, secondLargest will have the answer.

let arrY = [5, 2, 8, 1, 9];
let largestY = arrY[0];        // Assume first element is the largest
let secondLargestY = -Infinity; // Start with the lowest possible value

for (let i = 1; i < arrY.length; i++) {
    if (arrY[i] > largestY) {
        // If current element is greater than largest, update secondLargest first, then largest
        secondLargestY = largestY;
        largestY = arrY[i];
    } else if (arrY[i] > secondLargestY && arrY[i] < largestY) {
        // If current element is between largest and secondLargest, update secondLargest
        secondLargestY = arrY[i];
    }
    // Print current status for clarity
    console.log("Current largest:", largestY, "Current second largest:", secondLargestY);
}

// If secondLargest is still -Infinity, it means there was no second largest (all elements same)
if (secondLargestY === -Infinity) {
    console.log("No second largest number found (all elements may be equal)");
} else {
    console.log("Second largest number is: " + secondLargestY);
}


console.log("------------------------------------ ::");
// Problem 12: Find the intersection of two arrays.
// Approach:
// 1. Create an empty array called intersection.
// 2. Loop through each element in arrA.
// 3. For each element, loop through arrB and check if it exists.
// 4. If found and not already in intersection, add it.
// 5. Print the intersection array


let arrA = [1, 2, 3, 4, 5];
let arrB = [3, 4, 5, 6, 7];
let intersection = [];

for (let i = 0; i < arrA.length; i++) {

    let foundInB = false;  // foundInB variable if for checking existence in arrB
    // Check if arrA[i] exists in arrB
    for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] === arrB[j]) {
            foundInB = true;
            break; // No need to check further
        }
    }

    // Check if already added to intersection
    let alreadyAdded = false;
    // Loop through intersection to check for duplicates
    for (let k = 0; k < intersection.length; k++) {
        if (arrA[i] === intersection[k]) {
            alreadyAdded = true;
            break;
        }
    }

    // If found in arrB and not already added, add to intersection
    if (foundInB && !alreadyAdded) {
        intersection[intersection.length] = arrA[i];
    }
}

console.log("Intersection of arrays is:", intersection);






console.log("------------------------------------ ::");
// Problem 13: Find the sum of all odd numbers in an array.

// Approach:
// 1. Initialize a variable sumOdd to 0.
// 2. Loop through each element in the array.
// 3. For each element, check if it is odd (not divisible by 2).
// 4. If it is odd, add it to sumOdd.
// 5. After the loop, print the sumOdd.

let arrZ = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumOdd = 0;

for (let i = 0; i < arrZ.length; i++) {
    // Check if the number is odd
    if (arrZ[i] % 2 !== 0) {
        sumOdd = sumOdd + arrZ[i]; // Add odd number to sumOdd
        // Print each odd number for clarity
        console.log("Odd number found:", arrZ[i]);
    }
}
console.log("Sum of odd numbers is:", sumOdd);
