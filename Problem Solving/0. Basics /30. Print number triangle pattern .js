// pint number triangle pattern  :
// --------------------------------------------------------------------------------------------------------------::

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}

/*
PATTERN ANALYSIS:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

RULE: Row i contains numbers from 1 to i

EXPLANATION FOR ABOVE CODE:

let rows = 5;  // Total number of rows
for (let i = 1; i <= rows; i++) {  // Row counter from 1 to 5
    let line = "";  // Build string for current row
    for (let j = 1; j <= i; j++) {  // Number counter from 1 to current row number
        line += j + " ";  // Add number and space
    }
    console.log(line);  // Print completed row
}

EXECUTION BREAKDOWN:
i=1: j runs 1 to 1 → "1 "
i=2: j runs 1 to 2 → "1 2 "
i=3: j runs 1 to 3 → "1 2 3 "
i=4: j runs 1 to 4 → "1 2 3 4 "
i=5: j runs 1 to 5 → "1 2 3 4 5 "
*/


// ---------------------------------------------------------------
function printNumberTriangle(size) {
    for (let i = 1; i <= size; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += j;
            if (j < i) pattern += " ";
        }
        console.log(pattern);
    }
}

printNumberTriangle(5);

/*
EXPLANATION FOR ABOVE FUNCTION:

function printNumberTriangle(size) {
    for (let i = 1; i <= size; i++) {  // Row counter
        let pattern = "";  // Build pattern string
        for (let j = 1; j <= i; j++) {  // Number counter from 1 to i
            pattern += j;  // Add current number
            if (j < i) pattern += " ";  // Add space between numbers (not after last)
        }
        console.log(pattern);  // Print row
    }
}

EXECUTION for printNumberTriangle(4):
i=1: j=1     → "1"
i=2: j=1,2   → "1 2"
i=3: j=1,2,3 → "1 2 3"
i=4: j=1,2,3,4 → "1 2 3 4"

SPACING LOGIC: Add space only between numbers, not after last number
*/


// ---------------------------------------------------------------
let num = 1;
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num++;
    }
    console.log(line);
}

/*
EXPLANATION FOR CONTINUOUS NUMBER PATTERN:

let num = 1;  // Global counter for continuous numbering
for (let i = 1; i <= 4; i++) {  // Row counter
    let line = "";  // Build row string
    for (let j = 1; j <= i; j++) {  // Position counter in current row
        line += num + " ";  // Add current number
        num++;  // Increment for next position
    }
    console.log(line);  // Print row
}

EXECUTION for continuous pattern:
Row 1: num=1     → "1 "     (num becomes 2)
Row 2: num=2,3   → "2 3 "   (num becomes 4)
Row 3: num=4,5,6 → "4 5 6 " (num becomes 7)
Row 4: num=7,8,9,10 → "7 8 9 10 "


OUTPUT:
1
2 3
4 5 6
7 8 9 10

PATTERN VARIATION: Numbers continue sequentially instead of restarting each row
*/
