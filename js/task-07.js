
let textSize = document.getElementById('font-size-control');
let text = document.getElementById('text');
text.style.fontSize = textSize.value + "px";

textSize.addEventListener("change", function () {
    text.style.fontSize = this.value + "px";
})