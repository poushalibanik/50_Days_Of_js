// Write a function which can convert the time input given in 12 hours format to 24 hours format

// Steps
// Declare a function named convertTo24HrsFormat that takes a single argument time which is a string in 12-hour format (e.g., '12:10AM').

// Inside the function, parse the time argument to extract the hour and minute components as well as the AM/PM specifier. You can use string slicing or regular expressions for this.

// Utilize the endsWith method from the String object to differentiate between 'AM' and 'PM'.

// Convert the hour component to 24-hour format based on whether the time is AM or PM:

// If the time is in PM and the hour component is not 12, add 12 to it.
// If the time is in AM and the hour component is 12, change it to 0.
// Format the hour component to have two digits by adding an extra '0' at the beginning if it is a single digit.

// Concatenate the converted hour component, a colon (:), and the minute component into a string.

// Return the string representing the time in 24-hour format.

// Input Format:
// A single string in 12-hour time format, including 'AM' or 'PM' (e.g., '12:10AM', '03:45PM').
// Output Format:
// A single string in 24-hour time format (e.g., '00:10', '15:45').


//Solution:

function convertTo24HrsFormat(time) {
	const [hour, minute, ampm] = time.match(/(\d{1,2}):(\d{2})([ap]m)/i).slice(1);
	const hourIn24HrsFormat = (hour % 12) + (ampm.toLowerCase() === 'pm' ? 12 : 0);
	return `${hourIn24HrsFormat.toString().padStart(2, '0')}:${minute}`;
  }
  