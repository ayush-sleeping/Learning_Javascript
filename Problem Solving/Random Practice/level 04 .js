// ------------------------:: Revision and Practice the ESSENTIAL ::------------------------
//  Problem 1: Write a function to calculate factorial.
//  Problem 2: Calculate simple interest using function
//  Problem 3: Count words in a sentence
//  Problem 4: Find sum of digits of a number using a function
//  Problem 5: Check if number is Armstrong number
//  Problem 6: Print pattern of stars using a function
//  Problem 7: Check if string contains only digits
// Problem 8: Write a function to check prime number.
// Problem 9: Write a function to generate Fibonacci series.
// Problem 10: Write a function to find GCD of two numbers.
// Problem 11: Write a function to find unique elements in an array.
// Problem 12: Find the largest word in a sentence.
// Problem 13: Find the reverse of an array.
// Problem 14: Find the sum of all prime numbers up to N.
// Problem 15: Find the missing number in an array from 1 to N.
// Problem 16: Find the longest palindrome in a string.
// ------------------------ :: ----------------------------------- :: -----------------------





//  Problem 1: Write a function to calculate factorial.
// Approach (step-wise):
// Contract:
//    - Input: a single number `n` (expected a non-negative integer).
//    - Output: factorial of n (n!), which is the product of all integers from 1 to n.
//    - Error modes: if n is negative or not an integer, we will return null and print a helpful message.
// Quick math reminder:
//    - 0! = 1 (by definition).
//    - n! = n * (n-1) * (n-2) * ... * 1 for n >= 1.
// Steps to implement:
//    a. Validate input: check type, integer-ness, and non-negativity.
//    b. If n is 0 return 1 immediately.
//    c. Initialize result = 1. Loop i from 1 to n, multiply result by i each step.
//    d. Return result.
// Edge cases to consider:
//    - Negative numbers → invalid (return null).
//    - Non-integer numbers → invalid (return null).
//    - Very large n → results may overflow number range (JS uses 64-bit float for numbers).

function factorial(n) {

    if (typeof n !== 'number') {
        console.log("Invalid input: not a number");
        return null;
    }

    if (n % 1 !== 0) {
        console.log("Invalid input: not an integer");
        return null;
    }

    if (n < 0) {
        console.log("Invalid input: negative number");
        return null;
    }

    if (n === 0) {
        return 1;
    }

    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5)); // 120




console.log("------------------------------------ ::");
//  Problem 2: Calculate simple interest using function
// Formula: SI = (Principal × Rate × Time) / 100
// Example: Principal=1000, Rate=5%, Time=2 years → SI = 100

// - Inputs:
//    principal: number (amount, >= 0)
//    rate: number (annual rate in percent, e.g., 5 for 5%)
//    time: number (time in years, >= 0; fractional years allowed)
// - Output: simple interest as a number (or null for invalid input)
// - Error modes: return null and print a helpful message for invalid inputs

// Approach (step-wise):
// 1. Validate inputs: all must be numbers and non-negative. Rate can be zero or positive.
// 2. Use formula SI = (principal * rate * time) / 100.
// 3. Return the computed SI.
// 4. Note: If user passes rate as a decimal (0.05), mention they should pass percent (5).

function simpleInterest(principal, rate, time) {

    if (typeof principal !== 'number' || typeof rate !== 'number' || typeof time !== 'number') {
        console.log("Invalid inputs");
        return null;
    }

    if (principal < 0 || rate < 0 || time < 0) {
        console.log("Invlaid inputs");
        return null;
    }

    var si = (principal * rate * time / 100);
    return si;
}
console.log(simpleInterest(1500, 7, 1));




console.log("------------------------------------ ::");
//  Problem 3: Count words in a sentence
// Count number of words (separated by spaces)
// Example: "Hello world how are you" → 5 words
//
// - Input: sentence (string)
// - Output: number (count of words). Returns 0 for empty or all-space strings.
// - Error: if input is not a string, prints a message and returns null.
//
// Approach (step-wise):
// 1. Validate input is a string.
// 2. Use a loop to scan characters left-to-right.
// 3. Track whether the previous character was a space (prevWasSpace).
// 4. When we see a non-space character and prevWasSpace is true, we found the start of a word -> increment count and set prevWasSpace=false.
// 5. When we see a space character, set prevWasSpace=true.
// 6. This handles single, multiple, leading and trailing spaces without using built-ins.
//
// Note: treat ' ', '\t', '\n' as whitespace for robustness.

