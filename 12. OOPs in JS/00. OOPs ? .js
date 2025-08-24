/*
OOPs in JS ::
- Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects"
- which contain data (attributes) and code (methods). JavaScript supports OOP through prototypes,
- classes, and various patterns. Essential for modern JavaScript development and interviews.
------------------------------------------------------------------- ::


- OOP Principles:
- 1. Encapsulation - Bundling data and methods together
- 2. Inheritance - Creating new classes based on existing ones
- 3. Polymorphism - Same interface, different implementations
- 4. Abstraction - Hiding complex implementation details
------------------------------------------------------------------- ::


Subtopics :

- OOPs Concepts
- this keyword
- Constructor Functions
- Inheritance and Prototypal chain
- Prototype Implementation
- Classes and Objects
- Inheritance
- Polymorphism
- Encapsulation
- Abstraction
- Object.create and Object.assign
- Static methods and properties
- Getters and setters
- Method overriding
- Super keyword
- Private fields (#field)
- Factory functions
- Mixins
- Composition vs Inheritance
- ES6 class syntax vs function constructors
- instanceof operator
- Object.freeze and Object.seal
- Design patterns (Singleton, Observer, etc.)
*/


//------------------------------------------------------------------- ::
// Global context
console.log(this); // Window object (browser) or global (Node.js)

// Object method
const person = {
    name: 'John',
    greet: function () {
        console.log('Hello, I am ' + this.name); // 'this' refers to person object
    },
    // Arrow function - inherits 'this' from enclosing scope
    greetArrow: () => {
        console.log('Hello, I am ' + this.name); // 'this' is NOT person object
    }
};

person.greet(); // "Hello, I am John"
person.greetArrow(); // "Hello, I am undefined"

// Function call context
function showThis() {
    console.log(this); // Depends on how it's called
}

showThis(); // Window/global object (non-strict mode)

// Constructor function
function Person(name) {
    this.name = name; // 'this' refers to new instance
}

const john = new Person('John'); // 'this' is the new john object

// Explicit binding with call, apply, bind
const obj = { name: 'Alice' };

function introduce() {
    console.log('Hi, I am ' + this.name);
}

introduce.call(obj);    // "Hi, I am Alice"
introduce.apply(obj);   // "Hi, I am Alice"
const boundIntroduce = introduce.bind(obj);
boundIntroduce();       // "Hi, I am Alice"

// Event handler context (in browser)
// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//   console.log(this); // Refers to the button element
// });

// Arrow function in event handler
// button.addEventListener('click', () => {
//   console.log(this); // Refers to enclosing scope (usually window)
// });




//------------------------------------------------------------------- ::
// CONSTRUCTOR FUNCTIONS
// Constructor functions are regular functions called with 'new' keyword
// They create and return new objects

function Car(make, model, year) {
    // Properties
    this.make = make;
    this.model = model;
    this.year = year;

    // Methods (not recommended - creates new function for each instance)
    this.getInfo = function () {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

// Creating instances
const car1 = new Car('Toyota', 'Camry', 2022);
const car2 = new Car('Honda', 'Civic', 2023);

console.log(car1.getInfo()); // "2022 Toyota Camry"

// What happens when you use 'new':
// 1. A new empty object is created
// 2. The new object is linked to the function's prototype
// 3. 'this' is bound to the new object
// 4. The constructor function is executed
// 5. The new object is returned (unless function returns another object)




//------------------------------------------------------------------- ::
// PROTOTYPES AND PROTOTYPAL INHERITANCE
// Every JavaScript object has a prototype
// Prototype is a mechanism by which objects inherit features from one another

// Adding methods to prototype (recommended approach)
Car.prototype.start = function () {
    return `${this.make} ${this.model} is starting...`;
};

Car.prototype.stop = function () {
    return `${this.make} ${this.model} has stopped.`;
};

// All Car instances now have access to start() and stop()
console.log(car1.start()); // "Toyota Camry is starting..."
console.log(car2.stop());  // "Honda Civic has stopped."

// Checking prototype chain
console.log(car1.__proto__ === Car.prototype); // true
console.log(Car.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// Prototype property vs __proto__
// - prototype: Property of constructor functions
// - __proto__: Property of instances, points to constructor's prototype




//------------------------------------------------------------------- ::
// INHERITANCE AND PROTOTYPAL CHAIN

// Creating inheritance with constructor functions
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.describe = function () {
    return `This is a ${this.type}`;
};

function Motorcycle(make, model) {
    // Call parent constructor
    Vehicle.call(this, 'motorcycle');
    this.make = make;
    this.model = model;
}

// Set up inheritance
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

// Add specific methods
Motorcycle.prototype.ride = function () {
    return `Riding the ${this.make} ${this.model}`;
};

const bike = new Motorcycle('Harley', 'Davidson');
console.log(bike.describe()); // "This is a motorcycle"
console.log(bike.ride());     // "Riding the Harley Davidson"




//------------------------------------------------------------------- ::
// ES6 CLASSES

// Modern JavaScript class syntax (syntactic sugar over prototypes)
class Animal {
    // Constructor method
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Instance methods
    speak() {
        return `${this.name} makes a sound`;
    }

    getInfo() {
        return `${this.name} is a ${this.species}`;
    }

    // Static methods (belong to class, not instances)
    static compareAnimals(animal1, animal2) {
        return animal1.species === animal2.species;
    }

    // Getter
    get description() {
        return `Animal: ${this.name}`;
    }

    // Setter
    set nickname(nick) {
        this.name = nick;
    }
}

const dog = new Animal('Rex', 'Dog');
console.log(dog.speak());    // "Rex makes a sound"
console.log(dog.getInfo());  // "Rex is a Dog"
console.log(dog.description); // "Animal: Rex" (getter)

dog.nickname = 'Buddy';      // Using setter
console.log(dog.name);       // "Buddy"

// Static method usage
const cat = new Animal('Whiskers', 'Cat');
console.log(Animal.compareAnimals(dog, cat)); // false




//------------------------------------------------------------------- ::
// CLASS INHERITANCE
class Dog extends Animal {
    constructor(name, breed) {
        // Call parent constructor with super()
        super(name, 'Dog');
        this.breed = breed;
    }

    // Method overriding
    speak() {
        return `${this.name} barks loudly`;
    }

    // Additional methods
    wagTail() {
        return `${this.name} is wagging tail`;
    }

    // Using super to call parent method
    getFullInfo() {
        return super.getInfo() + ` of breed ${this.breed}`;
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.speak());       // "Buddy barks loudly" (overridden)
console.log(myDog.wagTail());     // "Buddy is wagging tail"
console.log(myDog.getFullInfo()); // "Buddy is a Dog of breed Golden Retriever"




//------------------------------------------------------------------- ::
// ENCAPSULATION
// Private fields and methods (ES2022)
class BankAccount {
    // Private fields (start with #)
    #balance = 0;
    #accountNumber;

    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }

    // Public methods
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return this.#balance;
        }
        throw new Error('Deposit amount must be positive');
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return this.#balance;
        }
        throw new Error('Invalid withdrawal amount');
    }

    // Getter for balance (controlled access)
    get balance() {
        return this.#balance;
    }

    // Private method
    #validateTransaction(amount) {
        return amount > 0 && amount <= this.#balance;
    }
}

