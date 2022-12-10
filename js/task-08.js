const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const adressBook = {};
    const emailString = email.value.trim()
    const passworString = password.value.trim();
  if (emailString === "" || passworString === "") {
    alert("Please fill in all the fields!");
  } else {
    adressBook.email = emailString;
    adressBook.password = passworString;
    console.log(adressBook);
    event.currentTarget.reset();
  }

}
