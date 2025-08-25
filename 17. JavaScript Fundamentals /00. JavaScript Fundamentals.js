/* JavaScript Fundamentals ::

Subtopics :
Code Execution & Global Context
Event Loop, Call Stack & Concurrency
Hoisting
var/let/const
Arrow Functions & 'this'
Closures & Lexical Scope
Classes, Objects, Getters / Setters
Public / Private / Protected
Working with Objects
Optional Chaining

Nullish Coalescing
Logical OR
Destructuring(Object & Array)
Shallow & Deep Copy
filter
map
reduce
join
split
find
findIndex
splice
slice
Apply
Bind
Call
Prototype & Inheritance
Boolean Values
Spread & Rest Operator
Ternary Operator & Short - Circuiting
Set & Map
Event Delegation & Bubbling
Promises
Async / Await
Memoization
Debouncing
Throttling
ES6 Modules
export default vs named exports
*/




// -------------------------------------------------------------------------::
// CODE EXECUTION & GLOBAL CONTEXT
/*
EXECUTION CONTEXT: The environment where JavaScript code is executed
- Global Execution Context: Created when script starts
- Function Execution Context: Created when function is called
- Each context has: Memory Component (Variable Environment) + Code Component
*/

console.log("=== CODE EXECUTION & GLOBAL CONTEXT ===");

// Global variables - available throughout the application
var globalVar = "I'm in global context";
let globalUser = { name: "John", role: "admin" };

function demonstrateExecutionContext() {
    // Function execution context created here
    var localVar = "I'm in function context";

    console.log("Can access global:", globalVar);
    console.log("Local variable:", localVar);

    return function innerFunction() {
        // New execution context for inner function
        console.log("Inner can access outer:", localVar);
        console.log("Inner can access global:", globalVar);
    };
}

// Real-world example: User Authentication System
const AuthSystem = {
    // Global context variables
    currentUser: null,
    isAuthenticated: false,

    login(credentials) {
        // New execution context created
        console.log("Creating login execution context");

        // Simulate validation in this context
        if (this.validateCredentials(credentials)) {
            this.currentUser = credentials.username;
            this.isAuthenticated = true;
            console.log(`User ${this.currentUser} logged in`);
            return true;
        }
        return false;
    },

    validateCredentials(credentials) {
        // Another execution context
        const validUsers = ['admin', 'user', 'guest'];
        return validUsers.includes(credentials.username);
    },

    logout() {
        // Execution context for logout
        console.log(`User ${this.currentUser} logged out`);
        this.currentUser = null;
        this.isAuthenticated = false;
    }
};





// -------------------------------------------------------------------------::
// EVENT LOOP, CALL STACK & CONCURRENCY
/*
EVENT LOOP COMPONENTS:
- Call Stack: Where function calls are stacked (LIFO - Last In First Out)
- Web APIs: Browser APIs (setTimeout, DOM events, fetch)
- Callback Queue: Where async callbacks wait
- Microtask Queue: Higher priority queue for promises
- Event Loop: Moves tasks from queues to call stack when empty
*/

console.log("=== EVENT LOOP & CALL STACK ===");

// Call stack demonstration
function first() {
    console.log("1. First - pushed to call stack");
    second();
    console.log("5. First - finishing execution");
}

function second() {
    console.log("2. Second - pushed to call stack");
    third();
    console.log("4. Second - finishing execution");
}

function third() {
    console.log("3. Third - executed and popped from stack");
}

console.log("Starting call stack demo:");
first();

// Event loop with different queue types
console.log("=== EVENT LOOP QUEUES ===");
console.log("1. Synchronous start");

// Macro task (callback queue)
setTimeout(() => {
    console.log("5. setTimeout - from callback queue");
}, 0);

// Micro task (microtask queue) - higher priority
Promise.resolve().then(() => {
    console.log("3. Promise - from microtask queue");
});

// Another microtask
queueMicrotask(() => {
    console.log("4. queueMicrotask - from microtask queue");
});

console.log("2. Synchronous end");

// Real-world example: Image loader with progress tracking
class AsyncImageLoader {
    constructor() {
        this.loadedCount = 0;
        this.totalCount = 0;
        this.images = [];
    }

    loadImages(imageUrls) {
        this.totalCount = imageUrls.length;
        console.log("Starting image loading...");

        // Each image load will go through event loop
        const promises = imageUrls.map((url, index) => {
            return new Promise((resolve, reject) => {
                const img = new Image();

                // These callbacks go to callback queue
                img.onload = () => {
                    this.loadedCount++;
                    console.log(`Image ${index + 1} loaded via event loop`);

                    // Update UI through microtask queue
                    Promise.resolve().then(() => {
                        this.updateProgress();
                    });

                    resolve(img);
                };

                img.onerror = () => reject(new Error(`Failed to load ${url}`));
                img.src = url;
            });
        });

        return Promise.all(promises);
    }

    updateProgress() {
        const percentage = Math.round((this.loadedCount / this.totalCount) * 100);
        console.log(`Progress: ${percentage}% (${this.loadedCount}/${this.totalCount})`);
    }
}





// -------------------------------------------------------------------------::
// HOISTING
/*
HOISTING: JavaScript moves declarations to top of their scope during compilation
- var: Declaration hoisted, initialized with undefined
- let/const: Declaration hoisted but in "Temporal Dead Zone"
- function declarations: Fully hoisted (can be called before declaration)
- function expressions: Only variable declaration hoisted
*/

console.log("=== HOISTING EXAMPLES ===");

// Function hoisting - can be called before declaration
console.log("Hoisted function result:", calculateTax(100, 0.1));

function calculateTax(amount, rate) {
    return amount * rate;
}

// Variable hoisting with var
console.log("var before declaration:", hoistedVar); // undefined
var hoistedVar = "Now I have a value";

// let/const in Temporal Dead Zone
try {
    console.log("Accessing let before declaration:", tempDeadZoneVar);
} catch (error) {
    console.log("TDZ Error:", error.message);
}
let tempDeadZoneVar = "I was in TDZ";

