// HTTP Requests in JavaScript ::
// HTTP (HyperText Transfer Protocol) is a protocol for communication between client and server
// It defines how messages are formatted and transmitted over the internet
// HTTP is stateless - each request is independent

// Basic HTTP structure:
// Request: Method + URL + Headers + Body (optional)
// Response: Status Code + Headers + Body
/*
------------------------------------------------------------------- ::

Subtopics :
- What is HTTP?
- Understanding Frontend and Backend
- Http Request and Response
- JSON ?
- AJAX ?
- HANDLING HTTP REQUESTS
- Working with http response data
- http post requests
- HTTP Methods
- Fetch API
- Axios
- Handling Responses
- Error Handling
- CORS
- Best Practices
- URL encoding and decoding (encodeURIComponent, decodeURIComponent)
- Query parameters and URLSearchParams
- Request headers and custom headers
- Authentication (Basic Auth, Bearer tokens, OAuth)
- Cookies (setting, reading, sending with requests)
- Cross-Origin Resource Sharing (CORS) in detail
- Preflight requests (OPTIONS method)
- Status codes and their meaning (2xx, 4xx, 5xx)
- Timeout and aborting requests (AbortController)
- Streaming responses (ReadableStream)
- Progress events (for uploads/downloads)
- Working with multipart/form-data (file uploads)
- Handling redirects
- Security considerations (HTTPS, CSRF, XSS)
- Rate limiting and throttling
- API versioning and documentation
*/


// ------------------------------------------------------------------- ::
// UNDERSTANDING FRONTEND AND BACKEND
// Frontend: Client-side code running in browser (HTML, CSS, JavaScript)
// Backend: Server-side code handling requests (Node.js, Python, Java, etc.)
// API: Interface between frontend and backend
// Communication flow:
// Frontend (JavaScript) → HTTP Request → Backend (Server) → HTTP Response → Frontend




// ------------------------------------------------------------------- ::
// HTTP REQUEST AND RESPONSE
// Request components:
// - Method (GET, POST, PUT, DELETE, etc.)
// - URL/Endpoint
// - Headers (metadata)
// - Body (data payload)

// Response components:
// - Status Code (200, 404, 500, etc.)
// - Headers (content-type, etc.)
// - Body (actual data)

// Example request structure:
/*
GET /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer token123

{
  "page": 1,
  "limit": 10
}
*/




// ------------------------------------------------------------------- ::
// JSON (JavaScript Object Notation)
// JSON is the most common data format for HTTP requests/responses
// It's a text-based format that represents JavaScript objects

// Converting JavaScript to JSON and back:
const user = { name: "John", age: 30, email: "john@example.com" };
const jsonString = JSON.stringify(user);  // JS object → JSON string
console.log(jsonString); // '{"name":"John","age":30,"email":"john@example.com"}'

const parsedUser = JSON.parse(jsonString);  // JSON string → JS object
console.log(parsedUser); // { name: "John", age: 30, email: "john@example.com" }




// ------------------------------------------------------------------- ::
// AJAX (Asynchronous JavaScript And XML)
// AJAX allows making HTTP requests without refreshing the page
// Despite the name, it commonly uses JSON instead of XML
// Makes web applications more interactive and responsive

// Old way using XMLHttpRequest (rarely used now):
function oldAjaxRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/users');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}




// ------------------------------------------------------------------- ::
// HANDLING HTTP REQUESTS - FETCH API
// Fetch API is the modern way to make HTTP requests
// Returns Promises, works well with async/await
// Built into all modern browsers

// Basic GET request:
async function fetchUsers() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// GET request with query parameters:
async function fetchUsersPaginated(page = 1, limit = 10) {
    const params = new URLSearchParams({
        page: page,
        limit: limit,
        sort: 'name'
    });

    const response = await fetch(`/api/users?${params}`);
    const data = await response.json();
    return data;
}




// ------------------------------------------------------------------- ::
// 7. HTTP POST REQUESTS
// POST requests send data to server (create new resources)

