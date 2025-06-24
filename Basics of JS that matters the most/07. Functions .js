// Functions in js :
// Basically functions are used to execute a block of code when it is called.
// So we use functions mainly for three reasons:
// 1. when your code you want to run in future, you can put it in a function.
// 2. when you want to reuse a block of code, you can put it in a function.
// 3. when you want to run a block of code multiple times, you can put it in a function.


// ------------------------------------------------------------------------


// Arguments in functions:
// Arguments are the values that you pass to a function when you call it.
// They allow you to pass data into the function so that it can operate on that data.

// Parameters in functions:
// Parameters are the variables that are defined in the function declaration.
// They act as placeholders for the values that will be passed to the function when it is called.


// ------------------------------------------------------------------------


// 1. Run code in future example:

function greet(){
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!


function onButtonClick(){
    console.log("Button clicked!");
}
// Simulating a button click
onButtonClick(); // Output: Button clicked!


// ------------------------------------------------------------------------


// 2. Reuse code example:

function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
console.log(add(20, 30)); // Output: 50


function formatCurrency(amount){
    return "$" + amount.toFixed(2); // Formats a number as currency
}
console.log(formatCurrency(12.5)); // Output: $12.50
console.log(formatCurrency(100)); // Output: $100.00


// ------------------------------------------------------------------------


// 3. Run code multiple times example:
function printMessage(message, times){
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}
printMessage("Repeat me! ", 3); // Output: Repeat me! (printed 3 times)
printMessage("Hello, again! ", 2); // Output: Hello, again! (printed 2 times)

function sendEmailToUsers(users, subject, body){
    for (let i = 0; i < users.length; i++) {
        // Simulating sending an email
        console.log(`Sending email to ${users[i]} with subject: "${subject}" and body: "${body}"`);
    }
}
sendEmailToUsers(["ayush@example.com", "sanket@example.com"], "whelcome to our service", "Thank you for signing up! We are glad to have you on board!");


// ------------------------------------------------------------------------
