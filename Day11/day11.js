// You have been asked to write a function reverseAString(str) that takes in a string str 
// as an argument. The function should return a new string that is the reverse of the input string.

// Instructions
// If the input string is empty, then return an empty string.
// The output should always be the argument string in reverse order.


//Solution:-

export const reverseAString = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
    
}