// POST request with JSON data:
async function createUser(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const newUser = await response.json();
        console.log('User created:', newUser);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Using the function:
createUser({
    name: "Jane Smith",
    email: "jane@example.com",
    age: 25
});




// ------------------------------------------------------------------- ::
// 8. HTTP METHODS
// GET - Retrieve data (idempotent, safe)
// POST - Create new resource
// PUT - Update/replace entire resource
// PATCH - Partial update of resource
// DELETE - Remove resource
// OPTIONS - Get allowed methods (used in CORS preflight)
// HEAD - Like GET but only headers (no body)

// Examples of different HTTP methods:
async function httpMethodsExamples() {
    const baseUrl = '/api/users';
    const userId = 123;

    // GET - Fetch all users
    const users = await fetch(baseUrl);

    // POST - Create new user
    const newUser = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'John', email: 'john@example.com' })
    });

    // PUT - Replace entire user
    const updatedUser = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'John Updated', email: 'john.new@example.com', age: 30 })
    });

    // PATCH - Partial update
    const patchedUser = await fetch(`${baseUrl}/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ age: 31 })  // Only update age
    });

    // DELETE - Remove user
    const deleteResponse = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });
}




// ------------------------------------------------------------------- ::
// 9. AXIOS LIBRARY
// Axios is a popular HTTP client library with more features than fetch
// npm install axios

// Note: This assumes axios is imported: import axios from 'axios';

// Basic axios examples:
async function axiosExamples() {
    try {
        // GET request
        const response = await axios.get('/api/users');
        console.log(response.data);

        // POST request
        const newUser = await axios.post('/api/users', {
            name: 'Alice',
            email: 'alice@example.com'
        });
        console.log(newUser.data);

        // Request with custom headers
        const authResponse = await axios.get('/api/protected', {
            headers: {
                'Authorization': 'Bearer token123',
                'X-Custom-Header': 'custom-value'
            }
        });

        // Request with timeout
        const timeoutResponse = await axios.get('/api/slow-endpoint', {
            timeout: 5000  // 5 seconds
        });

    } catch (error) {
        if (error.response) {
            // Server responded with error status
            console.log('Error status:', error.response.status);
            console.log('Error data:', error.response.data);
        } else if (error.request) {
            // Request was made but no response
            console.log('No response received');
        } else {
            // Something else happened
            console.log('Error:', error.message);
        }
    }
}

// Axios interceptors for global error handling:
/*
axios.interceptors.request.use(
    config => {
        // Add auth token to all requests
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Redirect to login on unauthorized
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
*/



// ------------------------------------------------------------------- ::
// 10. HANDLING RESPONSES
// Different ways to handle response data

async function handleResponses() {
    const response = await fetch('/api/data');

    // Check if response is successful
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Different response methods:
    const jsonData = await response.json();     // Parse as JSON
    // const textData = await response.text();     // Get as text
    // const blobData = await response.blob();     // Get as Blob (for files)
    // const bufferData = await response.arrayBuffer(); // Get as ArrayBuffer

    // Check response headers
    console.log('Content-Type:', response.headers.get('Content-Type'));
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);

    return jsonData;
}




// ------------------------------------------------------------------- ::
// 11. ERROR HANDLING
// Comprehensive error handling for HTTP requests

async function robustErrorHandling(url, options = {}) {
    try {
        const response = await fetch(url, options);

        // Check for HTTP error status
        if (!response.ok) {
            let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

            // Try to get error details from response body
            try {
                const errorBody = await response.json();
                if (errorBody.message) {
                    errorMessage = errorBody.message;
                }
            } catch (e) {
                // If can't parse error body as JSON, use status text
            }

            throw new Error(errorMessage);
        }

        // Try to parse response
        const data = await response.json();
        return { success: true, data };

    } catch (error) {
        // Handle different types of errors
        if (error instanceof TypeError) {
            // Network error (no internet, DNS failure, etc.)
            console.error('Network error:', error.message);
            return { success: false, error: 'Network error. Please check your connection.' };
        } else if (error.name === 'AbortError') {
            // Request was aborted
            console.error('Request aborted');
            return { success: false, error: 'Request was cancelled.' };
        } else {
            // HTTP error or other error
            console.error('Request failed:', error.message);
            return { success: false, error: error.message };
        }
    }
}

// Usage:
async function useRobustErrorHandling() {
    const result = await robustErrorHandling('/api/users');
    if (result.success) {
        console.log('Users:', result.data);
    } else {
        console.error('Failed to fetch users:', result.error);
        // Show user-friendly error message
    }
}




// ------------------------------------------------------------------- ::
// 12. CORS (Cross-Origin Resource Sharing)
// CORS allows web pages to make requests to different domains
// Browser enforces same-origin policy by default
// Server must explicitly allow cross-origin requests

// CORS headers (set by server):
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE
// Access-Control-Allow-Headers: Content-Type, Authorization

// Preflight request example (automatically sent by browser):
async function corsExample() {
    // This might trigger a preflight OPTIONS request
    const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Custom-Header': 'value'  // Custom header triggers preflight
        },
        body: JSON.stringify({ data: 'example' })
    });

    return response.json();
}




// ------------------------------------------------------------------- ::
// 13. URL ENCODING AND DECODING
// URL encoding converts special characters to percent-encoded format

// URL encoding functions:
const originalString = "Hello World! & Special chars: #/?";
const encoded = encodeURIComponent(originalString);
console.log(encoded); // "Hello%20World!%20%26%20Special%20chars%3A%20%23%2F%3F"

const decoded = decodeURIComponent(encoded);
console.log(decoded); // "Hello World! & Special chars: #/?"

// Building URLs with parameters:
function buildUrlWithParams(baseUrl, params) {
    const url = new URL(baseUrl);
    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
    });
    return url.toString();
}

// Usage:
const apiUrl = buildUrlWithParams('https://api.example.com/search', {
    q: 'javascript tutorials',
    page: 1,
    'per_page': 20
});
console.log(apiUrl); // "https://api.example.com/search?q=javascript+tutorials&page=1&per_page=20"




// ------------------------------------------------------------------- ::
// 14. QUERY PARAMETERS AND URLSearchParams
// URLSearchParams provides easy way to work with query strings

// Creating and manipulating query parameters:
const params = new URLSearchParams();
params.append('name', 'John Doe');
params.append('age', '30');
params.append('skills', 'JavaScript');
params.append('skills', 'Python');  // Multiple values for same key

console.log(params.toString()); // "name=John+Doe&age=30&skills=JavaScript&skills=Python"

// Reading query parameters from current URL:
const currentParams = new URLSearchParams(window.location.search);
console.log(currentParams.get('name')); // Get single value
console.log(currentParams.getAll('skills')); // Get all values for key

// Convert URLSearchParams to object:
function paramsToObject(params) {
    const obj = {};
    for (const [key, value] of params) {
        if (obj[key]) {
            // Convert to array if multiple values
            if (Array.isArray(obj[key])) {
                obj[key].push(value);
            } else {
                obj[key] = [obj[key], value];
            }
        } else {
            obj[key] = value;
        }
    }
    return obj;
}




// ------------------------------------------------------------------- ::
// 15. REQUEST HEADERS AND CUSTOM HEADERS
// Headers provide metadata about the request/response

async function headersExample() {
    const response = await fetch('/api/data', {
        method: 'GET',
        headers: {
            // Standard headers:
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'MyApp/1.0',

            // Authentication headers:
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',

            // Custom headers (should start with X- by convention):
            'X-API-Key': 'your-api-key',
            'X-Client-Version': '1.2.3',
            'X-Request-ID': generateRequestId()
        }
    });

    // Reading response headers:
    console.log('Content-Type:', response.headers.get('Content-Type'));
    console.log('Cache-Control:', response.headers.get('Cache-Control'));

    // Iterate through all headers:
    for (const [key, value] of response.headers) {
        console.log(`${key}: ${value}`);
    }
}

function generateRequestId() {
    return 'req_' + Math.random().toString(36).substr(2, 9);
}




// ------------------------------------------------------------------- ::
// 16. AUTHENTICATION
// Different authentication methods for HTTP requests

// Basic Authentication:
function basicAuth(username, password) {
    const credentials = btoa(`${username}:${password}`);  // Base64 encode
    return {
        'Authorization': `Basic ${credentials}`
    };
}

// Bearer Token Authentication:
function bearerAuth(token) {
    return {
        'Authorization': `Bearer ${token}`
    };
}

// API Key Authentication:
function apiKeyAuth(apiKey) {
    return {
        'X-API-Key': apiKey
        // or 'Authorization': `ApiKey ${apiKey}`
    };
}

// Examples using different auth methods:
async function authenticatedRequests() {
    // Basic Auth example:
    await fetch('/api/protected', {
        headers: {
            ...basicAuth('user123', 'password456')
        }
    });

    // Bearer token example:
    const token = localStorage.getItem('authToken');
    await fetch('/api/user-profile', {
        headers: {
            ...bearerAuth(token)
        }
    });

    // API Key example:
    await fetch('/api/data', {
        headers: {
            ...apiKeyAuth('your-api-key-here')
        }
    });
}

// JWT Token handling:
class AuthManager {
    static getToken() {
        return localStorage.getItem('jwt_token');
    }

    static setToken(token) {
        localStorage.setItem('jwt_token', token);
    }

    static removeToken() {
        localStorage.removeItem('jwt_token');
    }

    static isTokenExpired(token) {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp < Date.now() / 1000;
        } catch (error) {
            return true;
        }
    }

    static async refreshToken() {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await fetch('/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: refreshToken })
        });

        if (response.ok) {
            const data = await response.json();
            this.setToken(data.access_token);
            return data.access_token;
        }
        throw new Error('Failed to refresh token');
    }
}




// ------------------------------------------------------------------- ::
// 17. COOKIES
// Working with cookies in HTTP requests

// Reading cookies:
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}

// Setting cookies:
function setCookie(name, value, days = 7) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
}

// Sending cookies with requests (automatic by default):
async function requestWithCookies() {
    // Cookies are sent automatically with same-origin requests
    const response = await fetch('/api/data', {
        credentials: 'include'  // Include cookies in cross-origin requests
    });

    return response.json();
}




// ------------------------------------------------------------------- ::
// 18. TIMEOUT AND ABORTING REQUESTS
// Controlling request lifecycle with AbortController

// Request with timeout:
async function requestWithTimeout(url, timeoutMs = 5000) {
    const controller = new AbortController();

    // Set timeout
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeoutMs);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeoutId);  // Clear timeout on success
        return await response.json();

    } catch (error) {
        clearTimeout(timeoutId);

        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

// Manual abort example:
class RequestManager {
    constructor() {
        this.activeRequests = new Map();
    }

    async makeRequest(id, url, options = {}) {
        // Abort previous request with same ID
        if (this.activeRequests.has(id)) {
            this.activeRequests.get(id).abort();
        }

        const controller = new AbortController();
        this.activeRequests.set(id, controller);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal
            });

            this.activeRequests.delete(id);
            return await response.json();

        } catch (error) {
            this.activeRequests.delete(id);
            if (error.name !== 'AbortError') {
                throw error;
            }
        }
    }

    abortRequest(id) {
        if (this.activeRequests.has(id)) {
            this.activeRequests.get(id).abort();
            this.activeRequests.delete(id);
        }
    }

    abortAll() {
        for (const controller of this.activeRequests.values()) {
            controller.abort();
        }
        this.activeRequests.clear();
    }
}

// Usage:
const requestManager = new RequestManager();
requestManager.makeRequest('search', '/api/search?q=javascript');
// Later, abort if needed:
// requestManager.abortRequest('search');





// ------------------------------------------------------------------- ::
// 19. STATUS CODES AND THEIR MEANING
// HTTP status codes categorization and handling

function handleHttpStatus(response) {
    const status = response.status;

    if (status >= 200 && status < 300) {
        // 2xx Success
        console.log('Success:', status);
        return 'success';
    } else if (status >= 300 && status < 400) {
        // 3xx Redirection
        console.log('Redirection:', status);
        return 'redirect';
    } else if (status >= 400 && status < 500) {
        // 4xx Client Error
        console.log('Client Error:', status);
        switch (status) {
            case 400: return 'bad_request';
            case 401: return 'unauthorized';
            case 403: return 'forbidden';
            case 404: return 'not_found';
            case 422: return 'validation_error';
            case 429: return 'rate_limited';
            default: return 'client_error';
        }
    } else if (status >= 500) {
        // 5xx Server Error
        console.log('Server Error:', status);
        switch (status) {
            case 500: return 'internal_error';
            case 502: return 'bad_gateway';
            case 503: return 'service_unavailable';
            case 504: return 'gateway_timeout';
            default: return 'server_error';
        }
    }

    return 'unknown';
}

// Status-specific error handling:
async function handleResponseByStatus(response) {
    switch (response.status) {
        case 200:
        case 201:
        case 202:
            return await response.json();

        case 204:
            return null; // No content

        case 400:
            const errorData = await response.json();
            throw new Error(`Bad Request: ${errorData.message || 'Invalid request'}`);

        case 401:
            // Redirect to login or refresh token
            window.location.href = '/login';
            throw new Error('Unauthorized');

        case 403:
            throw new Error('Forbidden: Insufficient permissions');

        case 404:
            throw new Error('Resource not found');

        case 422:
            const validationErrors = await response.json();
            throw new Error(`Validation failed: ${JSON.stringify(validationErrors)}`);

        case 429:
            const retryAfter = response.headers.get('Retry-After');
            throw new Error(`Rate limited. Retry after ${retryAfter} seconds`);

        case 500:
        case 502:
        case 503:
        case 504:
            throw new Error('Server error. Please try again later.');

        default:
            throw new Error(`Unexpected status code: ${response.status}`);
    }
}





// ------------------------------------------------------------------- ::
// 20. STREAMING RESPONSES
// Handling streaming data with ReadableStream

async function handleStreamingResponse(url) {
    const response = await fetch(url);

    if (!response.body) {
        throw new Error('ReadableStream not supported');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    try {
        while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            // Decode chunk and process
            const chunk = decoder.decode(value, { stream: true });
            result += chunk;

            // Process chunk (e.g., update UI)
            console.log('Received chunk:', chunk);
        }

        return result;

    } finally {
        reader.releaseLock();
    }
}

// Server-Sent Events (SSE) example:
function listenToServerSentEvents(url) {
    const eventSource = new EventSource(url);

    eventSource.onmessage = function (event) {
        const data = JSON.parse(event.data);
        console.log('Received:', data);
    };

    eventSource.onerror = function (error) {
        console.error('SSE error:', error);
    };

    // Close connection
    // eventSource.close();
}




// ------------------------------------------------------------------- ::
// 21. PROGRESS EVENTS
// Tracking upload/download progress

// File upload with progress:
async function uploadWithProgress(file, url, onProgress) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('file', file);

        // Upload progress
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                onProgress(percentComplete);
            }
        });

        // Request completion
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Upload failed: ${xhr.status}`));
            }
        });

        xhr.addEventListener('error', () => {
            reject(new Error('Upload failed'));
        });

        xhr.open('POST', url);
        xhr.send(formData);
    });
}

