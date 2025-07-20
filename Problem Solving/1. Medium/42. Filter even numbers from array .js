// filter even numbers from array  :
// --------------------------------------------------------------------------------------------------------------::

function filterEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
const numbers1 = [11, 22, 33, 44, 55, 66];
console.log("Level 1 - Basic:", filterEvenNumbers(numbers1));

/*
EXPLANATION - HOW MODULO WORKS:
Step by step breakdown:

1. CREATE EMPTY ARRAY:
   - const evenNumbers = []; creates an empty array to store results

2. LOOP THROUGH EACH NUMBER:
   - for (let i = 0; i < arr.length; i++) goes through each index
   - i starts at 0, goes until array length, increases by 1 each time

3. MODULO OPERATOR (%) EXPLAINED:
   - arr[i] % 2 divides the number by 2 and gives the REMAINDER
   - Example: 22 % 2 = 0 (22 ÷ 2 = 11 remainder 0)
   - Example: 11 % 2 = 1 (11 ÷ 2 = 5 remainder 1)
   - If remainder is 0, number is EVEN
   - If remainder is 1, number is ODD

4. CHECK IF EVEN:
   - if (arr[i] % 2 === 0) means "if remainder is exactly 0"
   - Only even numbers pass this test

5. ADD TO RESULT:
   - evenNumbers.push(arr[i]) adds the even number to our result array

TRACE EXAMPLE with [11, 22, 33]:
- i=0: arr[0]=11, 11%2=1, 1≠0, so skip
- i=1: arr[1]=22, 22%2=0, 0===0, so add 22 to result
- i=2: arr[2]=33, 33%2=1, 1≠0, so skip
- Result: [22]
*/

// Using Subtraction Method
// ------------------------------------------------------------------------------------
function filterEvenCompletelyManual(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isEven = false;
        // Handle negative numbers
        if (num < 0) {
            num = -num; // Make positive for checking
        }
        // Manual even check using subtraction
        if (num === 0) {
            isEven = true;
        } else {
            let temp = num;
            while (temp >= 2) {
                temp = temp - 2;
            }
            // If temp is 0, number is even. If temp is 1, number is odd
            isEven = (temp === 0);
        }
        if (isEven) {
            result[result.length] = arr[i]; // Use original number (with sign)
        }
    }

    return result;
}
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Level 2 - Subtraction:", filterEvenCompletelyManual(numbers2));

/*
HOW SUBTRACTION METHOD WORKS:
Step by step breakdown:

1. HANDLE NEGATIVE NUMBERS:
   - if (num < 0) { num = -num; } makes negative numbers positive
   - Example: -4 becomes 4 for checking
   - We remember original number in arr[i] for final result

2. SPECIAL CASE FOR ZERO:
   - if (num === 0) { isEven = true; } because 0 is even

3. SUBTRACTION LOGIC:
   - Keep subtracting 2 from the number until we can't anymore
   - while (temp >= 2) means "while temp is 2 or bigger"
   - temp = temp - 2 subtracts 2 each time

4. DETERMINE EVEN/ODD:
   - After subtracting, we're left with either 0 or 1
   - If we get 0, original number was EVEN
   - If we get 1, original number was ODD

TRACE EXAMPLE with number 6:
- temp = 6
- temp >= 2? Yes, so temp = 6 - 2 = 4
- temp >= 2? Yes, so temp = 4 - 2 = 2
- temp >= 2? Yes, so temp = 2 - 2 = 0
- temp >= 2? No (0 < 2), so stop
- temp = 0, so 6 is EVEN

TRACE EXAMPLE with number 7:
- temp = 7
- temp >= 2? Yes, so temp = 7 - 2 = 5
- temp >= 2? Yes, so temp = 5 - 2 = 3
- temp >= 2? Yes, so temp = 3 - 2 = 1
- temp >= 2? No (1 < 2), so stop
- temp = 1, so 7 is ODD

5. ADD TO RESULT:
   - result[result.length] = arr[i] adds original number (with sign)
   - result.length gives us the next empty position in array
*/

