
// In this lab, you will learn how to handle errors in JavaScript using try-catch blocks. 
// You will create and throw a custom error, and then catch and log the errors properly.
// Try-catch blocks are an important part of writing robust JavaScript code by allowing us to 
// gracefully handle errors and prevent our application from crashing or freezing.
// A try block will contain the code we want to execute, and the catch block will catch any errors. 
// If an error is caught, you can log it or handle it in any way you want.

//Solution:

class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'myCustomError';
    }
  }
  function doSomething() {
    try {
      // Code that might throw an error
      if (somethingIsWrong) {
        throw new MyCustomError('Something went wrong!');
      }
  
      // Other code that executes if no error occurs
      console.log('Everything went well!');
    } catch (error) {
      // Handle the error
      if (error instanceof MyCustomError) {
        console.error('Caught my custom error:', error.message);
      } else {
        console.error('Caught an unexpected error:', error.message);
      }
    }
  }
  
  doSomething();
    