function countWords(sentence) {

    // validate input
    if (typeof sentence !== 'string') {
        console.log("Invalid input");
        return null;
    }

    // initialize variables
    var wordCount = 0; // Keeps track of words
    var prevWasSpace = true; // Tracks if the last character was space

    // Loop through each character in the sentence
    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i];

        // Check if current character is whitespace
        var isSpace = (ch === ' ' || ch === '\t' || ch === '\n');

        // Detect start of a new word
        if (!isSpace && prevWasSpace) {
            wordCount++; // Found a new word
            prevWasSpace = false;
        }
        // If it's space, mark as outside a word
        else if (isSpace) {
            prevWasSpace = true;
        }
    }
    // Return total words counted

    return wordCount;
}
console.log(countWords("Hello world how are you")); // Output: 5




console.log("------------------------------------ ::");
//  Problem 4: Find sum of digits of a number using a function
// Example: 1234 → 1+2+3+4 = 10

// - Input: num (expected a non-negative integer).
// - Output: sum of its digits (e.g., 1234 → 10). Returns null for invalid input.
// - Error modes: if num is not a number, not an integer, or negative, return null with a message.

// Approach (step-wise):
// 1. Validate input: check type, integer-ness, and non-negativity.
// 2. Initialize sum = 0.
// 3. While num > 0:
//    a. Extract last digit: lastDigit = num % 10.
//    b. Add lastDigit to sum.
//    c. Remove last digit: num = (num - lastDigit) / 10 (integer division).
// 4. Return sum.
// 5. Edge cases: 0 → sum=0, negative → invalid, non-integer → invalid.

function sumOfDigits(num) {

    // validate
    if (typeof num !== 'number') {
        console.log("Invalid Input");
        return null;
    }
    if (num % 1 !== 0) {
        console.log("Expected an integer");
        return null;
    }
    if (num < 0) {
        console.log("Expecting an positive number");
        return null;
    }

    var sum = 0;
    var originalNum = num;

    // Loop to extract and sum digits
    while (num > 0) {
        var lastDigit = num % 10; // Get last digit (e.g., 1234 % 10 = 4)
        sum = sum + lastDigit;     // Add to sum
        num = (num - lastDigit) / 10; // Remove last digit (e.g., 1234 → 123)
    }

    return sum;
}
console.log(sumOfDigits(1234)); // 10




console.log("------------------------------------ ::");
//  Problem 5: Check if number is Armstrong number
// Armstrong: sum of cubes of digits equals the number
// Example: 153 → 1³+5³+3³ = 1+125+27 = 153 (true)

// - Input: num (expected a non-negative integer).
// - Output: true if Armstrong, false otherwise. Returns null for invalid input.
// - Error modes: if num is not a number, not an integer, or negative, return null with a message.

// Approach :
// 1. Validate input: check type, integer-ness, and non-negativity.
// 2. Initialize sum = 0.
// 3. Make a copy of num to extract digits without modifying original.
// 4. While copy > 0:
//    a. Extract last digit: lastDigit = copy % 10.
//    b. Calculate cube: cube = lastDigit * lastDigit * lastDigit.
//    c. Add cube to sum.
//    d. Remove last digit: copy = (copy - lastDigit) / 10.
// 5. Compare sum with original num: if equal, return true; else false.
// 6. Edge cases: 0 → true (0³=0), 1 → true (1³=1), negative → invalid, non-integer → invalid.

function isArmstrong(num) {
    // Input validation
    if (typeof num !== 'number') {
        console.log("Invalid input: expected a number.");
        return null;
    }
    if (num % 1 !== 0) {
        console.log("Invalid input: expected an integer.");
        return null;
    }
    if (num < 0) {
        console.log("Invalid input: expected a non-negative number.");
        return null;
    }

    var sum = 0;
    var copy = num; // Work on a copy to preserve original

    // Loop to extract digits and calculate sum of cubes
    while (copy > 0) {
        var lastDigit = copy % 10; // Get last digit (e.g., 153 % 10 = 3)
        var cube = lastDigit * lastDigit * lastDigit; // Calculate cube manually
        sum = sum + cube; // Add to sum
        copy = (copy - lastDigit) / 10; // Remove last digit (e.g., 153 → 15)
    }

    // Check if sum equals original number
    if (sum === num) {
        return true;
    } else {
        return false;
    }
}
console.log(isArmstrong(153)); // true




