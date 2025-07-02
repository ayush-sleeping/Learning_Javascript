// Callback functions are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming, event handling, and functional programming.
// Callback functions allow you to define custom behavior that should occur after a specific operation is completed, such as when data is fetched from a server or when a user interacts with a UI element.
// They are essential for handling asynchronous operations in JavaScript, enabling you to write non-blocking code that can respond to events or complete tasks without freezing the main thread.
// Callback functions can be defined as anonymous functions, arrow functions, or named functions, and they can accept parameters to receive data from the operation they are associated with.


// -----------------------------------------------::


// Example of a callback function ::
function fetchProducts(callback) {
    setTimeout(function() {
        const products = ["Product 1", "Product 2", "Product 3"];
        callback(products);
    }, 1000); // Simulating an asynchronous operation with a delay of 1 second
}
fetchProducts(function(products) {
    console.log("Fetched products:", products);
    // Output: Fetched products: [ 'Product 1', 'Product 2',
})


setTimeout(function(){
    console.log("Load More ...");
}, 2000); // This function will be executed after 2 seconds


// -----------------------------------------------::