// Usage:
/*
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
        try {
            const result = await uploadWithProgress(
                file,
                '/api/upload',
                (progress) => {
                    console.log(`Upload progress: ${progress.toFixed(2)}%`);
                    // Update progress bar
                }
            );
            console.log('Upload complete:', result);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }
});
*/





// ------------------------------------------------------------------- ::
// 22. WORKING WITH MULTIPART/FORM-DATA
// Handling file uploads and form data

// Simple file upload:
async function uploadFile(file, additionalFields = {}) {
    const formData = new FormData();
    formData.append('file', file);

    // Add additional form fields
    Object.keys(additionalFields).forEach(key => {
        formData.append(key, additionalFields[key]);
    });

    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData  // Don't set Content-Type header - browser sets it with boundary
    });

    if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
    }

    return response.json();
}

// Multiple file upload:
async function uploadMultipleFiles(files, options = {}) {
    const formData = new FormData();

    // Append multiple files
    Array.from(files).forEach((file, index) => {
        formData.append(`files[${index}]`, file);
        // Or just: formData.append('files', file);
    });

    // Add metadata
    if (options.metadata) {
        formData.append('metadata', JSON.stringify(options.metadata));
    }

    return fetch('/api/upload-multiple', {
        method: 'POST',
        body: formData
    });
}