// Real-world example: Configuration system with hoisting awareness
function createAppConfig() {
    // This works due to function hoisting
    const config = getDefaultConfig();

    // Override with environment-specific settings
    if (isProduction()) {
        config.apiUrl = 'https://api.production.com';
        config.debug = false;
    }

    return config;

    // These functions are hoisted and available above
    function getDefaultConfig() {
        return {
            apiUrl: 'http://localhost:3000',
            debug: true,
            timeout: 5000
        };
    }

    function isProduction() {
        return process.env.NODE_ENV === 'production';
    }
}

// Common hoisting gotcha with loops
console.log("=== HOISTING GOTCHA IN LOOPS ===");

// Problem with var in loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var loop:", i); // Always prints 3
    }, 100);
}

// Solution with let (block scoped)
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let loop:", j); // Prints 0, 1, 2
    }, 200);
}





// -------------------------------------------------------------------------::
// VAR/LET/CONST
/*
VARIABLE DECLARATIONS:
- var: Function-scoped, can be redeclared, hoisted with undefined
- let: Block-scoped, can be reassigned, hoisted but TDZ
- const: Block-scoped, cannot be reassigned, hoisted but TDZ
*/

console.log("=== VAR/LET/CONST COMPARISON ===");

function variableScopeDemo() {
    // VAR characteristics
    var varVariable = "var initial";
    var varVariable = "var redeclared"; // Allowed

    if (true) {
        var varInBlock = "var leaks out";
    }
    console.log("var outside block:", varInBlock); // Works

    // LET characteristics
    let letVariable = "let initial";
    letVariable = "let reassigned"; // Allowed

    if (true) {
        let letInBlock = "let stays here";
    }
    // console.log(letInBlock); // ReferenceError

    // CONST characteristics
    const constPrimitive = "cannot change";
    // constPrimitive = "error"; // TypeError

    const constObject = { count: 0 };
    constObject.count = 1; // Allowed - modifying content
    // constObject = {}; // TypeError - reassigning reference
}

// Real-world example: Shopping cart implementation
class ShoppingCart {
    constructor() {
        // const for configuration that never changes
        const MAX_ITEMS = 50;
        const TAX_RATE = 0.08;

        // let for values that will be reassigned
        let itemCount = 0;
        let subtotal = 0;

        // const for objects/arrays that get modified but not reassigned
        const items = [];
        const discountCodes = new Set();

        this.addItem = function (product) {
            if (itemCount >= MAX_ITEMS) {
                throw new Error('Cart is full');
            }

            items.push(product);
            itemCount++;
            subtotal += product.price;

            return this.getCartSummary();
        };

        this.getCartSummary = function () {
            const tax = subtotal * TAX_RATE;
            return {
                itemCount,
                subtotal,
                tax,
                total: subtotal + tax,
                items: [...items] // Return copy
            };
        };
    }
}





// -------------------------------------------------------------------------::
// ARROW FUNCTIONS & 'THIS'
/*
ARROW FUNCTIONS:
- Lexical 'this' binding (inherits from enclosing scope)
- Cannot be used as constructors
- No 'arguments' object
- Shorter syntax for simple functions
*/

console.log("=== ARROW FUNCTIONS & THIS ===");

const thisExample = {
    name: "Object Context",

    regularMethod: function () {
        console.log("Regular method this:", this.name);

        // Problem: inner function loses 'this'
        function innerRegular() {
            console.log("Inner regular this:", this?.name || 'lost context');
        }

        // Solution: arrow function preserves 'this'
        const innerArrow = () => {
            console.log("Inner arrow this:", this.name);
        };

        innerRegular();
        innerArrow();
    },

    arrowMethod: () => {
        // Arrow as method - 'this' is global/undefined
        console.log("Arrow method this:", this?.name || 'global context');
    }
};

thisExample.regularMethod();
thisExample.arrowMethod();

// Real-world example: Event handler with proper 'this' binding
class ButtonController {
    constructor(element) {
        this.element = element;
        this.clickCount = 0;
        this.isActive = true;

        // Arrow function maintains 'this' context
        this.handleClick = (event) => {
            if (!this.isActive) return;

            this.clickCount++;
            this.updateDisplay();

            if (this.clickCount >= 5) {
                this.deactivate();
            }
        };

        this.initialize();
    }

    initialize() {
        // Perfect use case for arrow functions in event handlers
        this.element.addEventListener('click', this.handleClick);

        // Multiple event handlers
        this.element.addEventListener('mouseover', () => {
            this.element.style.backgroundColor = '#e0e0e0';
        });

        this.element.addEventListener('mouseout', () => {
            this.element.style.backgroundColor = '';
        });
    }

    updateDisplay() {
        this.element.textContent = `Clicked ${this.clickCount} times`;
    }

    deactivate() {
        this.isActive = false;
        this.element.style.opacity = '0.5';
        this.element.textContent = 'Deactivated';
    }
}

// Array methods with arrow functions
const products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'Book', price: 20, category: 'Education' },
    { name: 'Phone', price: 599, category: 'Electronics' }
];

// Concise arrow functions for array operations
const productNames = products.map(p => p.name);
const expensiveProducts = products.filter(p => p.price > 500);
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

console.log('Product names:', productNames);
console.log('Expensive products:', expensiveProducts);
console.log('Total price:', totalPrice);





// -------------------------------------------------------------------------::
// CLOSURES & LEXICAL SCOPE
/*
CLOSURES: Inner function has access to outer function's variables
even after outer function has returned
- Creates private variables
- Enables data encapsulation
- Foundation for module pattern
*/

console.log("=== CLOSURES & LEXICAL SCOPE ===");

// Basic closure example
function createCounter(initialValue = 0) {
    let count = initialValue; // Private variable

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        },
        reset() {
            count = initialValue;
            return count;
        }
    };
}

const counter = createCounter(10);
console.log("Counter increment:", counter.increment()); // 11
console.log("Counter value:", counter.getValue()); // 11

