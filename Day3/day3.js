// In this coding challenge, you will be implementing a function called randomInRange(min, max)
//  that generates a random integer between a given minimum value (inclusive) 
//  and a maximum value (exclusive).
// The function should take two arguments, min and max, both of which are integers.

//Solution:-

export const randomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min) ) + min;
	console.log(randomInRange);
}