console.log("------------------------------------ ::");
//  Problem 6: Print pattern of stars using a function
// Print a triangle pattern of given height
// Example: height=4 →
// *
// **
// ***
// ****

// - Input: height (expected a positive integer).
// - Output: prints the star pattern to console. Returns nothing.
// - Error modes: if height is not a number, not an integer, or <= 0, print a message and return.

// Approach (step-wise):
// 1. Validate input: check type, integer-ness, and positivity.
// 2. Use nested loops:
//    a. Outer loop: for each row from 1 to height.
//    b. Inner loop: for each column in the row, print '*' up to the row number.
// 3. After inner loop, print a newline (console.log()).
// 4. Edge cases: height=1 → single *, height=0 or negative → invalid.

function printStarPattern(height) {

    // validate
    if (typeof height !== 'number') {
        console.log("Invalid");
        return null;
    }
    if (height % 1 !== 0) {
        console.log("Invalid");
        return null;
    }
    if (height <= 0) {
        console.log("Invalid");
        return null;
    }

    // Outer loop for each row
    for (var row = 1; row <= height; row++) {
        var line = ""; // Build the line for this row
        // Inner loop to add stars for this row
        for (var col = 1; col <= row; col++) {
            line = line + "*"; // Append a star
        }
        // Print the line
        console.log(line);
    }
}
printStarPattern(4);
console.log("---");
printStarPattern(3);




console.log("------------------------------------ ::");
//  Problem 7: Check if string contains only digits
// Example: "12345" → true, "123a45" → false

// - Input: s (expected a string).
// - Output: boolean: true if s contains only ASCII digits '0'..'9' and has at least one character; false if any non-digit or empty.
// - Error modes: if input is not a string, print a message and return null.

// Approach (step-wise):
// 1. Validate input is a string.
// 2. If the string is empty, return false (no digits present).
// 3. Loop over each character in the string.
//    a. For each character `ch`, check if it lies between '0' and '9' using simple character comparisons.
//    b. If any character is outside this range, return false immediately.
// 4. If the loop finishes, all characters were digits → return true.
// Note: This checks only ASCII digits 0-9. It treats spaces, signs, decimals and other unicode digits as non-digit.

function containsOnlyDigits(s) {
    // validate
    if (typeof s !== 'string') {
        console.log("Invalid input");
        return null;
    }
    // Empty string has no digits -> return false
    if (s.length === 0) {
        return false;
    }

    // Check each character
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        // character comparison works: '0' <= ch <= '9' for ASCII digits
        if (!(ch >= '0' && ch <= '9')) {
            return false; // found a non-digit
        }
    }
    // All characters are digits
    return true;
}
console.log(containsOnlyDigits("12345"));   // true
console.log(containsOnlyDigits("123a45"));  // false


console.log("------------------------------------ ::");
// Problem 8: Write a function to check prime number.

// - Input: num (expected a positive integer >= 2).
// - Output: true if prime, false otherwise. Returns null for invalid input.
// - Error modes: if num is not a number, not an integer, or < 2, return null with a message.

// Approach (step-wise):
// 1. Validate input: check type, integer-ness, and >= 2.
// 2. Handle edge cases: 2 is prime, 1 is not prime.
// 3. For num >= 3, check divisibility by numbers from 2 to num/2 (no need to go higher).
//    - If any divisor found, return false.
// 4. If no divisors found, return true.
// 5. Edge cases: negative → invalid, 0/1 → not prime.

