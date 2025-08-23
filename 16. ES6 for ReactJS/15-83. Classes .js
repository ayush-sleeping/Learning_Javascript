/* ES6 - Introduction to Classes :
    To create object factories, You can use the class keyword.
    Just like you would do in other programming languages
    like JAVA etc.

Syntax :
    class ClassName {
        constructor() {
            // Initialize the properties here
        }
        // Methods outside cnstructor
        methods 1 = () => {
            // Method body
        }
    }

    */

console.clear();

/*
function Person(name, birthYear){
    this.name = name;
    this.yearofBirth = birthYear;

    this.getDetails = function(){
        return "Name: " + this.name + "and Age:" + (2019 - this.yearOfBirth);
    }
}

var john = new Person('John', 1990);
console.log(john.getDetails());
*/

// Rewriting using Classes :


class Person{
    constructor(name, birthYear){
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return 'Name: ${this.name} and Age: ${2019 - this.yearOfBirth}'
    }
}

var john = new Person('John', 1990 );
console.log(john.getDetails());