// In this lab, you will create a JavaScript object named 'product' with specific properties.
//  The experience will strengthen your understanding of key JavaScript concepts, such as objects,
//   property keys and values, and various data types (numbers, strings, and booleans). 
//   This straightforward yet essential task is a foundational lesson for any JavaScript learner.

// Steps:
// Here are the steps you need to complete this lab:

// Start by declaring a constant named 'product' and assign to it an object using curly braces {}.
// Inside the 'product' object, you need to define four properties: 'id', 'name', 'price', and 'availability'.
// Recall that properties of an object consist of key-value pairs, with the key being the property name and the value being the property value.
// Assign the 'id' and 'price' properties with a numeric value.
// Set the 'name' property with a non-empty string.
// The 'availability' property should be assigned a boolean value - 'true' or 'false'.
// Lastly, export the 'product' object for it to be used elsewhere. This lab uses ESM Syntax.

//Solution:

// Create your product object
const product = {id:123, name:"pen", price:50 , availability:true };
// export your product object
export {product};
console.log(product);
// console.log the object to view the output
// TIP: Use the run button to run your JS Code.