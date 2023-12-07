// Implement a function called capitalizeWord(word) that capitalizes the first letter 
//of the input string word and returns the capitalized string.

// Instructions
// The function should return a new string with the first letter capitalized.
// If the input is an empty string, return an empty string.
// The input will always be a string consisting of one word, and will not contain numbers or special characters.
// Transform only the first character, leaving the rest unchanged.


//Solution:-

export const capitaliseWord = (word) => {
	if(word.length === 0){
		return "";
	}
	else{
		const res = word.charAt(0).toUpperCase();
		const res1 = word.substr(1);
		return res+res1;
	}
};