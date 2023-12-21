// In this coding challenge, you will be implementing a function called joinElementsWithUnderscore
// (array) that takes an array as input and returns a string. The returned string should consist of 
// all the array elements joined by an underscore _.

// Instructions
// If the input array is empty, return an empty string.

//Solution:-

export const joinElementsWithUnderscore = (array) => {
	return array.join("_");
}