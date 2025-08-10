// Higher order functions :
/*
 * A higher-order function is a function that takes another function as an argument, or returns a function as a result.
 * Examples include:
 * - Array methods like map, filter, and reduce
 * - Functions that create other functions
 * - Functions that accept callbacks
 * Higher-order functions allow for more abstract and reusable code.
 * They can be used to create more complex operations by combining simpler functions.
 * They are a key feature of functional programming in JavaScript.
 * Basically, they allow you to treat functions as first-class citizens, enabling powerful patterns like function composition, currying, and partial application.
*/

// ------------------------------------------------------------------------------- ::

// example 1 : creating click handlers
function createClickHandler(message) {
    // higher-order function RETURNS a function
    return function () {
        console.log(`Button Clicked: ${message}`);
        console.log(`Timestamp: ${new Date().toLocaleTimeString()}`);
    };
}

// Usage - like creating different button handlers in a web app
let loginHandler = createClickHandler("Login");
let signupHandler = createClickHandler("signup");
let logoutHandler = createClickHandler("logout");

loginHandler();  // Simulate login button click
signupHandler(); // Simulate signup button click
console.log("-------------------------------");


// ------------------------------------------------------------------------------- ::

// example 2 : data processor
function processUserData(users, processingFunction) {
    // This higher-order function TAKES a function as parameter
    console.log("Original users:", users);

    let processedData = [];
    for (let i = 0; i < users.length; i++) {
        let processedUser = processingFunction(users[i]);
        processedData.push(processedUser);
    }
    return processedData;
}

// Different processing functions for different needs
function makeEmailUppercase(user) {
    return {
        name: user.name,
        email: user.email.toUpperCase(),
        age: user.age,
    };
}

function addWelcomeMessage(user) {
    return {
        name: user.name,
        email: user.email.toUpperCase(),
        age: user.age,
        welcomeMessage: `Welcome ${user.name}! You have successfully registered.`
    };
}

// Test data
let users = [
    { name: "Ayush", email: "ayush@example.com", age: 22 }
];

let usersWithUppercaseEmail = processUserData(users, makeEmailUppercase);
console.log("With uppercase emails:", usersWithUppercaseEmail);

let usersWithWelcome = processUserData(users, addWelcomeMessage);
console.log("With welcome messages:", usersWithWelcome);

console.log("-------------------------------");