// Real-world example: Cache with closure for data privacy
function createCache(maxSize = 100) {
    const cache = new Map(); // Private cache storage
    let accessCount = 0; // Private access counter

    return {
        set(key, value) {
            if (cache.size >= maxSize && !cache.has(key)) {
                // Remove oldest entry
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);
            }
            cache.set(key, value);
        },

        get(key) {
            accessCount++; // Increment private counter
            return cache.get(key);
        },

        has(key) {
            return cache.has(key);
        },

        getStats() {
            return {
                size: cache.size,
                maxSize,
                accessCount
            };
        },

        clear() {
            cache.clear();
            accessCount = 0;
        }
    };
}

const userCache = createCache(5);
userCache.set('user1', { name: 'John', age: 30 });
userCache.set('user2', { name: 'Jane', age: 25 });
console.log('Cache stats:', userCache.getStats());

// Module pattern with closures
const UserModule = (function () {
    // Private variables
    let users = [];
    let currentId = 1;

    // Private function
    function validateUser(user) {
        return user.name && user.email;
    }

    // Public API
    return {
        addUser(userData) {
            if (!validateUser(userData)) {
                throw new Error('Invalid user data');
            }

            const user = {
                id: currentId++,
                ...userData,
                createdAt: new Date()
            };

            users.push(user);
            return user;
        },

        getUser(id) {
            return users.find(user => user.id === id);
        },

        getAllUsers() {
            // Return copy to prevent external modification
            return users.map(user => ({ ...user }));
        },

        removeUser(id) {
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                return users.splice(index, 1)[0];
            }
            return null;
        }
    };
})();





// -------------------------------------------------------------------------::
// CLASSES, OBJECTS, GETTERS / SETTERS
/*
ES6 CLASSES: Syntactic sugar over prototype-based inheritance
- constructor: Initialize instance
- methods: Functions available to instances
- getters/setters: Computed properties with validation
- static methods: Class-level methods
*/

console.log("=== CLASSES & OBJECTS ===");

class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this._balance = initialBalance; // Convention: underscore for "private"
        this._transactions = [];
        this.createdAt = new Date();
    }

    // Getter - access like a property
    get balance() {
        return this._balance;
    }

    // Setter - assign like a property with validation
    set balance(amount) {
        if (amount < 0) {
            throw new Error('Balance cannot be negative');
        }
        this._balance = amount;
    }

    // Getter for computed property
    get formattedBalance() {
        return `$${this._balance.toFixed(2)}`;
    }

    // Method
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }

        this._balance += amount;
        this._transactions.push({
            type: 'deposit',
            amount,
            date: new Date(),
            balance: this._balance
        });

        return this._balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this._balance) {
            throw new Error('Insufficient funds');
        }

        this._balance -= amount;
        this._transactions.push({
            type: 'withdrawal',
            amount,
            date: new Date(),
            balance: this._balance
        });

        return this._balance;
    }

    // Getter for transaction history
    get transactionHistory() {
        return [...this._transactions]; // Return copy
    }

    // Static method - called on class, not instance
    static compareBalances(account1, account2) {
        return account1.balance - account2.balance;
    }
}

// Usage
const account = new BankAccount('ACC001', 1000);
console.log('Initial balance:', account.formattedBalance);

account.deposit(500);
console.log('After deposit:', account.formattedBalance);

account.withdraw(200);
console.log('After withdrawal:', account.formattedBalance);
console.log('Transaction count:', account.transactionHistory.length);





// -------------------------------------------------------------------------::
// PUBLIC / PRIVATE / PROTECTED
/*
ENCAPSULATION IN JAVASCRIPT:
- Public: Accessible from anywhere
- Private (#): Only accessible within class (ES2022)
- Protected (_): Convention for "internal use" (not enforced)
*/

console.log("=== PUBLIC/PRIVATE/PROTECTED ===");

class UserAccount {
    // Public fields
    username;
    email;

    // Private fields (ES2022) - truly private
    #password;
    #secretKey;

    // Protected convention (underscore prefix)
    _lastLogin;
    _loginAttempts = 0;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.#password = this.#hashPassword(password);
        this.#secretKey = this.#generateSecretKey();
        this._lastLogin = null;
    }

    // Private method - only accessible within class
    #hashPassword(password) {
        // Simplified hash simulation
        return btoa(password + 'salt');
    }

    #generateSecretKey() {
        return Math.random().toString(36).substring(7);
    }

    // Protected method (convention)
    _validatePassword(password) {
        return this.#hashPassword(password) === this.#password;
    }

    // Public method
    login(password) {
        if (this._validatePassword(password)) {
            this._lastLogin = new Date();
            this._loginAttempts = 0;
            return true;
        } else {
            this._loginAttempts++;
            if (this._loginAttempts >= 3) {
                this.lockAccount();
            }
            return false;
        }
    }

    // Public getter for private data
    get isLocked() {
        return this._loginAttempts >= 3;
    }

    // Public method that uses private data
    changePassword(oldPassword, newPassword) {
        if (!this._validatePassword(oldPassword)) {
            throw new Error('Invalid current password');
        }

        this.#password = this.#hashPassword(newPassword);
        return true;
    }

    lockAccount() {
        console.log(`Account ${this.username} has been locked`);
    }
}

// Usage
const user = new UserAccount('john_doe', 'john@example.com', 'password123');
console.log('Username:', user.username); // Public - accessible
console.log('Email:', user.email); // Public - accessible
// console.log(user.#password); // SyntaxError - private field not accessible
console.log('Login attempts:', user._loginAttempts); // Protected - accessible but shouldn't be used





// -------------------------------------------------------------------------::
// WORKING WITH OBJECTS
/*
OBJECT MANIPULATION TECHNIQUES:
- Object.keys(), Object.values(), Object.entries()
- Object.assign(), Object.freeze(), Object.seal()
- for...in, for...of loops
- Property descriptors and defineProperty
*/

console.log("=== WORKING WITH OBJECTS ===");

const product = {
    name: 'Laptop',
    price: 999,
    category: 'Electronics',
    specs: {
        ram: '16GB',
        storage: '512GB SSD'
    }
};

// Object methods
console.log('Keys:', Object.keys(product));
console.log('Values:', Object.values(product));
console.log('Entries:', Object.entries(product));

