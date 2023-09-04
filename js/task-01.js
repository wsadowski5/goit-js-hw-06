const numberOfCategories = document.querySelectorAll(".item");

console.log('Number of categories: ' + (numberOfCategories.length));

numberOfCategories.forEach(element => {

const categoryTitle = element.querySelector("h2");
console.log('Category:', categoryTitle.textContent);
const elementsOfCategory = element.querySelectorAll("li");
console.log(`Elements: `, elementsOfCategory.length);


});

