/*
Fetch API Overview
The Fetch API is a modern way to make HTTP requests (GET, POST, PUT, DELETE, etc.) in JavaScript.
It returns a Promise that resolves to the Response object.
It replaces older approaches like XMLHttpRequest.
*/


// -------------------------------------------------------------------- ::
// syntax :
fetch(url, {
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: { ... },
    body: JSON.stringify(data)   // only for POST/PUT
})
    .then(response => response.json())   // convert response to JSON
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


// -------------------------------------------------------------------- ::
/*
1. GET Request (Fetching data)
Example: Fetching posts from JSONPlaceholder (free fake API).
*/

// GET Request Example
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // convert to JSON
    .then(data => {
        console.log("Fetched Posts:", data);
    })
    .catch(error => console.error("Error:", error));

// Here:
// We only specify the URL.
// Default method is GET.
// The response is JSON, so we use .json().


// -------------------------------------------------------------------- ::
/*
2. POST Request (Sending data)
Example: Sending a new post to API.
*/

// POST Request Example
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json" // tells API we're sending JSON
    },
    body: JSON.stringify({
        title: "My New Post",
        body: "Learning Fetch API in JS 🚀",
        userId: 1
    })
})
    .then(response => response.json()) // API returns created object
    .then(data => {
        console.log("Created Post:", data);
    })
    .catch(error => console.error("Error:", error));

// Here:
// Method is POST.
// headers define the content type.
// body contains the data in JSON format(JSON.stringify).


// -------------------------------------------------------------------- ::
// Using async/await (Cleaner way)
async function createPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "Async Await", body: "Much cleaner!", userId: 2 })
        });

        let data = await response.json();
        console.log("Created Post:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

createPost();


// -------------------------------------------------------------------- ::
// Points to Remember
// fetch() always returns a Promise.
// response.json() is also a Promise.
// For GET, you don’t need headers or body.
// For POST / PUT, always set headers: { "Content-Type": "application/json" } and send JSON.stringify(data).
// Use async / await for cleaner code.

// -------------------------------------------------------------------- ::
// 3. PUT Request (Updating data)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        title: "Updated Title",
        body: "Updated body content",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => {
        console.log("Updated Post:", data);
    })
    .catch(error => console.error("Error:", error));

// -------------------------------------------------------------------- ::
// 4. DELETE Request (Deleting data)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then(response => {
        if (response.ok) {
            console.log("Post deleted successfully!");
        } else {
            console.log("Failed to delete post.");
        }
    })
    .catch(error => console.error("Error:", error));

// -------------------------------------------------------------------- ::
// How to handle errors (status codes)
fetch("https://jsonplaceholder.typicode.com/posts/123456")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.status);
        }
        return response.json();
    })
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Fetch error:", error));

// -------------------------------------------------------------------- ::
// How to send custom headers (e.g., authentication)
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
        "Authorization": "Bearer your_token_here"
    }
})
    .then(response => response.json())
    .then(data => console.log("Fetched with Auth:", data))
    .catch(error => console.error("Error:", error));

// -------------------------------------------------------------------- ::
// More Points to Remember
// - Always check response.ok for error handling.
// - You can use fetch in browser and Node.js (with node-fetch).
// - fetch does not reject on HTTP error status (404, 500), only on network failure.
// - You can chain .then() for multiple steps, or use async/await for clarity.
// - Practice with free APIs like JSONPlaceholder, Reqres, or your own backend.
