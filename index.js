/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  // const input = document.querySelector("input#time").innerText.split(":")
  // const input = document.getElementById('time').innerText.split(":")
  const input = time.split(":")
  const inputInteger = parseInt(input[0], 10)
  if(inputInteger < 12) {
    return "Good Morning"
  } 
  else if(inputInteger > 17 ) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(TEST) {
  document.querySelector("#greeting").innerText =  TEST
}
