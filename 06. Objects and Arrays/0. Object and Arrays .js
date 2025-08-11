/*
OBJECTS AND ARRAYS IN JAVASCRIPT
Objects: Store data as key-value pairs
Arrays: Store data as ordered lists
*/


// example 1. OBJECTS - Key-Value Storage
// ====================================

// Creating objects
let person = {
    name: "John",
    age: 25,
    city: "New York"
};

console.log("Person:", person);
console.log("Name:", person.name);        // Dot notation
console.log("Age:", person["age"]);       // Bracket notation

// Adding/updating properties
person.job = "Developer";
person["salary"] = 50000;
console.log("After adding job:", person);

// Real example: User profile
let user = {
    id: 123,
    username: "johnDoe",
    isActive: true,
    preferences: {
        theme: "dark",
        notifications: true
    }
};

console.log("User theme:", user.preferences.theme);


console.log("---------------------------------------------------- ::")
// example 2. ARRAYS - Ordered Lists

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["John", 25, true, { city: "NYC" }];

console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Adding elements
fruits.push("grape");           // Add to end
fruits.unshift("strawberry");   // Add to beginning
console.log("After adding:", fruits);

// Removing elements
let lastFruit = fruits.pop();     // Remove from end
let firstFruit = fruits.shift();  // Remove from beginning
console.log("Removed:", lastFruit, firstFruit);
console.log("Final fruits:", fruits);
