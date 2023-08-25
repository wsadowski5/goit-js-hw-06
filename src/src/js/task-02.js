const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




ingredients.forEach ( element => {

const listElement = document.createElement('li');

listElement.textContent = element;
listElement.classList.add('item');
console.log(listElement);

const list = document.querySelector("#ingredients");
list.append(listElement);
})






