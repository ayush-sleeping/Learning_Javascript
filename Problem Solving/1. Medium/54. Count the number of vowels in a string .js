// Q. Count the number of vowels in a string :
// --------------------------------------------------------------------------------------------------------------::

// Logic or sudo code :
/*
1. Initialize a counter variable to 0.
2. Convert the string to lowercase to handle case insensitivity.
3. Loop through each character in the string.
4. Check if the character is a vowel (a, e, i, o, u).
5. If it is a vowel, increment the counter.
6. After the loop, print the counter value.
*/
const str = "Your interview is scheduled for tomorrow.";
let count = 0;
for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase(); // Convert character to lowercase for case-insensitive comparison
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
}
console.log("Number of vowels:", count);

/*
1. Initialize a Set to store vowels for efficient lookup.
2. Convert the string to lowercase to handle case insensitivity.
3. Loop through each character in the string.
4. Check if the character is in the Set of vowels.
5. If it is, increment the counter.
6. After the loop, print the counter value.
 */
const str2 = "Your interview is scheduled for tomorrow.";
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
let count2 = 0;
for (const char of str2.toLowerCase()) { // Convert the string to lowercase and
    if (vowels.has(char)) {
        count2++;
    }
}
console.log("Number of vowels:", count2);

/*
1. Use a regular expression to match all vowels in the string.
2. Use the match method to find all occurrences of vowels.
3. If matches are found, get the length of the matches array.
4. If no matches are found, return 0.
5. Print the count of vowels.
 */
const str3 = "Your interview is scheduled for tomorrow.";
const count3 = str3.match(/[aeiou]/gi)?.length || 0; // Use regex to match vowels
console.log("Number of vowels:", count3); // Output: Number of vowels: 10
