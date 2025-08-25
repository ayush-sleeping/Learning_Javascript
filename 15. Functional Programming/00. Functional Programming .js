// Functional Programming
// Functional Programming (FP) is a programming paradigm that treats computation
//   as the evaluation of mathematical functions. It emphasizes:
//   - Immutability (data doesn't change)
//   - Pure functions (no side effects)
//   - Function composition
//   - Declarative code style
/*
-------------------------------------------------------------------------::
Subtopics :
- map,
- reduce,
- filter

- pure functions
- immutability
- function composition
- higher-order functions
- first-class functions
- currying
- closures
- arrow functions
- recursion
- side effects
- declarative vs imperative code
- chaining methods
- lazy evaluation
- functors and monads (advanced)

*/




// -------------------------------------------------------------------------::
// 1. MAP - Transform each element in an array
/*
  map() creates a new array by calling a function on every element of the original array
  Syntax: array.map(callback(element, index, array))
  - Always returns a new array of the same length
  - Doesn't modify the original array
*/

const numbers = [1, 2, 3, 4, 5];

// Basic map usage
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Map with objects
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ['John', 'Jane', 'Bob']

// Map with index
const withIndex = numbers.map((num, index) => `${index}: ${num}`);
console.log(withIndex); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']





// -------------------------------------------------------------------------::
// 2. REDUCE - Reduce array to a single value
/*
  reduce() executes a reducer function on each element, resulting in a single value
  Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
  - Accumulator: the accumulated value previously returned
  - CurrentValue: the current element being processed
*/

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Find maximum value
const max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
console.log(max); // 5

// Group objects by property
const groupedByAge = users.reduce((acc, user) => {
    const ageGroup = user.age >= 30 ? 'senior' : 'junior';
    if (!acc[ageGroup]) acc[ageGroup] = [];
    acc[ageGroup].push(user);
    return acc;
}, {});
console.log(groupedByAge);

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }





// -------------------------------------------------------------------------::
// 3. FILTER - Create new array with elements that pass a test
/*
  filter() creates a new array with elements that pass a test function
  Syntax: array.filter(callback(element, index, array))
  - Returns new array with filtered elements
  - Original array remains unchanged
*/

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Filter users by age
const seniors = users.filter(user => user.age >= 30);
console.log(seniors); // [{ name: 'Jane', age: 30 }, { name: 'Bob', age: 35 }]

// Filter truthy values
const mixedArray = [0, 1, '', 'hello', null, 42, undefined, true];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues); // [1, 'hello', 42, true]





// -------------------------------------------------------------------------::
// 4. PURE FUNCTIONS
/*
  Pure functions:
  1. Always return the same output for the same input
  2. Have no side effects (don't modify external state)
  3. Don't depend on external state
  Benefits: predictable, testable, cacheable, easier to debug
*/

// ✅ PURE FUNCTION - same input always gives same output, no side effects
const addPure = (a, b) => a + b;
const multiplyPure = (x, y) => x * y;

// ✅ PURE FUNCTION - doesn't modify input, returns new array
const appendPure = (arr, item) => [...arr, item];

// ❌ IMPURE FUNCTION - modifies external variable
let counter = 0;
const incrementImpure = () => {
    counter++; // Side effect!
    return counter;
};

// ❌ IMPURE FUNCTION - depends on external state
const getCurrentTimeImpure = () => new Date().getTime();

// ❌ IMPURE FUNCTION - modifies input parameter
const appendImpure = (arr, item) => {
    arr.push(item); // Mutates input!
    return arr;
};





// -------------------------------------------------------------------------::
// 5. IMMUTABILITY
/*
  Immutability means data cannot be changed after creation
  Instead of modifying existing data, create new data structures
  Benefits: prevents bugs, enables time travel debugging, easier reasoning
*/

// ❌ MUTABLE approach
const mutableUser = { name: 'John', age: 25 };
mutableUser.age = 26; // Modifies original object

// ✅ IMMUTABLE approach - Object spread
const immutableUser = { name: 'John', age: 25 };
const updatedUser = { ...immutableUser, age: 26 }; // Creates new object

