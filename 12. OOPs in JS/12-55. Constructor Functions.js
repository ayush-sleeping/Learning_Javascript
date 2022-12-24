/* Constructor Functions 
creating any number of instances using this function constructed.
*/

var person ={
    name: 'Ayush',
    yearofBirth: 2003,
    job: 'Student'
}

function Person(pName, pYearofBirth, pJob){
    this.name = pName;
    this.yearofBirth = pYearofBirth;
    this.job = pJob;
}

var john = new Person('John', 2003, 'Student')
console.log(john)


// Adding method :


var person ={
    name: 'Ayush',
    yearofBirth: 2003,
    job: 'Student'
}

function Person(pName, pYearofBirth, pJob){
    this.name = pName;
    this.yearofBirth = pYearofBirth;
    this.job = pJob;

    this.calculateAge = function(){
        console.log(2022 - this.yearofBirth)
    }
}

var john = new Person('John', 2003, 'Student')
john.calculateAge();


// creating any number of instances using this function constructed. :


var person ={
    name: 'Ayush',
    yearofBirth: 2003,
    job: 'Student'
}

function Person(pName, pYearofBirth, pJob){
    this.name = pName;
    this.yearofBirth = pYearofBirth;
    this.job = pJob;

    this.calculateAge = function(){
        console.log(2022 - this.yearofBirth)
    }
}

var john = new Person('John', 2003, 'Student')
john.calculateAge();


var claire = new Person('Claire', 1994, 'Doctore')
claire.calculateAge();