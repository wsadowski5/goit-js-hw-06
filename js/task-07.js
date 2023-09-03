const input = document.querySelector('#font-size-control')

const span = document.querySelector('#text')


const handleInput = (event) => {
    const value = event.currentTarget.value;
    span.style.fontSize = `${value}px`;
}



input.addEventListener('input', handleInput)