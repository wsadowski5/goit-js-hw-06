function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


// --------------------- CREATE --------------------------------


const handleInput = (event) => {

  const value = input.value;
  const createBoxes = (amount) => {

    for ( let i = 0; i <= amount; i++) {
     
      const box = document.createElement('div');
      
      let boxSize = 30 + 10*i

      box.setAttribute("id", "boxes")
      box.style.width=`${boxSize}px`;
      box.style.height=`${boxSize}px`;
      box.style.backgroundColor=getRandomHexColor();
      boxes.append(box);
    }
  }
  
  createBoxes(value-1)

}

createBtn.addEventListener('click', handleInput)


// -------------------- DESTROY -----------------------

const boxes = document.querySelector('#boxes')
const destroyBoxes = () => {
  boxes.remove()
  destroyBtn.removeEventListener('click', destroyBoxes)
}

destroyBtn.addEventListener('click', destroyBoxes)






