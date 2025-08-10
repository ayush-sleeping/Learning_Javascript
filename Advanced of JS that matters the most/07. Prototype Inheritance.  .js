// Prototype Inheritance ::
/*
 * Prototype inheritance is a feature in JavaScript that allows an object to inherit properties and methods from another object.
 * This is achieved through the prototype chain.
 * When you access a property or method on an object, JavaScript looks for it on the object itself,
 * and if it doesn't find it, it looks up the prototype chain until it finds it or reaches the end.
 * Example:
 * function Animal(name) {
 *   this.name = name;
 * }
 * Animal.prototype.speak = function() {
 *   console.log(this.name + " makes a noise.");
 * };
 * function Dog(name) {
 *   Animal.call(this, name);
 * }
 * Dog.prototype = Object.create(Animal.prototype);
 * Dog.prototype.bark = function() {
 *   console.log(this.name + " barks.");
 * };
 * const dog1 = new Dog("Buddy");
 * dog1.speak(); // Output: Buddy makes a noise.
 * dog1.bark();  // Output: Buddy barks.
 * In this example, the `Dog` object inherits from the `Animal` object,
 * allowing it to access the `speak` method while also having its own `bark` method.
 * So basically, prototype inheritance allows for a flexible and dynamic way to create and extend objects in JavaScript.
 */
