// In this lab, you will build a counter function creator. You are tasked with creating a function
// that takes an integer n as input and returns another function called counter. This counter 
// function should initially return the input n and then return 1 more than the previous value 
// every subsequent time it is called (n, n + 1, n + 2, etc).

//Solution:-

export function createCounter(n) {
    let current = n;
  
    return function counter() {
      current += 1;
      return current - 1; // Return the previous value before incrementing
    };
  }