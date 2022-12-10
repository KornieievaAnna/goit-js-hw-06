const body = document.body;
const nameColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeBodyColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
 const textColor = getRandomHexColor();
  nameColor.textContent = textColor;
  body.style.backgroundColor = textColor;
  console.log(textColor);
}


