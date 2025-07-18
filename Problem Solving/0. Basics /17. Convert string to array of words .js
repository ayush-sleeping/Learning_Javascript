// Convert string to array of words  :
// --------------------------------------------------------------------------------------------------------------::

const sentence = "Hello world javascript";
const words = sentence.split(" ");  // Using built-in split method
console.log(words);

const messyString = "Hello world javascript";
const cleanWords = messyString.split(/\s+/);  // Using regex with split
console.log(cleanWords);

// Method without built-in functions - Manual approach
const text = "Hello world javascript programming";
const wordsArray = [];                              // Result array
let currentWord = "";                               // Current word being built

for (let i = 0; i < text.length; i++) {             // Loop through each character
    if (text[i] === " ") {                          // If space found
        if (currentWord !== "") {                   // If current word is not empty
            wordsArray[wordsArray.length] = currentWord;  // Add to array manually
            currentWord = "";                        // Reset current word
        }
    } else {
        currentWord += text[i];                      // Build current word character by character
    }
}

// Add the last word if exists
if (currentWord !== "") {
    wordsArray[wordsArray.length] = currentWord;
}

console.log(wordsArray);        // Output: ['Hello', 'world', 'javascript', 'programming']




// Alternative manual approach using while loop
const text2 = "JavaScript is awesome";
const result = [];
let word = "";
let index = 0;

while (index < text2.length) {
    if (text2[index] === " ") {  // Space found
        if (word.length > 0) {   // If word has content
            result[result.length] = word;  // Add word to result
            word = "";           // Reset word
        }
    } else {
        word = word + text2[index];  // Build word character by character
    }
    index++;  // Move to next character
}

// Don't forget the last word
if (word.length > 0) {
    result[result.length] = word;
}

console.log(result);  // Output: ['JavaScript', 'is', 'awesome']
