
const btnDown = document.querySelector("[data-action=decrement]");
const btnUp = document.querySelector("[data-action=increment]");
const textValue = document.querySelector("#value");

let counterValue=0;

btnDown.addEventListener("click", () => {
    counterValue -= 1;
    textValue.innerHTML = counterValue
});
btnUp.addEventListener("click",() => { 
     counterValue += 1;
   textValue.innerHTML = counterValue
});

