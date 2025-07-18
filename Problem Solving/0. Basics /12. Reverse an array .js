// Reverse an array :
// --------------------------------------------------------------------------------------------------------------::

// Example 1: Most Basic - Reverse Word Characters (college → egelloc)
// ------------------------------------------------------------------------
let word = "college";                                        // Our word to reverse
let reversedWord = "";                                       // Empty string to store result
for (let i = word.length - 1; i >= 0; i--) {               // Start from last character, go backwards
    reversedWord = reversedWord + word[i];                  // Add each character to result
}
console.log("Original word:", word);                        // Output: "college"
console.log("Reversed word:", reversedWord);                // Output: "egelloc"

/*
Step-by-step execution for "college":
- word = "college" (length = 7)
- reversedWord = ""
- Loop starts from i=6 (last index) and goes backwards to i=0

Loop 1: i=6, word[6]="e", reversedWord = "" + "e" = "e"
Loop 2: i=5, word[5]="g", reversedWord = "e" + "g" = "eg"
Loop 3: i=4, word[4]="e", reversedWord = "eg" + "e" = "ege"
Loop 4: i=3, word[3]="l", reversedWord = "ege" + "l" = "egel"
Loop 5: i=2, word[2]="l", reversedWord = "egel" + "l" = "egell"
Loop 6: i=1, word[1]="o", reversedWord = "egell" + "o" = "egello"
Loop 7: i=0, word[0]="c", reversedWord = "egello" + "c" = "egelloc"
*/



// Example 2: Reverse word order in a sentence (hii how are you doing! → doing! you are how hii)
// ------------------------------------------------------------------------
let sentence = "hii how are you doing!";                   // Our sentence to reverse word order
let words = [];                                             // Array to store individual words
let currentWord = "";                                       // String to build current word character by character


// First step: Split sentence into words manually (without using split() method)
for (let i = 0; i < sentence.length; i++) {                // Go through each character in sentence
    if (sentence[i] === " ") {                             // If we find a space character
        if (currentWord !== "") {                          // If we have built up a word (not empty)
            words[words.length] = currentWord;             // Add word to array manually at next position
            currentWord = "";                              // Reset currentWord for next word
        }
    } else {                                               // If character is not a space
        currentWord = currentWord + sentence[i];           // Add character to current word being built
    }
}
// Add the last word (since there's no space after the last word)
if (currentWord !== "") {                                  // If there's still a word being built
    words[words.length] = currentWord;                     // Add it to the words array
}

console.log("Original sentence:", sentence);               // Output: "hii how are you doing!"
console.log("Words array:", words);                        // Output: ["hii", "how", "are", "you", "doing!"]


// Second step: Reverse the order of words and build reversed sentence
let reversedSentence = "";                                 // String to store final reversed sentence
for (let i = words.length - 1; i >= 0; i--) {             // Start from last word, go backwards
    reversedSentence = reversedSentence + words[i];        // Add each word to reversed sentence
    if (i > 0) {                                           // If not the last word to add
        reversedSentence = reversedSentence + " ";         // Add space between words
    }
}

console.log("Reversed sentence:", reversedSentence);       // Output: "doing! you are how hii"

/*
Step-by-step execution for "hii how are you doing!":

Step 1 - Building words array:
- Character by character, when we hit space, we save the current word
- Final words array: ["hii", "how", "are", "you", "doing!"]

Step 2 - Reversing word order:
- i=4: reversedSentence = "" + "doing!" = "doing!"
- i=3: reversedSentence = "doing!" + " " + "you" = "doing! you"
- i=2: reversedSentence = "doing! you" + " " + "are" = "doing! you are"
- i=1: reversedSentence = "doing! you are" + " " + "how" = "doing! you are how"
- i=0: reversedSentence = "doing! you are how" + " " + "hii" = "doing! you are how hii"
*/
