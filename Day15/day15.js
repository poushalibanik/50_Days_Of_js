// An Armstrong number is a number that is the sum of its own digits each raised to the power of 
// the number of digits.

// For example:

// 9 is an Armstrong number, because 9 = 9^1 = 9
// 10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
// 153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
// Write some code to determine whether a number is an Armstrong number. Make use that the is 
// isArmstrongNumber() is exported to run the test cases.

//Solution:-


export const isArmstrongNumber = (num) => {
    // Get the number of digits
    const numDigits = num.toString().length;
  
    // Calculate the sum of each digit raised to the power of numDigits
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      const digit = temp % 10;
      sum += Math.pow(digit, numDigits);
      temp = Math.floor(temp / 10);
    }
  
    // Check if the sum equals the original number
    return sum === num;
  };