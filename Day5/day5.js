//Write a function sumOfEvens(arr), which takes an array arr as an argument. This function should return a sum of every even number in the array.

// Instructions:-
// If the input array is empty or there are no even numbers, then return 0.
// The input array will contain only numbers.

//Solution:-

export const sumOfEvens = (arr) => {
	let n = arr.length;
	if(n == 0) return 0;
	let sum = 0;
	for(let i = 0 ; i < n; i++){
		if(arr[i]% 2 == 0){
			sum += arr[i];
		}
	}
	return sum;
}
