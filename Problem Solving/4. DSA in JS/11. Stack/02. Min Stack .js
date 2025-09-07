// Min Stack

/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.



Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Topics : Stack, Design
*/


/*
Approach:
- We need to design a stack that supports push, pop, top, and getMin operations, all in O(1) time.
- This is a classic stack problem (LIFO structure), but with an extra requirement: getMin must always return the minimum element in constant time.
- The "Design" part comes in how we store and update the minimum efficiently.

How stack is used:
- We use a stack to store the elements in the order they are pushed (LIFO).
- For each push/pop/top, we operate on the end of the stack.

How design comes into play:
- To get the minimum in O(1), we need to keep track of the minimum at every step.
- We can use two stacks:
  1. mainStack: stores all values as a normal stack.
  2. minStack: stores the minimum value at each level of the stack.
- When we push a value, we also push the new minimum (either the new value or the previous min) onto minStack.
- When we pop, we pop from both stacks.
- The top of minStack always gives us the current minimum in O(1) time.


Basically :
design a special stack (called MinStack) that works like a normal stack (push, pop, top), but also lets you get the minimum element in the stack at any time, all in constant O(1) time.

Need to implement these methods:

push(val): Add a value to the top of the stack.
pop(): Remove the value at the top of the stack.
top(): Return the value at the top of the stack.
getMin(): Return the minimum value in the stack (in O(1) time).

The challenge:
You must make sure that getMin() always works in O(1) time, no matter how many elements are in the stack.
This is why you use two stacks: one for all values, and one for tracking the minimum at each step.
*/


var MinStack = function () {
    this.mainStack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.mainStack[this.mainStack.length] = val;
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack[this.minStack.length] = val;
    } else {
        this.minStack[this.minStack.length] = this.minStack[this.minStack.length - 1];
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.mainStack.length > 0) {
        this.mainStack.length = this.mainStack.length - 1;
        this.minStack.length = this.minStack.length - 1;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.mainStack.length === 0) return null;
    return this.mainStack[this.mainStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



// lets again what's happening with the help of comments and AI :

// Step 1: Define the MinStack class and initialize two stacks
var MinStack = function () {
    this.mainStack = []; // Step 1a: Stack to store all values
    this.minStack = [];  // Step 1b: Stack to store the minimum at each level
};

// Step 2: Implement push(val)
MinStack.prototype.push = function (val) {
    this.mainStack[this.mainStack.length] = val; // Step 2a: Push value to main stack

    // Step 2b: Push the new min to minStack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack[this.minStack.length] = val; // If new min, push it
    } else {
        this.minStack[this.minStack.length] = this.minStack[this.minStack.length - 1]; // Else, repeat current min
    }
};

// Step 3: Implement pop()
MinStack.prototype.pop = function () {
    if (this.mainStack.length > 0) {
        this.mainStack.length = this.mainStack.length - 1; // Step 3a: Remove top from main stack
        this.minStack.length = this.minStack.length - 1;   // Step 3b: Remove top from min stack
    }
};

// Step 4: Implement top()
MinStack.prototype.top = function () {
    if (this.mainStack.length === 0) return null; // Step 4a: If empty, return null
    return this.mainStack[this.mainStack.length - 1]; // Step 4b: Return top of main stack
};

// Step 5: Implement getMin()
MinStack.prototype.getMin = function () {
    if (this.minStack.length === 0) return null; // Step 5a: If empty, return null
    return this.minStack[this.minStack.length - 1]; // Step 5b: Return top of min stack (current min)
};
