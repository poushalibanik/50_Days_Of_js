// The goal of this lab is to write a JavaScript program that converts a trinary (base-3) number to a decimal (base 10) number. Note that we'll be using first principles, meaning we won't be using the built-in parseInt function that JavaScript provides.

// Steps
// What is a Trinary number? The trinary number system, also known as base-3, uses three digits -- 0, 1, and 2. It's similar to the familiar decimal (base-10) number system that we use every day, only it's based on powers of 3 instead of powers of 10. The right most position in a trinary number represents 3 to the power of 0, the next position to the left represents 3 to the power of 1, and so on.

// Understanding the JavaScript parseInt method Before we begin, it's important to understand that JavaScript provides a built-in function, parseInt, which can perform base conversion for us. For example, parseInt('102012', 3) would convert the base-3 number '102012' into its base-10 equivalent which is 302 . However, in this lab, to understand base conversion at a deeper level, we're going to ignore that this function exists and do the conversion ourselves.

// Creating our Custom Conversion Function We're going to write a function that takes a string representation of a trinary number as input (e.g. '102012'). If the input string is not a valid trinary number, the function will return 0.

// Here's a breakdown of how we'll compute the conversion manually:

// For example, a string '102012':

// Multiply each digit by 3 raised to the power of its position, counting from 0 from right to left.
// For example, the rightmost 2 is at position 0, so you multiply it by 3^0. The next digit to its left, 1, is at position 1, so you multiply it by 3^1.
// Repeat this process for each digit and then sum the results.

//solution:-


export class Trinary {
    /** 
    * @param {string} trinaryNumber
    */
    constructor(trinaryNumber){
      if(!Trinary.isValid(trinaryNumber)){
        this.trinaryNumber = "0";
      }
      else{
        this.trinaryNumber = trinaryNumber;
      }
    }
  /**
   * @param{String} str
   * @return {boolean}
   */
    static isValid(str){
      const reg = /^[0-2]+$/;
      return reg.test(str);
    }
    /**
     * @return {number}
     */
    toDecimal(){
  
      if(!Trinary.isValid(this.trinaryNumber)){
          return 0;
      }
      let decimalNumber = 0;
      for(let i = 0; i < this.trinaryNumber.length ; i++){
        var digi = this.trinaryNumber[i];
        var expo = this.trinaryNumber.length-1-i;
        decimalNumber += digi * Math.pow(3,expo);
      }
      return decimalNumber;
    }
  }
  const firstNumber = new Trinary("100");
  console.log(firstNumber.toDecimal());
