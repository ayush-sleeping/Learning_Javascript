/*
JavaScript ES6
-------------------------------------------------------------------------::
Subtopics :

Variable Declarations
- let / const

Functions
- function declarations and expressions
- arrow functions
- default parameters
- rest and spread operator

Operators
- arithmetic, comparison, logical operators
- destructuring (array & object)
- template literals

Array Methods
- map
- reduce
- filter
- find and findIndex
- forEach
- some, every
- includes

Objects & Classes
- classes
- inheritance (extends, super)
- getters and setters
- computed property names

Promises & Async
- callbacks
- promises
- async/await

Modules
- import/export

Other Important ES6 Features
- Symbol
- Set and Map
- Iterators and Generators
- Enhanced object literals
- Block scope vs function scope
- Arrow function 'this' behavior
*/




// -------------------------------------------------------------------------::
// VARIABLE DECLARATIONS - let / const
/*
WHY ES6 VARIABLE DECLARATIONS?
- 'var' has function scope and hoisting issues
- 'let' and 'const' provide block scope and temporal dead zone
- Better error handling and cleaner code
*/

// VAR vs LET vs CONST Examples
function variableDeclarationExamples() {

    // VAR - Function scoped, can be redeclared and updated
    var oldWay = "I'm function scoped";
    var oldWay = "I can be redeclared"; // No error

    // LET - Block scoped, can be updated but not redeclared
    let modernWay = "I'm block scoped";
    modernWay = "I can be updated"; // OK
    // let modernWay = "Error!"; // SyntaxError: Identifier already declared

    // CONST - Block scoped, cannot be updated or redeclared
    const immutable = "I cannot be changed";
    // immutable = "Error!"; // TypeError: Assignment to constant variable

    // Block scope demonstration
    if (true) {
        var varVariable = "I leak out of this block";
        let letVariable = "I stay in this block";
        const constVariable = "I also stay in this block";
    }

    console.log(varVariable); // Works - "I leak out of this block"
    // console.log(letVariable); // ReferenceError: letVariable is not defined
    // console.log(constVariable); // ReferenceError: constVariable is not defined
}

// WHEN TO USE WHAT:
// - Use 'const' by default for values that won't be reassigned
// - Use 'let' when you need to reassign the variable
// - Avoid 'var' in modern JavaScript




// -------------------------------------------------------------------------::
// FUNCTIONS - declarations, expressions, arrow functions, default parameters
/*
FUNCTION EVOLUTION IN ES6:
- Arrow functions provide shorter syntax and lexical 'this'
- Default parameters eliminate need for parameter checking
- Rest parameters handle variable arguments elegantly
*/

// Function Declarations (Hoisted)
function traditionalFunction(name) {
    return `Hello, ${name}!`;
}

// Function Expressions (Not hoisted)
const functionExpression = function (name) {
    return `Hi, ${name}!`;
};

// Arrow Functions - Concise syntax, lexical 'this'
const arrowFunction = (name) => `Hey, ${name}!`;

// Arrow function variations
const singleParam = name => `Hello ${name}`; // No parentheses needed for single param
const noParams = () => "Hello World"; // Parentheses required for no params
const multiLine = (name, age) => {
    const greeting = `Hello ${name}`;
    const ageInfo = `You are ${age} years old`;
    return `${greeting}. ${ageInfo}`;
};

// Default Parameters - Set default values for function parameters
function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Advanced default parameters
function calculatePrice(price, tax = 0.1, discount = 0) {
    const taxAmount = price * tax;
    const discountAmount = price * discount;
    return price + taxAmount - discountAmount;
}

// Usage examples
console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("Alice")); // "Hello, Alice!"
console.log(calculatePrice(100)); // 110 (100 + 10% tax)
console.log(calculatePrice(100, 0.15, 0.05)); // 110 (100 + 15% tax - 5% discount)

// Arrow Function 'this' behavior demonstration
class ThisExample {
    constructor() {
        this.name = "ThisExample";

        // Regular function - 'this' depends on how it's called
        this.regularMethod = function () {
            console.log("Regular function this:", this.name);
        };

        // Arrow function - 'this' is lexically bound
        this.arrowMethod = () => {
            console.log("Arrow function this:", this.name);
        };
    }
}




