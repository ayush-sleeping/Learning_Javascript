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
---

## 1. JavaScript Basics
- JavaScript is a **high-level, interpreted** programming language.
- Runs in the browser and can interact with the DOM.
- Used for client-side and (with Node.js) server-side scripting.

### Key Concepts:
- Statements and Syntax
- Comments (`//` for single line, `/* */` for multiline)
- Variables: `var`, `let`, `const`

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

---

## 3. Conditional Statements
- `if`, `else if`, `else`
- `switch`

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
- **Bitwise**, **Ternary (`? :`)**, **typeof**, **delete**

---

## 5. Type Coercion
- JS automatically converts types when needed.
- `"5" + 2` → `'52'`
- `"5" - 2` → `3`
- Use `===` to avoid coercion.

---

## 6. Objects and Arrays
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
- `for`, `while`, `do...while`, `for...of`, `for...in`

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## 8. Functions and Hoisting
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
- `document.getElementById()`, `querySelector()`
- `innerText`, `innerHTML`, `classList`, `style`
- `addEventListener()` for events

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
```js
let pattern = /[A-Z]/g;
let result = "Ayush".match(pattern);  // ['A']
```

- Methods: `test()`, `exec()`, `match()`, `replace()`

---

## 12. OOPs in JS
- **Object Literals**
- **Constructor Functions**
- **Prototypes**
- **Classes (ES6)**

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
- Cross-browser compatibility
- DOM traversal, manipulation, animations, and AJAX

---

## 15. ES6 for ReactJS
- **let** and **const**
- **Arrow functions**
- **Template literals**
- **Destructuring**
- **Spread and Rest operator**
- **Modules (import/export)**
- **Promises**, **async/await**
- **Classes and Inheritance**

```js
const user = { name: "Ayush", age: 23 };
const { name, age } = user;
```

```js
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
```
