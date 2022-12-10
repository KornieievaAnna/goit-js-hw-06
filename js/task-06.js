const textInput = document.querySelector('#validation-input')
const inputValue = Number(textInput.dataset.length);

textInput.addEventListener("input", (event) => {
    textInput.textContent = event.currentTarget.value;
})

textInput.addEventListener("blur", () => {
    if (textInput.textContent.length === inputValue) {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid');
    }
    else {
        textInput.classList.remove('valid')
        textInput.classList.add('invalid');
    };
});



