
//Solution:-

// Write JavaScript code to bind click event on the 
//setStorage and getStorage buttons

const setButton = document.getElementById('setStorage');
const getButton = document.getElementById('getStorage');
const outputMsg = document.getElementById('output');

setButton.addEventListener('click',function() {
inputValue = document.getElementById('storageKey').value;
localStorage.setItem('myKey',inputValue);
outputMsg.textContent = "Value stored!!!"
});

// getButton.addEventListener('click',function() {
// const data = localStorage.getItem('myKey');
// outputMsg.textContent = "Value is:" + data;
// });
document.getElementById('getStorage')
.addEventListener('click', function() 
{ document.getElementById('output').innerText = localStorage.getItem('myKey'); });

