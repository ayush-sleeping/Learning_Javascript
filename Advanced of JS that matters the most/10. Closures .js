// Closures ::
/*
 * A closure is a function that retains access to its lexical scope,
 * even when the function is executed outside that scope.
 * Closures are created every time a function is defined,
 * and they allow for private variables and encapsulation.
 * Example:
 * function outerFunction() {
 *   let outerVariable = "I'm from outer scope";
 *   function innerFunction() {
 *     console.log(outerVariable);
 *   }
 *   return innerFunction;
 * }
 * const closure = outerFunction();
 * closure(); // Output: I'm from outer scope
 * In this example, `innerFunction` forms a closure that captures
 * the `outerVariable` from its lexical scope.
 * So basically, closures are powerful for creating private state
 * and maintaining context in asynchronous code.
*/
