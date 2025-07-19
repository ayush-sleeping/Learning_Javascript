// print inverted star triangle  :
// --------------------------------------------------------------------------------------------------------------::

let rows = 5;
for (let i = rows; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <=i; j++) {
        line += "*";
    }
    console.log(line);
}

/*

PATTERN ANALYSIS:
Row 1: ***** (5 stars)
Row 2: ****  (4 stars)
Row 3: ***   (3 stars)
Row 4: **    (2 stars)
Row 5: *     (1 star)
RULE: Start with maximum stars, decrease by 1 each row

EXPLANATION FOR ABOVE CODE:

let rows = 5;  // Total number of rows in triangle
for (let i = rows; i >= 1; i--) {  // Start from 5, countdown to 1 (5,4,3,2,1)
    let line = "";  // Build string for current row
    for (let j = 1; j <=i; j++) {  // Add i number of stars (when i=5, add 5 stars)
        line += "*";  // Concatenate one star at a time
    }
    console.log(line);  // Print completed row
}

PATTERN OUTPUT:
*****
****
***
**
*

EXECUTION BREAKDOWN:
i=5: inner loop runs 5 times → line = "*****"
i=4: inner loop runs 4 times → line = "****"
i=3: inner loop runs 3 times → line = "***"
i=2: inner loop runs 2 times → line = "**"
i=1: inner loop runs 1 time → line = "*"

*/

// ------------------------------------------------------------------------------
function printInvertedTriangle(size) {
    for (let i = 1; i <= size; i++) {
        let stars = size - i + 1;
        let pattern = "";
        for (let j = 1; j <= stars; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
    console.log("");
}

printInvertedTriangle(4);

/*
EXPLANATION FOR ABOVE FUNCTION:

function printInvertedTriangle(size) {
    for (let i = 1; i <= size; i++) {  // Row counter from 1 to size
        let stars = size - i + 1;  // Calculate stars: 4-1+1=4, 4-2+1=3, 4-3+1=2, 4-4+1=1
        let pattern = "";  // Build pattern string for current row
        for (let j = 1; j <= stars; j++) {  // Loop stars number of times
            pattern += "*";  // Add one star per iteration
        }
        console.log(pattern);  // Output completed row
    }
    console.log("");  // Add blank line after triangle
}

EXECUTION for printInvertedTriangle(4):
Row 1: i=1, stars=4, output="****"
Row 2: i=2, stars=3, output="***"
Row 3: i=3, stars=2, output="**"
Row 4: i=4, stars=1, output="*"
*/