const account = new BankAccount('123456', 1000);
console.log(account.deposit(500));  // 1500
console.log(account.balance);       // 1500
// console.log(account.#balance);   // SyntaxError: Private field '#balance' must be declared in an enclosing class




//------------------------------------------------------------------- ::
// GETTERS AND SETTERS
class Temperature {
    constructor(celsius = 0) {
        this._celsius = celsius; // Convention: _ indicates "private"
    }

    // Getter for Fahrenheit
    get fahrenheit() {
        return (this._celsius * 9 / 5) + 32;
    }

    // Setter for Fahrenheit
    set fahrenheit(temp) {
        this._celsius = (temp - 32) * 5 / 9;
    }

    // Getter for Celsius
    get celsius() {
        return this._celsius;
    }

    // Setter for Celsius
    set celsius(temp) {
        this._celsius = temp;
    }
}

const temp = new Temperature(25);
console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 100;
console.log(temp.celsius);    // 37.77...




//------------------------------------------------------------------- ::
// OBJECT CREATION PATTERNS
// Object.create() - Creates object with specified prototype
const personPrototype = {
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

const person1 = Object.create(personPrototype);
person1.name = 'Alice';
console.log(person1.greet()); // "Hello, I'm Alice"

// Object.assign() - Copy properties from source objects
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }

// Factory Functions
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
        }
    };
}

const alice = createPerson('Alice', 30);
console.log(alice.greet()); // "Hi, I'm Alice and I'm 30 years old"




//------------------------------------------------------------------- ::
// MIXINS
// Mixins allow multiple inheritance-like behavior
const CanFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

