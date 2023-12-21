// In this coding challenge, you will be implementing a function removeFalsey(arr) that 
// accepts an array arr and returns a new array containing only the truthy values. 
// A value is considered truthy if it is NOT one of the following:
//  false, null, undefined, 0, NaN, or an empty string.

// Instructions
// The input array may contain any number of values, including zero.
// The returned array should only contain truthy values.
// The original input array should not be modified.

//Solution:-

export const removeFalsy = (arr) => {
	
	return arr.filter((value) => !!value);
}

//Explaination:-
////Array.prototype.filter(): This method creates a new array with all elements 
// that pass the test implemented by the provided function.
////arrow function (value) => !!value: This arrow function checks if the value is truthy.
//  The double exclamation mark (!!) converts the value to a boolean and 
//  then negates it twice, resulting in true for truthy values and false for falsy values.