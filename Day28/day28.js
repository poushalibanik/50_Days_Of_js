// Chloe is practicing JavaScript, she got a challenge to write a JavaScript Function 
// getMiddleValue() which has a parameter arr should accept an array of numbers and sort the 
// array and return the middle value of the array if length of the array is odd and average of 
// the middle values if the length of the array is even.
// She has written her code (which is shared with you in the index.js file), but there seems to
// a bug which she is unable to figure out. The function doesn't not return the middle number of 
// the array having odd length. Can you help her debug this?

//Solution:-

export function getMiddleValue(arr) {
	arr.sort((a, b) => a - b);

	if (arr.length % 2 === 0) {
		const mid1 = arr[arr.length / 2 - 1];
		const mid2 = arr[arr.length / 2];
		return (mid1 + mid2) / 2;
	} else {
		return arr[Math.floor(arr.length / 2)];
	}
}