// DOM (Document Object Model) ?
/*
What is DOM?
The DOM is a programming interface for web documents that represents the structure of a document as a tree of objects. Each node corresponds to a part of the document (elements, attributes, text), allowing JavaScript to dynamically interact with and modify web page content, structure, and styling.
*/
// - The DOM is a programming interface for web documents.
// - It represents the structure of a document as a tree of objects.
// - Each node in the tree corresponds to a part of the document (e.g., elements, attributes, text).
// - The DOM allows programming languages (like JavaScript) to interact with the document content and structure.
// - You can use the DOM to dynamically change the content, structure, and style of a web page.

/*

Subtopics :
- selects, modify, create, delete elements

- Element selection (querySelector, getElementById, getElementsByClassName, getElementsByTagName)
- Content manipulation (innerHTML, textContent, innerText)
- Class management (classList.add, classList.remove, classList.toggle, classList.contains)
- Style manipulation (element.style, getComputedStyle)
- Event handling (addEventListener, removeEventListener)
- Form handling (form events, input.value, checkbox.checked, select.selectedIndex)
- Local storage and session storage (window.localStorage, window.sessionStorage)
- DOM tree traversal (parentNode, childNodes, siblings, children)
- Element creation and deletion (createElement, remove, appendChild, insertBefore)
- Event delegation (handling events on parent elements)
- Data attributes (element.dataset)
- Collections handling (HTMLCollection, NodeList, Array.from)
- Preventing default behavior (event.preventDefault)
- Dynamic class toggling (classList.toggle)
- Basic DOM security (avoiding XSS, sanitizing input)
- MutationObserver (watching for DOM changes)
- Performance optimization (minimizing reflows/repaints)
- Accessibility features (ARIA attributes, tab order, focus management)
- Responsive design with DOM (media queries, dynamic resizing)
- Working with SVG and Canvas elements via DOM
- Using templates (template tag, cloning nodes)
- Shadow DOM (encapsulation for web components)
- Debugging DOM issues (browser dev tools, console inspection)
*/

// Element Selection & Query Methods
// --------------------------------------------------------
// Basic selectors (must know)
document.getElementById('myId')
document.getElementsByClassName('myClass')
document.getElementsByTagName('div')

// Modern query selectors (preferred)
document.querySelector('.class')
document.querySelectorAll('div.class')
document.querySelector('#id')


// Element Modification
// Content manipulation
element.innerHTML = '<p>HTML content</p>'
element.textContent = 'Plain text only'
element.innerText = 'Visible text only'

// Attribute manipulation
element.getAttribute('data-id')
element.setAttribute('class', 'new-class')
element.removeAttribute('disabled')


// Style & Class Management
// --------------------------------------------------------
// Style manipulation
element.style.color = 'red'
element.style.display = 'none'

// Class management (modern approach)
element.classList.add('active')
element.classList.remove('hidden')
element.classList.toggle('highlight')
element.classList.contains('selected')


// DOM Tree Traversal
// --------------------------------------------------------`
// Navigation
element.parentNode
element.childNodes
element.firstChild / element.lastChild
element.nextSibling / element.previousSibling

// Modern alternatives (elements only)
element.parentElement
element.children
element.firstElementChild / element.lastElementChild
element.nextElementSibling / element.previousElementSibling


// Event Handling
// --------------------------------------------------------
// Event listeners (preferred method)
element.addEventListener('click', handleClick)
element.addEventListener('submit', handleSubmit)
element.addEventListener('keydown', handleKeyPress)

// Event delegation (performance optimization)
parentElement.addEventListener('click', function (e) {
    if (e.target.matches('.child-button')) {
        // Handle click on dynamically added buttons
    }
})

// Prevent default behavior
event.preventDefault()
event.stopPropagation()


// Element Creation & Manipulation
// --------------------------------------------------------
// Creating elements
const newDiv = document.createElement('div')
const newText = document.createTextNode('Hello')

// Adding to DOM
parent.appendChild(newDiv)
parent.insertBefore(newDiv, existingChild)
parent.removeChild(childElement)

// Modern alternatives
parent.append(newDiv) // More flexible
parent.remove() // Remove element itself


// Browser Storage
// --------------------------------------------------------
// Local Storage (persists after browser close)
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')

// Session Storage (clears when tab closes)
sessionStorage.setItem('key', 'value')
sessionStorage.getItem('key')


// Form & Input Handling
// --------------------------------------------------------
// Form properties
input.value
checkbox.checked
select.selectedIndex
input.disabled

// Form events
form.addEventListener('submit', handleSubmit)
input.addEventListener('input', handleInput) // Real-time
input.addEventListener('change', handleChange) // On blur


// Data Attributes
// --------------------------------------------------------
// HTML: <div data-user-id="123" data-role="admin">
element.dataset.userId // "123"
element.dataset.role // "admin"
element.dataset.newProp = "value" // Sets data-new-prop


// Collections & Conversion
// --------------------------------------------------------
// HTMLCollection vs NodeList
const htmlCollection = document.getElementsByClassName('item') // Live
const nodeList = document.querySelectorAll('.item') // Static

// Convert to Array for easier manipulation
const itemsArray = Array.from(htmlCollection)
const itemsSpread = [...nodeList]


// Security Considerations
// --------------------------------------------------------
// Avoid XSS with user input
// BAD: element.innerHTML = userInput
// GOOD: element.textContent = userInput

// Or sanitize HTML properly
function sanitizeHTML(str) {
    const temp = document.createElement('div')
    temp.textContent = str
    return temp.innerHTML
}

//Performance Tips
// --------------------------------------------------------
// Minimize reflows/repaints
// BAD: Multiple style changes
element.style.width = '100px'
element.style.height = '100px'
element.style.background = 'red'

// GOOD: Batch changes
element.style.cssText = 'width: 100px; height: 100px; background: red;'

// Or use classes
element.className = 'optimized-styles'


// MutationObserver
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        console.log('DOM changed:', mutation)
    })
})

observer.observe(targetElement, {
    childList: true,
    attributes: true,
    subtree: true
})



// Template & Shadow DOM
// Using templates
const template = document.querySelector('#my-template')
const clone = template.content.cloneNode(true)

// Shadow DOM (Web Components)
const shadowRoot = element.attachShadow({ mode: 'open' })
shadowRoot.innerHTML = '<p>Encapsulated content</p>'


// Accessibility Basics
// ARIA attributes
element.setAttribute('aria-label', 'Close button')
element.setAttribute('aria-expanded', 'false')
element.setAttribute('role', 'button')

// Focus management
element.tabIndex = 0 // Make focusable
element.focus()
element.blur()
