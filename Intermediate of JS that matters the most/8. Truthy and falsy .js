// Truthy and falsy values :
// In JavaScript, values can be categorized as "truthy" or "falsy" based on how they behave in a boolean context. Truthy values evaluate to true in conditions, while falsy values evaluate to false. Understanding these concepts is crucial for writing effective conditional statements and avoiding unexpected behavior in your code.

// Falsy values in JavaScript include:
// 1. `false` - The boolean value false itself.
// 2. `0` - The number zero.
// 3. `""` - An empty string.
// 4. `null` - Represents the absence of any value.
// 5. `undefined` - A variable that has been declared but not assigned a value.
// 6. `NaN` - Represents "Not-a-Number", which occurs when a

// Truthy values in JavaScript include:
// 1. `true` - The boolean value true itself.
// 2. Any non-zero number (e.g., `1`, `-1`, `3.14`).
// 3. Any non-empty string (e.g., `"hello"`, `"0"`).
// 4. Objects (e.g., `{}`, `[]`, `function() {}`).
// 5. Arrays (e.g., `[1, 2, 3]`, `["a", "b"]`).
// 6. Functions (e.g., `function() {}`).



// -----------------------------------------------::


// Example of truthy and falsy values in JavaScript:
if (0) {
    console.log("Hey");
}
else {
    console.log("Hello"); // Output: Hello (0 is falsy)
}

if ("Ayush") {
    console.log("Hey"); // Output: Hey (non-empty string is truthy)
}
else {
    console.log("Hello");
}



// -----------------------------------------------::