// ✅ IMMUTABLE array operations
const originalArray = [1, 2, 3];

// Adding elements
const withNewItem = [...originalArray, 4]; // [1, 2, 3, 4]
const withItemAtStart = [0, ...originalArray]; // [0, 1, 2, 3]

// Removing elements
const withoutFirst = originalArray.slice(1); // [2, 3]
const withoutLast = originalArray.slice(0, -1); // [1, 2]

// Updating elements
const updatedArray = originalArray.map((item, index) =>
    index === 1 ? item * 10 : item
); // [1, 20, 3]

// ✅ Deep immutable updates
const deepObject = {
    user: {
        name: 'John',
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
};

const updatedDeepObject = {
    ...deepObject,
    user: {
        ...deepObject.user,
        address: {
            ...deepObject.user.address,
            city: 'Boston'
        }
    }
};





// -------------------------------------------------------------------------::
// 6. FUNCTION COMPOSITION
/*
  Function composition is combining simple functions to build more complex ones
  The output of one function becomes the input of the next
  Mathematical notation: (f ∘ g)(x) = f(g(x))
*/

// Simple functions
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

// Manual composition
const result1 = subtract5(multiply2(add10(5))); // ((5 + 10) * 2) - 5 = 25

// Generic compose function (right to left)
const compose = (...functions) => (value) =>
    functions.reduceRight((acc, func) => func(acc), value);

// Generic pipe function (left to right) - more intuitive
const pipe = (...functions) => (value) =>
    functions.reduce((acc, func) => func(acc), value);

// Using composition
const composedFunction = compose(subtract5, multiply2, add10);
const pipedFunction = pipe(add10, multiply2, subtract5);

console.log(composedFunction(5)); // 25
console.log(pipedFunction(5)); // 25

// Real-world example: data processing pipeline
const users2 = [
    { name: 'john doe', age: 25, active: true },
    { name: 'jane smith', age: 30, active: false },
    { name: 'bob johnson', age: 35, active: true }
];

const capitalizeWords = str =>
    str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

const processUsers = pipe(
    users => users.filter(user => user.active),
    users => users.map(user => ({ ...user, name: capitalizeWords(user.name) })),
    users => users.sort((a, b) => a.age - b.age)
);

console.log(processUsers(users2));





// -------------------------------------------------------------------------::
// 7. HIGHER-ORDER FUNCTIONS
/*
  Higher-order functions either:
  1. Take one or more functions as arguments
  2. Return a function as a result
  Examples: map, filter, reduce are built-in higher-order functions
*/

// Function that takes a function as argument
const applyOperation = (numbers, operation) => numbers.map(operation);

console.log(applyOperation([1, 2, 3], x => x * 2)); // [2, 4, 6]
console.log(applyOperation([1, 2, 3], x => x ** 2)); // [1, 4, 9]

// Function that returns a function
const createMultiplier = (factor) => (number) => number * factor;

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// More complex example: createValidator
const createValidator = (validationRule) => (value) => validationRule(value);

const isEmail = createValidator(value => /\S+@\S+\.\S+/.test(value));
const isMinLength = (minLength) => createValidator(value => value.length >= minLength);

console.log(isEmail('test@example.com')); // true
console.log(isMinLength(5)('hello')); // true

// Function that both takes and returns functions
const withLogging = (func) => (...args) => {
    console.log(`Calling function with args:`, args);
    const result = func(...args);
    console.log(`Function returned:`, result);
    return result;
};

const addWithLogging = withLogging((a, b) => a + b);
addWithLogging(3, 4); // Logs the call and result





// -------------------------------------------------------------------------::
// 8. FIRST-CLASS FUNCTIONS
/*
  In JavaScript, functions are first-class citizens, meaning they can be:
  1. Assigned to variables
  2. Passed as arguments
  3. Returned from other functions
  4. Stored in data structures
  5. Created at runtime
*/

// 1. Assign function to variable
const greet = function (name) {
    return `Hello, ${name}!`;
};

// 2. Store functions in arrays
const operations = [
    (x, y) => x + y,
    (x, y) => x - y,
    (x, y) => x * y,
    (x, y) => x / y
];

// 3. Store functions in objects
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

// 4. Pass functions as arguments
const executeOperation = (operation, a, b) => operation(a, b);
console.log(executeOperation(calculator.add, 5, 3)); // 8

// 5. Return functions from functions
const createGreeting = (greeting) => (name) => `${greeting}, ${name}!`;
const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');

console.log(sayHello('Alice')); // Hello, Alice!
console.log(sayHi('Bob')); // Hi, Bob!





// -------------------------------------------------------------------------::
// 9. CURRYING
/*
  Currying transforms a function with multiple arguments into a sequence of functions
  each taking a single argument. Named after mathematician Haskell Curry.
  f(a, b, c) becomes f(a)(b)(c)
*/

// Regular function
const addThree = (a, b, c) => a + b + c;

// Curried version
const addThreeCurried = (a) => (b) => (c) => a + b + c;

console.log(addThree(1, 2, 3)); // 6
console.log(addThreeCurried(1)(2)(3)); // 6

// Partial application with currying
const add5 = addThreeCurried(5);
const add5and3 = add5(3);
console.log(add5and3(2)); // 10

// Generic curry function
const curry = (func) => {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
};

// Usage of generic curry
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24

// Real-world example: API request builder
const buildApiRequest = curry((method, endpoint, headers, body) => ({
    method,
    endpoint,
    headers,
    body
}));

const postRequest = buildApiRequest('POST');
const postToUsers = postRequest('/api/users');
const postToUsersWithAuth = postToUsers({ 'Authorization': 'Bearer token' });

const createUserRequest = postToUsersWithAuth({ name: 'John', email: 'john@example.com' });
console.log(createUserRequest);





// -------------------------------------------------------------------------::
// 10. CLOSURES
/*
  A closure is a function that has access to variables in its outer (enclosing) scope
  even after the outer function has returned. Closures are created every time a
  function is created, at function creation time.
*/

// Basic closure example
function outerFunction(x) {
    // This is the outer function's scope

    function innerFunction(y) {
        // Inner function has access to outer function's variables
        return x + y; // x is from outer scope
    }

    return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8 - inner function still remembers x = 5

// Closure for private variables (data encapsulation)
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
// console.log(counter.count); // undefined - can't access private variable

// Closure in loops (common gotcha)
// ❌ Problem: all functions reference the same 'i'
const functions = [];
for (var i = 0; i < 3; i++) {
    functions[i] = function () {
        return i; // All will return 3!
    };
}

// ✅ Solution 1: Use let instead of var
const functions2 = [];
for (let i = 0; i < 3; i++) {
    functions2[i] = function () {
        return i; // Each closure captures its own 'i'
    };
}

// ✅ Solution 2: Use IIFE (Immediately Invoked Function Expression)
const functions3 = [];
for (var i = 0; i < 3; i++) {
    functions3[i] = (function (index) {
        return function () {
            return index;
        };
    })(i);
}

// Module pattern using closures
const myModule = (function () {
    let privateVar = 'I am private';
    let privateCounter = 0;

    function privateFunction() {
        console.log('This is private');
    }

    return {
        publicMethod: function () {
            privateCounter++;
            return `Called ${privateCounter} times`;
        },

        getPrivateVar: function () {
            return privateVar;
        },

        setPrivateVar: function (value) {
            privateVar = value;
        }
    };
})();

console.log(myModule.publicMethod()); // Called 1 times
console.log(myModule.getPrivateVar()); // I am private





// -------------------------------------------------------------------------::
// 11. ARROW FUNCTIONS
/*
  Arrow functions provide a more concise syntax for writing functions
  Key differences from regular functions:
  - Shorter syntax
  - No binding of 'this'
  - No 'arguments' object
  - Cannot be used as constructors
  - No hoisting
*/

// Traditional function vs Arrow function
function traditionalFunction(x) {
    return x * 2;
}

const arrowFunction = x => x * 2;

// Different arrow function syntaxes
const noParams = () => 'Hello World';
const oneParam = x => x * 2; // Parentheses optional for single param
const multipleParams = (x, y) => x + y;
const multipleLines = (x, y) => {
    const sum = x + y;
    return sum * 2;
};

// Returning objects (need parentheses to avoid confusion with block)
const createUser = (name, age) => ({ name, age });

// Arrow functions in array methods
const nums = [1, 2, 3, 4, 5];

const doubled2 = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum2 = nums.reduce((acc, n) => acc + n, 0);

// 'this' binding difference
const regularObj = {
    name: 'Regular',
    greet: function () {
        console.log(`Hello, I'm ${this.name}`); // 'this' refers to the object
    }
};

const arrowObj = {
    name: 'Arrow',
    greet: () => {
        console.log(`Hello, I'm ${this.name}`); // 'this' refers to global/window
    }
};

regularObj.greet(); // Hello, I'm Regular
arrowObj.greet(); // Hello, I'm undefined (or global name)

// Useful with event handlers and callbacks
class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        // Arrow function preserves 'this' context
        setInterval(() => {
            this.seconds++;
            console.log(`${this.seconds} seconds`);
        }, 1000);
    }
}





