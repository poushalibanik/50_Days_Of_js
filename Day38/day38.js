// In this lab, you will learn about JavaScript function methods. You will create two functions, 
// addNumbers and multiplyNumbers, to perform basic arithmetic operations like addition and 
// multiplication. You will also learn how to export functions as named and default exports.
// Prerequisites: Basic knowledge of JavaScript functions and ESM (ECMAScript modules).
// Let's get started by creating the addNumbers and multiplyNumbers functions!
// Make sure you export the addNumbers function and default export the multipleNumbers.

//Solution:-

function addNumbers(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new TypeError("Both arguments must be numbers");
    }
  
    return num1 + num2;
  }
  
  export default function multiplyNumbers(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new TypeError("Both arguments must be numbers");
    }
  
    return num1 * num2;
  }
  
  export { addNumbers }; // Alternatively, you can put this line within the function definition: `export function addNumbers(num1, num2) {...}`
  
