/*
DataTypes :
Data types are the classification of data items. They represent the kind of value that can be stored in a variable, and they determine what operations can be performed on that data. In JavaScript, there are several built-in data types, which can be categorized into two main groups:
    - primitive types and
    - reference types.

JavaScript has 8 Datatypes :
- undefined : In short, a variable that has been declared but has not yet been assigned a value.
- null : (no value) Represents the intentional absence of any object value.
- string : 'a', 'Hello', "World" Represents a sequence of characters.
- number : 42, 3.14 Represents both integer and floating-point numbers.
- boolean : true, false Represents a logical entity and can have two values: true and false.
- object : { key: 'value' } Represents a collection of key-value pairs.
- symbol : Symbol('description') Represents a unique and immutable value, often used as an identifier for object properties.
- bigint : BigInt(123456789012345678901234567890) Represents integers with arbitrary precision, useful for very large numbers.


 */

// Every DataTypes basic example :
let myUndefined; // undefined
let myNull = null; // null
let myString = "Hello, World!"; // string
let myNumber = 42; // number
let myBoolean = true; // boolean
let myObject = { key: 'value' }; // object
let mySymbol = Symbol('description'); // symbol
let myBigInt = BigInt(123456789012345678901234567890); // bigint
console.log("Data Types Examples:");
console.log("Undefined:", myUndefined);
console.log("Null:", myNull);
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Object:", myObject);
console.log("Symbol:", mySymbol);
console.log("BigInt:", myBigInt);


console.log("----------------------------------------------- ::");
// example of using different data types in a user object:
let user = {
    id: BigInt(123456789012345678901234567890), // bigint for large user ID
    name: "John Doe", // string for user's name
    age: 30, // number for user's age
    isActive: true, // boolean for user's active status
    preferences: null, // null for no preferences set yet
    address: { // object for user's address
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    uniqueId: Symbol('user-id') // symbol for a unique identifier
};
console.log("User Object:", user);



console.log("----------------------------------------------- ::");
// example : Online shopping cart

let productId = BigInt(346239462394623949); // bigint
let productName = "Gaming Laptop"; // string
let price = 75200; // number
let inStock = true; // boolean
let description = null; // null
let category = "Electronics"; // string
let rating = 4.5; // number
let isOnSale = false; // boolean
let productKey = Symbol('laptop-2025'); // symbol

console.log("Product Information:");
console.log("ID:", productId, "- Type:", typeof productId);
console.log("Name:", productName, "- Type:", typeof productName);
console.log("Price: $" + price, "- Type:", typeof price);
console.log("In Stock:", inStock, "- Type:", typeof inStock);
console.log("Description:", description, "- Type:", typeof description);
console.log("Category:", category, "- Type:", typeof category);
console.log("Rating:", rating, "- Type:", typeof rating);
console.log("On Sale:", isOnSale, "- Type:", typeof isOnSale);
console.log("Product Key:", productKey, "- Type:", typeof productKey);



console.log("----------------------------------------------- ::");
// example : shopping cart object
let shoppingCart = {
    // Customer info
    customerId: BigInt(1234567890123456789), // bigint
    customerName: "Sarah Johnson", // string
    email: "sarah@email.com", // string
    isLoggedIn: true, // boolean

    // Cart details
    items: [ // array (which is an object type)
        {
            name: "Gaming Laptop", // string
            price: 1299.99, // number
            quantity: 1, // number
            inStock: true // boolean
        },
        {
            name: "Wireless Mouse", // string
            price: 49.99, // number
            quantity: 2, // number
            inStock: true // boolean
        }
    ],

    // Cart calculations
    totalItems: 3, // number
    subtotal: 1399.97, // number
    tax: 139.99, // number
    shipping: 0, // number (free shipping)
    total: 1539.96, // number

    // Status info
    discountCode: null, // null - no discount applied
    isGiftOrder: false, // boolean
    deliveryInstructions: undefined, // undefined - not provided yet

    // Unique identifiers
    cartId: Symbol('cart-session-2024'), // symbol
    orderTimestamp: BigInt(Date.now()) // bigint - large timestamp
}
console.log("Shopping Cart:", shoppingCart);
console.log("Customer ID type:", typeof shoppingCart.customerId);
console.log("Customer Name type:", typeof shoppingCart.customerName);
console.log("Items type:", typeof shoppingCart.items);
console.log("Total type:", typeof shoppingCart.total);
console.log("Discount Code type:", typeof shoppingCart.discountCode);
console.log("Delivery Instructions type:", typeof shoppingCart.deliveryInstructions);
console.log("Cart ID type:", typeof shoppingCart.cartId);