function isPrime(num) {
    // validate
    if (typeof num !== 'number' || num % 1 !== 0 || num < 2) {
        console.log("Invalid input");
        return null;
    }
    // 2 is the smallest prime
    if (num === 2) {
        return true;
    }
    // Check for even numbers > 2 (not prime)
    if (num % 2 === 0) {
        return false;
    }

    // Check divisibility from 3 to num/2, stepping by 2 (skip evens)
    // We start from 3 because:
    // - We already checked if num is even (divisible by 2) earlier.
    // - So, we only need to check odd numbers now (3, 5, 7, etc.).
    // We go up to num / 2 because:
    // - If num has a divisor larger than num/2, the other divisor would be smaller than 2.
    // - But the smallest divisor is 2, so no need to check beyond num/2.
    // Stepping by 2 (i = i + 2) means we only check odd numbers, skipping evens.
    for (var i = 3; i <= num / 2; i = i + 2) {
        // Check if num is divisible by i (no remainder when divided)
        if (num % i === 0) {
            // If yes, num has a divisor other than 1 and itself, so it's not prime
            return false; // found a divisor
        }
        // If not, continue to the next odd number
    }
    return true; // no divisors found
}
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false




console.log("------------------------------------ ::");
// Problem 9: Write a function to generate Fibonacci series.

// - Input: n (expected a positive integer, number of terms).
// - Output: array of first n Fibonacci numbers. Returns null for invalid input.
// - Error modes: if n is not a number, not an integer, or <= 0, return null with a message.

// Approach (step-wise):
// 1. Validate input: check type, integer-ness, and positivity.
// 2. If n === 1, return [0].
// 3. If n === 2, return [0, 1].
// 4. For n > 2, initialize array with [0, 1].
// 5. Loop from index 2 to n-1:
//    a. Next number = array[i-1] + array[i-2].
//    b. Push next number to array.
// 6. Return the array.
// 7. Edge cases: n=0 → invalid, negative → invalid.

function generateFibonacci(n) {
    // validate
    if (typeof n !== 'number' || n % 1 !== 0 || n <= 0) {
        console.log("Invalid Input");
        return null;
    }
    // Handle small n
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    // Initialize array with first two numbers
    var fib = [0, 1];

    // Generate remaining terms
    for (var i = 2; i < n; i++) {
        var next = fib[i - 1] + fib[i - 2]; // Sum of last two
        fib[i] = next; // Add to array
    }

    return fib;
}
console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(1)); // [0]




console.log("------------------------------------ ::");
// Problem 10: Write a function to find GCD of two numbers.

// - Input: a, b (expected positive integers).
// - Output: GCD of a and b (largest number that divides both). Returns null for invalid input.
// - Error modes: if a or b is not a number, not an integer, or <= 0, return null with a message.

// Approach (step-wise):
// 1. Validate inputs: check type, integer-ness, and positivity for both a and b.
// 2. Use the basic Euclidean algorithm (manual, no recursion):
//    a. While b is not zero:
//        - temp = b
//        - b = a % b
//        - a = temp
//    b. When b becomes zero, a is the GCD.
// 3. Return a as the result.

function findGCD(a, b) {
    // validate
    if (typeof a !== 'number' || typeof b !== 'number' || a % 1 !== 0 || b % 1 !== 0 || a <= 0 || b <= 0) {
        console.log("Invalid Input");
        return null;
    }

    // Loop to find GCD using Euclidean algorithm
    while (b !== 0) {
        var temp = b; // Store current value of b in temp
        b = a % b;  // Update b to be the remainder of a divided by b
        a = temp; // Set a to the previous value of b (from temp), This moves the smaller number up for the next iteration
        // Repeat until b becomes 0
    }
    return a;  // When b is 0, a holds the GCD of the original two numbers
}
console.log(findGCD(12, 18)); // 6
console.log(findGCD(100, 25)); // 25




console.log("------------------------------------ ::");
// Problem 11: Write a function to find unique elements in an array.

// Approach (step-wise):
//   - Input: arr (expected an array of numbers or strings)
//   - Output: a new array containing only the unique elements (no duplicates)
//   - Error modes: if arr is not an array or is empty, return [] and print a message
//
// Steps to implement:
//   1. Validate input: check if arr is an array and has at least one element
//   2. Create a new array to store unique elements (uniqueArr)
//   3. For each element in arr:
//        a. Assume it's unique (set isUnique = true)
//        b. Loop through uniqueArr to check if the element already exists
//        c. If found, set isUnique = false and break out of the loop
//        d. If isUnique is still true, add the element to uniqueArr
//   4. Return uniqueArr

