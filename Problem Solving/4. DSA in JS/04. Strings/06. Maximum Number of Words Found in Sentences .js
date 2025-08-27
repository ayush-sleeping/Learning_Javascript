// Maximum Number of Words Found in Sentences
/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.


Example 1:
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation:
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

Example 2:
Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words.
In this example, the second and third sentences (underlined) have the same number of words.

*/


// Approach ::
// 1. Initialize a variable maxWords to 0. This will keep track of the maximum number of words found so far.
// 2. Loop through each sentence in the sentences array.
//    a. For each sentence, initialize a variable wordCount to 1 (since the first word won't have a space before it).
//    b. Loop through each character in the sentence.
//        i. If the character is a space (' '), increment wordCount by 1.
//    c. After counting words in the current sentence, compare wordCount with maxWords.
//        i. If wordCount is greater than maxWords, update maxWords.
// 3. After checking all sentences, return maxWords as the answer.

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {

    // Initialize a variable maxWords to 0
    var maxWords = 0;

    // Iterate through each sentence
    for (let i = 0; i < sentences.length; i++) {
        var sentence = sentences[i]; // Get the current sentence
        var wordCount = 1; // Initialize word count for the current sentence

        // Count the number of words in the current sentence
        for (var j = 0; j < sentence.length; j++) {
            // If the current character is a space, increment the word count
            if (sentence[j] === ' ') {
                wordCount = wordCount + 1;
            }
        }
        // Update maxWords if the current sentence has more words
        if (wordCount > maxWords) {
            maxWords = wordCount;
        }
    }
    // Return the maximum number of words found in a single sentence
    return maxWords;
};
