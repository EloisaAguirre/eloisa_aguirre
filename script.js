const button = document.getElementById("magicButton");
const message = document.getElementById("secretMessage");

button.addEventListener("click", function() {
if (message.style.display === "none") {
    message.style.display = "block";
    button.textContent = "Hide the magic";
    document.body.style.backgroundColor = "#ffe4e1";
  } else {
    message.style.display = "none";
    button.textContent = "Click me for magic!";
    document.body.style.backgroundColor = "white";
  }
});