// -------------------------------------------------------------------------::
// 12. RECURSION
/*
  Recursion is when a function calls itself
  Requirements:
  1. Base case (stopping condition)
  2. Recursive case (function calls itself with modified parameters)
  3. Progress towards base case
*/

// Classic example: Factorial
function factorial(n) {
    // Base case
    if (n <= 1) return 1;

    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55

// Optimized fibonacci with memoization
function fibonacciMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Tree traversal
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] }
            ]
        }
    ]
};

function traverseTree(node) {
    console.log(node.value);
    node.children.forEach(child => traverseTree(child));
}

// Array flattening with recursion
function flattenArray(arr) {
    const result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item)); // Recursive call
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]

// Tail recursion (optimization technique)
function factorialTailRecursive(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTailRecursive(n - 1, n * accumulator);
}





// -------------------------------------------------------------------------::
// 13. SIDE EFFECTS
/*
  Side effects are changes that a function makes to the state outside of its scope
  Common side effects:
  - Modifying global variables
  - Modifying input parameters
  - I/O operations (console.log, API calls, file operations)
  - DOM manipulation
  - Throwing exceptions

  Pure functional programming aims to minimize side effects
*/

// ❌ Functions with side effects
let globalCounter = 0;

function incrementGlobal() {
    globalCounter++; // Side effect: modifies global state
    return globalCounter;
}

