// In this lab, you'll be learning about JavaScript generator functions. A generator function is a special type of function that can be paused and resumed, allowing for greater control over the execution of the function. You'll be creating a generator function that counts upwards from 1 up to a given limit, and you'll iterate over that generator to print the values. With this lab, you'll gain a better understanding of how to create and use generator functions in JavaScript.

//Solution:-

export function* countUp(limit) {
    let count = 1;
    while(count <= limit){
      yield count++;
    }
  }
  
  export const counter = countUp(5);
  
  for (const value of counter) {
    console.log(value);
  }