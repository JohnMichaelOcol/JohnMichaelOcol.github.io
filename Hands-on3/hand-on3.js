let originalText = "Click the button to change this text."; 
let isOriginalText = true; 

function changeText() {
  let message = document.getElementById("message");

  if (isOriginalText) {
    message.innerText = "Programming is Fun!";
  } else {
    message.innerText = originalText; 
  }

  isOriginalText = !isOriginalText;
}