// Object.assign - shallow copy and merge
const productCopy = Object.assign({}, product);
const updatedProduct = Object.assign({}, product, {
    price: 899,
    onSale: true
});

console.log('Updated product:', updatedProduct);

// Object.freeze - prevent modifications
const frozenProduct = Object.freeze({ ...product });
frozenProduct.price = 500; // Ignored in strict mode
console.log('Frozen product price unchanged:', frozenProduct.price);

// Real-world example: Configuration manager
class ConfigManager {
    constructor(initialConfig = {}) {
        this.config = { ...initialConfig };
        this.defaults = Object.freeze({
            timeout: 5000,
            retries: 3,
            debug: false
        });
    }

    get(key) {
        // Use optional chaining for nested properties
        return this.config[key] ?? this.defaults[key];
    }

    set(key, value) {
        if (typeof key === 'object') {
            // Set multiple values
            this.config = { ...this.config, ...key };
        } else {
            this.config[key] = value;
        }
    }

    merge(newConfig) {
        this.config = Object.assign({}, this.config, newConfig);
    }

    getAll() {
        return { ...this.defaults, ...this.config };
    }

    reset() {
        this.config = {};
    }

    // Check if property exists
    has(key) {
        return key in this.config || key in this.defaults;
    }
}

const configManager = new ConfigManager({ debug: true });
configManager.set('apiUrl', 'https://api.example.com');
console.log('Config:', configManager.getAll());





// -------------------------------------------------------------------------::
// OPTIONAL CHAINING
/*
OPTIONAL CHAINING (?.) - ES2020
Safely access nested properties without throwing errors if intermediate values are null/undefined
*/

console.log("=== OPTIONAL CHAINING ===");

const user1 = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    contacts: {
        phone: '555-1234'
    }
};

const user2 = {
    name: 'Jane'
    // No address property
};

// Without optional chaining (old way - error prone)
// console.log(user2.address.city); // TypeError: Cannot read property 'city' of undefined

// With optional chaining (safe)
console.log('User1 city:', user1.address?.city); // "New York"
console.log('User2 city:', user2.address?.city); // undefined
console.log('User1 coordinates:', user1.address?.coordinates?.lat); // 40.7128
console.log('User2 coordinates:', user2.address?.coordinates?.lat); // undefined

// Optional chaining with arrays
const users = [user1, user2];
console.log('First user city:', users[0]?.address?.city); // "New York"
console.log('Third user:', users[2]?.name); // undefined

// Optional chaining with function calls
const api = {
    fetchUser: function (id) {
        return id === 1 ? user1 : null;
    }
};

console.log('API result:', api.fetchUser?.(1)?.name); // "John"
console.log('API non-existent method:', api.nonExistentMethod?.()); // undefined

// Real-world example: API response handling
class UserService {
    async getUser(userId) {
        try {
            const response = await fetch(`/api/users/${userId}`);
            const userData = await response.json();

            // Safely access nested API response data
            return {
                id: userData?.id,
                name: userData?.profile?.name,
                email: userData?.contact?.email,
                avatar: userData?.profile?.avatar?.url,
                address: {
                    street: userData?.address?.street,
                    city: userData?.address?.city,
                    country: userData?.address?.country?.name
                },
                preferences: {
                    theme: userData?.settings?.ui?.theme ?? 'light',
                    notifications: userData?.settings?.notifications?.enabled ?? true
                }
            };
        } catch (error) {
            console.error('Error fetching user:', error);
            return null;
        }
    }

    // Safe method chaining
    processUserData(userData) {
        // Chain operations safely
        return userData?.profile?.name
            ?.trim()
            ?.toLowerCase()
            ?.replace(/\s+/g, '_');
    }
}





// -------------------------------------------------------------------------::
// NULLISH COALESCING
/*
NULLISH COALESCING (??) - ES2020
Returns right operand when left operand is null or undefined
Different from || which treats falsy values (0, '', false) as invalid
*/

console.log("=== NULLISH COALESCING ===");

// Problem with logical OR
const config1 = {
    port: 0,        // Valid port number
    debug: false,   // Valid boolean
    name: '',       // Valid empty string
    timeout: null   // Invalid - should use default
};

// Wrong way - OR operator treats falsy values as invalid
const badPort = config1.port || 3000;           // 3000 (wrong! 0 is valid)
const badDebug = config1.debug || true;         // true (wrong! false is valid)
const badName = config1.name || 'DefaultApp';   // 'DefaultApp' (wrong! '' is valid)

console.log('Bad defaults:', { badPort, badDebug, badName });

// Right way - Nullish coalescing only for null/undefined
const goodPort = config1.port ?? 3000;          // 0 (correct!)
const goodDebug = config1.debug ?? true;        // false (correct!)
const goodName = config1.name ?? 'DefaultApp';  // '' (correct!)
const goodTimeout = config1.timeout ?? 5000;   // 5000 (correct - null replaced)

console.log('Good defaults:', { goodPort, goodDebug, goodName, goodTimeout });

// Real-world example: Form validation with default values
class FormValidator {
    constructor(options = {}) {
        // Use nullish coalescing for proper default values
        this.required = options.required ?? true;
        this.minLength = options.minLength ?? 0;
        this.maxLength = options.maxLength ?? Infinity;
        this.allowEmpty = options.allowEmpty ?? false;
        this.trimWhitespace = options.trimWhitespace ?? true;

        // These would be wrong with || operator
        // this.minLength = options.minLength || 1; // Wrong! 0 is valid minLength
        // this.allowEmpty = options.allowEmpty || false; // Wrong! false is valid
    }

    validate(value) {
        // Handle null/undefined input
        const processedValue = this.trimWhitespace
            ? (value ?? '').trim()
            : value ?? '';

        if (this.required && !processedValue && !this.allowEmpty) {
            return { valid: false, error: 'Field is required' };
        }

        if (processedValue.length < this.minLength) {
            return {
                valid: false,
                error: `Minimum length is ${this.minLength}`
            };
        }

        if (processedValue.length > this.maxLength) {
            return {
                valid: false,
                error: `Maximum length is ${this.maxLength}`
            };
        }

        return { valid: true, value: processedValue };
    }
}

