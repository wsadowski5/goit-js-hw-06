const value = document.querySelector("#value")
let counterValue = 0;


const minusBtn = document.querySelector('[data-action="decrement"]');
const minus = () => {
    
    counterValue--;
    value.innerHTML = counterValue
}

minusBtn.addEventListener("click", minus);


const plusBtn = document.querySelector('[data-action="increment"]');
const plus = () => {
    
    counterValue++;
    value.innerHTML = counterValue
}

plusBtn.addEventListener("click", plus);