// Form submission with mixed data:
function submitFormWithFile() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);  // Automatically includes all form fields

    // Add additional data
    formData.append('timestamp', new Date().toISOString());

    return fetch('/api/form-submit', {
        method: 'POST',
        body: formData
    });
}





// ------------------------------------------------------------------- ::
// 23. HANDLING REDIRECTS
// Controlling redirect behavior

async function handleRedirects() {
    // Default behavior: follow redirects automatically
    const response1 = await fetch('/api/data', {
        redirect: 'follow'  // Default: 'follow' | 'error' | 'manual'
    });

    // Don't follow redirects, throw error instead:
    try {
        const response2 = await fetch('/api/data', {
            redirect: 'error'
        });
    } catch (error) {
        console.log('Redirect was blocked');
    }

    // Manual redirect handling:
    const response3 = await fetch('/api/data', {
        redirect: 'manual'
    });

    if (response3.type === 'opaqueredirect') {
        console.log('Redirect detected, handling manually');
        const location = response3.headers.get('Location');
        // Handle redirect manually
    }
}





// ------------------------------------------------------------------- ::
// 24. SECURITY CONSIDERATIONS
// Best practices for secure HTTP requests

// Input validation and sanitization:
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;

    // Basic HTML encoding
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// CSRF protection:
function getCSRFToken() {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    return token || document.cookie.split(';').find(c => c.trim().startsWith('csrf_token='))?.split('=')[1];
}