function logAndDouble(x) {
    console.log(`Doubling ${x}`); // Side effect: I/O operation
    return x * 2;
}

function modifyArray(arr) {
    arr.push('modified'); // Side effect: mutates input
    return arr;
}

// ✅ Pure alternatives
function increment(counter) {
    return counter + 1; // No side effects
}

function double(x) {
    return x * 2; // No logging, just computation
}

function appendToArray(arr, item) {
    return [...arr, item]; // Returns new array, doesn't mutate input
}

// Managing side effects - isolate them
function pureCalculation(data) {
    return data.map(x => x * 2).filter(x => x > 10);
}

function withSideEffects(data) {
    const result = pureCalculation(data); // Pure part

    // Side effects isolated at the end
    console.log('Calculation completed');
    localStorage.setItem('result', JSON.stringify(result));

    return result;
}

// Functional approach to side effects - using higher-order functions
const withLogging2 = (fn) => (...args) => {
    const result = fn(...args);
    console.log(`Function called with`, args, `returned`, result);
    return result;
};

const pureAdd = (a, b) => a + b;
const addWithLogging2 = withLogging2(pureAdd);





// -------------------------------------------------------------------------::
// 14. DECLARATIVE VS IMPERATIVE CODE
/*
  Imperative: HOW to do something (step by step instructions)
  Declarative: WHAT you want to achieve (focus on the outcome)

  Functional programming favors declarative style
*/

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'Diana', grade: 96 }
];

// ❌ IMPERATIVE approach - focuses on HOW
function getHighPerformersImperative(students) {
    const result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 90) {
            result.push(students[i].name.toUpperCase());
        }
    }

    return result;
}

