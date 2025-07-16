// Find minimum value in array :
// --------------------------------------------------------------------------------------------------------------::

// Way 1: Simple Direct Code (No Function) :
let numbers = [8, 3, 7, 1, 9, 2];                 // Our array of numbers
let smallest = numbers[0];                         // Start with first element as smallest
for (let i = 1; i < numbers.length; i++) {        // Loop through remaining elements
    if (numbers[i] < smallest) {                   // If current number is smaller
        smallest = numbers[i];                     // Update smallest
    }
}

console.log("Smallest number is:", smallest);     // Output: 1


// --------------------------------------------------------------------------------------------------------------::


// Way 2: Function with Traditional For Loop :
function findMinimum(numbers) {                    // Create function that takes an array as parameter
    let smallest = numbers[0];                     // Start by assuming first element is the smallest
    for (let i = 1; i < numbers.length; i++) {    // Start from index 1 (since we already have first element)
        if (numbers[i] < smallest) {               // If current number is smaller than our current smallest
            smallest = numbers[i];                 // Update smallest to this new smaller number
        }
    }                                              // End of loop - we've checked all numbers
    return smallest;                               // Return the smallest number we found
}

console.log(findMinimum([15, 5, 10]));            // Expected output: 5

/*
Step-by-step execution for [8, 3, 7, 1, 9, 2]:
Start: smallest = 8 (first element)
Loop 1: i=1, numbers[1]=3, 3<8? YES, smallest=3
Loop 2: i=2, numbers[2]=7, 7<3? NO, smallest stays 3
Loop 3: i=3, numbers[3]=1, 1<3? YES, smallest=1
Loop 4: i=4, numbers[4]=9, 9<1? NO, smallest stays 1
Loop 5: i=5, numbers[5]=2, 2<1? NO, smallest stays 1
Return: 1
*/



// --------------------------------------------------------------------------------------------------------------::

// Way 3: Function with For...Of Loop (Modern ES6+ Syntax) :
function findMinimum2(numbers) {                   // Create function using for...of loop
    let smallest = numbers[0];                     // Start by assuming first element is the smallest
    for (let number of numbers) {                  // Go through each number in the array directly
        if (number < smallest) {                   // If current number is smaller than our current smallest
            smallest = number;                     // Update smallest to this new smaller number
        }
    }                                              // End of loop - we've checked all numbers
    return smallest;                               // Return the smallest number we found
}

console.log(findMinimum2([20, 5, 15, 3]));        // Expected output: 3

/*
Step-by-step execution for [8, 3, 7, 1, 9, 2]:
Start: smallest = 8 (first element)
Loop 1: number=8, 8<8? NO, smallest stays 8
Loop 2: number=3, 3<8? YES, smallest=3
Loop 3: number=7, 7<3? NO, smallest stays 3
Loop 4: number=1, 1<3? YES, smallest=1
Loop 5: number=9, 9<1? NO, smallest stays 1
Loop 6: number=2, 2<1? NO, smallest stays 1
Return: 1
*/
