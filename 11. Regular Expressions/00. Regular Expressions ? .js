/*
Regular Expressions ::
Regular Expressions (Regex) are patterns used to match character combinations in strings. They're powerful tools for text processing, validation, search, and replace operations. In JavaScript interviews, regex is commonly tested for form validation, string manipulation, and pattern matching tasks.
------------------------------------------------------------------- ::

Subtopics :
- Regular Expressions
- Metacharacters
- Character Classes
- Regex Quantifiers
- Using Regex inside JavaScript
- Regex Groups
- Form Validation using regex

- Anchors (^, $)
- Flags (g, i, m, s, u, y)
- Escaping special characters
- Lookahead and lookbehind assertions
- Non-capturing groups
- Greedy vs lazy matching
- Replace, split, and match methods
- Testing and exec methods
- Common patterns (email, phone, password, URL)
- Debugging and visualizing regex
- Performance considerations
*/


// Creating Regular Expressions
// ---------------------------------------------------------------------- ::
// Two ways to create regex
const regex1 = /pattern/flags;        // Literal notation (preferred)
const regex2 = new RegExp('pattern', 'flags');  // Constructor notation

// Examples
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = new RegExp('\\d{3}-\\d{3}-\\d{4}');




// Basic Metacharacters
// ---------------------------------------------------------------------- ::
// Dot (.) - matches any character except newline
console.log(/a.c/.test('abc'));     // true
console.log(/a.c/.test('axc'));     // true
console.log(/a.c/.test('ac'));      // false

// Caret (^) - start of string
console.log(/^hello/.test('hello world'));  // true
console.log(/^hello/.test('say hello'));    // false

// Dollar ($) - end of string
console.log(/world$/.test('hello world'));  // true
console.log(/world$/.test('world peace'));  // false

// Backslash (\) - escape character
console.log(/\$\d+/.test('$25'));   // true (literal $ and digits)
console.log(/\.com/.test('site.com'));  // true (literal dot)




// Character Classes
// ---------------------------------------------------------------------- ::
// Square brackets [] - character set
console.log(/[abc]/.test('apple'));     // true (contains 'a')
console.log(/[0-9]/.test('test123'));   // true (contains digits)
console.log(/[a-zA-Z]/.test('Hello'));  // true (contains letters)

// Negated character class [^]
console.log(/[^0-9]/.test('abc'));      // true (contains non-digits)
console.log(/[^a-z]/.test('ABC'));      // true (contains non-lowercase)

// Predefined character classes
console.log(/\d/.test('123'));          // \d = [0-9] digits
console.log(/\w/.test('hello_123'));    // \w = [a-zA-Z0-9_] word characters
console.log(/\s/.test('hello world'));  // \s = whitespace characters

// Negated predefined classes
console.log(/\D/.test('abc'));          // \D = [^0-9] non-digits
console.log(/\W/.test('hello!'));       // \W = [^a-zA-Z0-9_] non-word chars
console.log(/\S/.test('hello'));        // \S = non-whitespace




// Quantifiers
// ---------------------------------------------------------------------- ::
// * (zero or more)
console.log(/ab*c/.test('ac'));     // true
console.log(/ab*c/.test('abc'));    // true
console.log(/ab*c/.test('abbbbc')); // true

// + (one or more)
console.log(/ab+c/.test('ac'));     // false
console.log(/ab+c/.test('abc'));    // true
console.log(/ab+c/.test('abbbbc')); // true

// ? (zero or one)
console.log(/colou?r/.test('color'));   // true
console.log(/colou?r/.test('colour'));  // true

// {n} (exactly n times)
console.log(/\d{3}/.test('123'));       // true
console.log(/\d{3}/.test('12'));        // false

// {n,m} (between n and m times)
console.log(/\d{2,4}/.test('12'));      // true
console.log(/\d{2,4}/.test('1234'));    // true
console.log(/\d{2,4}/.test('12345'));   // true (matches first 4)

