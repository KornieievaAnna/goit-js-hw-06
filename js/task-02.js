const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
const arr = [];
for (const ingredient of ingredients) {
  const mark = document.createElement('li')
  mark.textContent = ingredient;
  mark.classList.add("items")
  arr.push(mark)
}
console.log(list.append(...arr))