// -------------------------------------------------------------------------::
// REST AND SPREAD OPERATORS (...)
/*
REST vs SPREAD:
- REST: Collects multiple elements into an array (...args)
- SPREAD: Expands an array/object into individual elements
- Same syntax (...) but opposite purposes
*/

// REST Parameters - Collect remaining arguments into an array
function restExample(first, second, ...remaining) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Remaining:", remaining); // Array of remaining arguments
}

restExample("a", "b", "c", "d", "e");
// First: a, Second: b, Remaining: ["c", "d", "e"]

// SPREAD Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread for function arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6 - spreads array as individual arguments

// SPREAD Operator with Objects
const person = { name: "John", age: 30 };
const employee = { ...person, job: "Developer", age: 31 }; // age gets overwritten
// Result: { name: "John", age: 31, job: "Developer" }

// Practical use cases
const shallowCopyArray = [...arr1]; // Clone array
const shallowCopyObject = { ...person }; // Clone object




// -------------------------------------------------------------------------::
// OPERATORS - arithmetic, comparison, logical, destructuring
/*
ES6 ENHANCED OPERATORS:
- Destructuring: Extract values from arrays/objects
- Template literals: String interpolation and multiline strings
- Exponentiation operator (**)
*/

// Destructuring Arrays
const colors = ["red", "green", "blue", "yellow"];

// Old way
const firstColor = colors[0];
const secondColor = colors[1];

// ES6 Destructuring way
const [first, second, third, ...restColors] = colors;
console.log(first); // "red"
console.log(second); // "green"
console.log(restColors); // ["yellow"]

// Skip elements in array destructuring
const [primary, , tertiary] = colors; // Skip second element
console.log(primary, tertiary); // "red", "blue"

// Destructuring Objects
const user = {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    profile: {
        firstName: "John",
        lastName: "Doe"
    }
};

// Basic object destructuring
const { username, email } = user;

// Rename variables during destructuring
const { username: userName, email: userEmail } = user;

// Default values in destructuring
const { phone = "Not provided" } = user;

// Nested destructuring
const { profile: { firstName, lastName } } = user;

// Destructuring function parameters
function displayUser({ username, email, profile: { firstName } }) {
    console.log(`User: ${firstName} (${username}) - ${email}`);
}
displayUser(user);

// Template Literals - Enhanced string handling
const name = "Alice";
const age = 25;

// Old way
const oldMessage = "Hello, my name is " + name + " and I'm " + age + " years old.";

// ES6 Template Literals
const newMessage = `Hello, my name is ${name} and I'm ${age} years old.`;

// Multiline strings
const multilineString = `
    This is a multiline string.
    It preserves line breaks and indentation.
    Variables can be inserted: ${name}
`;

// Tagged template literals (advanced)
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

const highlighted = highlight`Hello ${name}, you are ${age} years old!`;
// Result: "Hello <mark>Alice</mark>, you are <mark>25</mark> years old!"




// -------------------------------------------------------------------------::
// ARRAY METHODS - map, reduce, filter, find, forEach, some, every, includes
/*
FUNCTIONAL PROGRAMMING WITH ARRAYS:
- These methods don't mutate original arrays (except forEach)
- They return new arrays or values
- Enable functional programming patterns
- More readable and maintainable than traditional loops
*/

const products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", inStock: true },
    { id: 2, name: "Phone", price: 500, category: "Electronics", inStock: false },
    { id: 3, name: "Book", price: 20, category: "Education", inStock: true },
    { id: 4, name: "Headphones", price: 100, category: "Electronics", inStock: true }
];

// MAP - Transform each element, returns new array of same length
const productNames = products.map(product => product.name);
// Result: ["Laptop", "Phone", "Book", "Headphones"]

const discountedPrices = products.map(product => ({
    ...product,
    discountedPrice: product.price * 0.9
}));

// FILTER - Keep elements that match condition, returns new array
const inStockProducts = products.filter(product => product.inStock);
const affordableProducts = products.filter(product => product.price < 200);