// Usage
const validator = new FormValidator({
    minLength: 0,      // 0 is valid - want to allow empty after trimming
    allowEmpty: false, // false is valid - don't allow empty
    required: true     // true is valid - field is required
});

console.log('Validation result:', validator.validate('  test  '));

// Nullish coalescing assignment (??=) - ES2021
let userPreferences = {
    theme: null,
    language: undefined,
    fontSize: 0,  // Valid value
};

// Only assign if null or undefined
userPreferences.theme ??= 'light';      // Assigns 'light'
userPreferences.language ??= 'en';      // Assigns 'en'
userPreferences.fontSize ??= 14;        // Keeps 0 (doesn't assign 14)
userPreferences.newSetting ??= 'default'; // Assigns 'default'

console.log('User preferences:', userPreferences);





// -------------------------------------------------------------------------::
// LOGICAL OR
/*
LOGICAL OR (||) - Traditional way to provide defaults
Returns first truthy value or last value if all are falsy
Different from nullish coalescing - treats all falsy values as invalid
*/

console.log("=== LOGICAL OR ===");

// Logical OR for default values (before nullish coalescing)
function greetUser(name) {
    const userName = name || 'Guest';  // If name is falsy, use 'Guest'
    return `Hello, ${userName}!`;
}

console.log(greetUser('John'));    // "Hello, John!"
console.log(greetUser(''));        // "Hello, Guest!" (empty string is falsy)
console.log(greetUser(null));      // "Hello, Guest!"
console.log(greetUser(undefined)); // "Hello, Guest!"

// Short-circuit evaluation with OR
let cache = null;
const data = cache || fetchDataFromAPI(); // Only fetch if cache is falsy

function fetchDataFromAPI() {
    console.log("Fetching from API...");
    return { data: "API data" };
}

// Real-world example: Configuration with fallbacks
class AppConfig {
    constructor(userConfig = {}) {
        // Multiple fallback levels using OR
        this.apiUrl = userConfig.apiUrl ||
            process.env.API_URL ||
            'http://localhost:3000';

        this.theme = userConfig.theme ||
            localStorage.getItem('theme') ||
            'light';

        this.language = userConfig.language ||
            navigator.language ||
            'en';

        this.features = userConfig.features || this.getDefaultFeatures();
    }

    getDefaultFeatures() {
        return {
            notifications: true,
            darkMode: false,
            analytics: true
        };
    }
}

// OR in conditional rendering (React-like pattern)
function renderUser(user) {
    return {
        name: user.name || 'Anonymous',
        avatar: user.avatar || '/default-avatar.png',
        status: user.isOnline || 'Offline'
    };
}





// -------------------------------------------------------------------------::
// DESTRUCTURING (OBJECT & ARRAY)
/*
DESTRUCTURING: Extract values from arrays/objects into variables
- Cleaner syntax than bracket/dot notation
- Supports default values, renaming, nested destructuring
- Works with function parameters
*/

console.log("=== DESTRUCTURING ===");

// ARRAY DESTRUCTURING
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Basic array destructuring
const [primary, secondary] = colors;
console.log('Primary:', primary, 'Secondary:', secondary);

// Skip elements
const [first, , third] = colors;
console.log('First and third:', first, third);

// Rest operator in destructuring
const [main, ...otherColors] = colors;
console.log('Main:', main, 'Others:', otherColors);

// Default values
const [a, b, c, d, e, f = 'orange'] = colors;
console.log('Sixth color (default):', f);

// Swapping variables
let x = 10, y = 20;
[x, y] = [y, x];
console.log('After swap - x:', x, 'y:', y);

// OBJECT DESTRUCTURING
const user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        address: {
            city: 'New York',
            country: 'USA'
        }
    },
    preferences: {
        theme: 'dark',
        notifications: true
    }
};

// Basic object destructuring
const { username, email } = user;
console.log('User:', username, email);

// Rename variables
const { username: userName, id: userId } = user;
console.log('Renamed:', userName, userId);

// Default values
const { phone = 'Not provided', email: userEmail } = user;
console.log('Phone:', phone);

// Nested destructuring
const {
    profile: {
        firstName,
        lastName,
        address: { city, country }
    }
} = user;
console.log('Nested:', firstName, lastName, city, country);

// Rest in object destructuring
const { id, ...userWithoutId } = user;
console.log('User without ID:', userWithoutId);

// DESTRUCTURING IN FUNCTION PARAMETERS
function createProduct({ name, price, category = 'General', ...otherProps }) {
    return {
        id: Date.now(),
        name,
        price,
        category,
        ...otherProps,
        createdAt: new Date()
    };
}

const newProduct = createProduct({
    name: 'Laptop',
    price: 999,
    brand: 'TechCorp',
    warranty: '2 years'
});

console.log('Created product:', newProduct);

// Real-world example: API response handling
class UserService {
    async processUserData(apiResponse) {
        // Destructure complex API response
        const {
            data: {
                user: {
                    personal: { name, age },
                    contact: { email, phone = 'N/A' },
                    settings: {
                        privacy: {
                            shareEmail = false,
                            sharePhone = false
                        } = {}
                    } = {}
                }
            },
            meta: { timestamp, version }
        } = apiResponse;

        return {
            name,
            age,
            contact: {
                email: shareEmail ? email : 'hidden',
                phone: sharePhone ? phone : 'hidden'
            },
            processedAt: timestamp,
            apiVersion: version
        };
    }

    // Destructuring in array methods
    formatUsers(users) {
        return users.map(({ id, profile: { name }, status }) => ({
            id,
            name,
            isActive: status === 'active'
        }));
    }
}





// -------------------------------------------------------------------------::
// SHALLOW & DEEP COPY
/*
COPYING OBJECTS/ARRAYS:
- Shallow Copy: Copies top level, but nested objects share references
- Deep Copy: Recursively copies all levels, creating independent copies
*/

console.log("=== SHALLOW & DEEP COPY ===");

const originalUser = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// SHALLOW COPY methods
// 1. Spread operator
const shallowCopy1 = { ...originalUser };

// 2. Object.assign
const shallowCopy2 = Object.assign({}, originalUser);

