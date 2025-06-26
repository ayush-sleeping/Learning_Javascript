// Window Object in JavaScript
// The window object is the global object in a browser environment.
// It represents the browser window and provides methods and properties to interact with it.


// Properties of the window object
// 1. window.document: Represents the DOM (Document Object Model) of the current page.
// 2. window.location: Represents the current URL of the page.
// 3. window.history: Represents the browser's session history.
// 4. window.navigator: Represents information about the browser.


// Methods of the window object
// 1. window.alert(): Displays an alert dialog with a message.
// 2. window.confirm(): Displays a confirmation dialog with OK and Cancel buttons.
// 3. window.prompt(): Displays a dialog for user input.
// 4. window.open(): Opens a new browser window or tab.
// 5. window.close(): Closes the current window (if it was opened by a script).
// 6. window.setTimeout(): Executes a function after a specified delay.
// 7. window.setInterval(): Repeatedly executes a function at specified intervals.
// 8. window.clearTimeout(): Cancels a timeout set by setTimeout.
// 9. window.clearInterval(): Cancels an interval set by setInterval.
// 10. window.scrollTo(): Scrolls the window to a specified position.
// etc.


// Example of using the window object
console.log(window.document.title); // Logs the title of the current document
console.log(window.location.href); // Logs the current URL
console.log(window.navigator.userAgent); // Logs the user agent string of the browser
// window.alert("Hello, World!"); // Displays an alert dialog with the message "Hello, World!"
// window.confirm("Are you sure?"); // Displays a confirmation dialog
// window.prompt("Enter your name:"); // Displays a prompt dialog for user input
// window.open("https://www.example.com"); // Opens a new tab with the specified URL


// More advanced example of using the window object
function openNewWindow() {
    const newWindow = window.open("", "newWindow", "width=400,height=400");
    newWindow.document.write("<h1>Hello from the new window!</h1>");
    newWindow.document.write("<p>This is a new window opened by JavaScript.</p>");
    newWindow.document.close();
}
// openNewWindow(); // Uncomment to open a new window with the specified content