// Secure request with CSRF protection:
async function secureRequest(url, data) {
    const csrfToken = getCSRFToken();

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
            'X-Requested-With': 'XMLHttpRequest'  // Helps prevent CSRF
        },
        body: JSON.stringify(data)
    });
}

// Content Security Policy (CSP) considerations:
// Avoid inline scripts and eval()
// Use nonce or hash for inline scripts if needed
// Fetch requests are generally CSP-compliant

// XSS prevention:
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}





// ------------------------------------------------------------------- ::
// 25. RATE LIMITING AND THROTTLING
// Implementing client-side rate limiting

class RateLimiter {
    constructor(maxRequests = 10, windowMs = 60000) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = [];
    }

    canMakeRequest() {
        const now = Date.now();
        // Remove requests outside the window
        this.requests = this.requests.filter(time => now - time < this.windowMs);

        return this.requests.length < this.maxRequests;
    }

    recordRequest() {
        this.requests.push(Date.now());
    }

    async makeRequest(url, options = {}) {
        if (!this.canMakeRequest()) {
            const oldestRequest = this.requests[0];
            const waitTime = this.windowMs - (Date.now() - oldestRequest);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }

        this.recordRequest();
        return fetch(url, options);
    }
}

// Usage:
const rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

// Request throttling with debounce:
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttled search function:
const throttledSearch = debounce(async (query) => {
    if (query.length < 3) return;

    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const results = await response.json();
    displaySearchResults(results);
}, 300);

