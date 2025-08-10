// This calls, apply, bind ::
/*
 * In JavaScript, the `this` keyword refers to the context in which a function is called.
 * It can be tricky to understand, especially in nested functions and callbacks.
 * The `call`, `apply`, and `bind` methods are used to control the value of `this`.
 * 1. call: Calls a function with a specified `this` value and arguments.
 *    Syntax: func.call(thisArg, arg1, arg2, ...);
 * 2. apply: Similar to `call`, but takes an array of arguments.
 *    Syntax: func.apply(thisArg, [argsArray]);
 * 3. bind: Returns a new function with a bound `this` value.
 *    Syntax: const boundFunc = func.bind(thisArg);
 * These methods are useful for borrowing methods from other objects and ensuring the correct `this` context.
*/
