// Sum all numbers in array ::
// --------------------------------------------------------------------------------------------------------------::

// one way ( Traditional approach ) :
function sumArray(numbers) {                    // Create function that takes an array as parameter
    let total = 0;                              // Initialize accumulator variable to store sum (start with 0)
    for (let i = 0; i < numbers.length; i++){   // Loop: i=counter, start at 0, go until array length, increment by 1
        total = total + numbers[i];             // Add current array element (at position i) to our running total
    }                                           // End of loop - repeat until all elements are added
    return total;                               // Return the final sum to whoever called this function
}

console.log(sumArray([1, 2, 3, 4, 5]));       // Expected output: 15 (1+2+3+4+5)

/*
Step-by-step execution for [1, 2, 3, 4, 5]:
Loop 1: i=0, total=0+1=1
Loop 2: i=1, total=1+2=3
Loop 3: i=2, total=3+3=6
Loop 4: i=3, total=6+4=10
Loop 5: i=4, total=10+5=15
Return: 15
*/

// --------------------------------------------------------------------------------------------------------------::

// second way ( Modern ES6+ approach ) :
function sumArray2(numbers){         // Create function using for...of loop (cleaner syntax)
    let total = 0;                   // Initialize accumulator variable to store sum (start with 0)
    for (let number of numbers){     // for...of loop: directly get each VALUE from array (no index needed)
        total += number;             // Add current number to total (+= is shorthand for total = total + number)
    }                                // End of loop - automatically goes through all array elements
    return total;                    // Return the final sum to whoever called this function
}

console.log(sumArray2([10, 30]));    // Expected output: 40 (10+30)


// --------------------------------------------------------------------------------------------------------------::

// third way ( With error handling ) :
function sumArray3(numbers) {                    // 'numbers' clearly indicates it's an array of multiple numbers
    if (!numbers || numbers.length === 0) {     // Check if array exists and is not empty
        return 0;                                // Return 0 for empty/invalid arrays
    }

    let sum = 0;                                 // Initialize accumulator variable
    for (let i = 0; i < numbers.length; i++){   // Loop through all elements in the array
        sum += numbers[i];                       // Add each number to our running sum
    }
    return sum;                                  // Return the final sum
}

console.log(sumArray3([10, 15]));               // Expected output: 25 (10+15)
console.log(sumArray3([]));                     // Expected output: 0 (empty array)
console.log(sumArray3(null));                   // Expected output: 0 (null input)

// --------------------------------------------------------------------------------------------------------------::
