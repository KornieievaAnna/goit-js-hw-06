const list = document.querySelectorAll("li.item");

console.log(`Number of categories: ${list.length}`)

for (const elem of list) {
    const mess = `Category: ${elem.firstElementChild.textContent} \n Elements: ${elem.lastElementChild.children.length} `
    console.log(mess)
}
