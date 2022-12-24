/* The "this" Keyword :

In JavaScript, this keyword refers to the current context. The this object
Always refers to a single object and it is usually used inside a function
or a method to access properties and methods which are a pert of the 
object which is associated with the function. */

console.clear();

var person = {
    firstName: 'Ayush',
    yearofBrith: 2003,
    job: 'Student',
    getName: function(){
        console.log(this.firstName)
    }
}

person.getName();


// another example :


var firstName = 'Rose';
var person = {
    firstName: 'Ayush',
    yearofBrith: 2003,
    job: 'Student',
    getName: function(){
        console.log(firstName)
    }
}

person.getName();


// another example :


var person = {
    firstName: 'Ayush',
    yearofBrith: 2003,
    job: 'Student',
    getName: function(){
        console.log(firstName)
    },
    parents: {
        firstName: 'Ahaan',
        yearofBrith: 1985,
        hob: 'Pilot',
        getName: function(){
            console.log(this.firstName)
        },
    }
}

person.getName();
person.parents.getName();