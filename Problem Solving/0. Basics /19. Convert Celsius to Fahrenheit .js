// Convert celsius to fahrenheit  :
// --------------------------------------------------------------------------------------------------------------::

// Formula: F = (C x 9/5) + 32 .
// -----------------------------------------------------------------------------------
const celsius = 25;  // Fixed value
const fahrenheit = (celsius * 9/5) + 32;  // Multiply by 9/5, add 32
console.log(celsius + "C = " + fahrenheit + "F");


// Function approach - reusable conversion
// -----------------------------------------------------------------------------------
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;  // Same formula in reusable function
}
console.log("0 C =", celsiusToFahrenheit(0) + "F");


// Simple terminal input method
// -----------------------------------------------------------------------------------
const userInput = process.argv[2];  // Grab terminal argument
const temp = Number(userInput);     // String to number conversion
console.log("Result: " + temp + "C = " + ((temp * 9/5) + 32) + "F");


// Advanced terminal input with validation
// -----------------------------------------------------------------------------------
const args = process.argv.slice(2);  // Get all terminal arguments
if (args.length > 0) {  // Check if argument exists
    const inputCelsius = parseFloat(args[0]);  // Convert to decimal number
    if (!isNaN(inputCelsius)) {  // Validate number
        const result = (inputCelsius * 9/5) + 32;  // Apply formula
        console.log(inputCelsius + " C = " + result + " F");
    } else {
        console.log("Please provide a valid number");  // Handle invalid input
    }
}
