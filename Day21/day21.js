// Write a function findCharacter(str), which takes a string str as the argument. 
// The function should return the first non-repeating character.

// Instructions:-
// If no such character is found, return null.
// The input string str will not contain whitespace.

//Solution:-

export const findCharacter = (str) => {
	
	const charobj = {};
	for(const char of str){
		if(char in charobj){
			charobj[char]++;
		}else{
			charobj[char] = 1;
		}
	}
	for(const char of str){
		if(charobj[char] === 1){
			return char;
		}
	}
	return null;
}
