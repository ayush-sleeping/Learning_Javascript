// Reverse an array :
// --------------------------------------------------------------------------------------------------------------::

// Example 1: Most Basic - Reverse Word Characters (college → egelloc)
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


// --------------------------------------------------------------------------------------------------------------::


// Example 2: Reverse word order in a sentence (hii how are you doing! → doing! you are how hii)
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


// --------------------------------------------------------------------------------------------------------------::


// Example 3: Most Basic - Reverse Number Digits (129 → 921)
let number = 129;                                           // Our number to reverse
let numberString = number.toString();                      // Convert number to string to access individual digits
let reversedNumberString = "";                             // String to store reversed digits

for (let i = numberString.length - 1; i >= 0; i--) {      // Start from last digit, go backwards
    reversedNumberString = reversedNumberString + numberString[i];  // Add each digit to result string
}

let reversedNumber = parseInt(reversedNumberString);        // Convert string back to number
// Note: parseInt() removes any leading zeros automatically

console.log("Original number:", number);                   // Output: 129
console.log("Number as string:", numberString);            // Output: "129"
console.log("Reversed number string:", reversedNumberString); // Output: "921"
console.log("Reversed number:", reversedNumber);           // Output: 921

/*
Step-by-step execution for 129:
- number = 129
- numberString = "129" (length = 3)
- reversedNumberString = ""

Loop 1: i=2, numberString[2]="9", reversedNumberString = "" + "9" = "9"
Loop 2: i=1, numberString[1]="2", reversedNumberString = "9" + "2" = "92"
Loop 3: i=0, numberString[0]="1", reversedNumberString = "92" + "1" = "921"

parseInt("921") converts string "921" back to number 921
*/
