// Remove the first element from given array :
// --------------------------------------------------------------------------------------------------------------::

// Level 1: Most Basic - (No Built-in Methods) :
// ------------------------------------------------------------------------
let numbers = [10, 20, 30, 40];                              // Our original array of numbers
let result = [];                                              // Create empty array to store result
let position = 0;                                             // Keep track of where to put next element
for (let i = 1; i < numbers.length; i++) {                   // Start from index 1 (skip first element at index 0)
    result[position] = numbers[i];                            // Manually assign element at current position
    position = position + 1;                                 // Move to next position in result array
}
console.log("Original array:", numbers);                     // Output: [10, 20, 30, 40]
console.log("After removing first:", result);                // Output: [20, 30, 40]

/*
Step-by-step execution for [10, 20, 30, 40]:
- numbers = [10, 20, 30, 40]
- result = [] (empty)
- position = 0

Loop 1: i=1, numbers[1]=20
- result[0] = 20 → result = [20]
- position = 1

Loop 2: i=2, numbers[2]=30
- result[1] = 30 → result = [20, 30]
- position = 2

Loop 3: i=3, numbers[3]=40
- result[2] = 40 → result = [20, 30, 40]
- position = 3

Final result: [20, 30, 40]
*/



// Level 2: Function with Manual Loop :
// ------------------------------------------------------------------------
function removeFirstElement(array) {                         // Create function that takes an array as parameter
    let newArray = [];                                       // Create empty array to store result
    let newIndex = 0;                                        // Keep track of where to put next element
    for (let i = 1; i < array.length; i++) {                // Start from index 1 (skip first element)
        newArray[newIndex] = array[i];                       // Manually assign element at specific index
        newIndex++;                                          // Move to next position for new array
    }
    return newArray;                                         // Return the new array without first element
}

console.log(removeFirstElement(["apple", "banana", "orange", "mango"]));  // Expected output: ["banana", "orange", "mango"]
console.log(removeFirstElement([100, 200, 300]));                         // Expected output: [200, 300]
console.log(removeFirstElement(["single"]));                              // Expected output: []

/*
- Organized as a reusable function
- Same manual logic but more professional structure
- Can be used multiple times with different arrays
- Shows function creation and return concepts
*/



// Level 3: Function with Built-in Array Method (Modern Approach) :
// ------------------------------------------------------------------------
function removeFirstElement2(array) {                       // Create function using built-in array methods
    let arrayCopy = [...array];                             // Create copy of original array (spread operator)
    arrayCopy.shift();                                      // Remove first element from the copy
    return arrayCopy;                                       // Return the modified array
}
console.log(removeFirstElement2(["red", "blue", "green"])); // Expected output: ["blue", "green"]
console.log(removeFirstElement2([10, 20, 30, 40]));        // Expected output: [20, 30, 40]
console.log(removeFirstElement2(["single"]));              // Expected output: []

/*
- [...array] creates a copy using spread operator (ES6+ feature)
- shift() is a built-in method that removes and returns first element
- Original array remains unchanged (immutable approach)
- Much shorter and cleaner code
- Professional JavaScript development style
*/

// Alternative Level 3: Using slice() method
function removeFirstElement3(array) {                       // Another modern approach using slice
    return array.slice(1);                                 // Return everything from index 1 onwards
}
console.log(removeFirstElement3(["x", "y", "z"]));         // Expected output: ["y", "z"]

/*
- slice(1) creates new array starting from index 1
- slice doesn't modify original array (immutable)
- Returns new array with elements from index 1 to end
- Very clean, functional programming approach
*/


// Bonus Level 4: Approach with Error Handling :
// ------------------------------------------------------------------------
function removeFirstElementSafe(array) {                    // Function with proper error handling
    if (!Array.isArray(array)) {                           // Check if input is actually an array
        throw new Error("Input must be an array");          // Throw error for invalid input
    }
    if (array.length === 0) {                              // Check if array is empty
        return [];                                          // Return empty array for empty input
    }
    return array.slice(1);                                 // Return new array without first element
}
console.log(removeFirstElementSafe([5, 10, 15]));          // Expected output: [10, 15]
console.log(removeFirstElementSafe([]));                   // Expected output: [] (empty array)

/*
Why error handling matters in professional code:
- Prevents crashes from invalid inputs
- Makes code more robust and reliable
- Shows understanding of edge cases
- Industry standard practice
*/
