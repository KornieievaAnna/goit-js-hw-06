const textInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
const initialName = userName.textContent;

// textInput.addEventListener("input", (event) => {
//     if (event.currentTarget.value) {
// userName.textContent = event.currentTarget.value;
// } else {userName.textContent = initialName}
// });

// При наличии только пробела:
textInput.addEventListener("input", (event) => {
  let trimmedString = event.currentTarget.value.trim();

  if (trimmedString.length !== 0) {
    userName.textContent = trimmedString;
  } else {
    userName.textContent = initialName;
  }
});
