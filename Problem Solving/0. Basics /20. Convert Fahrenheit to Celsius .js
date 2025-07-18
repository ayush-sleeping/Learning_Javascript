// Convert fahrenheit to celsius  :
// --------------------------------------------------------------------------------------------------------------::

// Basic conversion with fixed value
// Formula: C = (F - 32) × 5/9
// -----------------------------------------------------------------------------------
const fahrenheit = 77;  // Fixed value
const celsius = (fahrenheit - 32) * 5/9;  // Subtract 32, multiply by 5/9
console.log(fahrenheit + "F = " + celsius + "C");


// Function approach for reusability
// -----------------------------------------------------------------------------------
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;  // Same formula in reusable function
}
console.log("32F =", fahrenheitToCelsius(32) + "C");  // Test with freezing point
console.log("212F =", fahrenheitToCelsius(212) + "C");  // Test with boiling point


// Simple terminal input without validation
// -----------------------------------------------------------------------------------
const userInput = process.argv[2];  // Grab terminal argument
const tempF = Number(userInput);    // String to number conversion
console.log("Result: " + tempF + "F = " + ((tempF - 32) * 5/9) + "C");


// Advanced terminal input with validation// -----------------------------------------------------------------------------------
const args = process.argv.slice(2);  // Get all terminal arguments
if (args.length > 0) {  // Check if argument exists
    const inputFahrenheit = parseFloat(args[0]);  // Convert to decimal number
    if (!isNaN(inputFahrenheit)) {  // Validate number
        const result = (inputFahrenheit - 32) * 5/9;  // Apply formula
        console.log(inputFahrenheit + "F = " + result + "C");
    } else {
        console.log("Please provide a valid number");  // Handle invalid input
    }
}