// {n,} (n or more times)
console.log(/\d{3,}/.test('123456'));   // true




// Testing and Matching
// ---------------------------------------------------------------------- ::
const text = 'Hello World 123';
const pattern = /\d+/g;

// test() - returns boolean
console.log(/\d/.test(text));           // true

// match() - returns array of matches
console.log(text.match(/\d+/));         // ['123']
console.log(text.match(/\d+/g));        // ['123'] (with global flag)
console.log(text.match(/xyz/));         // null (no match)

// search() - returns index of first match
console.log(text.search(/\d/));         // 12
console.log(text.search(/xyz/));        // -1 (not found)

// exec() - returns detailed match info
const regex = /(\w+)\s(\w+)/;
const result = regex.exec('Hello World');
console.log(result); // ['Hello World', 'Hello', 'World', index: 0, input: 'Hello World']




// String Replacement
// ---------------------------------------------------------------------- ::
const textToReplace = 'Hello World';

// replace() - replace first match
console.log(textToReplace.replace(/o/, '0'));           // 'Hell0 World'

// replace() with global flag - replace all matches
console.log(textToReplace.replace(/o/g, '0'));          // 'Hell0 W0rld'

// replace() with function callback
console.log(textToReplace.replace(/\w+/g, (match) => match.toUpperCase()));  // 'HELLO WORLD'

// replaceAll() - modern alternative
console.log(textToReplace.replaceAll('o', '0'));        // 'Hell0 W0rld'




// String Splitting
// ---------------------------------------------------------------------- ::
const csv = 'apple,banana,orange';
const sentence = 'Hello   world    test';

// split() with regex
console.log(csv.split(/,/));              // ['apple', 'banana', 'orange']
console.log(sentence.split(/\s+/));       // ['Hello', 'world', 'test'] (handles multiple spaces)

// split() with capturing groups
console.log('a-b_c'.split(/([_-])/));     // ['a', '-', 'b', '_', 'c']




// Regex Flags
// ---------------------------------------------------------------------- ::
// g (global) - find all matches
const globalRegex = /a/g;
console.log('banana'.match(globalRegex)); // ['a', 'a', 'a']

// i (case-insensitive)
console.log(/hello/i.test('HELLO'));      // true

// m (multiline) - ^ and $ match line boundaries
const multiline = 'line1\nline2';
console.log(/^line/gm.test(multiline));   // true (matches start of each line)

// s (dotAll) - dot matches newline
console.log(/a.b/s.test('a\nb'));         // true

// u (unicode) - proper unicode handling
console.log(/\u{1F600}/u.test('😀'));     // true

// y (sticky) - match from lastIndex
const stickyRegex = /\d/y;
stickyRegex.lastIndex = 5;
console.log(stickyRegex.test('12345678')); // true (starts from index 5)




// Groups and Capturing
// ---------------------------------------------------------------------- ::
// Capturing groups ()
const fullName = /(\w+)\s+(\w+)/;
const nameMatch = fullName.exec('John Doe');
console.log(nameMatch[1]); // 'John'
console.log(nameMatch[2]); // 'Doe'

// Non-capturing groups (?:)
const titlePattern = /(?:Mr|Mrs|Ms)\s+(\w+)/;
const titleResult = titlePattern.exec('Mr Smith');
console.log(titleResult[1]); // 'Smith' (title group not captured)

// Named capturing groups (?<name>)
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const dateMatch = dateRegex.exec('2023-12-25');
console.log(dateMatch.groups.year);  // '2023'
console.log(dateMatch.groups.month); // '12'
console.log(dateMatch.groups.day);   // '25'




// Lookahead and Lookbehind
// ---------------------------------------------------------------------- ::
// Positive lookahead (?=)
console.log(/\d+(?=px)/.test('100px'));     // true (digit followed by 'px')
console.log(/\d+(?=px)/.exec('100px')[0]);  // '100' (doesn't include 'px')