// 3. Array.from for arrays
const shallowArrayCopy = Array.from(originalUser.hobbies);

// Problem with shallow copy
shallowCopy1.name = 'Jane';  // Independent
shallowCopy1.address.city = 'Boston';  // Affects original!

console.log('Original city after shallow copy modification:', originalUser.address.city); // "Boston"

// DEEP COPY methods
// 1. JSON method (limitations: no functions, dates become strings, etc.)
const deepCopy1 = JSON.parse(JSON.stringify(originalUser));

// 2. Custom deep copy function
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof Array) {
        return obj.map(item => deepCopy(item));
    }

    if (typeof obj === 'object') {
        const copy = {};
        Object.keys(obj).forEach(key => {
            copy[key] = deepCopy(obj[key]);
        });
        return copy;
    }
}

const deepCopy2 = deepCopy(originalUser);

// Test deep copy
deepCopy2.address.city = 'Chicago';
console.log('Original city after deep copy:', originalUser.address.city); // Still "New York"

// Real-world example: State management with immutability
class StateManager {
    constructor(initialState = {}) {
        this.state = deepCopy(initialState);
        this.history = [deepCopy(initialState)];
    }

    setState(newState) {
        // Always work with deep copies to prevent mutations
        const currentState = deepCopy(this.state);
        const updatedState = { ...currentState, ...newState };

        this.state = updatedState;
        this.history.push(deepCopy(updatedState));

        return this.state;
    }

    getState() {
        // Return deep copy to prevent external mutations
        return deepCopy(this.state);
    }

    undo() {
        if (this.history.length > 1) {
            this.history.pop();
            this.state = deepCopy(this.history[this.history.length - 1]);
        }
        return this.state;
    }

    // Shallow update for performance when safe
    shallowUpdate(key, value) {
        this.state = { ...this.state, [key]: value };
        return this.state;
    }
}





// -------------------------------------------------------------------------::
// ARRAY METHODS: FILTER, MAP, REDUCE, JOIN, SPLIT, FIND, FINDINDEX
console.log("=== ARRAY METHODS ===");

const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 2, name: 'Phone', price: 599, category: 'Electronics', inStock: false },
    { id: 3, name: 'Book', price: 25, category: 'Education', inStock: true },
    { id: 4, name: 'Headphones', price: 199, category: 'Electronics', inStock: true }
];

// FILTER - Returns new array with elements that pass test
const inStockProducts = products.filter(product => product.inStock);
const expensiveProducts = products.filter(product => product.price > 200);
const electronics = products.filter(product => product.category === 'Electronics');

console.log('In stock:', inStockProducts.map(p => p.name));
console.log('Expensive:', expensiveProducts.map(p => p.name));

// MAP - Transforms each element, returns new array of same length
const productNames = products.map(product => product.name);
const discountedPrices = products.map(product => ({
    ...product,
    discountedPrice: product.price * 0.9,
    savings: product.price * 0.1
}));

console.log('Product names:', productNames);
console.log('Discounted prices:', discountedPrices[0]);

// REDUCE - Accumulates array into single value
const totalValue = products.reduce((sum, product) => sum + product.price, 0);
const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
}, {});

// Group products by category
const productsByCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});

console.log('Total value:', totalValue);
console.log('Category counts:', categoryCounts);
console.log('Products by category:', productsByCategory);

// FIND - Returns first element that matches condition (or undefined)
const expensiveProduct = products.find(product => product.price > 500);
const bookProduct = products.find(product => product.category === 'Education');

console.log('Found expensive product:', expensiveProduct?.name);

// FINDINDEX - Returns index of first matching element (or -1)
const phoneIndex = products.findIndex(product => product.name === 'Phone');
const outOfStockIndex = products.findIndex(product => !product.inStock);

console.log('Phone index:', phoneIndex);
console.log('Out of stock index:', outOfStockIndex);

// JOIN - Converts array to string with separator
const productNameString = productNames.join(', ');
const categories = [...new Set(products.map(p => p.category))].join(' | ');

console.log('Products as string:', productNameString);
console.log('Categories:', categories);

// SPLIT - Converts string to array (String method, not Array method)
const csvData = 'John,25,Developer,New York';
const userInfo = csvData.split(',');
const sentence = 'Hello world from JavaScript';
const words = sentence.split(' ');

console.log('CSV parsed:', userInfo);
console.log('Words:', words);

// Real-world example: E-commerce filtering system
class ProductFilter {
    constructor(products) {
        this.products = products;
    }

    // Chain multiple array methods
    searchAndFilter(query, minPrice = 0, maxPrice = Infinity, category = null) {
        return this.products
            .filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            )
            .filter(product =>
                product.price >= minPrice && product.price <= maxPrice
            )
            .filter(product =>
                !category || product.category === category
            )
            .filter(product => product.inStock)
            .map(product => ({
                ...product,
                relevanceScore: this.calculateRelevance(product, query)
            }))
            .sort((a, b) => b.relevanceScore - a.relevanceScore);
    }

    calculateRelevance(product, query) {
        const nameMatch = product.name.toLowerCase().includes(query.toLowerCase()) ? 2 : 0;
        const categoryMatch = product.category.toLowerCase().includes(query.toLowerCase()) ? 1 : 0;
        return nameMatch + categoryMatch;
    }

    // Get statistics
    getStats() {
        return {
            total: this.products.length,
            inStock: this.products.filter(p => p.inStock).length,
            outOfStock: this.products.filter(p => !p.inStock).length,
            avgPrice: this.products.reduce((sum, p) => sum + p.price, 0) / this.products.length,
            categories: [...new Set(this.products.map(p => p.category))],
            priceRange: {
                min: Math.min(...this.products.map(p => p.price)),
                max: Math.max(...this.products.map(p => p.price))
            }
        };
    }
}

const productFilter = new ProductFilter(products);
const searchResults = productFilter.searchAndFilter('laptop', 0, 1000, 'Electronics');
console.log('Search results:', searchResults);
console.log('Product stats:', productFilter.getStats());





