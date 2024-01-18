// In this lab, you will be tasked with finding the missing number in a given range of numbers. 
// The lab provides you with an array nums containing n distinct numbers in the range [0, n]. 
// Your task is to write a function that returns the only number in the range that is missing 
// from the array.

//Solution:

const missingNumber = function (nums) {
    let res = 0;
    for(let i = 0; i <= nums.length; i++){
        res = res ^ i;
    }
    for(let i of nums){
        res = res ^ i;
    }
    return res;
};

export {missingNumber};