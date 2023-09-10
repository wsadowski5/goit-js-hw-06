const input = document.querySelector('#name-input')

const output = document.querySelector('#name-output')

const handleInput = (event) => {

    const value = event.currentTarget.value;

    if (value.length < 1 ) {
        output.textContent = "Anonymous"
    }
    else {
        output.textContent = value;
        console.log(value)
    }
}

input.addEventListener("input", handleInput)

