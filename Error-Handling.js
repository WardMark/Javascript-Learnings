// Error Handling in JS

/* Runtime errors occur when executing the code. It stops the program from running. Some examples:
   ReferenceError: when a variable or function cannot be found
   TypeError: when a value is not a valid type
   
The Error function takes an argument of a string which becomes the value of the error’s message property. */
console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.
// It's also valid to create an error message with the new keyword:
console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

// Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.
// To throw an error in JavaScript, we use the throw keyword like so:
throw Error('Something wrong happened'); // Error: Something wrong happened
console.log('This will never run');

// In JavaScript, we use try...catch statement to anticipate and handle errors:
try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
} // Prints: This error will get caught
console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'

// Try/catch blocks can even catch runtime errors that we didn't throw
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
} // Prints: TypeError: Assignment to constant variable.

