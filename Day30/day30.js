// In this lab, you will practice creating, formatting, and manipulating JavaScript Date objects. 
// You will create the currentDate Date object, formatDate function to return a formatted string, 
// getDayName function to return the day of the week, and then export the formatDate function 
// using ESM (ECMAScript module) syntax.

//Solution:


// Create the currentDate object and log it
const currentDate = new Date();
console.log("Current date and time:", currentDate);

// Function to format a date object in the format 'dd-mm-yyyy'
export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

// Function to get the day name from a date object
function getDayName(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}