// ✅ DECLARATIVE approach - focuses on WHAT
function getHighPerformersDeclarative(students) {
    return students
        .filter(student => student.grade >= 90)
        .map(student => student.name.toUpperCase());
}

// More examples

// IMPERATIVE: Calculate sum of squares of even numbers
function sumSquareEvensImperative(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i] * numbers[i];
        }
    }
    return sum;
}

// DECLARATIVE: Same logic, more readable
const sumSquareEvensDeclarative = (numbers) =>
    numbers
        .filter(n => n % 2 === 0)
        .map(n => n * n)
        .reduce((sum, square) => sum + square, 0);

console.log(sumSquareEvensDeclarative([1, 2, 3, 4, 5, 6])); // 56





// -------------------------------------------------------------------------::
// 15. CHAINING METHODS
/*
  Method chaining allows you to call multiple methods in sequence
  Each method returns an object/array that has more methods to call
  Creates fluent interfaces and enables functional pipelines
*/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Method chaining with array methods
const result = data
    .filter(n => n % 2 === 0)      // [2, 4, 6, 8, 10]
    .map(n => n * n)               // [4, 16, 36, 64, 100]
    .reduce((sum, n) => sum + n);  // 220

console.log(result); // 220

// Complex data processing with chaining
const orders = [
    { id: 1, customer: 'Alice', amount: 100, status: 'completed' },
    { id: 2, customer: 'Bob', amount: 250, status: 'pending' },
    { id: 3, customer: 'Alice', amount: 75, status: 'completed' },
    { id: 4, customer: 'Charlie', amount: 300, status: 'completed' },
    { id: 5, customer: 'Bob', amount: 150, status: 'cancelled' }
];

const customerTotals = orders
    .filter(order => order.status === 'completed')
    .reduce((totals, order) => {
        totals[order.customer] = (totals[order.customer] || 0) + order.amount;
        return totals;
    }, {});

console.log(customerTotals); // { Alice: 175, Charlie: 300 }

// Creating chainable custom objects
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(n) {
        return new Calculator(this.value + n);
    }

    multiply(n) {
        return new Calculator(this.value * n);
    }

    subtract(n) {
        return new Calculator(this.value - n);
    }

    getValue() {
        return this.value;
    }
}

const calcResult = new Calculator(5)
    .add(10)
    .multiply(2)
    .subtract(5)
    .getValue();

console.log(calcResult); // 25

// Functional chaining with pipe
const processNumbers = (numbers) =>
    pipe(
        nums => nums.filter(n => n > 0),
        nums => nums.map(n => n * 2),
        nums => nums.reduce((sum, n) => sum + n, 0)
    )(numbers);





// -------------------------------------------------------------------------::
// 16. LAZY EVALUATION
/*
  Lazy evaluation delays computation until the result is needed
  Benefits: performance optimization, infinite data structures, memory efficiency
  JavaScript doesn't have built-in lazy evaluation, but we can implement it
*/

// Generator functions provide lazy evaluation
function* lazyRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(`Generating ${i}`); // Only logs when value is requested
        yield i;
    }
}

const range = lazyRange(1, 5);
console.log('Generator created');

for (const num of range) {
    if (num === 3) break; // Only generates 1, 2, 3
    console.log(num);
}

// Lazy infinite sequence
function* fibonacci2() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibSequence = fibonacci2();
console.log(fibSequence.next().value); // 0
console.log(fibSequence.next().value); // 1
console.log(fibSequence.next().value); // 1
console.log(fibSequence.next().value); // 2

// Lazy array operations
class LazyArray {
    constructor(array) {
        this.array = array;
        this.operations = [];
    }

    map(fn) {
        this.operations.push({ type: 'map', fn });
        return this; // Return this for chaining
    }

    filter(fn) {
        this.operations.push({ type: 'filter', fn });
        return this;
    }

    take(count) {
        this.operations.push({ type: 'take', count });
        return this;
    }

    // Evaluation only happens when toArray() is called
    toArray() {
        let result = this.array;

        for (const operation of this.operations) {
            switch (operation.type) {
                case 'map':
                    result = result.map(operation.fn);
                    break;
                case 'filter':
                    result = result.filter(operation.fn);
                    break;
                case 'take':
                    result = result.slice(0, operation.count);
                    break;
            }
        }

        return result;
    }
}

