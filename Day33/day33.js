// In this lab, you will implement your own map, filter, and reduce functions in JavaScript. 
// These functions are commonly used for array manipulation in JavaScript. Map, filter, and 
// reduce functions are higher-order functions that accept a callback function as an argument 
// and apply that function to the elements of the input array in different ways.
// By the end of this lab, you should have 3 functional implementations for map, filter, and 
// reduce.Make sure to export all the functions using ESM export.

//Solution:


export function myMap(arr, callback) {
    const newArr = [];
    for (const element of arr) {
      const mappedElement = callback(element);
      newArr.push(mappedElement);
    }
    return newArr;
  }
  
  export function myFilter(arr, callback) {
    const newArr = [];
    for (const element of arr) {
      if (callback(element)) {
        newArr.push(element);
      }
    }
    return newArr;
  }
  
  export function myReduce(arr, callback, initialValue = null) {
    let accumulator = initialValue;
    for (const element of arr) {
      accumulator = callback(accumulator, element);
    }
    return accumulator;
  }
  
  
  