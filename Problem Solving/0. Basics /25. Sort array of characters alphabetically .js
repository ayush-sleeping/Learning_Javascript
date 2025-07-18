// sort array of characters alphabetically  :
// --------------------------------------------------------------------------------------------------------------::

// Bubble Sort - Manual approach without built-ins
// ----------------------------------------------------------------------
let characters = ['z', 'a', 'm'];  // Original unsorted array

for (let i = 0; i < characters.length; i++) {  // Outer loop: controls number of passes
    for (let j = 0; j < characters.length - 1 - i; j++) {  // Inner loop: compares adjacent elements

        // Compare ASCII values to determine alphabetical order
        if (characters[j] > characters[j + 1]) {  // If left element > right element (wrong order)
            // Three-step swap process without built-in functions
            let temp = characters[j];  // Store left element temporarily
            characters[j] = characters[j + 1];  // Move right element to left position
            characters[j + 1] = temp;  // Move stored element to right position
        }

    }
}
console.log("Bubble Sort:", characters);  // Output: ['a', 'm', 'z']


// Selection Sort - Find minimum and place at beginning
// ----------------------------------------------------------------------
let chars2 = ['d', 'a', 'c', 'b'];  // Test array for selection sort

for (let i = 0; i < chars2.length - 1; i++) {  // For each position in array
    let minIndex = i;  // Assume current position has the minimum value

    // Find the actual minimum in remaining unsorted portion
    for (let j = i + 1; j < chars2.length; j++) {  // Check all elements after current position
        if (chars2[j] < chars2[minIndex]) {  // If found smaller element
            minIndex = j;  // Update index of minimum element
        }
    }

    // Swap minimum element with current position if needed
    if (minIndex !== i) {  // Only swap if minimum is different from current
        let temp = chars2[i];  // Store current element
        chars2[i] = chars2[minIndex];  // Move minimum to current position
        chars2[minIndex] = temp;  // Move current element to minimum's position
    }
}
console.log("Selection Sort:", chars2);  // Output: ['a', 'b', 'c', 'd']


// Built-in Sort Method - Production ready approach
// ----------------------------------------------------------------------
let chars3 = ['y', 'a', 'z', 'b', 'm'];  // Array to sort using built-in method

let sortedChars = chars3.sort();  // JavaScript's built-in sort method (modifies original array)
console.log("Built-in Sort Result:", sortedChars);  // Output: ['a', 'b', 'm', 'y', 'z']

// SORTING ALGORITHM COMPARISON:
// Bubble Sort: Compare adjacent elements, swap if wrong order, repeat
// Selection Sort: Find minimum element, place at beginning, repeat for rest
// Built-in Sort: Uses optimized algorithm (usually Quicksort/Mergesort)

// CHARACTER COMPARISON:
// JavaScript compares characters using ASCII values
// 'a'=97, 'b'=98, 'c'=99, ..., 'z'=122
// When using > or <, JS automatically compares ASCII values
