// Write a function countVowels(str), which takes a string str as an input. This function should return the total number of vowels in str.

// Instructions
// Return 0 if str has no vowels.
// Assume that str may contain any alphanumeric characters.


//Solution:-

export const countVowels = (str) => {
	str = str.toLowerCase();
	let c = 0;
	for(let i of str){
		if(i == 'a' || i == 'i' || i == 'e' || i == 'o' || i == 'u'){
			c++;
		}
	}
	return c;	
}