// Using Last Digit Method
// ------------------------------------------------------------------------------------
function filterEvenSimpleManual(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // Check if last digit is even (0, 2, 4, 6, 8)
        let lastDigit = num;
        if (lastDigit < 0) {
            lastDigit = -lastDigit; // Handle negative
        }
        // Get last digit by finding remainder when divided by 10
        while (lastDigit >= 10) {
            lastDigit = lastDigit - 10;
        }
        // Check if last digit is even
        if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
            result[result.length] = num;
        }
    }

    return result;
}
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Level 3 - Last Digit:", filterEvenSimpleManual(numbers3));

/*
HOW LAST DIGIT METHOD WORKS:
Mathematical rule: A number is even if its last digit is even (0,2,4,6,8)

Step by step breakdown:

1. HANDLE NEGATIVE NUMBERS:
   - if (lastDigit < 0) { lastDigit = -lastDigit; }
   - -234 becomes 234 for checking last digit

2. GET LAST DIGIT BY SUBTRACTION:
   - while (lastDigit >= 10) keeps running while number is 10 or bigger
   - lastDigit = lastDigit - 10 removes groups of 10

TRACE EXAMPLE with number 1234:
- lastDigit = 1234
- 1234 >= 10? Yes, so lastDigit = 1234 - 10 = 1224
- 1224 >= 10? Yes, so lastDigit = 1224 - 10 = 1214
- ... (this continues many times)
- 14 >= 10? Yes, so lastDigit = 14 - 10 = 4
- 4 >= 10? No, so stop
- lastDigit = 4

3. CHECK IF LAST DIGIT IS EVEN:
   - lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8
   - This checks if last digit is any of the even digits
   - If yes, the whole number is even

WHY THIS WORKS:
- 1234 ends in 4, and 4 is even, so 1234 is even
- 1235 ends in 5, and 5 is odd, so 1235 is odd
- The last digit determines if whole number is even or odd
*/

// USING MATH.FLOOR (Fixed Division Method)
// ------------------------------------------------------------------------------------
function filterEvenManual(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // Fixed manual even check: use Math.floor to handle decimals
        let divided = Math.floor(num / 2);
        let multipliedBack = divided * 2;
        if (multipliedBack === num) {
            result[result.length] = num; // Manual push without .push()
        }
    }

    return result;
}

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Level 4 - Math.floor:", filterEvenManual(numbers4));

/*
HOW MATH.FLOOR DIVISION METHOD WORKS:
This method divides by 2, removes decimals, multiplies back, and checks if we get original number

Step by step breakdown:

1. DIVIDE BY 2:
   - let divided = Math.floor(num / 2)
   - Math.floor() removes decimal part (rounds down)

2. MULTIPLY BACK:
   - let multipliedBack = divided * 2
   - Multiply the whole number by 2

3. COMPARE WITH ORIGINAL:
   - if (multipliedBack === num) checks if we get original number back

TRACE EXAMPLE with EVEN number 6:
- num = 6
- divided = Math.floor(6 / 2) = Math.floor(3) = 3
- multipliedBack = 3 * 2 = 6
- 6 === 6? Yes, so 6 is EVEN

TRACE EXAMPLE with ODD number 7:
- num = 7
- divided = Math.floor(7 / 2) = Math.floor(3.5) = 3
- multipliedBack = 3 * 2 = 6
- 6 === 7? No, so 7 is ODD

WHY THIS WORKS:
- Even numbers divide evenly by 2 (no remainder)
- Odd numbers have 0.5 remainder when divided by 2
- Math.floor removes the 0.5, so when we multiply back, we lose 1
- If we get original number back, it had no remainder (even)
- If we don't get original back, it had remainder (odd)

WHY WE NEED Math.floor:
- Without Math.floor: 7/2 = 3.5, then 3.5*2 = 7 (wrong result!)
- With Math.floor: 7/2 = 3.5, Math.floor(3.5) = 3, then 3*2 = 6 ≠ 7 (correct!)
*/
