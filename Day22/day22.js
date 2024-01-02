/**
 * Returns a currency value if the given currency code exists
 * @param {FormDataEvent} event - form submit event
 */
// async function getCurrency(event) {
//     event.preventDefault(); // Prevent form submission
  
//     const currencyCode = document.getElementById("currencyInput").value.toUpperCase();
  
    
//       const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
//       const data = await response.json();
  
//       if (data.rates.hasOwnProperty(currencyCode)) {
//         const currencyRate = data.rates[currencyCode];
//         document.getElementById("results").textContent = `1 USD = ${currencyRate} ${currencyCode}`;
//       } else {
//         document.getElementById("results").textContent = `${currencyCode} does not exist`;
//       }
   
//   }
  
async function getCurrency(event) {
    event.preventDefault(); // Prevent form submission
  
    const currencyCode = document.getElementById("currencyInput").value.toUpperCase();
  
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await response.json();
  
      if (data.rates.hasOwnProperty(currencyCode)) {
        const currencyRate = data.rates[currencyCode];
        document.getElementById("results").textContent = `1 USD = ${currencyRate} ${currencyCode}`;
      } else {
        document.getElementById("results").textContent = `${currencyCode} does not exist`;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("results").textContent = "Error fetching currency rates";
    }
  }
  