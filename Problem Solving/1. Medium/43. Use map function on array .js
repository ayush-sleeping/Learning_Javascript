// use map function on array  :
// --------------------------------------------------------------------------------------------------------------::

function basicMap() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2); // Using built-in map to double each number
    function triple(number) { // Using built-in map with named function
        return number * 3;
    }
    const tripled = numbers.map(triple);
    console.log(doubled);
    console.log(tripled);
    return {doubled, tripled};
}
basicMap();


/*
EXPLANATION - HOW MAP FUNCTION WORKS:

1. WHAT IS MAP:
   - map() creates a NEW array by transforming each element
   - It doesn't change the original array
   - It applies a function to every element and collects results
2. ARROW FUNCTION SYNTAX:
   - num => num * 2 means "take num and return num * 2"
   - This is shorter way to write: function(num) { return num * 2; }
3. HOW MAP PROCESSES:
   - numbers = [1, 2, 3, 4, 5]
   - For each number, apply the transformation function
   - num=1: 1*2=2, num=2: 2*2=4, num=3: 3*2=6, etc.
   - Result: [2, 4, 6, 8, 10]
4. NAMED FUNCTION WITH MAP:
   - function triple(number) { return number * 3; }
   - numbers.map(triple) passes the function name (no parentheses!)
   - Map calls triple() for each element
5. KEY POINTS:
   - Original array stays unchanged
   - New array has same length as original
   - Each element gets transformed by the function
   - Always returns a new array
*/

// Manual Map Implementation
// ------------------------------------------------------------------------------------
function createCustomMap() {

    function customMap(array, transformFunction) { // Manual implementation of map function
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const transformedValue = transformFunction(array[i], i, array);
            result[result.length] = transformedValue;
        }
        return result;
    }

    const numbers = [1, 2, 3, 4, 5]; // Test with different transformations
    const squared = customMap(numbers, (num) => num * num); // Square each number
    const withIndex = customMap(numbers, (num, index) => num + index); // Add index to each number
    const strings = customMap(numbers, (num) => `Number: ${num}`); // Convert to strings

    console.log("Original:", numbers);
    console.log("Squared:", squared);
    console.log("With Index:", withIndex);
    console.log("As Strings:", strings);

    return { squared, withIndex, strings };
}

createCustomMap();

/*
MANUAL MAP IMPLEMENTATION:

1. FUNCTION SIGNATURE:
   - function customMap(array, transformFunction)
   - Takes an array and a function to apply to each element
2. CREATE RESULT ARRAY:
   - const result = []; creates empty array for results
3. LOOP THROUGH ORIGINAL:
   - for (let i = 0; i < array.length; i++) goes through each element
   - i is the current index
4. APPLY TRANSFORMATION:
   - transformFunction(array[i], i, array) calls the function
   - Passes: current element, current index, whole array
   - Same parameters as built-in map function
5. STORE RESULT:
   - result[result.length] = transformedValue adds to end
   - This is manual way of doing result.push()
TRACE EXAMPLE - Squaring [1, 2, 3]:
- i=0: transformFunction(1, 0, [1,2,3]) → 1*1=1, result=[1]
- i=1: transformFunction(2, 1, [1,2,3]) → 2*2=4, result=[1,4]
- i=2: transformFunction(3, 2, [1,2,3]) → 3*3=9, result=[1,4,9]
- Return: [1, 4, 9]
6. WHY INDEX AND ARRAY PARAMETERS:
   - (num, index) => num + index uses both value and position
   - Some transformations need to know position or access other elements
   - Built-in map provides these, so our custom version should too
*/
