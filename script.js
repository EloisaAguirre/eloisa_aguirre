const button = document.getElementById("magicButton");
const message = document.getElementById("secretMessage");

button.addEventListener("click", function() {
  if (message.style.display === "none") {
    message.style.display = "block";
    button.textContent = "🫣 Hide the magic";
    document.body.style.backgroundColor = "#e6cc99ff";
  } else {
    message.style.display = "none";
    button.textContent = "✨ Reveal the magic!";
    document.body.style.backgroundColor = "#c5c177ff";
  }
});


