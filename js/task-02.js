const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// ingredients.forEach ( element => {
// console.log(element)
// const listElement = document.createElement('li');

// listElement.textContent = element;
// listElement.classList.add('item');
// console.log(listElement);

// const list = document.querySelector("#ingredients");
// list.append(listElement);
// })

console.log('-------------------------------------------------')


const ingredientsArr = ingredients.map ( ingredient => {
  
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  listElement.classList.add('item');
  return listElement;
  
}
)

const list = document.querySelector("#ingredients");
list.append(...ingredientsArr);







