const button = document.getElementById("magicButton");
const message = document.getElementById("secretMessage");

button.addEventListener("click", function() {
  message.style.display = "block";
  document.body.style.backgroundColor = "#ffe4e1"; // light pink
});

