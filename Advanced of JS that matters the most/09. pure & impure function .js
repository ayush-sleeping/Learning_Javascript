// Pure and Impure Functions ::
/*
 * A pure function is a function that:
 * 1. Always returns the same output for the same input.
 * 2. Does not have any side effects (e.g., modifying external state).
 * Example of a pure function:
 * function add(a, b) {
 *   return a + b;
 * }
 * An impure function is a function that:
 * 1. May return different outputs for the same inputs.
 * 2. Has side effects (e.g., modifying external state).
 * Example of an impure function:
 * let counter = 0;
 * function incrementCounter() {
 *   counter++;
 *   return counter;
 * }
 * In general, pure functions are easier to test, reason about, and optimize.
*/