// FIND - Returns first element that matches condition (or undefined)
const expensiveProduct = products.find(product => product.price > 800);
// Result: { id: 1, name: "Laptop", price: 1000, ... }

// FINDINDEX - Returns index of first matching element (or -1)
const phoneIndex = products.findIndex(product => product.name === "Phone");
// Result: 1

// REDUCE - Accumulate array into single value
const totalValue = products.reduce((sum, product) => sum + product.price, 0);
// Result: 1620

// Group products by category using reduce
const productsByCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});

// FOREACH - Execute function for each element (no return value)
products.forEach(product => {
    console.log(`${product.name}: $${product.price}`);
});

// SOME - Test if at least one element matches condition
const hasAffordableItems = products.some(product => product.price < 50);
// Result: true (book costs $20)

// EVERY - Test if all elements match condition
const allInStock = products.every(product => product.inStock);
// Result: false (phone is out of stock)

// INCLUDES - Check if array contains a specific value
const numbers = [1, 2, 3, 4, 5];
const hasThree = numbers.includes(3); // true
const hasTen = numbers.includes(10); // false

// Chaining array methods for complex operations
const affordableElectronicsNames = products
    .filter(product => product.category === "Electronics")
    .filter(product => product.price < 600)
    .map(product => product.name);
// Result: ["Phone", "Headphones"]




// -------------------------------------------------------------------------::
// OBJECTS & CLASSES - classes, inheritance, getters/setters, computed properties
/*
ES6 CLASSES:
- Syntactic sugar over prototype-based inheritance
- Cleaner, more intuitive than constructor functions
- Support inheritance, static methods, getters/setters
*/

// Basic Class Definition
class Animal {
    // Constructor method
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this._energy = 100; // Convention: underscore for "private"
    }

    // Method
    speak() {
        return `${this.name} makes a sound`;
    }

    // Getter - access like a property
    get energy() {
        return this._energy;
    }

    // Setter - assign like a property
    set energy(value) {
        if (value < 0) {
            console.log("Energy cannot be negative");
            return;
        }
        this._energy = value;
    }

    // Static method - called on class, not instance
    static compareAnimals(animal1, animal2) {
        return animal1.energy - animal2.energy;
    }
}

// Inheritance with extends and super
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine"); // Call parent constructor
        this.breed = breed;
    }

    // Override parent method
    speak() {
        return `${this.name} barks loudly!`;
    }

    // Additional method specific to Dog
    wagTail() {
        return `${this.name} is wagging its tail`;
    }

    // Method that uses parent functionality
    playFetch() {
        this.energy = this.energy - 10; // Uses setter
        return `${this.name} played fetch and lost energy`;
    }
}

// Usage examples
const genericAnimal = new Animal("Rex", "Unknown");
const myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog.speak()); // "Buddy barks loudly!"
console.log(myDog.energy); // 100 (uses getter)
myDog.energy = 80; // Uses setter
console.log(Dog.compareAnimals(genericAnimal, myDog)); // 20

// Enhanced Object Literals
const propertyName = "dynamicKey";
const computedValue = "computed";

const enhancedObject = {
    // Shorthand property names
    name, // same as name: name
    age,  // same as age: age

    // Computed property names
    [propertyName]: computedValue,
    [`${propertyName}_2`]: "another computed value",

    // Method shorthand
    greet() { // same as greet: function() {
        return `Hello, I'm ${this.name}`;
    },

    // Computed method names
    [propertyName.toUpperCase()]() {
        return "This is a computed method name";
    }
};




// -------------------------------------------------------------------------::
// PROMISES & ASYNC - callbacks, promises, async/await
/*
ASYNCHRONOUS PROGRAMMING EVOLUTION:
- Callbacks: Led to "callback hell"
- Promises: Better error handling and chaining
- Async/Await: Makes async code look synchronous
*/

// Callback Pattern (Old way - can lead to callback hell)
function fetchDataCallback(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(null, data); // First parameter is error, second is data
    }, 1000);
}

