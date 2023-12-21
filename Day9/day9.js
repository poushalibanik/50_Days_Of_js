// In this coding challenge, you will be implementing a function called removeWhitespaces(string)
//  that takes a string as the input. The function should return the string with all the
//   whitespace removed.

// Instructions
// If the input string is empty, then return an input string.
// Remember to account for \n and \t.

//Solution:-

export const removeWhitespaces = (string) => {
    const trimmed = string.trim();
    const regex = /\s/g; // Matches any whitespace character
    return trimmed.replace(regex, "");
  };
  