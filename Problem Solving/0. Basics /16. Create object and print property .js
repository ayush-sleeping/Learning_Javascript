// Create object and print property :
// --------------------------------------------------------------------------------------------------------------::

// Method 1: Basic object literal creation
// ------------------------------------------------------------------------
const student = {
    name: "Ayush",
    age: 22,
    course: "JavaScript",
    marks: 89
};
console.log(student);              // Print entire object
console.log(student["age"]);       // Bracket notation access
console.log(student.course);       // Dot notation access

// Method 2: Constructor function approach
// ------------------------------------------------------------------------
function Person(name, city) {
    this.name = name;             // Create property using 'this'
    this.city = city;             // Create property using 'this'
}

const person1 = new Person("Ayush", "Mumbai");  // Create object using constructor
console.log(person1.name);       // Access property from constructed object
console.log(person1.city);       // Access city property

// Method 3: Object with car data - simple key-value pairs
// ------------------------------------------------------------------------
const cars = {
    mercedes: "Mercedes G Wagon",
    bmw: "BMW X5",
    audi: "Audi Q7"
};
console.log("BMW:", cars.bmw);   // Access BMW model using dot notation

// Method 4: Array of objects approach - more structured data
// ------------------------------------------------------------------------
const carCollection = [
    { brand: "Mercedes", model: "Mercedes G Wagon"},  // Object with brand-model structure
    { brand: "BMW", model: "BMW X5"},
    { brand: "Audi", model: "Audi Q7"}
];
const mercedes = carCollection.find(car => car.brand === "Mercedes");  // Find specific brand
console.log("Mercedes:", mercedes.model);  // Access model property of found object
