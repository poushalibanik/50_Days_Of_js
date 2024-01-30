// In this lab, you will practice using JavaScript string methods by implementing four different 
// functions that manipulate and analyze strings. Use ESM syntax to create and export the 
// functions from your index.js file. Work directly within the provided boilerplates to complete 
// the challenges!
// Make sure to export all the 4 functions that you've created in this lab.


//Solution:


export function reverseString(s) {
	// Split the string into an array of characters
	const characters = s.split("");
	// Reverse the order of the characters in the array
	const reversedCharacters = characters.reverse();
	// Join the reversed characters back into a string
	return reversedCharacters.join("");
}


export function capitalizeFirstLetters(text) {
	 // Split the text into an array of words
	 const words = text.split(" ");
	 // Capitalize the first letter of each word
	 const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	 // Join the capitalized words back into a sentence
	 return capitalizedWords.join(" ");
}


export function findLongestWord(text) {
	// Split the text into an array of words
	const words = text.split(" ");

	// Initialize a variable to store the longest word
	let longestWord = "";
  
	// Loop through each word in the array
	for (const word of words) {
	  // Check if the current word is longer than the stored longest word
	  if (word.length > longestWord.length) {
		// Update the stored longest word if needed
		longestWord = word;
	  }
	}
  
	// Return the longest word found
	return longestWord;
}


  export function wordCount(text) {
	// Split the text into an array of words and count the number of elements
	return text.split(" ").length;
  }
