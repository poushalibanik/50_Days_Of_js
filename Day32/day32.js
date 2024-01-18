// In this lab, your task is to implement the findTheDistanceValue(arr1, arr2, d) function. 
// The function takes three inputs:
// Two integer arrays: arr1 and arr2
// An integer: d
// The function should return the distance value between the two arrays as defined below.
// Function Definition:-
// The distance value is the number of elements arr1[i] such that there is not any element 
// arr2[j] where the absolute difference |arr1[i] - arr2[j]| is less than or equal to d.

//Solution:-

export function findTheDistanceValue(arr1, arr2, d) {
    let count = 0; // Use `let` to declare the variable

    for (const num of arr1) { // Use `for...of` loop for arrays
      let found = false; // Use `let` to declare the variable
  
      for (const otherNum of arr2) { // Use `for...of` loop for arrays
        if (Math.abs(num - otherNum) <= d) { // Use `Math.abs` for absolute value
          found = true;
          break;
        }
      }
  
      if (!found) { // Use `!` for negation
        count++;
      }
    }
  
    return count;
  }
