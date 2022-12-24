/* that's how you can pass the properties and methods inside the prototype, 
that it's available in all instances. */


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

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearofBirth)
}

var john = new Person('John', 2003, 'Student')
john.calculateAge();

var claire = new Person('Claire', 1994, 'Doctore')
claire.calculateAge();

console.log(john)
console.log(claire)

//---------------------------------------------------------



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

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearofBirth)
}

Person.prototype.lastName = "Mishra"

var john = new Person('John', 2003, 'Student')
john.calculateAge();

var claire = new Person('Claire', 1994, 'Doctore')
claire.calculateAge();

console.log(john)
console.log(claire)
console.log(john.lastName)


// Methods to set data :



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

Person.prototype.calculateAge = function(){
    console.log('For => ' + this.name , 2019 - this.yearofBirth)
}

Person.prototype.updateYearofBirth = function(birthYear){
    this.yearofBirth = birthYear
}

Person.prototype.lastName = "Mishra"

var john = new Person('John', 2003, 'Student')
john.calculateAge();
john.updateYearofBirth(2001);
john.calculateAge();

var claire = new Person('Claire', 1994, 'Doctore')
claire.calculateAge();

