// print pyramid star pattern  :
// --------------------------------------------------------------------------------------------------------------::

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }
    console.log(line);
}

/*
PATTERN ANALYSIS:
    *     (4 spaces, 1 star)
   ***    (3 spaces, 3 stars)
  *****   (2 spaces, 5 stars)
 *******  (1 space, 7 stars)
********* (0 spaces, 9 stars)

RULES:
- Row i has: (rows - i) spaces + (2*i - 1) stars
- Spaces decrease, stars increase in odd numbers

EXPLANATION FOR ABOVE CODE:

let rows = 5;  // Total number of rows in pyramid
for (let i = 1; i <= rows; i++) {  // Row counter from 1 to 5
    let line = "";  // Build string for current row

    // Add spaces for centering
    for (let j = 1; j <= rows - i; j++) {  // When i=1: 5-1=4 spaces, i=2: 5-2=3 spaces
        line += " ";  // Add one space
    }

    // Add stars in odd numbers
    for (let k = 1; k <= 2 * i - 1; k++) {  // When i=1: 2*1-1=1 star, i=2: 2*2-1=3 stars
        line += "*";  // Add one star
    }

    console.log(line);  // Print completed row
}

EXECUTION BREAKDOWN:
i=1: 4 spaces + 1 star  → "    *"
i=2: 3 spaces + 3 stars → "   ***"
i=3: 2 spaces + 5 stars → "  *****"
i=4: 1 space + 7 stars  → " *******"
i=5: 0 spaces + 9 stars → "*********"
*/


// ------------------------------------------------------------------------------
function printPyramid(size) {
    for (let i = 1; i <= size; i++) {
        let spaces = "";
        let stars = "";
        for (let j = 1; j <= size - i; j++) {
            spaces += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
}
printPyramid(4);

/*
EXPLANATION FOR ABOVE FUNCTION:

function printPyramid(size) {
    for (let i = 1; i <= size; i++) {  // Row counter
        let spaces = "";  // Build spaces string
        let stars = "";   // Build stars string

        // Generate required spaces
        for (let j = 1; j <= size - i; j++) {  // Loop (size - i) times
            spaces += " ";  // Add one space each time
        }

        // Generate required stars
        for (let k = 1; k <= 2 * i - 1; k++) {  // Loop (2*i-1) times
            stars += "*";  // Add one star each time
        }

        console.log(spaces + stars);  // Combine and print
    }
}

EXECUTION for printPyramid(4):
i=1: spaces=3, stars=1  → "   *"
i=2: spaces=2, stars=3  → "  ***"
i=3: spaces=1, stars=5  → " *****"
i=4: spaces=0, stars=7  → "*******"

KEY FORMULAS:
- Spaces = total_rows - current_row
- Stars = 2 * current_row - 1 (odd sequence: 1,3,5,7,9...)
*/
