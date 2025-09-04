// Baseball Game

/*
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.



Example 1:
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.


Example 2:
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.


Example 3:
Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.


Topics: Array, Stack, Simulation
*/


/**
 * Approach:
 * - We need to keep track of scores using a stack (array).
 * - For each operation in the input:
 *   - If it's a number, convert it to integer and add to the stack.
 *   - If it's "C", remove (pop) the last score from the stack.
 *   - If it's "D", double the last score and add to the stack.
 *   - If it's "+", add the last two scores and push the result to the stack.
 * - After processing all operations, sum up all values in the stack to get the final score.
 * - This simulates the baseball game's scoring rules step by step.
*/


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    var stack = [];

    // Manual string to number conversion function
    function toNumber(str) {
        var num = 0; // This will store the final number
        var isNegative = false; // Flag to check if the number is negative
        var start = 0; // Start index for digit parsing

        if (str[0] === '-') { // If the first character is '-', it's a negative number
            isNegative = true; // Set the negative flag
            start = 1; // Start parsing digits from index 1 (skip '-')
        }

        for (var i = start; i < str.length; i++) { // Loop through each digit character
            // Convert character to digit and build the number
            num = num * 10 + (str[i] - '0'); // Multiply current num by 10 and add the new digit
            // Example: "42" -> num = 0*10+4=4, then num=4*10+2=42
        }

        if (isNegative) { // If negative flag is set
            num = -num; // Make the number negative
        }

        return num; // Return the
    }


    // Process each operation one by one
    for (var i = 0; i < operations.length; i++) {
        var op = operations[i];

        if (op !== "C" && op !== "D" && op !== "+") {
            stack[stack.length] = toNumber(op); // add to stack
        } else if (op === "C") {
            stack.length = stack.length - 1; // remove the last score
        } else if (op === "D") {
            var lastScore = stack[stack.length - 1]; // double the last score and add
            stack[stack.length] = lastScore * 2;
        } else if (op === "+") {
            var last = stack[stack.length - 1]; // add last two scores and add
            var secondLast = stack[stack.length - 2];
            stack[stack.length] = last + secondLast;
        }
    }

    // Sum up all scores in the stack
    var total = 0;
    for (var j = 0; j < stack.length; j++) {
        total = total + stack[j];
    }
    return total;
};
console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));


/*
Overview ::
1. Create a stack to keep scores.
2. Convert string numbers manually (no built-in).
3. Process each operation:
   - If number, add to stack.
   - If "C", remove last score.
   - If "D", double last score and add.
   - If "+", add last two scores and add.
4. Sum all scores in the stack for the answer.
*/



/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    // Array to act as a stack for scores
    var stack = [];

    // Loop through each operation
    for (var i = 0; i < operations.length; i++) {
        var op = operations[i];

        // If op is a number (can be negative), add to stack
        if (op !== "C" && op !== "D" && op !== "+") {
            stack[stack.length] = parseInt(op);
        }
        // If op is "C", remove the last score
        else if (op === "C") {
            stack.length = stack.length - 1; // Remove last element
        }
        // If op is "D", double the last score and add
        else if (op === "D") {
            var lastScore = stack[stack.length - 1];
            stack[stack.length] = lastScore * 2;
        }
        // If op is "+", add last two scores and add
        else if (op === "+") {
            var last = stack[stack.length - 1];
            var secondLast = stack[stack.length - 2];
            stack[stack.length] = last + secondLast;
        }
    }

    // Sum up all scores in the stack
    var total = 0;
    for (var j = 0; j < stack.length; j++) {
        total = total + stack[j];
    }
    return total;
};

/*
How this code works:
- We use an array as a stack to keep track of scores.
- For each operation, we update the stack according to the rules.
- At the end, we sum all scores in the stack for the answer.
*/