const lazyResult = new LazyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .take(3)
    .toArray(); // Only now is the computation performed

console.log(lazyResult); // [4, 16, 36]

// Memoization - another form of lazy evaluation
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log('Cache hit!');
            return cache.get(key);
        }

        console.log('Computing...');
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const expensiveFunction = (n) => {
    // Simulate expensive computation
    let sum = 0;
    for (let i = 0; i < n * 1000000; i++) {
        sum += i;
    }
    return sum;
};

const memoizedExpensive = memoize(expensiveFunction);

// First call - computes
console.log(memoizedExpensive(100));
// Second call - uses cache
console.log(memoizedExpensive(100));

// Lazy property evaluation
class LazyObject {
    constructor() {
        this._cache = new Map();
    }

    // Lazy property using getter
    get expensiveProperty() {
        if (!this._cache.has('expensive')) {
            console.log('Computing expensive property...');
            const value = this.computeExpensiveValue();
            this._cache.set('expensive', value);
        }
        return this._cache.get('expensive');
    }

    computeExpensiveValue() {
        // Simulate expensive computation
        return Array.from({ length: 1000000 }, (_, i) => i).reduce((a, b) => a + b, 0);
    }
}

const lazyObj = new LazyObject();
console.log('Object created');
console.log(lazyObj.expensiveProperty); // Computes now
console.log(lazyObj.expensiveProperty); // Uses cached value





// -------------------------------------------------------------------------::
// 17. FUNCTORS AND MONADS (ADVANCED)

/*
  FUNCTORS:
  A functor is a container/wrapper that implements a map method
  Rules (Functor Laws):
  1. Identity: F.map(x => x) === F
  2. Composition: F.map(f).map(g) === F.map(x => g(f(x)))

  Arrays are functors because they have map method and follow functor laws
*/





// -------------------------------------------------------------------------::
// MAYBE FUNCTOR - Handles null/undefined values safely

class Maybe {
    constructor(value) {
        this.value = value;
    }

    // Static constructor methods
    static of(value) {
        return new Maybe(value);
    }

    static nothing() {
        return new Maybe(null);
    }

    // Check if value exists
    isNothing() {
        return this.value === null || this.value === undefined;
    }

    // Functor map method
    map(fn) {
        if (this.isNothing()) {
            return Maybe.nothing();
        }
        return Maybe.of(fn(this.value));
    }

    // Get the value (unsafe)
    getValue() {
        return this.value;
    }

    // Get value with default
    getOrElse(defaultValue) {
        return this.isNothing() ? defaultValue : this.value;
    }
}

// Using Maybe functor
const safeUser = Maybe.of({ name: 'John', age: 30 });
const noUser = Maybe.nothing();

const userName = safeUser.map(user => user.name);
console.log(userName.getValue()); // 'John'

const noUserName = noUser.map(user => user.name);
console.log(noUserName.getValue()); // null

// Chaining operations safely
const result2 = Maybe.of('  hello world  ')
    .map(str => str.trim())
    .map(str => str.toUpperCase())
    .map(str => str.split(' '));

console.log(result2.getValue()); // ['HELLO', 'WORLD']

// Safe property access
function safeProp(prop, obj) {
    return obj && obj[prop] !== undefined ? Maybe.of(obj[prop]) : Maybe.nothing();
}

const user = { profile: { address: { city: 'New York' } } };
const city = safeProp('profile', user)
    .map(profile => profile.address)
    .map(address => address.city);

console.log(city.getOrElse('Unknown')); // 'New York'





// -------------------------------------------------------------------------::
// EITHER FUNCTOR - Handles success/error cases

class Either {
    constructor(value, isRight = true) {
        this.value = value;
        this.isRight = isRight;
    }

    static right(value) {
        return new Either(value, true);
    }

    static left(value) {
        return new Either(value, false);
    }

