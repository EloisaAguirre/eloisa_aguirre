const imageButton = document.getElementById("magicImageButton");
const message = document.getElementById("secretMessage");

let isMagicShown = false;

imageButton.addEventListener("click", function() {
  isMagicShown = !isMagicShown;

  if (isMagicShown) {
    imageButton.src = "images/zapateo.jpeg";
    message.style.display = "block";
    document.body.style.backgroundColor = "#ffe4e1";
  } else {
    imageButton.src = "images/dabke.jpeg";
    message.style.display = "none";
    document.body.style.backgroundColor = "white";
  }
});




