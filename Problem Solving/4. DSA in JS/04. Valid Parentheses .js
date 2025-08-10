/*

Examples:
- Input: s = "()" → Output: true
- Input: s = "()[]{}" → Output: true
- Input: s = "(]" → Output: false

 */

var isValid = function (s) {
    let stack = [];
    let top = -1;

    function pushToStack(element) {
        top = top + 1;
        stack[top] = element;
    }

    function popFromStack() {
        if (top === -1) {
            return null; // Stack is empty
        }
        let element = stack[top];
        stack[top] = undefined; // Clear the slot
        top = top - 1;
        return element;
    }

    function isEmpty() {
        return top === -1;
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            pushToStack(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (isEmpty()) {
                return false; // No matching opening bracket
            }
            let topElement = popFromStack();
            if ((char === ')' && topElement !== '(') ||
                (char === '}' && topElement !== '{') ||
                (char === ']' && topElement !== '[')) {
                return false;
            }
        }
    }
    return isEmpty();
};

let testCases = [
    "()",           // true
    "()[]{}", 	    // true
    "(]",           // false
    "([)]",         // false
    "{[]}",         // true
    "",             // true
    "(((",          // false
    ")))"           // false
];

for (let test of testCases) {
    console.log(`"${test}" →`, isValid(test));
}