// -------------------------------------------------------------------------::
// 16. SPLICE & SLICE
/*
SPLICE vs SLICE:
- SPLICE: Mutates original array, can add/remove elements
- SLICE: Returns new array, doesn't mutate original
*/

console.log("=== SPLICE & SLICE ===");

// SLICE - Returns shallow copy of portion of array
const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const firstThree = originalNumbers.slice(0, 3);        // [1, 2, 3]
const lastThree = originalNumbers.slice(-3);           // [7, 8, 9]
const middle = originalNumbers.slice(3, 6);            // [4, 5, 6]
const copy = originalNumbers.slice();                  // Complete copy

console.log('Original unchanged:', originalNumbers);
console.log('First three:', firstThree);
console.log('Last three:', lastThree);

// SPLICE - Mutates original array
const mutableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Remove elements
const removed = mutableNumbers.splice(3, 2);           // Remove 2 elements from index 3
console.log('Removed elements:', removed);              // [4, 5]
console.log('After removal:', mutableNumbers);          // [1, 2, 3, 6, 7, 8, 9]

// Add elements
mutableNumbers.splice(3, 0, 'a', 'b');                 // Insert at index 3
console.log('After insertion:', mutableNumbers);        // [1, 2, 3, 'a', 'b', 6, 7, 8, 9]

// Replace elements
mutableNumbers.splice(3, 2, 'X', 'Y');                 // Replace 2 elements
console.log('After replacement:', mutableNumbers);      // [1, 2, 3, 'X', 'Y', 6, 7, 8, 9]

// Real-world example: Todo list management
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    addTodo(text) {
        const todo = {
            id: this.nextId++,
            text,
            completed: false,
            createdAt: new Date()
        };
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1)[0]; // Remove and return
        }
        return null;
    }

    moveTodo(fromIndex, toIndex) {
        if (fromIndex >= 0 && fromIndex < this.todos.length &&
            toIndex >= 0 && toIndex < this.todos.length) {

            const [movedTodo] = this.todos.splice(fromIndex, 1);
            this.todos.splice(toIndex, 0, movedTodo);
            return true;
        }
        return false;
    }

    // Get completed todos without mutating original
    getCompleted() {
        return this.todos.slice().filter(todo => todo.completed);
    }

    // Get recent todos (last N)
    getRecent(count = 5) {
        return this.todos.slice(-count);
    }

    // Bulk operations
    completeMultiple(ids) {
        ids.forEach(id => {
            const todo = this.todos.find(t => t.id === id);
            if (todo) todo.completed = true;
        });
    }

    removeCompleted() {
        // Use filter instead of splice for multiple removals
        const removed = this.todos.filter(todo => todo.completed);
        this.todos = this.todos.filter(todo => !todo.completed);
        return removed;
    }
}





// -------------------------------------------------------------------------::
// 17. APPLY, BIND, CALL
/*
FUNCTION CONTEXT METHODS:
- CALL: Immediately invokes function with specified 'this' and arguments
- APPLY: Like call, but arguments passed as array
- BIND: Returns new function with bound 'this' and optional arguments
*/

console.log("=== APPLY, BIND, CALL ===");

const person = {
    name: 'John',
    age: 30
};

const anotherPerson = {
    name: 'Jane',
    age: 25
};

function introduce(greeting, punctuation) {
    return `${greeting}, I'm ${this.name} and I'm ${this.age} years old${punctuation}`;
}

// CALL - invoke immediately with specific 'this'
const johnIntro = introduce.call(person, 'Hello', '!');
const janeIntro = introduce.call(anotherPerson, 'Hi', '.');

console.log('Call result:', johnIntro);
console.log('Call result:', janeIntro);

// APPLY - invoke immediately with arguments array
const johnIntroApply = introduce.apply(person, ['Greetings', '!!!']);
console.log('Apply result:', johnIntroApply);

// BIND - create new function with bound context
const johnIntroducer = introduce.bind(person);
const janeIntroducer = introduce.bind(anotherPerson, 'Hey'); // Pre-fill first arg

console.log('Bind result:', johnIntroducer('Welcome', '.'));
console.log('Bind result:', janeIntroducer('there')); // Only need second arg

// Real-world example: Event handling with proper context
class ButtonHandler {
    constructor(element) {
        this.element = element;
        this.clickCount = 0;
        this.isEnabled = true;

        // Bind methods to preserve 'this' context
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);

        this.init();
    }

    init() {
        // Methods are bound, so 'this' is preserved
        this.element.addEventListener('click', this.handleClick);
        this.element.addEventListener('dblclick', this.handleDoubleClick);
    }

    handleClick(event) {
        if (!this.isEnabled) return;

        this.clickCount++;
        console.log(`Button clicked ${this.clickCount} times`);
        this.updateDisplay();
    }

    handleDoubleClick(event) {
        console.log('Double click detected!');
        this.reset();
    }

    updateDisplay() {
        this.element.textContent = `Clicked ${this.clickCount} times`;
    }

    reset() {
        this.clickCount = 0;
        this.updateDisplay();
    }

    // Method that uses call/apply to invoke callbacks with specific context
    executeWithContext(callback, context, ...args) {
        if (typeof callback === 'function') {
            return callback.apply(context, args);
        }
    }
}

// Mathematical operations with call/apply
const calculator = {
    result: 0,

    add(...numbers) {
        this.result += numbers.reduce((sum, num) => sum + num, 0);
        return this;
    },

    multiply(...numbers) {
        this.result *= numbers.reduce((product, num) => product * num, 1);
        return this;
    }
};

// Using apply to pass array of numbers
const numbers = [1, 2, 3, 4, 5];
calculator.result = 10;
calculator.add.apply(calculator, numbers);
console.log('Calculator result after apply:', calculator.result);

// Function borrowing with call
const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// Borrow array methods
const arrayFromLike = Array.prototype.slice.call(arrayLike);
console.log('Array from array-like:', arrayFromLike);





// -------------------------------------------------------------------------::
// 18. PROTOTYPE & INHERITANCE
/*
PROTOTYPE CHAIN:
- Every object has a prototype (except null)
- Objects inherit properties/methods from prototype
- prototype chain: obj -> Constructor.prototype -> Object.prototype -> null
- ES6 classes are syntactic sugar over prototypes
*/

