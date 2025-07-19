// print floyd's triangle  :
// --------------------------------------------------------------------------------------------------------------::

let num = 1;
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num++;
    }
    console.log(line);
}

/*
FLOYD'S TRIANGLE PATTERN:
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

RULE: Sequential numbers arranged in triangular form
- Row 1: 1 number
- Row 2: 2 numbers
- Row 3: 3 numbers
- Numbers continue sequentially without restarting

EXPLANATION FOR ABOVE CODE:

let num = 1;  // Global counter for sequential numbering
let rows = 5;  // Total rows in triangle
for (let i = 1; i <= rows; i++) {  // Row counter from 1 to 5
    let line = "";  // Build string for current row
    for (let j = 1; j <= i; j++) {  // Position counter: row i has i numbers
        line += num + " ";  // Add current number with space
        num++;  // Increment to next sequential number
    }
    console.log(line);  // Print completed row
}

EXECUTION BREAKDOWN:
Row 1: i=1, j=1     → num=1, line="1 ", num becomes 2
Row 2: i=2, j=1,2   → num=2,3, line="2 3 ", num becomes 4
Row 3: i=3, j=1,2,3 → num=4,5,6, line="4 5 6 ", num becomes 7
Row 4: i=4, j=1,2,3,4 → num=7,8,9,10, line="7 8 9 10 ", num becomes 11
Row 5: i=5, j=1,2,3,4,5 → num=11,12,13,14,15, line="11 12 13 14 15 "
*/

function printFloydTriangle(size) {
    let number = 1;
    for (let i = 1; i <= size; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += number;
            if (j < i) pattern += " ";
            number++;
        }
        console.log(pattern);
    }
}

printFloydTriangle(4);

/*
EXPLANATION FOR ABOVE FUNCTION:

function printFloydTriangle(size) {
    let number = 1;  // Initialize sequential counter
    for (let i = 1; i <= size; i++) {  // Row counter
        let pattern = "";  // Build pattern string for current row
        for (let j = 1; j <= i; j++) {  // Position counter in current row
            pattern += number;  // Add current number
            if (j < i) pattern += " ";  // Add space between numbers (not after last)
            number++;  // Move to next sequential number
        }
        console.log(pattern);  // Print completed row
    }
}

EXECUTION for printFloydTriangle(4):
Row 1: number=1       → "1"       (number becomes 2)
Row 2: number=2,3     → "2 3"     (number becomes 4)
Row 3: number=4,5,6   → "4 5 6"   (number becomes 7)
Row 4: number=7,8,9,10 → "7 8 9 10" (number becomes 11)

OUTPUT:
1
2 3
4 5 6
7 8 9 10

KEY DIFFERENCE FROM REGULAR NUMBER TRIANGLE:
- Regular: Each row starts from 1 (1, 1 2, 1 2 3...)
- Floyd's: Numbers continue sequentially across all rows (1, 2 3, 4 5 6...)
*/

function printFloydBinary(size) {
    let number = 1;
    for (let i = 1; i <= size; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += (number % 2) + " ";
            number++;
        }
        console.log(pattern);
    }
}

console.log("\nFloyd's Binary Pattern:");
printFloydBinary(4);

/*
EXPLANATION FOR BINARY FLOYD'S:

function printFloydBinary(size) {
    let number = 1;  // Sequential counter
    for (let i = 1; i <= size; i++) {  // Row counter
        let pattern = "";  // Build pattern string
        for (let j = 1; j <= i; j++) {  // Position counter
            pattern += (number % 2) + " ";  // Use modulo to get 0 or 1
            number++;  // Increment counter
        }
        console.log(pattern);  // Print row
    }
}

EXECUTION for Binary Floyd's:
number=1: 1%2=1 → "1 "
number=2,3: 2%2=0, 3%2=1 → "0 1 "
number=4,5,6: 4%2=0, 5%2=1, 6%2=0 → "0 1 0 "
number=7,8,9,10: 7%2=1, 8%2=0, 9%2=1, 10%2=0 → "1 0 1 0 "

OUTPUT:
1
0 1
0 1 0
1 0 1 0

PATTERN VARIATION: Floyd's triangle with binary values (0s and 1s)
*/