function findUniqueElements(arr) {
    // validate
    if (!arr || typeof arr.length !== 'number') {
        console.log("Invalid Inputs");
        return [];
    }
    if (arr.length === 0) {
        return [];
    }

    // Create array to store unique elements
    var uniqueArr = [];

    // Loop through each element in arr
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        var isUnique = true; // Assume current element is unique

        // Check if current exists in uniqueArr
        for (var j = 0; j < uniqueArr.length; j++) {
            if (uniqueArr[j] === current) {
                isUnique = false; // Found duplicate
                break; // No need to check further
            }
        }

        // If still unique, add to uniqueArr
        if (isUnique) {
            uniqueArr[uniqueArr.length] = current;
        }
    }

    // Return the array of unique elements
    return uniqueArr;
}
console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(findUniqueElements(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]
console.log(findUniqueElements([])); // []




console.log("------------------------------------ ::");
// Problem 12: Find the largest word in a sentence.

// Approach (step-wise):
//   - Input: sentence (expected a string)
//   - Output: the largest word (string) in the sentence; if multiple, return the first largest
//   - Error modes: if input is not a string or is empty, return "" and print a message
//
// Steps to implement:
//   1. Validate input: check if sentence is a string and not empty
//   2. Loop through each character to manually split words (words are separated by spaces)
//   3. Track the current word and compare its length to the largest found so far
//   4. After the loop, check the last word (if sentence doesn't end with space)
//   5. Return the largest word

function findLargestWord(sentence) {
    // validate
    if (typeof sentence !== 'string') {
        console.log("Invalid Input");
        return "";
    }
    if (sentence.length === 0) {
        return "";
    }

    var largestWord = ""; // Stores the largest word found
    var currentWord = ""; // Builds the current word character by character

    // Loop through each character
    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i];

        // Check for space (word separator)
        if (ch === ' ' || ch === '\t' || ch === '\n') {
            // End of a word
            if (currentWord.length > largestWord.length) {
                largestWord = currentWord; // Update largest if current is longer
            }
            currentWord = ""; // Reset for next word
        } else {
            // Add character to current word
            currentWord = currentWord + ch;
        }
    }

    // Check last word (if sentence doesn't end with space)
    if (currentWord.length > largestWord.length) {
        largestWord = currentWord;
    }

    // Return the largest word
    return largestWord;
}
console.log(findLargestWord("I am learning JavaScript now")); // "JavaScript"
console.log(findLargestWord("Hello world")); // "Hello"
console.log(findLargestWord("a ab abc abcd abcde")); // "abcde"


console.log("------------------------------------ ::");
// Problem 13: Find the reverse of an array.

// Approach (step-wise):
//   - Input: arr (expected an array of numbers or strings)
//   - Output: a new array containing the elements of arr in reverse order
//   - Error modes: if arr is not an array or is empty, return [] and print a message
//
// Steps to implement:
//   1. Validate input: check if arr is an array and has at least one element
//   2. Create a new array to store reversed elements (reversedArr)
//   3. Loop through arr from the last element to the first
//   4. Add each element to reversedArr
//   5. Return reversedArr

function reverseArray(arr) {
    if (!arr || typeof arr.length !== 'number') {
        console.log("Invalid Input");
        return [];
    }
    if (arr.length === 0) {
        return [];
    }

    // Create array to store reversed elements
    var reversedArr = [];

    // Loop from last to first element
    for (var i = arr.length - 1; i >= 0; i--) {
        // Add current element to reversedArr
        reversedArr[reversedArr.length] = arr[i];
    }

    // Return the reversed array
    return reversedArr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]



console.log("------------------------------------ ::");
// Problem 14: Find the sum of all prime numbers up to N.

// Approach (step-wise):
//   - Input: N (expected a positive integer >= 2)
//   - Output: sum of all prime numbers from 2 up to N (inclusive)
//   - Error modes: if N is not a number, not an integer, or < 2, return 0 and print a message
//
// Steps to implement:
//   1. Validate input: check type, integer-ness, and N >= 2
//   2. Loop from 2 to N
//   3. For each number, check if it is prime (manual check, no built-ins)
//   4. If prime, add to sum
//   5. Return the sum

