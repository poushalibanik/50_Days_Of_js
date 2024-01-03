// In this lab, we are going to implement a JavaScript function that will be used to retrieve 
// the nth largest element from an unsorted array.

// The function will be named nthlargest and is expected to take in two parameters. 
// The first one is an unsorted array (e.g., [ 43, 56, 23, 89, 88, 90, 99, 652]), and the second 
// one is a number n (e.g., 4) representing the position of the largest element that we want to 
// find.

//Solution:-

function nthlargest(arr, highest) {
	arr.sort((a, b) => a - b);
	return arr[highest];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));