const CanSwim = {
    swim() {
        return `${this.name} is swimming`;
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins
Object.assign(Bird.prototype, CanFly);

class Duck extends Bird {
    constructor(name) {
        super(name);
    }
}

// Apply multiple mixins
Object.assign(Duck.prototype, CanSwim);

const duck = new Duck('Donald');
console.log(duck.fly());  // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"




//------------------------------------------------------------------- ::
// COMPOSITION VS INHERITANCE

// Inheritance: "is-a" relationship
class Vehicle2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car2 extends Vehicle2 {
    // Car "is-a" Vehicle
}

// Composition: "has-a" relationship
class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

    start() {
        return `${this.type} engine starting`;
    }
}

class Car3 {
    constructor(make, model, engineType, horsepower) {
        this.make = make;
        this.model = model;
        this.engine = new Engine(engineType, horsepower); // Car "has-an" Engine
    }

    startCar() {
        return this.engine.start();
    }
}

const myCar = new Car3('Toyota', 'Camry', 'V6', 300);
console.log(myCar.startCar()); // "V6 engine starting"




//------------------------------------------------------------------- ::
// POLYMORPHISM

// Same interface, different implementations
class Shape {
    area() {
        throw new Error('Area method must be implemented');
    }

    perimeter() {
        throw new Error('Perimeter method must be implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Polymorphic usage
const shapes = [
    new Rectangle(10, 5),
    new Circle(3),
    new Rectangle(7, 7)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
    console.log(`Perimeter: ${shape.perimeter()}`);
});




//------------------------------------------------------------------- ::
// INSTANCEOF OPERATOR

console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true
console.log(myDog instanceof Array);  // false

// Custom instanceof check
function customInstanceof(obj, constructor) {
    let prototype = Object.getPrototypeOf(obj);
    while (prototype !== null) {
        if (prototype === constructor.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }
    return false;
}




//------------------------------------------------------------------- ::
// OBJECT.FREEZE AND OBJECT.SEAL

// Object.freeze() - Makes object immutable
const frozenObj = Object.freeze({
    name: 'John',
    age: 30
});

// frozenObj.name = 'Jane'; // Fails silently (or throws in strict mode)
// frozenObj.city = 'NY';   // Fails silently
console.log(frozenObj.name); // "John" (unchanged)

// Object.seal() - Prevents adding/deleting properties, allows modification
const sealedObj = Object.seal({
    name: 'Alice',
    age: 25
});

sealedObj.name = 'Alicia'; // Works
// sealedObj.city = 'LA';  // Fails silently
console.log(sealedObj.name); // "Alicia"

// Checking object state
console.log(Object.isFrozen(frozenObj)); // true
console.log(Object.isSealed(sealedObj));  // true




//------------------------------------------------------------------- ::
// DESIGN PATTERNS

// Singleton Pattern - Ensures only one instance exists
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.data = [];
        Singleton.instance = this;
        return this;
    }

    addData(item) {
        this.data.push(item);
    }

    getData() {
        return this.data;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2); // true

// Observer Pattern - One-to-many dependency
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify('Hello World'); // Both observers receive the message

// Factory Pattern - Creates objects without specifying exact class
class CarFactory {
    static createCar(type) {
        switch (type) {
            case 'sedan':
                return new Sedan();
            case 'suv':
                return new SUV();
            default:
                throw new Error('Unknown car type');
        }
    }
}

class Sedan {
    constructor() {
        this.type = 'sedan';
        this.doors = 4;
    }
}

class SUV {
    constructor() {
        this.type = 'suv';
        this.doors = 5;
    }
}

const sedan = CarFactory.createCar('sedan');
console.log(sedan.type); // "sedan"




//------------------------------------------------------------------- ::
// ES6 CLASSES VS CONSTRUCTOR FUNCTIONS

// Constructor Function Approach
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}

PersonConstructor.prototype.greet = function () {
    return `Hello, I'm ${this.name}`;
};

// ES6 Class Approach
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

// Both create similar objects, but classes provide:
// 1. Cleaner syntax
// 2. Built-in inheritance with extends
// 3. Static methods
// 4. Private fields
// 5. Stricter error checking




//------------------------------------------------------------------- ::
// ADVANCED OOP CONCEPTS

// Abstract Classes (using conventions)
class AbstractVehicle {
    constructor() {
        if (this.constructor === AbstractVehicle) {
            throw new Error('Cannot instantiate abstract class');
        }
    }

    // Abstract method
    start() {
        throw new Error('start() method must be implemented');
    }

    // Concrete method
    stop() {
        return 'Vehicle stopped';
    }
}

class ConcreteVehicle extends AbstractVehicle {
    start() {
        return 'Vehicle started';
    }
}

// const abstract = new AbstractVehicle(); // Throws error
const concrete = new ConcreteVehicle();
console.log(concrete.start()); // "Vehicle started"

// Method Chaining
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(num) {
        this.value += num;
        return this; // Return 'this' for chaining
    }

    multiply(num) {
        this.value *= num;
        return this;
    }

    subtract(num) {
        this.value -= num;
        return this;
    }

    getResult() {
        return this.value;
    }
}

const calc = new Calculator(5);
const result2 = calc.add(10).multiply(2).subtract(5).getResult();
console.log(result2); // 25




//------------------------------------------------------------------- ::
// COMMON INTERVIEW PATTERNS AND QUESTIONS

// Question 1: Create a Counter with closure
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2

// Question 2: Implement inheritance without classes
function Animal2(name) {
    this.name = name;
}

Animal2.prototype.speak = function () {
    return `${this.name} makes a sound`;
};

function Dog2(name, breed) {
    Animal2.call(this, name); // Call parent constructor
    this.breed = breed;
}

Dog2.prototype = Object.create(Animal2.prototype);
Dog2.prototype.constructor = Dog2;

Dog2.prototype.speak = function () {
    return `${this.name} barks`;
};

const dog2 = new Dog2('Rex', 'Labrador');
console.log(dog2.speak()); // "Rex barks"

// Question 3: Create a simple event emitter
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(...args));
        }
    }

    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

const emitter = new EventEmitter();
const handler = (data) => console.log('Received:', data);

emitter.on('test', handler);
emitter.emit('test', 'Hello World'); // "Received: Hello World"
