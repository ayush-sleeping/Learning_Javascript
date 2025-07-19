// print right triangle start pattern  :
// --------------------------------------------------------------------------------------------------------------::

// PATTERN ANALYSIS:
// Row 1: * (1 star)
// Row 2: ** (2 stars)
// Row 3: *** (3 stars)
// Row 4: **** (4 stars)
// Row 5: ***** (5 stars)
// RULE: Row number = Number of stars

// Basic approach with nested loops
// -------------------------------------------------------------------------------
let rows = 5;                      // Total number of rows in triangle
for (let i = 1; i <= rows; i++) {  // Outer loop: controls which row we're on (1 to 5)
    let line = "";                 // String to accumulate stars for current row
    for (let j = 1; j <= i; j++) {  // Inner loop: adds stars equal to row number
        line = line + "*";         // Concatenate one star at a time
    }
    console.log(line);            // Print completed row
}

// LOGIC EXPLANATION:
// When i=1: inner loop runs 1 time → line = "*"
// When i=2: inner loop runs 2 times → line = "**"
// When i=3: inner loop runs 3 times → line = "***"
// And so on...



// Function approach for reusability
// -------------------------------------------------------------------------------
function printRightTriangle(size) {    // Parameter: number of rows
    for (let i = 1; i <= size; i++) {  // i represents current row number (1, 2, 3...)
        let pattern = "";              // Build pattern string for this row
        for (let j = 1; j <= i; j++) {  // j counts stars: runs i times
            pattern += "*";            // Short form: pattern = pattern + "*"
        }
        console.log(pattern);          // Output the completed row
    }
    console.log("");                   // Add blank line for visual separation
}
printRightTriangle(3);                 // Test with small triangle
printRightTriangle(6);                 // Test with medium triangle

// STEP-BY-STEP EXECUTION for printRightTriangle(3):
// Call: printRightTriangle(3)
//
// i=1: pattern="" → j=1: pattern="*" → print "*"
// i=2: pattern="" → j=1: pattern="*" → j=2: pattern="**" → print "**"
// i=3: pattern="" → j=1: pattern="*" → j=2: pattern="**" → j=3: pattern="***" → print "***"
//
// Output:
// *
// **
// ***