console.log("=== PROTOTYPE & INHERITANCE ===");

// Constructor function approach (pre-ES6)
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

// Add methods to prototype
Animal.prototype.speak = function () {
    return `${this.name} makes a sound`;
};

Animal.prototype.getInfo = function () {
    return `${this.name} is a ${this.species}`;
};

// Create instances
const dog = new Animal('Rex', 'Dog');
console.log('Prototype method:', dog.speak());

// Inheritance with prototypes
function Dog(name, breed) {
    Animal.call(this, name, 'Dog'); // Call parent constructor
    this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override parent method
Dog.prototype.speak = function () {
    return `${this.name} barks!`;
};

// Add new method
Dog.prototype.wagTail = function () {
    return `${this.name} wags tail`;
};

const myDog = new Dog('Buddy', 'Golden Retriever');
console.log('Inherited method:', myDog.getInfo());
console.log('Overridden method:', myDog.speak());
console.log('New method:', myDog.wagTail());

// ES6 Class syntax (modern approach)
class ModernAnimal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        return `${this.name} makes a sound`;
    }

    getInfo() {
        return `${this.name} is a ${this.species}`;
    }

    // Static method
    static compareAnimals(animal1, animal2) {
        return animal1.name.localeCompare(animal2.name);
    }
}

class ModernDog extends ModernAnimal {
    constructor(name, breed) {
        super(name, 'Dog'); // Call parent constructor
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks loudly!`;
    }

    wagTail() {
        return `${this.name} wags tail excitedly`;
    }

    // Method that calls parent method
    getFullInfo() {
        return `${super.getInfo()} of breed ${this.breed}`;
    }
}

const modernDog = new ModernDog('Charlie', 'Labrador');
console.log('Modern class:', modernDog.getFullInfo());

// Real-world example: UI Component hierarchy
class UIComponent {
    constructor(element) {
        this.element = element;
        this.isVisible = true;
        this.children = [];
    }

    show() {
        this.isVisible = true;
        this.element.style.display = 'block';
        return this;
    }

    hide() {
        this.isVisible = false;
        this.element.style.display = 'none';
        return this;
    }

    addChild(child) {
        this.children.push(child);
        child.parent = this;
        return this;
    }

    // Method chaining
    addClass(className) {
        this.element.classList.add(className);
        return this;
    }
}

class Button extends UIComponent {
    constructor(element, text) {
        super(element);
        this.text = text;
        this.isEnabled = true;
        this.clickHandlers = [];

        this.init();
    }

    init() {
        this.element.textContent = this.text;
        this.element.addEventListener('click', (e) => {
            if (this.isEnabled) {
                this.handleClick(e);
            }
        });
    }

    onClick(handler) {
        this.clickHandlers.push(handler);
        return this;
    }

    handleClick(event) {
        this.clickHandlers.forEach(handler => handler.call(this, event));
    }

    enable() {
        this.isEnabled = true;
        this.element.disabled = false;
        return this;
    }

    disable() {
        this.isEnabled = false;
        this.element.disabled = true;
        return this;
    }
}

// Prototype property inspection
console.log('Dog prototype chain:');
console.log('myDog.__proto__ === Dog.prototype:', myDog.__proto__ === Dog.prototype);
console.log('Dog.prototype.__proto__ === Animal.prototype:', Dog.prototype.__proto__ === Animal.prototype);
console.log('Animal.prototype.__proto__ === Object.prototype:', Animal.prototype.__proto__ === Object.prototype);





// -------------------------------------------------------------------------::
// 19. BOOLEAN VALUES
/*
BOOLEAN CONTEXT IN JAVASCRIPT:
- Explicit booleans: true/false
- Truthy/Falsy values: conversion to boolean in conditional contexts
- Boolean() constructor and !! operator for explicit conversion
*/

console.log("=== BOOLEAN VALUES ===");

// Explicit booleans
const isTrue = true;
const isFalse = false;

// Falsy values (convert to false in boolean context)
const falsyValues = [
    false,      // boolean false
    0,          // zero
    -0,         // negative zero
    0n,         // BigInt zero
    '',         // empty string
    null,       // null
    undefined,  // undefined
    NaN         // Not a Number
];

// Truthy values (everything else converts to true)
const truthyValues = [
    true,           // boolean true
    1,              // non-zero numbers
    -1,             // negative numbers
    'hello',        // non-empty strings
    '0',            // string zero (not number)
    'false',        // string false (not boolean)
    [],             // empty array
    {},             // empty object
    function () { },  // functions
    new Date()      // objects
];

// Test falsy values
console.log('Falsy values test:');
falsyValues.forEach((value, index) => {
    console.log(`${index}: ${value} -> ${Boolean(value)}`);
});

// Test truthy values
console.log('Truthy values test:');
truthyValues.slice(0, 5).forEach((value, index) => {
    console.log(`${index}: ${value} -> ${Boolean(value)}`);
});

// Boolean conversion methods
const value = 'hello';
console.log('Boolean(value):', Boolean(value));    // true
console.log('!!value:', !!value);                  // true (double negation)
console.log('!value:', !value);                    // false (single negation)

// Real-world example: Form validation
class FormValidator {
    static isValidEmail(email) {
        // Truthy check and regex validation
        return !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    static isValidPassword(password) {
        // Check for truthy value and length
        return !!password && password.length >= 8;
    }

    static isValidAge(age) {
        // Check for truthy number (0 would be falsy but valid age)
        return age !== null && age !== undefined && age !== '' &&
            !isNaN(age) && age >= 0 && age <= 120;
    }

    static validateForm(formData) {
        const errors = [];

        if (!formData.name) {
            errors.push('Name is required');
        }

        if (!this.isValidEmail(formData.email)) {
            errors.push('Valid email is required');
        }

        if (!this.isValidPassword(formData.password)) {
            errors.push('Password must be at least 8 characters');
        }

        if (!this.isValidAge(formData.age)) {
            errors.push('Valid age is required');
        }

        return {
            isValid: !errors.length, // Convert to boolean
            errors
        };
    }
}