function sumOfPrimes(N) {
    // validate
    if (typeof N !== 'number' || N % 1 !== 0 || N < 2) {
        console.log("Invalid Input");
        return 0;
    }
    var sum = 0; // Stores the sum of primes
    // Loop from 2 to N
    for (var num = 2; num <= N; num++) {
        var isPrime = true; // Assume num is prime
        // Check if num is prime
        // Only need to check divisibility up to num/2
        for (var i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false; // Found a divisor, not prime
                break;
            }
        }
        // If prime, add to sum
        if (isPrime) {
            sum = sum + num;
        }
    }
    // Return the sum
    return sum;
}
console.log(sumOfPrimes(10)); // 17 (2 + 3 + 5 + 7)
console.log(sumOfPrimes(20)); // 77
console.log(sumOfPrimes(1));  // 0



console.log("------------------------------------ ::");
// Problem 15: Find the missing number in an array from 1 to N.

// Approach (step-wise):
//   - Input: arr (array of numbers, length N-1), N (expected positive integer)
//   - Output: the missing number from 1 to N
//   - Error modes: if arr is not an array, N is not a positive integer, or arr length != N-1, return null and print a message
//
// Steps to implement:
//   1. Validate input: arr is array, N is positive integer, arr.length == N-1
//   2. Calculate expected sum of numbers from 1 to N (formula: N*(N+1)/2)
//   3. Calculate actual sum of elements in arr (manual loop)
//   4. The missing number is (expected sum - actual sum)
//   5. Return the missing number

function findMissingNumber(arr, N) {
    // validate
    if (!arr || typeof arr.length !== 'number' || typeof N !== 'number' || N % 1 !== 0 || N <= 0 || arr.length !== N - 1) {
        console.log("Invalid input");
        return null;
    }

    // Calculate expected sum from 1 to N
    var expectedSum = N * (N + 1) / 2;
    // Calculate actual sum of elements in arr
    var actualSum = 0;
    for (var i = 0; i < arr.length; i++) {
        actualSum = actualSum + arr[i];
    }
    // Find the missing number
    var missingNumber = expectedSum - actualSum;
    // Return the missing number
    return missingNumber;
}
console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3
console.log(findMissingNumber([2, 3, 1, 5], 5)); // 4
console.log(findMissingNumber([1], 2)); // 2
console.log(findMissingNumber([], 1)); // 1




console.log("------------------------------------ ::");
// Problem 16: Find the longest palindrome in a string.

// Approach (step-wise):
//   - Input: s (expected a string)
//   - Output: the longest palindrome substring in s (if multiple, return the first longest)
//   - Error modes: if s is not a string or is empty, return "" and print a message
//
// Steps to implement:
//   1. Validate input: check if s is a string and not empty
//   2. For each possible substring in s:
//        a. For every start index, try every possible end index (start <= end)
//        b. For each substring, check if it is a palindrome (manual check, no built-ins)
//        c. If palindrome and longer than current longest, update longest
//   3. Return the longest palindrome found

function findLongestPalindrome(s) {
    // validate
    if (typeof s !== 'string') {
        console.log("Invalid Input");
        return "";
    }
    if (s.length === 0) {
        return "";
    }
    var longest = ""; // Stores the longest palindrome found

    // Try every possible substring
    for (var start = 0; start < s.length; start++) {
        for (var end = start; end < s.length; end++) {
            // Build substring manually
            var sub = "";
            for (var k = start; k <= end; k++) {
                sub = sub + s[k];
            }

            // Check if sub is a palindrome (manual two-pointer check)
            var left = 0;
            var right = sub.length - 1;
            var isPalindrome = true;
            while (left < right) {
                if (sub[left] !== sub[right]) {
                    isPalindrome = false;
                    break;
                }
                left = left + 1;
                right = right - 1;
            }

            // If palindrome and longer than current longest, update longest
            if (isPalindrome && sub.length > longest.length) {
                longest = sub;
            }
        }
    }

    // Return the longest palindrome found
    return longest;
}
console.log(findLongestPalindrome("babad")); // "bab" or "aba"
console.log(findLongestPalindrome("cbbd"));  // "bb"
console.log(findLongestPalindrome("racecar")); // "racecar"
console.log(findLongestPalindrome("a")); // "a"
console.log(findLongestPalindrome("")); // ""