    map(fn) {
        if (this.isRight) {
            try {
                return Either.right(fn(this.value));
            } catch (error) {
                return Either.left(error.message);
            }
        }
        return this; // Left values pass through unchanged
    }

    fold(leftFn, rightFn) {
        return this.isRight ? rightFn(this.value) : leftFn(this.value);
    }
}

// Using Either for error handling
function safeDivide(a, b) {
    return b === 0 ? Either.left('Division by zero') : Either.right(a / b);
}

function safeParseInt(str) {
    const num = parseInt(str);
    return isNaN(num) ? Either.left('Not a valid number') : Either.right(num);
}

// Chaining operations that might fail
const calculation = safeParseInt('10')
    .map(x => x * 2)
    .map(x => x + 5);

calculation.fold(
    error => console.log('Error:', error),
    value => console.log('Success:', value) // Success: 25
);

const failedCalculation = safeParseInt('abc')
    .map(x => x * 2)
    .map(x => x + 5);

failedCalculation.fold(
    error => console.log('Error:', error), // Error: Not a valid number
    value => console.log('Success:', value)
);





// -------------------------------------------------------------------------::
// MONADS - Functors with flatMap (chain) method

/*
  MONADS:
  Monads are functors with additional methods:
  1. of (constructor) - wraps a value in the monad
  2. chain/flatMap - maps a function that returns a monad, then flattens

  Monad Laws:
  1. Left Identity: M.of(a).chain(f) === f(a)
  2. Right Identity: m.chain(M.of) === m
  3. Associativity: m.chain(f).chain(g) === m.chain(x => f(x).chain(g))
*/

// Extending Maybe to be a Monad
class MaybeMonad extends Maybe {
    // chain (flatMap) - prevents nested Maybe structures
    chain(fn) {
        if (this.isNothing()) {
            return MaybeMonad.nothing();
        }
        return fn(this.value); // fn should return a MaybeMonad
    }

    static of(value) {
        return new MaybeMonad(value);
    }

    static nothing() {
        return new MaybeMonad(null);
    }
}

// Using chain to avoid nested structures
function safeSqrt(x) {
    return x < 0 ? MaybeMonad.nothing() : MaybeMonad.of(Math.sqrt(x));
}

function safeLog(x) {
    return x <= 0 ? MaybeMonad.nothing() : MaybeMonad.of(Math.log(x));
}

// Without chain - creates nested structure
const nested = MaybeMonad.of(16).map(safeSqrt); // MaybeMonad(MaybeMonad(4))

// With chain - flattens automatically
const flattened = MaybeMonad.of(16)
    .chain(safeSqrt)  // MaybeMonad(4)
    .chain(safeLog);  // MaybeMonad(1.386...)

console.log(flattened.getValue());





// -------------------------------------------------------------------------::
// IO MONAD - Handles side effects
class IO {
    constructor(unsafeFunction) {
        this.unsafeFunction = unsafeFunction;
    }

    static of(value) {
        return new IO(() => value);
    }

    map(fn) {
        return new IO(() => fn(this.unsafeFunction()));
    }

    chain(fn) {
        return new IO(() => fn(this.unsafeFunction()).unsafeFunction());
    }

    // Run the side effect
    run() {
        return this.unsafeFunction();
    }
}

// Wrapping side effects in IO monad
const readFromConsole = new IO(() => prompt('Enter your name:'));
const writeToConsole = (message) => new IO(() => console.log(message));

// Compose pure and impure operations
const program = readFromConsole
    .map(name => `Hello, ${name}!`)
    .chain(writeToConsole);

// Side effects only occur when run() is called
// program.run();





// -------------------------------------------------------------------------::
// TASK MONAD - Handles async operations

class Task {
    constructor(computation) {
        this.computation = computation; // Function that takes resolve, reject
    }

    static of(value) {
        return new Task((resolve, reject) => resolve(value));
    }

    static rejected(error) {
        return new Task((resolve, reject) => reject(error));
    }

    map(fn) {
        return new Task((resolve, reject) => {
            this.computation(
                value => resolve(fn(value)),
                reject
            );
        });
    }

    chain(fn) {
        return new Task((resolve, reject) => {
            this.computation(
                value => fn(value).computation(resolve, reject),
                reject
            );
        });
    }