// Negative lookahead (?!)
console.log(/\d+(?!px)/.test('100em'));     // true (digit not followed by 'px')

// Positive lookbehind (?<=)
console.log(/(?<=\$)\d+/.test('$100'));     // true (digit preceded by '$')
console.log(/(?<=\$)\d+/.exec('$100')[0]);  // '100' (doesn't include '$')

// Negative lookbehind (?<!)
console.log(/(?<!\$)\d+/.test('€100'));     // true (digit not preceded by '$')

// Complex example - password validation
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Greedy vs Lazy Matching
const html = '<div>Hello</div><div>World</div>';

// Greedy (default) - matches as much as possible
console.log(html.match(/<div>.*<\/div>/));    // ['<div>Hello</div><div>World</div>']

// Lazy - matches as little as possible
console.log(html.match(/<div>.*?<\/div>/));   // ['<div>Hello</div>']

// Lazy quantifiers
// *? (zero or more, lazy)
// +? (one or more, lazy)
// ?? (zero or one, lazy)
// {n,m}? (between n and m, lazy)




// Email Validation
// ---------------------------------------------------------------------- ::
// Basic email pattern
const basicEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// More comprehensive email
const comprehensiveEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Email validation function
function validateEmail(email) {
    return comprehensiveEmailRegex.test(email);
}

console.log(validateEmail('user@example.com'));     // true
console.log(validateEmail('invalid.email'));        // false




// Phone Number Validation
// ---------------------------------------------------------------------- ::
// US phone number patterns
const usPhone1 = /^\(\d{3}\)\s\d{3}-\d{4}$/;      // (123) 456-7890
const usPhone2 = /^\d{3}-\d{3}-\d{4}$/;           // 123-456-7890
const usPhone3 = /^\d{10}$/;                      // 1234567890

// Flexible phone pattern
const flexiblePhoneRegex = /^[\+]?[\d\s\(\)\-\.]{10,}$/;

function validatePhone(phone) {
    // Remove all non-digits for length check
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10 && flexiblePhoneRegex.test(phone);
}




// Password Validation
// ---------------------------------------------------------------------- ::
// Strong password requirements:
// - At least 8 characters
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one digit
// - At least one special character
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password) {
    return {
        isValid: strongPasswordRegex.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasUppercase: /[A-Z]/.test(password),
        hasDigit: /\d/.test(password),
        hasSpecial: /[@$!%*?&]/.test(password),
        minLength: password.length >= 8
    };
}




// URL Validation
// ---------------------------------------------------------------------- ::
// Basic URL pattern
const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

// Extract parts of URL
const urlParts = /^(https?):\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/;

function parseURL(url) {
    const match = urlParts.exec(url);
    if (!match) return null;

    return {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    };
}




// Credit Card Validation
// ---------------------------------------------------------------------- ::
// Credit card patterns
const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
};

function validateCreditCard(number) {
    // Remove spaces and dashes
    const cleaned = number.replace(/[\s-]/g, '');

    // Check if it matches any pattern
    for (const [type, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cleaned)) {
            return { isValid: true, type };
        }
    }

    return { isValid: false, type: null };
}




// Complete Form Validation Class
// ---------------------------------------------------------------------- ::
class FormValidator {
    constructor() {
        this.patterns = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            phone: /^[\+]?[\d\s\(\)\-\.]{10,}$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            name: /^[a-zA-Z\s]{2,50}$/,
            zipCode: /^\d{5}(-\d{4})?$/,
            username: /^[a-zA-Z0-9_]{3,20}$/
        };
    }

    validate(field, value) {
        const pattern = this.patterns[field];
        if (!pattern) return { isValid: false, error: 'Unknown field' };

        const isValid = pattern.test(value);
        return {
            isValid,
            error: isValid ? null : this.getErrorMessage(field)
        };
    }

    getErrorMessage(field) {
        const messages = {
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number',
            password: 'Password must be at least 8 characters with uppercase, lowercase, digit, and special character',
            name: 'Name must contain only letters and spaces (2-50 characters)',
            zipCode: 'Please enter a valid ZIP code',
            username: 'Username must be 3-20 characters (letters, numbers, underscore only)'
        };
        return messages[field] || 'Invalid input';
    }
}



