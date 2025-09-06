// ------------------------:: Revision and Practice the ESSENTIAL ::------------------------
// - Reverse a string                     // Reason: Basic string manipulation and indexing
// - Check if a string is a palindrome    // Reason: Two-pointer/string comparison pattern
// - Reverse an array                      // Reason: Array manipulation fundamentals
// - Find largest and smallest in array    // Reason: Single-pass traversal, common check
// - Find frequency of elements in array   // Reason: Counting/hashmap basics
// - Count occurrences of each character  // Reason: String frequency & hashing
// - Remove duplicates from array          // Reason: Deduplication patterns (set/map)
// - Find missing number in array          // Reason: Math/array trick (common interview ask)
// - Merge two array                        // Reason: Array concatenation + dedupe/merge logic
// - Find union of two arrays               // Reason: Combining sets, basic hashing
// - Sort array in ascending order          // Reason: Fundamental sorting understanding
// - Sort array in descending order         // Reason: Sorting variant, comparator idea
// - Merge two sorted arrays without built-in sort // Reason: Two-pointer technique
// - Count words in a sentence              // Reason: String parsing and token counting
// - Remove spaces from string              // Reason: String filtering/parsing
// - Count the number of vowels in a string// Reason: Simple character checks
// - Sum of first N natural numbers         // Reason: Basic math and loops
// - Check if a number is even or odd      // Reason: Bitwise/mod operator basics
// - Find index of element in array         // Reason: Linear search primitive
// - Print all type of star pattern        // Reason: Loop practice (visual)


console.log("------------------------------------ ::");
// - Reverse a string
let str = "Hello World !";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log(reversed);



console.log("------------------------------------ ::");
// - Check if a string is a palindrome
let string = "olo";
let opposite = "";
for (let i = string.length - 1; i >= 0; i--) {
    opposite = opposite + string[i];
}
if (string === opposite) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}



console.log("------------------------------------ ::");
// - Reverse an array
let word = "Hello";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
}
console.log(reversedWord);



console.log("------------------------------------ ::");
// - Find largest and smallest in array
function findLargestAndSmallest(arr) {
    let arrLength = getArrayLength(arr);
    if (arrLength === 0) {
        return { largest: null, smallest: null };
    }

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arrLength; i++) {
        let currentElement = arr[i];

        if (currentElement > largest) {
            largest = currentElement;
        }

        if (currentElement < smallest) {
            smallest = currentElement;
        }
    }

    let result = {};
    result.largest = largest;
    result.smallest = smallest;
    return result;
}
function getArrayLength(arr) {
    let length = 0;
    while (arr[length] !== undefined) {
        length++;
    }
    return length;
}

let test = [4, 8, 2, 12, 1, 6];
let result = findLargestAndSmallest(test);
console.log(result); // largest: 12, smallest: 1




console.log("------------------------------------ ::");
// - Find frequency of elements in array
function findFrequency(arr) {
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }
    return frequency;
}
let test1 = [1, 2, 3, 1, 1, 3, 1];
let result1 = findFrequency(test1);
console.log(result1); // {1: 3, 2: 2, 3: 2}

function findFrequencyArray(arr) {
    let unique = [];
    let count = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let found = false;

        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === element) {
                count[j]++;
                found = true;
                break;
            }
        }

        if (!found) {
            unique[unique.length] = element;
            count[count.length] = 1;
        }
    }
    for (let k = 0; k < unique.length; k++) {
        console.log(unique[k] + " - " + count[k]);
    }

}
let test2 = [1, 2, 3, 1, 1, 3, 1];
findFrequencyArray(test2);





console.log("------------------------------------ ::");
// - Count occurrences of each character
function countCharOccur(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
console.log(countCharOccur("hello world"));


function countCharacterOccurrences(str) {
    let characters = [];
    let counts = [];
    let uniqueCount = 0;

    for (let i = 0; i < getStringLength(str); i++) {
        let currentChar = str[i];
        let found = false;

        for (let j = 0; j < uniqueCount; j++) {
            if (characters[j] === currentChar) {
                counts[j]++;
                found = true;
                break;
            }
        }

        if (!found) {
            characters[uniqueCount] = currentChar;
            counts[uniqueCount] = 1;
            uniqueCount++;
        }
    }

    let result = {};
    for (let i = 0; i < uniqueCount; i++) {
        result[characters[i]] = counts[i];
    }
    return result;
}

function getStringLength(str) {
    let length = 0;

    while (str[length] !== undefined) {
        length++;
    }

    return length;
}
console.log(countCharacterOccurrences("programming"));





console.log("------------------------------------ ::");
// - Remove duplicates from array





console.log("------------------------------------ ::");
// - Print all type of star pattern        // Reason: Loop practice (visual)
let num1 = 5;
let pattern1 = "";
if (num1 > 1) {
    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= i; j++) {
            pattern1 = pattern1 + "* ";
        }
        pattern1 += "\n"
    }
    console.log(pattern1);
} else {
    console.log("Num must be greater than +1.");
}
/*
Left Triangle :

*
* *
* * *
* * * *
* * * * *
*/



let num2 = 5;
let pattern2 = "";
if (num2 > 1) {
    for (let i = 1; i <= num2; i++) {
        for (let j = 0; j <= (num2 - i); j++) {
            pattern2 = pattern2 + "* ";
        }
        pattern2 = pattern2 + "\n";
    }
    console.log(pattern2);
} else {
    console.log("Num must be greater than +1.");
}
/*
Downward Left Triangle :

* * * * *
* * * *
* * *
* *
*
*/

let num3 = 5;
let pattern3 = "";
if (num3 > 1) {
    for (let i = 1; i <= num3; i++) {
        for (let j = 1; j <= (num3 - i); j++) {
            pattern3 = pattern3 + "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {
            pattern3 = pattern3 + "* ";
        }
        pattern3 = pattern3 + "\n";
    }
    console.log(pattern3);

} else {
    console.log("Num must be greater than +1.");
}

/*
Pyramid Triangle :

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/
