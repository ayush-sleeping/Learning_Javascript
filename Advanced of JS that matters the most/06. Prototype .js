// Prototype ::
/*
 * The prototype is an object that is associated with every JavaScript function and object.
 * It allows you to add properties and methods to an object.
 * When you create a new object, it inherits properties and methods from its prototype.
 * This is a key feature of JavaScript's inheritance model.
 * Example:
 * function Person(name) {
 *   this.name = name;
 * }
 * Person.prototype.sayHello = function() {
 *   console.log("Hello, " + this.name);
 * };
 * const person1 = new Person("Alice");
 * person1.sayHello(); // Output: Hello, Alice
 * In this example, the `sayHello` method is added to the `Person` prototype,
 * allowing all instances of `Person` to access it.
 * So Basically, the prototype allows for shared methods and properties among all instances.
 */
