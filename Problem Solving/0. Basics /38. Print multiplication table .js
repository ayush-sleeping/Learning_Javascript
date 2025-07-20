// print multiplication table  :
// --------------------------------------------------------------------------------------------------------------::

const printTable1 = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};
console.log(printTable1(4));

/*
EXPLANATION:

Basic Multiplication Table (1-10)
==========================================
const printTable1 = (num) => {
    console.log(`Multiplication Table of ${num}:`);
    console.log("=".repeat(25));

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

HOW IT WORKS:
- Simple for loop from 1 to 10
- Prints each multiplication in format: "num x i = result"
- Uses template literals for clean formatting

EXAMPLE: printTable1(5)
Output:
Multiplication Table of 5:
=========================
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
*/


// ------------------------------------------------------------------------------------
const printTable2 = (num, start, end) => {
    for (let i = start; i <= end; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};
console.log(printTable1(7));

/*
Method 2: Custom Range Multiplication Table
==========================================
const printTable2 = (num, start, end) => {
    console.log(`Multiplication Table of ${num} (${start} to ${end}):`);
    console.log("=".repeat(35));

    for (let i = start; i <= end; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

HOW IT WORKS:
- Allows custom start and end points
- More flexible than fixed 1-10 range
- Useful for specific ranges like 5-15

EXAMPLE: printTable2(3, 5, 8)
Output:
Multiplication Table of 3 (5 to 8):
===================================
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
*/