// Callback hell example
fetchDataCallback((err, data) => {
    if (err) {
        console.error("Error:", err);
    } else {
        // Need to fetch more data based on first result
        fetchDataCallback((err2, data2) => {
            if (err2) {
                console.error("Error:", err2);
            } else {
                // Even more nesting...
                console.log("Final result:", data2);
            }
        });
    }
});

// Promise-based approach
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate

            if (success) {
                const data = { id: 1, name: "Promise Data", timestamp: Date.now() };
                resolve(data); // Success
            } else {
                reject(new Error("Failed to fetch data")); // Failure
            }
        }, 1000);
    });
}

// Promise chaining
fetchDataPromise()
    .then(data => {
        console.log("First data:", data);
        return fetchDataPromise(); // Return another promise
    })
    .then(data => {
        console.log("Second data:", data);
        return data.id * 10; // Return regular value
    })
    .then(multipliedId => {
        console.log("Multiplied ID:", multipliedId);
    })
    .catch(error => {
        console.error("Promise chain error:", error.message);
    })
    .finally(() => {
        console.log("Promise chain completed");
    });

// Multiple promises
const promise1 = fetchDataPromise();
const promise2 = fetchDataPromise();
const promise3 = fetchDataPromise();

// Promise.all - Wait for all promises (fails if any fails)
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.log("At least one promise failed:", error);
    });

