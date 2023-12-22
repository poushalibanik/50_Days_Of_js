// In this coding challenge, you will be implementing a custom capitaliseAllWords(input) function.
// The function should take one string argument called input. The input string can consist of one 
// or more words separated by a white space (just like a regular sentence). The function should 
// capitalise all of the words in the string. Keep in mind that the input string can include 
// numbers and special characters.

// Instructions:
// Your function should return a new string.
// If the input is an empty string, then return an empty string.
// The input will always be a valid sentence.

//Solution:-

export const capitaliseAllWords = (input) => {
    if (!input) {
        return '';  // Handle empty input
    }
      
    return input.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}