// //In this lab exercise, you will be working with the String.prototype.indexOf() method to find the index of a substring inside a given string. The indexOf() method returns the first index
//  at which a given substring is found or -1 if it is not present.
// Your task is to create a custom findSubstringIndex function that accepts two parameters 
// (a text string and a substring to be found) and returns the index of the substring in the text
//  using the indexOf method.
// Keep in mind that the function should also check if the input strings are empty and 
// return -1 if empty. Default export the function using ESM syntax for the test cases 
// to verify your code.

//Solution:-

const findSubstringIndex = (text, sub) => {
	if (text.length == 0 || sub.length == 0) return -1;
	let res = text.indexOf(sub);
	return res;
}

export default findSubstringIndex;