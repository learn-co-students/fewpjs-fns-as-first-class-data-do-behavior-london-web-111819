/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {

  const str_time = time.split(":");
  const int_time = parseInt(str_time[0]);

  if (int_time < 12) {
    return "Good Morning"
  }

  if (int_time >= 12 && int_time <= 17) {
    return "Good Afternoon"
  }

  if (int_time > 17){
    return "Good Evening"
  }

}

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string;
}