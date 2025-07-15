// Switch statement ::
/*
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
It is often used as an alternative to multiple if-else statements when you need to compare a single value against multiple possible values.
The switch statement can improve code readability and organization, especially when dealing with multiple conditions based on the same variable or expression.
It is important to note that the switch statement uses strict equality (===) for comparisons, meaning
that both the value and type must match for a case to be executed.
*/


// -----------------------------------------------::


// Example of a switch statement in JavaScript:
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day"); // This will execute if none of the cases match
}
