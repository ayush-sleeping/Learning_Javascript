// Robot Return to Origin
/*
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.



Example 1:
Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.


Example 2:
Input: moves = "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.


Topics : String, Simulation
*/


/**
 * Approach:
 * - The robot starts at position (0, 0) on a 2D plane.
 * - We are given a string of moves: 'U' (up), 'D' (down), 'L' (left), 'R' (right).
 * - Each move changes the robot's position:
 *   - 'U': y increases by 1
 *   - 'D': y decreases by 1
 *   - 'L': x decreases by 1
 *   - 'R': x increases by 1
 * - We need to simulate all moves, updating x and y for each character in the string.
 * - After all moves, if the robot is back at (0, 0), return true. Otherwise, return false.
 * - We will not use any built-in JS string or array methods.
*/



/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var x = 0;
    var y = 0;

    for (var i = 0; i < moves.length; i++) {
        var move = moves[i];

        if (move === 'U') {
            y = y + 1;
        } else if (move === 'D') {
            y = y - 1;
        } else if (move === 'R') {
            x = x + 1;
        } else if (move === 'L') {
            x = x - 1;
        }
    }

    if (x === 0 && y === 0) {
        return true;
    } else {
        return false;
    }
};



/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    // Start at the origin
    var x = 0; // horizontal position
    var y = 0; // vertical position

    // Loop through each character in the moves string
    for (var i = 0; i < moves.length; i++) {
        var move = moves[i];
        console.log("Step", i, "Move:", move, "Current position: (", x, ",", y, ")");

        // Update position based on the move
        if (move === 'U') {
            y = y + 1; // Move up
        } else if (move === 'D') {
            y = y - 1; // Move down
        } else if (move === 'L') {
            x = x - 1; // Move left
        } else if (move === 'R') {
            x = x + 1; // Move right
        }
        console.log("  After move:", move, "New position: (", x, ",", y, ")");
    }
    // After all moves, check if back at the origin
    console.log("Final position: (", x, ",", y, ")");
    if (x === 0 && y === 0) {
        console.log("Returned to origin: true");
        return true;
    } else {
        console.log("Returned to origin: false");
        return false;
    }
};
console.log(judgeCircle("UD"));   // true
console.log(judgeCircle("LL"));   // false
