// JavaScript Function Methods:-
// In this lab, you will learn about JavaScript function methods.
//  You will create two functions, addNumbers and multiplyNumbers, 
//  to perform basic arithmetic operations like addition and multiplication. 
// You will also learn how to export functions as named and default exports.

//Solution:

// Define the addNumbers function
function addNumbers(a, b) {
    return a + b;
  }
  
  // Define the multiplyNumbers function
  function multiplyNumbers(a, b) {
    return a * b;
  }
  
  // Named export for addNumbers
  export { addNumbers };
  
  // Default export for multiplyNumbers
  export default multiplyNumbers;