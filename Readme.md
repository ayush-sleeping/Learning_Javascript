## Learning_Javascript
### This repo. contain code files of JavaScript language, which I have practiced during learning JS.

<br>

### Table of content:


* [JavaScript Basics](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/1.%20JavaScript%20Basics)
* [DataTypes](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/2.%20DataTypes)
* [Conditional Statements](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/3.%20Conditional%20Statements)
* [Operators](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/4.%20Operators)
* [Type Coercion](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/5.%20Type%20Coercion)
* [Objects and Arrays](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/6.%20Objects%20and%20Arrays)
* [Loops](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/7.%20Loops)
* [Functions and Hoisting](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/8.%20Functions%20and%20Hoisting)
* [Document Object Model (DOM)](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/9.%20Document%20Object%20Model%20(DOM))
* [Browser Object Model](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/10.%20Browser%20Object%20Model)
* [Regular Expressions](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/11.%20Regular%20Expressions)
* [OOPs in JS](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/12.%20OOPs%20in%20JS)
* [HTTP Requests](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/13.%20HTTP%20Requests)
* [jQuery Basics](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/14.%20jQuery%20Basics)
* [ES6 for ReactJS](https://github.com/ayush-sleeping/Learning_Javascript/tree/main/15.%20ES6%20for%20ReactJS)

<br>

### Resources (From where I am learning JS most of the time) :
- [Namaste JavaScript - YT playlist](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
- [Telusko - YT playlist](https://www.youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV)
- [JavaScript - Basics to Advanced step by step [2022] - Udemy Cource](https://www.udemy.com/course/javascript-basics-to-advanced/)

<br>

### Certificate that I have earned during learning JS :
- From Udemy Cource :
  - JavaScript - Basics to Advanced ES6 step by step [2022] : Issue date - December 2022 <br> Credential ID - UC-0382127f-523a-4c7f-b966-ba33426153be <br>
 [Certificate](https://www.udemy.com/certificate/UC-0382127f-523a-4c7f-b966-ba33426153be/)



## Overview : :


| #  | Topic                                      | Summary |
|----|--------------------------------------------|---------|
| 1  | JavaScript Basics                          | Core syntax, comments, variable declarations (`var`, `let`, `const`), and environment setup (Browser, Node.js, VS Code). |
| 2  | Data Types                                  | Primitive (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and Non-Primitive (Object, Array, Function, Map, Set, JSON). |
| 3  | Conditional Statements                      | if, else if, else, switch statements; logical operators used in decision-making. |
| 4  | Operators                                   | Arithmetic, Assignment, Comparison, Logical, Bitwise, Ternary, typeof, delete, and precedence rules. |
| 5  | Type Coercion                               | Implicit vs Explicit conversion; avoid bugs using `===` and type conversion functions. |
| 6  | Objects and Arrays                          | Object literals, methods, array operations (`push`, `map`, `filter`, `reduce`), Map, Set, JSON structures. |
| 7  | Loops                                       | for, while, do...while, for...in, for...of; control flow using `break`, `continue`. |
| 8  | Functions and Hoisting                      | Function declaration/expression, arrow functions, scope (global, block, function), hoisting, closures, IIFE. |
| 9  | Document Object Model (DOM)                 | Selecting and manipulating HTML elements, `addEventListener`, event bubbling, capturing, delegation. |
| 10 | Browser Object Model (BOM)                  | Interacting with browser APIs: `window`, `location`, `navigator`, `history`, `screen`. |
| 11 | Regular Expressions                         | Pattern matching using `test`, `exec`, `match`, `replace` for string validation and search. |
| 12 | OOP in JavaScript                           | Objects, constructors, prototypes, ES6 classes, inheritance, encapsulation, polymorphism. |
| 13 | HTTP Requests (AJAX, Fetch, Promises)       | Sending/receiving data using `XMLHttpRequest`, `fetch()`, Promises, `async/await`, and error handling. |
| 14 | jQuery Basics                               | DOM selection, manipulation, event handling, and AJAX with simplified syntax and cross-browser support. |
| 15 | ES6+ for ReactJS                            | let/const, arrow functions, destructuring, template literals, spread/rest, modules, Promises, async/await. |
| 16 | Asynchronous JavaScript                     | Event loop, task queue, callbacks, Promises, `async/await`, and proper error handling. |
| 17 | Advanced Function Concepts                  | `this` keyword, `call`, `apply`, `bind`, closures, higher-order functions, IIFE. |
| 18 | Design Patterns                             | Reusable solutions like Singleton, Module, Observer, Factory for structuring scalable applications. |
| 19 | Functional Programming in JS                | Pure functions, immutability, first-class functions, higher-order functions, function composition. |
| 20 | Code Quality and Best Practices             | `"use strict"`, linting tools, debugging, testing practices to write reliable, maintainable code. |
| 21 | Tooling                                     | npm, Babel, Webpack, Parcel, Prettier, ESLint, and testing frameworks like Jest, Mocha. |
| 22 | Project Structure and Architecture          | Modular folder structure, dependency management, scalability, separation of concerns. |
| 23 | Web APIs                                     | Local Storage, Session Storage, IndexedDB, Web Workers, Service Workers, Notifications. |
| 24 | Performance Optimization                    | Reducing DOM manipulation, debouncing/throttling, lazy loading, profiling with DevTools. |


---
---

## 1. JavaScript Basics
- JavaScript is a **high-level, interpreted** programming language.
- Runs in the browser and can interact with the DOM.
- Used for client-side and (with Node.js) server-side scripting.

### Key Concepts:
- Syntax, Statements, and Comments
- Variables: `var`, `let`, `const`
- Running JS: Browser, Node.js
- Environment Setup: Node.js, npm, VS Code
- Role of JS: Client-side, Server-side, Web Standards

```js
let name = "Ayush";
const age = 23;
var city = "Mumbai";
```

---

## 2. DataTypes
### Primitive Types:
1. **String** - `"hello"`
2. **Number** - `42`, `3.14`
3. **Boolean** - `true` or `false`
4. **Undefined** - variable declared but not assigned
5. **Null** - intentionally empty value
6. **Symbol** (ES6)
7. **BigInt** - large integers beyond 2^53-1

### Non-Primitive Types:
- **Objects**: `{ key: value }`
- **Arrays**: `[1, 2, 3]`
- **Functions**
- **JSON**
- **Maps and Sets**

---

## 3. Conditional Statements
- `if`, `else if`, `else`
- `switch`
- Logical Operators in Conditions

```js
if (score > 90) {
    console.log("Excellent");
} else {
    console.log("Keep trying");
}
```

---

## 4. Operators
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **Assignment**: `=`, `+=`, `-=`, etc.
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`
- **Logical**: `&&`, `||`, `!`
- **Bitwise**,
- **Ternary (`? :`)**,
- **typeof**,
- **delete**
- Operator Precedence and Grouping

---

## 5. Type Coercion
- Implicit vs Explicit Coercion
- JS automatically converts types when needed.
- `"5" + 2` → `'52'`
- `"5" - 2` → `3`
- Best Practices (`===`, `parseInt()`, `Boolean()`)

---

## 6. Objects and Arrays
- Object Literals, Properties, Methods
- Arrays and Array Methods: `map`, `filter`, `reduce`
- Maps and Sets
- JSON as Data Structure

### Objects:
```js
let user = {
  name: "Ayush",
  age: 23,
  greet: function() {
    return `Hello, ${this.name}`;
  }
};
```

### Arrays:
```js
let colors = ["red", "blue", "green"];
colors.push("yellow");
```

---

## 7. Loops
- for, while, do...while, for...in, for...of
- Loop Control: `break`, `continue`

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## 8. Functions and Hoisting
- Function Declaration, Expression, Arrow Functions
- Hoisting: Functions vs Variables
- Scope: Global, Function, Block
- Lexical Scope and Closures
- IIFE (Immediately Invoked Function Expressions)

<br>

- Function Declaration
```js
function greet() {
  return "Hello";
}
```
- Function Expression
```js
const greet = function() { return "Hello"; };
```
- Arrow Functions (ES6)
```js
const greet = () => "Hello";
```
- **Hoisting**: Function declarations are hoisted, expressions are not.

---

## 9. Document Object Model (DOM)
- DOM Selectors: `getElementById`, `querySelector`
- DOM Manipulation: `innerText`, `innerHTML`, `classList`, `style`
- Event Listeners: `addEventListener()
- Event Propagation: Bubbling, Capturing, Delegation

```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Clicked!");
});
```

---

## 10. Browser Object Model (BOM)
- `window`, `location`, `navigator`, `screen`, `history`

```js
console.log(window.innerHeight);
console.log(location.href);
```

---

## 11. Regular Expressions
- Patterns: Literals, Ranges, Groups
- Methods: `test()`, `exec()`, `match()`, `replace()`

```js
let pattern = /[A-Z]/g;
let result = "Ayush".match(pattern);  // ['A']
```


---

## 12.  Object-Oriented Programming (OOP) in JS
- Object Literals, Constructor Functions
- Prototypes and Prototypal Inheritance
- Classes (ES6)
- Encapsulation, Inheritance, Polymorphism

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi ${this.name}`;
  }
}
```

---

## 13. HTTP Requests
- AJAX using `XMLHttpRequest`
- Fetch API
- Promises and `async/await`
- Error Handling: `try/catch`, `.catch()`, `finally`

<br>

### AJAX (Asynchronous JavaScript and XML)
```js
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

### Fetch API (Modern Way)
```js
fetch("data.json")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 14. jQuery Basics
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

```js
$(document).ready(function() {
  $("#btn").click(function() {
    $("p").text("Button clicked");
  });
});
```
- Uses `$()` as a shorthand for document selection
- Event HandlingHandling
- AJAX
- Cross-browser compatibility
- DOM Selection, traversal, manipulation, animations, and AJAX

---

## 15. ES6 for ReactJS
- `let`, `const`, Arrow Functions
- Template Literals
- Destructuring
- Spread and Rest Operators
- Modules: `import/export`
- Promises, async/await
- Classes and Inheritance

```js
const user = { name: "Ayush", age: 23 };
const { name, age } = user;
```

```js
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
```

---

## 16. Asynchronous JavaScript
- Event Loop
- Callbacks, Promises, async/await
- Error Handling with async code

---

## 17. Advanced Function Concepts
- `this` Keyword
- `call`, `apply`, `bind`
- Closures and IIFE
- Higher-Order Functions

---

## 18. Design Patterns
- Singleton
- Observer
- Module
- Factory

---

## 19. Functional Programming
- Pure Functions
- Immutability
- Higher-Order Functions
- Function Composition

---

## 20. Code Quality and Best Practices
- `"use strict"`
- Linting
- Debugging Tools
- Testing with Frameworks

---

## 21. Tooling
- npm, Babel, Parcel
- Webpack, Linters, Prettier
- Testing Frameworks (Jest, Mocha)

---

## 22. Project Structure and Architecture
- Modular Code Organization
- Dependency Management
- Folder Structure Best Practices

---

## 23. Web APIs
- Local Storage & Session Storage
- IndexedDB
- Web Workers & Service Workers

---

## 24. Performance Optimization
- Profiling with DevTools
- Reducing DOM Manipulations
- Debouncing and Throttling
- Lazy Loading and Efficient Selectors