function displaySearchResults(results) {
    console.log('Search results:', results);
}





// ------------------------------------------------------------------- ::
// 26. API VERSIONING AND DOCUMENTATION
// Working with versioned APIs

class APIClient {
    constructor(baseUrl, version = 'v1') {
        this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
        this.version = version;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': `application/vnd.api+json;version=${version}`
        };
    }

    buildUrl(endpoint) {
        return `${this.baseUrl}/api/${this.version}${endpoint}`;
    }

    async request(endpoint, options = {}) {
        const url = this.buildUrl(endpoint);
        const config = {
            ...options,
            headers: {
                ...this.defaultHeaders,
                ...options.headers
            }
        };

        const response = await fetch(url, config);
        return this.handleResponse(response);
    }

    async handleResponse(response) {
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || `HTTP ${response.status}`);
        }

        const contentType = response.headers.get('Content-Type') || '';
        if (contentType.includes('application/json')) {
            return response.json();
        }

        return response.text();
    }

    // Convenience methods:
    get(endpoint, params = {}) {
        const url = Object.keys(params).length
            ? `${endpoint}?${new URLSearchParams(params)}`
            : endpoint;
        return this.request(url);
    }

    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    patch(endpoint, data) {
        return this.request(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }

    delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}

// Usage:
const api = new APIClient('https://api.example.com', 'v2');

