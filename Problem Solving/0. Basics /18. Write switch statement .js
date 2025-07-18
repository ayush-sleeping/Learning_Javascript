// Write switch statement  :
// --------------------------------------------------------------------------------------------------------------::

// Basic switch statement with numbers
// ------------------------------------------------------------------------
const day = 3;
switch (day) {  // Evaluate day variable
    case 1:
        console.log("Monday");
        break;  // Exit switch after match
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");  // This case will execute
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
}

// Switch with multiple cases for same result (fall-through)
// ------------------------------------------------------------------------
const month = 12;
switch (month) {
    case 12:  // December
    case 1:   // January
    case 2:   // February - all fall through to Winter
        console.log("Winter");
        break;  // Break after executing Winter
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");  // Executes if no case matches
}

// Switch without break - intentional fall-through for permissions
// ------------------------------------------------------------------------
const userRole = "admin";
let permissions = [];

switch (userRole) {
    case "admin":
        permissions.push("delete");  // Admin gets delete permission
    case "editor":                   // No break - falls through from admin
        permissions.push("edit");    // Admin also gets edit permission
    case "viewer":                   // No break - falls through from editor
        permissions.push("read");    // Admin also gets read permission
        break;                       // Finally break to stop execution
    default:
        permissions = ["read"];      // Default permission for unknown roles
}
console.log(userRole + ":", permissions);  // Output: admin: ['delete', 'edit', 'read']
