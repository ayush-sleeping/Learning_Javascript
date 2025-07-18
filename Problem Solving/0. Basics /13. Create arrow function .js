// create an arrow function :
// --------------------------------------------------------------------------------------------------------------::

// Basic arrow function - no parameters
// ------------------------------------------------------------------------
const greet = () => "Hello World!";
console.log(greet());

// Arrow function with parameters
// ------------------------------------------------------------------------
const add = (a, b) => a + b;
console.log(add(5, 3));

// Multi-line arrow function - requires return statement
// ------------------------------------------------------------------------
const calculate = (x, y) => {
    const sum = x + y;
    return sum * 2;
};
console.log(calculate(3, 4));

// Single parameter - no parentheses needed
// ------------------------------------------------------------------------
const square = x => x * x;
console.log(square(4));

// Arrow function returning object - use parentheses
// ------------------------------------------------------------------------
const createUser = (name, age) => ({ name, age });
console.log(createUser("Ayush", 22));

// Arrow function with array methods
// ------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);  // transforms each element
const evens = numbers.filter(n => n % 2 === 0);  // filters elements
console.log(doubled);
console.log(evens);

// Higher-order function - function returning function
// ------------------------------------------------------------------------
const multiply = (factor) => (num) => num * factor;
const triple = multiply(3);
console.log(triple(5));