async function apiExamples() {
    // GET request with parameters
    const users = await api.get('/users', { page: 1, limit: 10 });

    // POST request
    const newUser = await api.post('/users', {
        name: 'John Doe',
        email: 'john@example.com'
    });

    // PUT request
    const updatedUser = await api.put('/users/123', {
        name: 'John Smith',
        email: 'john.smith@example.com'
    });

    // DELETE request
    await api.delete('/users/123');
}





// ------------------------------------------------------------------- ::
// 27. BEST PRACTICES SUMMARY

// 1. Always handle errors properly
async function bestPracticeExample() {
    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`
            },
            body: JSON.stringify({
                // Always validate/sanitize data before sending
                name: sanitizeInput(userName),
                email: validateEmail(userEmail)
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        // Log error for debugging
        console.error('API request failed:', error);

        // Show user-friendly message
        showUserError('Something went wrong. Please try again.');

        // Re-throw for caller to handle
        throw error;
    }
}

// 2. Use proper HTTP methods
function httpMethodBestPractices() {
    // GET - Retrieve data (safe, idempotent)
    // POST - Create resources, non-idempotent operations
    // PUT - Replace entire resource (idempotent)
    // PATCH - Partial updates (may or may not be idempotent)
    // DELETE - Remove resources (idempotent)
}

// 3. Handle different response types
async function handleResponseTypes(response) {
    const contentType = response.headers.get('Content-Type') || '';

    if (contentType.includes('application/json')) {
        return response.json();
    } else if (contentType.includes('text/')) {
        return response.text();
    } else if (contentType.includes('application/octet-stream')) {
        return response.blob();
    }

    return response.arrayBuffer();
}

// 4. Implement retry logic for failed requests
async function retryRequest(url, options = {}, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);

            if (response.ok) {
                return response;
            }

            // Don't retry client errors (4xx)
            if (response.status >= 400 && response.status < 500) {
                throw new Error(`Client error: ${response.status}`);
            }

            // Retry server errors (5xx) and network errors
            if (attempt === maxRetries) {
                throw new Error(`Max retries reached: ${response.status}`);
            }

            // Wait before retry (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));

        } catch (error) {
            if (attempt === maxRetries || error.name === 'TypeError') {
                throw error;
            }

            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
    }
}

// 5. Cache responses when appropriate
class ResponseCache {
    constructor(maxAge = 300000) { // 5 minutes default
        this.cache = new Map();
        this.maxAge = maxAge;
    }

    get(key) {
        const cached = this.cache.get(key);
        if (!cached) return null;

        if (Date.now() - cached.timestamp > this.maxAge) {
            this.cache.delete(key);
            return null;
        }

        return cached.data;
    }

    set(key, data) {
        this.cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
    }

    clear() {
        this.cache.clear();
    }
}

// Usage:
const cache = new ResponseCache();

async function cachedFetch(url) {
    const cacheKey = url;
    let data = cache.get(cacheKey);

    if (!data) {
        const response = await fetch(url);
        data = await response.json();
        cache.set(cacheKey, data);
    }

    return data;
}

// Utility functions used in examples:
function getAuthToken() {
    return localStorage.getItem('authToken') || '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
    }
    return email;
}

function showUserError(message) {
    // Implementation depends on your UI framework
    console.error('User Error:', message);
    // Example: show toast notification, modal, etc.
}