    // Convert to Promise
    toPromise() {
        return new Promise(this.computation);
    }

    // Run with callbacks
    fork(onError, onSuccess) {
        this.computation(onSuccess, onError);
    }
}

// Using Task for async operations
function fetchUser(id) {
    return new Task((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: 'John', email: 'john@example.com' });
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Task((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Post 1', userId },
                { id: 2, title: 'Post 2', userId }
            ]);
        }, 500);
    });
}

// Composing async operations with Task monad
const userWithPosts = fetchUser(1)
    .chain(user =>
        fetchUserPosts(user.id)
            .map(posts => ({ ...user, posts }))
    );

userWithPosts.fork(
    error => console.log('Error:', error.message),
    data => console.log('Success:', data)
);




// -------------------------------------------------------------------------::
// LIST MONAD - Non-deterministic computations

class List {
    constructor(items) {
        this.items = Array.isArray(items) ? items : [items];
    }

    static of(value) {
        return new List([value]);
    }

    static empty() {
        return new List([]);
    }

    map(fn) {
        return new List(this.items.map(fn));
    }

    chain(fn) {
        // flatMap - applies function and flattens results
        const results = this.items.map(item => fn(item).items);
        return new List([].concat(...results));
    }

    filter(predicate) {
        return new List(this.items.filter(predicate));
    }

    toArray() {
        return [...this.items];
    }
}

// Non-deterministic computations
function multiplyBy(factors) {
    return (x) => new List(factors.map(factor => x * factor));
}

function addTo(additions) {
    return (x) => new List(additions.map(add => x + add));
}

// Generate all possible combinations
const combinations = List.of(2)
    .chain(multiplyBy([3, 4, 5]))      // [6, 8, 10]
    .chain(addTo([1, 2]));             // [7, 8, 9, 10, 11, 12]

console.log(combinations.toArray()); // [7, 8, 9, 10, 11, 12]





// -------------------------------------------------------------------------::
// PRACTICAL EXAMPLE: Form validation with Either monad

class Validation extends Either {
    static success(value) {
        return new Validation(value, true);
    }

    static failure(error) {
        return new Validation([error], false);
    }

    // Combine validations - collect all errors
    static combine(validations) {
        const failures = validations.filter(v => !v.isRight);
        const successes = validations.filter(v => v.isRight);

        if (failures.length > 0) {
            const allErrors = failures.reduce((acc, v) => acc.concat(v.value), []);
            return Validation.failure(allErrors);
        }

        return Validation.success(successes.map(v => v.value));
    }

    chain(fn) {
        if (!this.isRight) return this;
        const result = fn(this.value);
        return result.isRight ? result : Validation.failure(result.value);
    }
}

// Validation functions
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
        ? Validation.success(email)
        : Validation.failure('Invalid email format');
};

const validateAge = (age) => {
    const numAge = parseInt(age);
    if (isNaN(numAge)) return Validation.failure('Age must be a number');
    if (numAge < 0) return Validation.failure('Age cannot be negative');
    if (numAge > 150) return Validation.failure('Age seems unrealistic');
    return Validation.success(numAge);
};

const validateName = (name) => {
    if (!name || name.trim().length === 0) {
        return Validation.failure('Name is required');
    }
    if (name.length < 2) {
        return Validation.failure('Name must be at least 2 characters');
    }
    return Validation.success(name.trim());
};

// Validate form data
function validateUser(userData) {
    const validations = [
        validateName(userData.name),
        validateEmail(userData.email),
        validateAge(userData.age)
    ];

    return Validation.combine(validations)
        .map(([name, email, age]) => ({ name, email, age }));
}

// Test validation
const validData = { name: 'John Doe', email: 'john@example.com', age: '30' };
const invalidData = { name: '', email: 'invalid-email', age: 'abc' };

validateUser(validData).fold(
    errors => console.log('Validation errors:', errors),
    user => console.log('Valid user:', user)
);

validateUser(invalidData).fold(
    errors => console.log('Validation errors:', errors),
    user => console.log('Valid user:', user)
);