// Promise.allSettled - Wait for all promises regardless of outcome
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} succeeded:`, result.value);
            } else {
                console.log(`Promise ${index} failed:`, result.reason);
            }
        });
    });

// Async/Await - Makes asynchronous code look synchronous
async function fetchDataAsync() {
    try {
        const data1 = await fetchDataPromise();
        console.log("Async data 1:", data1);

        const data2 = await fetchDataPromise();
        console.log("Async data 2:", data2);

        // Parallel execution with async/await
        const [result1, result2, result3] = await Promise.all([
            fetchDataPromise(),
            fetchDataPromise(),
            fetchDataPromise()
        ]);

        return { result1, result2, result3 };
    } catch (error) {
        console.error("Async function error:", error.message);
        throw error; // Re-throw if needed
    }
}

// Using async function
fetchDataAsync()
    .then(results => console.log("All async results:", results))
    .catch(error => console.log("Async function failed:", error));

// Real-world async example: API calls
async function fetchUserProfile(userId) {
    try {
        // Simulate API calls
        const userResponse = await fetch(`/api/users/${userId}`);
        const user = await userResponse.json();

        const postsResponse = await fetch(`/api/users/${userId}/posts`);
        const posts = await postsResponse.json();

        return {
            user,
            posts,
            profileComplete: user && posts
        };
    } catch (error) {
        console.error("Failed to fetch user profile:", error);
        return null;
    }
}




// -------------------------------------------------------------------------::
// MODULES - import/export
/*
ES6 MODULES:
- Replace CommonJS (require/module.exports) and AMD
- Static structure enables tree shaking
- Support both named and default exports
- Modules are automatically in strict mode
*/

// EXPORT Examples (these would be in separate files)

// Named Exports - Can have multiple per file
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Export existing variables/functions
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
export { subtract, divide };

// Export with rename
const power = (base, exponent) => Math.pow(base, exponent);
export { power as pow };

// Default Export - Only one per file
export default class Calculator {
    constructor() {
        this.history = [];
    }

    calculate(operation, a, b) {
        let result;
        switch (operation) {
            case 'add': result = add(a, b); break;
            case 'multiply': result = multiply(a, b); break;
            case 'subtract': result = subtract(a, b); break;
            case 'divide': result = divide(a, b); break;
            default: throw new Error('Unknown operation');
        }

        this.history.push({ operation, a, b, result });
        return result;
    }
}

// IMPORT Examples

// Import named exports
import { add, multiply } from './math-utils.js';
import { subtract as sub, divide as div } from './math-utils.js';

// Import all named exports
import * as MathUtils from './math-utils.js';
// Usage: MathUtils.add(1, 2), MathUtils.PI

// Import default export
import Calculator from './calculator.js';

// Import both default and named exports
import Calculator, { add, multiply } from './calculator.js';

// Dynamic imports (ES2020, but worth mentioning)
async function loadMathUtils() {
    const mathModule = await import('./math-utils.js');
    return mathModule;
}

// Conditional imports
if (needsAdvancedMath) {
    import('./advanced-math.js')
        .then(advancedMath => {
            // Use advanced math functions
        });
}




// -------------------------------------------------------------------------::
// OTHER IMPORTANT ES6 FEATURES
/*
ADDITIONAL ES6 FEATURES:
- Symbol: Unique identifiers
- Set and Map: New collection types
- Iterators and Generators: Custom iteration protocols
- Enhanced object literals: Computed properties, method shorthand
*/

// SYMBOL - Unique identifiers, useful for object properties
const id = Symbol('id');
const userId = Symbol('userId');

console.log(id === userId); // false - each Symbol is unique

const user2 = {
    name: "John",
    [id]: 12345, // Symbol as property key
    [Symbol('secret')]: "hidden value"
};

// Symbol properties don't show in normal iteration
console.log(Object.keys(user2)); // ["name"] - Symbol properties hidden

// Well-known symbols
const iterableObject = {
    data: [1, 2, 3, 4, 5],

    // Make object iterable
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;

        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Now we can use for...of with our custom object
for (const value of iterableObject) {
    console.log(value); // 1, 2, 3, 4, 5
}

// SET - Collection of unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log(uniqueNumbers); // Set {1, 2, 3, 4, 5}

// Set methods
uniqueNumbers.add(6);
uniqueNumbers.delete(1);
console.log(uniqueNumbers.has(2)); // true
console.log(uniqueNumbers.size); // 5

// Convert Set back to array
const arrayFromSet = [...uniqueNumbers];

// Practical use: Remove duplicates from array
const numbersWithDuplicates = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueOnly = [...new Set(numbersWithDuplicates)];

// MAP - Key-value pairs where keys can be any type
const userRoles = new Map();

// Set values
userRoles.set('john@example.com', 'admin');
userRoles.set('jane@example.com', 'user');
userRoles.set(42, 'guest'); // Number as key
userRoles.set({ id: 1 }, 'moderator'); // Object as key

// Get values
console.log(userRoles.get('john@example.com')); // 'admin'

// Map methods
console.log(userRoles.has('jane@example.com')); // true
console.log(userRoles.size); // 4

// Iterate over Map
for (const [key, value] of userRoles) {
    console.log(`${key}: ${value}`);
}

// GENERATORS - Functions that can pause and resume execution
function* numberGenerator() {
    console.log("Starting generator");
    yield 1;
    console.log("After first yield");
    yield 2;
    console.log("After second yield");
    yield 3;
    console.log("Generator finished");
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Practical generator: Infinite sequence
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3




// -------------------------------------------------------------------------::
// BLOCK SCOPE vs FUNCTION SCOPE
/*
SCOPE DIFFERENCES:
- var: Function-scoped, hoisted, can be redeclared
- let/const: Block-scoped, temporal dead zone, cannot be redeclared
*/

function scopeDemo() {
    console.log("=== FUNCTION SCOPE (var) ===");

    if (true) {
        var functionScoped = "I'm accessible outside this block";
    }
    console.log(functionScoped); // Works fine

    console.log("=== BLOCK SCOPE (let/const) ===");

    if (true) {
        let blockScoped = "I'm only accessible in this block";
        const alsoBlockScoped = "Me too!";
        console.log(blockScoped, alsoBlockScoped); // Works here
    }

    // console.log(blockScoped); // ReferenceError
    // console.log(alsoBlockScoped); // ReferenceError

    console.log("=== TEMPORAL DEAD ZONE ===");

    // console.log(beforeDeclaration); // ReferenceError with let/const
    let beforeDeclaration = "Now I exist";

    console.log("=== HOISTING BEHAVIOR ===");

    console.log(hoistedVar); // undefined (not error)
    var hoistedVar = "I'm hoisted but not initialized";

    // console.log(hoistedLet); // ReferenceError
    let hoistedLet = "I'm in temporal dead zone until this line";
}




// -------------------------------------------------------------------------::
// PRACTICAL EXAMPLES AND BEST PRACTICES
/*
REAL-WORLD USAGE EXAMPLES:
Combining multiple ES6 features to solve common problems
*/

// Example 1: User Management System
class UserManager {
    constructor() {
        this.users = new Map();
        this.roles = new Set(['admin', 'moderator', 'user']);
    }

    // Using destructuring, default parameters, and template literals
    addUser({ id, name, email, role = 'user' }) {
        if (!this.roles.has(role)) {
            throw new Error(`Invalid role: ${role}`);
        }

        const user = {
            id,
            name,
            email,
            role,
            createdAt: new Date().toISOString()
        };

        this.users.set(id, user);
        return user;
    }

    // Using arrow functions and array methods
    getUsersByRole = (targetRole) => {
        return [...this.users.values()]
            .filter(user => user.role === targetRole)
            .map(({ password, ...publicUser }) => publicUser); // Remove sensitive data
    }

    // Async method for API calls
    async syncWithAPI() {
        try {
            const response = await fetch('/api/users');
            const apiUsers = await response.json();

            // Using for...of with destructuring
            for (const { id, ...userData } of apiUsers) {
                this.users.set(id, { ...userData, syncedAt: Date.now() });
            }

            return `Synced ${apiUsers.length} users`;
        } catch (error) {
            console.error('Sync failed:', error);
            throw error;
        }
    }
}

// Example 2: Shopping Cart with modern JavaScript
const ShoppingCart = {
    items: [],

    // Method shorthand and destructuring
    addItem({ id, name, price, quantity = 1 }) {
        const existingItem = this.items.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ id, name, price, quantity });
        }

        return this;
    },

    // Using reduce and template literals
    get total() {
        return this.items.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    },

    get summary() {
        const itemCount = this.items.reduce((count, { quantity }) => count + quantity, 0);
        return `Cart: ${itemCount} items, Total: $${this.total.toFixed(2)}`;
    },

    // Generator for iterating items
    *[Symbol.iterator]() {
        for (const item of this.items) {
            yield `${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`;
        }
    }
};

// Usage with method chaining
ShoppingCart
    .addItem({ id: 1, name: "Laptop", price: 999.99 })
    .addItem({ id: 2, name: "Mouse", price: 29.99, quantity: 2 });

console.log(ShoppingCart.summary);

// Iterate through cart
for (const itemDescription of ShoppingCart) {
    console.log(itemDescription);
}

/*
=================================================================================
KEY TAKEAWAYS AND WHEN TO USE WHAT:

1. Variables:
   * Use 'const' by default
   * Use 'let' when reassignment needed
   * Avoid 'var' in modern code

2. Functions:
   * Use arrow functions for short, functional operations
   * Use regular functions for methods and when you need 'this' binding
   * Use async/await for cleaner asynchronous code

3. Array Methods:
   * map: Transform data
   * filter: Select subset
   * reduce: Aggregate data
   * find/findIndex: Locate specific items
   * forEach: Run side effects (logging, etc.)
   * some/every: Test conditions on array elements
   * includes: Check for existence
   * Use chaining for complex data transformations

4. Objects & Classes:
   * Use classes for structured, reusable blueprints
   * Use inheritance (extends/super) for shared behavior
   * Use getters/setters for computed or protected properties
   * Use enhanced object literals for dynamic keys and methods

5. Promises & Async:
   * Use promises for chaining async operations
   * Use async/await for readable, linear async code
   * Use Promise.all for parallel async tasks
   * Always handle errors with .catch or try/catch

6. Modules:
   * Use import/export for code organization and reuse
   * Prefer named exports for multiple utilities
   * Use default export for main functionality
   * Use dynamic imports for code splitting

7. Other ES6 Features:
   * Use Set/Map for unique values and key-value pairs
   * Use Symbol for unique property keys
   * Use generators for custom iteration and lazy sequences
   * Prefer block scope (let/const) over function scope (var)
   * Use destructuring and template literals for cleaner code

=================================================================================
*/
