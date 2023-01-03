/* ES6 - Inheritance in ES6 :
    ES6 provides us with a keyword called extends to inherit classes.
    Syntax :
    class ChildClass{
        // Class Body
    }
    class ChildClass extends ParentClass{
        // Class body
    }

*/
console.clear();

class Person{
    constructor(name, birthYear){
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return 'Name: ${this.name} and Age: ${2019 - this.yearOfBirth}'
    }
}


class Pilot extends Person {
    constructor(exp, type, license){
        super('John Wick', 1980)
        this.experience = exp;
        this.type = type;
        this.license = license;
    }
    getData = () => {
        console.log('Experience ${this.experience} and Type: ${this.type}')
    }
}

const john = new Pilot(28, 'private', 'TC1237');
console.log(john);
john.getData();