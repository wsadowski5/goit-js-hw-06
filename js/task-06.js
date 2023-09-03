const input = document.querySelector('#validation-input')




const handleInput = (event) => {

const dataLength = document.querySelector('input[data-length="6"]');
const value = event.currentTarget.value;

if (value.length < input.dataset.length){
    input.classList.add("invalid")
    input.classList.remove("valid")
}
else {
    input.classList.add("valid");
    input.classList.remove("invalid")
}

}


input.addEventListener("blur", handleInput )