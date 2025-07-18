// reverse a number  :
// --------------------------------------------------------------------------------------------------------------::

// Most Basic - Reverse Number Digits (129 → 921)


let number = 129;                                              // Our number to reverse
let numberString = number.toString();                          // Convert number to string to access individual digits
let reversedNumberString = "";                                 // String to store reversed digits
for (let i = numberString.length - 1; i >= 0; i--) {           // Start from last digit, go backwards
    reversedNumberString = reversedNumberString + numberString[i];  // Add each digit to result string
}
let reversedNumber = parseInt(reversedNumberString);           // Convert string back to number
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
