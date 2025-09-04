// Richest Customer Wealth
/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.


Example 2:
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.


Example 3:
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17


Topics : Array, Matrix
*/


// Approach:
// 1. You are given a 2D array (accounts), where each row represents a customer and each column is a bank account.
// 2. For each customer (each row), you need to add up all their bank balances to get their total wealth.
// 3. To do this, use two loops:
// The outer loop goes through each customer (each row of the matrix).
// The inner loop goes through each bank account for that customer (each column in the row).
// 4. For each customer, calculate the sum of their accounts.
// 5. Keep track of the maximum wealth found so far.
// 6. After checking all customers, return the maximum wealth.


/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    var maxWealth = 0;
    for (var i = 0; i < accounts.length; i++) {
        currentWealth = 0;

        for (var j = 0; j < accounts[i].length; j++) {
            currentWealth = currentWealth + accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};


// lets more understand this approach and this is working ::
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    // Variable to keep track of the richest customer's wealth
    var maxWealth = 0;

    // Loop through each customer (each row)
    for (var i = 0; i < accounts.length; i++) {
        var currentWealth = 0; // Sum for this customer
        console.log("Customer", i, "accounts:", accounts[i]);

        // Loop through each bank account for this customer
        for (var j = 0; j < accounts[i].length; j++) {
            currentWealth = currentWealth + accounts[i][j];
            console.log("  Adding account", j, "value:", accounts[i][j], "-> currentWealth:", currentWealth);
        }

        console.log("Total wealth for customer", i, ":", currentWealth);

        // If this customer's wealth is greater than maxWealth, update maxWealth
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
            console.log("  New maxWealth found:", maxWealth);
        }
    }

    // Return the maximum wealth found
    console.log("Final richest customer wealth:", maxWealth);
    return maxWealth;
};
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
