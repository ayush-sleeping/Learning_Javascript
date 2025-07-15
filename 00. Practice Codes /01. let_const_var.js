// Declaring a variable and assigning it the value ::
const accountId = 144553;
let accountEmail = "ayush@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// The following line of code would cause an error, because we cannot change the value of a constant variable ::
// accountId = 2; // not allowed !

// Updating the values ::
accountEmail = "abm@gmail.com";
accountPassword = "212121";
accountCity = "Delhi";

// Log the value of accountId to the console ::
console.log(accountId);

// Log the values of accountId, accountEmail, accountPassword, accountCity, and accountState in a table format ::
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var, 
because of issues in block scope and functional scope. 
So, we should prefer using let or const over var.
*/