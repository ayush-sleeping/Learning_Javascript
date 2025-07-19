// print diamond star pattern  :
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
for (let i = rows - 1; i >= 1; i--) {
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
 *******  (1 space, 7 stars)
  *****   (2 spaces, 5 stars)
   ***    (3 spaces, 3 stars)
    *     (4 spaces, 1 star)

DIAMOND = PYRAMID + INVERTED PYRAMID (without repeating middle row)

EXPLANATION FOR ABOVE CODE:

// UPPER HALF (Pyramid)
for (let i = 1; i <= rows; i++) {  // Rows 1 to 5
    let line = "";

    for (let j = 1; j <= rows - i; j++) {  // Add spaces for centering
        line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {  // Add stars in odd sequence
        line += "*";
    }

    console.log(line);
}

// LOWER HALF (Inverted Pyramid, excluding middle row)
for (let i = rows - 1; i >= 1; i--) {  // Rows 4 down to 1 (skip row 5)
    let line = "";

    for (let j = 1; j <= rows - i; j++) {  // Add spaces
        line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {  // Add stars
        line += "*";
    }

    console.log(line);
}

EXECUTION BREAKDOWN:
Upper Half: i=1,2,3,4,5 → Normal pyramid
Lower Half: i=4,3,2,1   → Mirror pyramid (excluding middle)
*/


// ------------------------------------------------------------------------------
function printDiamond(size) {
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
    for (let i = size - 1; i >= 1; i--) {
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
printDiamond(3);

/*
EXPLANATION FOR ABOVE FUNCTION:

function printDiamond(size) {
    // Upper half of diamond (pyramid)
    for (let i = 1; i <= size; i++) {  // Build upward from 1 to size
        let spaces = "";
        let stars = "";

        for (let j = 1; j <= size - i; j++) {  // Calculate spaces needed
            spaces += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {  // Calculate stars needed
            stars += "*";
        }

        console.log(spaces + stars);
    }

    // Lower half of diamond (inverted pyramid)
    for (let i = size - 1; i >= 1; i--) {  // Build downward from size-1 to 1
        let spaces = "";
        let stars = "";

        for (let j = 1; j <= size - i; j++) {  // Same space logic
            spaces += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {  // Same star logic
            stars += "*";
        }

        console.log(spaces + stars);
    }
}

EXECUTION for printDiamond(3):
Upper: i=1,2,3 → rows with 1,3,5 stars
Lower: i=2,1   → rows with 3,1 stars

OUTPUT:
  *
 ***
*****
 ***
  *

KEY INSIGHT: Diamond = Pyramid + Inverted Pyramid (skip middle row repetition)
*/
