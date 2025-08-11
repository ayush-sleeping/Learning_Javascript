/*
OPERATORS IN JAVASCRIPT
Operators are symbols that perform operations on variables and values.
Think of them as tools that help you manipulate and work with data.

Types of Operators:
1. Arithmetic Operators (+, -, *, /, %, **, ++, --)
2. Assignment Operators (=, +=, -=, *=, /=, %=)
3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
4. Logical Operators (&&, ||, !)
5. String Operators (+, +=)
6. Ternary Operator (? :)
7. Type Operators (typeof, instanceof)
*/


// example 1. ARITHMETIC OPERATORS

let a = 10;
let b = 3;
console.log("a =", a, ", b =", b);
console.log("Addition (a + b):", a + b);        // 13
console.log("Subtraction (a - b):", a - b);     // 7
console.log("Multiplication (a * b):", a * b);  // 30
console.log("Division (a / b):", a / b);        // 3.333...
console.log("Modulus (a % b):", a % b);         // 1 (remainder)
console.log("Exponentiation (a ** b):", a ** b); // 1000 (10^3)

// Increment and Decrement

let counter = 5;
console.log("Original counter:", counter);
console.log("counter++:", counter++); // 5 (post-increment)
console.log("After post-increment:", counter); // 6
console.log("++counter:", ++counter); // 7 (pre-increment)
console.log("Final counter:", counter); // 7

// Real-world example: Shopping cart
let itemPrice = 25.99;
let quantity = 3;
let taxRate = 0.08; // 8%

let subtotal = itemPrice * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;

console.log("Item price: $" + itemPrice);
console.log("Quantity:", quantity);
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (8%): $" + tax.toFixed(2));
console.log("Total: $" + total.toFixed(2));











console.log("--------------------------------------------------------- ::");
// example 2. ASSIGNMENT OPERATORS

let score = 100;
console.log("Initial score:", score);

score += 10;  // score = score + 10
console.log("After += 10:", score);

score -= 5;   // score = score - 5
console.log("After -= 5:", score);

score *= 2;   // score = score * 2
console.log("After *= 2:", score);

score /= 4;   // score = score / 4
console.log("After /= 4:", score);

score %= 10;  // score = score % 10
console.log("After %= 10:", score);

// Real-world example: Bank account
let balance = 1000;
console.log("Starting balance: $" + balance);

balance += 500; // Deposit
console.log("After deposit of $500: $" + balance);

balance -= 200; // Withdrawal
console.log("After withdrawal of $200: $" + balance);

balance *= 1.02; // 2% interest
console.log("After 2% interest: $" + balance.toFixed(2));













console.log("----------------------------------------------- ::");
// example example 3. COMPARISON OPERATORS

let x = 10;
let y = "10";
let z = 20;

console.log("x =", x, "(number)");
console.log("y =", y, "(string)");
console.log("z =", z, "(number)");

console.log("x == y:", x == y);   // true (loose equality)
console.log("x === y:", x === y); // false (strict equality)
console.log("x != y:", x != y);   // false
console.log("x !== y:", x !== y); // true
console.log("x > z:", x > z);     // false
console.log("x < z:", x < z);     // true
console.log("x >= 10:", x >= 10); // true
console.log("x <= 10:", x <= 10); // true

// Real-world example: Age verification
let userAge = 17;
let minimumAge = 18;

console.log("User age:", userAge);
console.log("Minimum age:", minimumAge);

if (userAge >= minimumAge) {
    console.log("Access granted");
} else {
    console.log("Access denied - too young");











}

console.log("----------------------------------------------- ::");
// example 4. LOGICAL OPERATORS

let isLoggedIn = true;
let hasPermission = false;
let isAdmin = true;

console.log("isLoggedIn:", isLoggedIn);
console.log("hasPermission:", hasPermission);
console.log("isAdmin:", isAdmin);

console.log("AND (&&):", isLoggedIn && hasPermission); // false
console.log("OR (||):", isLoggedIn || hasPermission);  // true
console.log("NOT (!):", !isLoggedIn);                  // false

// Real-world example: Access control
let canViewPage = isLoggedIn && (hasPermission || isAdmin);
console.log("Can view page:", canViewPage);

if (isLoggedIn && isAdmin) {
    console.log("Admin access granted");
} else if (isLoggedIn && hasPermission) {
    console.log("User access granted");
} else if (isLoggedIn) {
    console.log("Limited access - need permission");
} else {
    console.log("Please log in");











}

console.log("----------------------------------------------- ::");
// example 5. STRING OPERATORS

let firstName = "John";
let lastName = "Doe";
let age = 25;

// String concatenation with +
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Mixing strings and numbers
let greeting = "Hello, I'm " + firstName + " and I'm " + age + " years old.";
console.log("Greeting:", greeting);

// Assignment operator with strings
let message = "Welcome";
message += " to our website!";
console.log("Message:", message);

// Template literals (modern way)
let modernGreeting = `Hello, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
console.log("Modern greeting:", modernGreeting);

// Real-world example: User profile
let username = "johnDoe123";
let email = "john@email.com";
let memberSince = "2024";

let profileSummary = "Username: " + username +
    "\nEmail: " + email +
    "\nMember since: " + memberSince;
console.log("Profile Summary:");
console.log(profileSummary);














console.log("----------------------------------------------- ::");
// example 6. TERNARY OPERATOR

let temperature = 22;
let clothing = temperature > 20 ? "T-shirt" : "Jacket";
console.log("Temperature:", temperature + "°C");
console.log("Wear:", clothing);

// Multiple ternary operators
let examScore = 85;
let grade = examScore >= 90 ? "A" :
    examScore >= 80 ? "B" :
        examScore >= 70 ? "C" : "F";
console.log("Score:", examScore, "→ Grade:", grade);

// Real-world example: Shipping cost
let orderAmount = 75;
let shippingCost = orderAmount >= 100 ? 0 : orderAmount >= 50 ? 5.99 : 9.99;
console.log("Order amount: $" + orderAmount);
console.log("Shipping cost: $" + shippingCost);













console.log("----------------------------------------------- ::");
// example 7. TYPE OPERATORS

let testString = "Hello";
let testNumber = 42;
let testBoolean = true;
let testObject = { name: "John" };
let testArray = [1, 2, 3];
let testNull = null;
let testUndefined;

console.log("typeof 'Hello':", typeof testString);
console.log("typeof 42:", typeof testNumber);
console.log("typeof true:", typeof testBoolean);
console.log("typeof {name: 'John'}:", typeof testObject);
console.log("typeof [1,2,3]:", typeof testArray);
console.log("typeof null:", typeof testNull); // This returns "object" (JavaScript quirk!)
console.log("typeof undefined:", typeof testUndefined);

// Real-world example: Input validation
function validateAge(input) {
    if (typeof input === "number" && input > 0 && input < 150) {
        return "Valid age";
    } else {
        return "Invalid age";
    }
}

console.log("validateAge(25):", validateAge(25));
console.log("validateAge('25'):", validateAge("25"));
console.log("validateAge(-5):", validateAge(-5));