// Usage example
const validator = new FormValidator();
const emailResult = validator.validate('email', 'user@example.com');
console.log(emailResult); // { isValid: true, error: null }




// Performance Tips
// ---------------------------------------------------------------------- ::
// Compile regex once, use many times
// BAD: Creating regex in loop
// for (let i = 0; i < 1000; i++) {
//   const regex = /\d+/g;  // Created 1000 times
//   text.match(regex);
// }

// GOOD: Create once, reuse
const reusableRegex = /\d+/g;
// for (let i = 0; i < 1000; i++) {
//   text.match(reusableRegex);
// }

// Use specific patterns instead of overly broad ones
// BAD: Slow and imprecise
const badPattern = /.*@.*/;

// GOOD: Specific and fast
const goodPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Common Pitfalls and Debugging
// Escape special characters
const userInput = 'user@domain.com';
// BAD: Treats . as metacharacter
// const badRegex = new RegExp(userInput);

// GOOD: Escape user input
const goodRegex = new RegExp(userInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

// Global flag state issues
const globalRegexExample = /\d+/g;
console.log(globalRegexExample.test('123'));  // true
console.log(globalRegexExample.test('123'));  // false! (lastIndex moved)

// Reset lastIndex or create new regex
globalRegexExample.lastIndex = 0;

// Regex Visualization and Testing
// Use regex testing tools:
// - regex101.com
// - regexr.com
// - regexpal.com

// Debug with console
function debugRegex(pattern, testString) {
    console.log('Pattern:', pattern);
    console.log('Test string:', testString);
    console.log('Match:', pattern.exec(testString));
    console.log('Test result:', pattern.test(testString));
}

debugRegex(/\d+/, 'abc123def');




// Real-time Form Validation
// ---------------------------------------------------------------------- ::
function createRealTimeValidator(inputElement, pattern, errorElement) {
    inputElement.addEventListener('input', function () {
        const isValid = pattern.test(this.value);

        if (isValid) {
            this.classList.remove('invalid');
            this.classList.add('valid');
            errorElement.textContent = '';
        } else {
            this.classList.remove('valid');
            this.classList.add('invalid');
            errorElement.textContent = 'Invalid format';
        }
    });
}

// Usage example (would work in browser environment)
// const emailInput = document.getElementById('email');
// const emailError = document.getElementById('email-error');
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// createRealTimeValidator(emailInput, emailPattern, emailError);




// Search and Highlight
// ---------------------------------------------------------------------- ::
function highlightMatches(text, searchTerm, caseSensitive = false) {
    const flags = caseSensitive ? 'g' : 'gi';
    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedTerm, flags);

    return text.replace(regex, '<mark>$&</mark>');
}

// Usage example
const highlighted = highlightMatches('Hello World', 'world', false);
console.log(highlighted); // 'Hello <mark>World</mark>'




// Live Form Validation
// ---------------------------------------------------------------------- ::
const emailInputExample = { value: 'test@example.com', classList: { toggle: () => { } } };
const emailRegexExample = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




// Simulating input event handler
// ---------------------------------------------------------------------- ::
function handleEmailInput(e) {
    const isValid = emailRegexExample.test(e.target.value);
    e.target.classList.toggle('valid', isValid);
    e.target.classList.toggle('invalid', !isValid);
}




// Search with Highlighting
// ---------------------------------------------------------------------- ::
function highlightSearch(text, query) {
    const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    return text.replace(regex, '<mark>$&</mark>');
}




// Input Formatting
// ---------------------------------------------------------------------- ::
function formatPhoneNumber(value) {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;

    return !match[2] ? match[1]
        : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
}
