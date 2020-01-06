/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input) {
  let hour_and_minute = input.split(":");
  let hour = hour_and_minute[0];
  let greeting_message = "just test";

  if (hour < 12) {
    greeting_message = "Good Morning";
  } else if (hour > 12 && hour <17) {
    greeting_message = "Good Afternoon";
  }
  else {
    greeting_message = "Good Evening";
  }
  return greeting_message;
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  let target = document.getElementById('greeting');
  target.innerText = message;
}
