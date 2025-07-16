// Find the largest number in given array :
// --------------------------------------------------------------------------------------------------------------::

// Way 1: Simple Direct Code (No Function) :
let numbers = [3, 7, 2, 9, 1];                    // Our array of numbers
let largest = numbers[0];                          // Start with first element as largest
for (let i = 1; i < numbers.length; i++) {        // Loop through remaining elements
    if (numbers[i] > largest) {                    // If current number is bigger
        largest = numbers[i];                      // Update largest
    }
}

console.log("Largest number is:", largest);       // Output: 9


// --------------------------------------------------------------------------------------------------------------::


// Way 2: Function with Traditional For Loop :
function findLargest(numbers) {                    // Create function that takes an array as parameter
    let largest = numbers[0];                      // Start by assuming first element is the largest
    for (let i = 1; i < numbers.length; i++) {     // Start from index 1 (since we already have first element)
        if (numbers[i] > largest) {                // If current number is bigger than our current largest
            largest = numbers[i];                  // Update largest to this new bigger number
        }
    }                                              // End of loop - we've checked all numbers
    return largest;                                // Return the biggest number we found
}

console.log(findLargest([3, 7, 2, 9, 1]));       // Expected output: 9


/*
Step-by-step execution for [3, 7, 2, 9, 1]:
Start: largest = 3 (first element)
Loop 1: i=1, numbers[1]=7, 7>3? YES, largest=7
Loop 2: i=2, numbers[2]=2, 2>7? NO, largest stays 7
Loop 3: i=3, numbers[3]=9, 9>7? YES, largest=9
Loop 4: i=4, numbers[4]=1, 1>9? NO, largest stays 9
Return: 9
*/



// --------------------------------------------------------------------------------------------------------------::

// Way 3: Function with For...Of Loop (Modern ES6+ Syntax) :
function findLargest2(numbers) {                   // Create function using for...of loop
    let largest = numbers[0];                      // Start by assuming first element is the largest
    for (let number of numbers) {                  // Go through each number in the array directly
        if (number > largest) {                    // If current number is bigger than our current largest
            largest = number;                      // Update largest to this new bigger number
        }
    }                                              // End of loop - we've checked all numbers
    return largest;                                // Return the biggest number we found
}

console.log(findLargest2([3, 7, 2, 9, 1]));      // Expected output: 9

/*
Step-by-step execution for [3, 7, 2, 9, 1]:
Start: largest = 3 (first element)
Loop 1: number=3, 3>3? NO, largest stays 3
Loop 2: number=7, 7>3? YES, largest=7
Loop 3: number=2, 2>7? NO, largest stays 7
Loop 4: number=9, 9>7? YES, largest=9
Loop 5: number=1, 1>9? NO, largest stays 9
Return: 9
*/



// --------------------------------------------------------------------------------------------------------------::
