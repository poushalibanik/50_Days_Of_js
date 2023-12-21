// Write a function areAnagrams(strOne, strTwo), which takes two strings: strOne and strTwo as 
// arguments. The function should return true if the two strings are anagrams and false otherwise.

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
// In other words, two strings are considered anagrams if they have exactly the same characters 
// but in a different order.

// NOTE: The function areAnagrams should be case-insensitive

//Solution:-

export const areAnagrams = (strOne, strTwo) => {
	if(strOne.length != strTwo.length) return false;
	const sortedStrOne = strOne.toUpperCase().split("").sort().join("");
	const sortedStrTwo = strTwo.toUpperCase().split("").sort().join("");
	return sortedStrOne === sortedStrTwo;
}