/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  // const splitted = time.split(':')
  // splitted.forEach(timeElement => {
  //   parseInt(timeElement)
  // });
  time = parseInt(timeString, 10)
  if (time > 0 && time < 12) {
    return "Good Morning"
  } else if (time >= 12 &&  time < 17) {
    return "Good Afternoon"
  } else if (time > 17 && time < 24) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let node = document.querySelector('#greeting')
  node.innerText = string
}