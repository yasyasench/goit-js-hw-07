function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector(".js-container");
const input = document.querySelector(".input");
const create = document.querySelector(".create-btn");
const destroy = document.querySelector(".destroy-btn");

create.addEventListener("click", handleCreate);
destroy.addEventListener("click", handleDestroy);


function handleCreate() {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; 
  } else {
    alert("Введіть, будь ласка, число від 1 до 100 :)");
  }
}


function createBoxes(amount) {
  container.innerHTML = ""; 

  let boxSize = 30; 
  const boxBigger = 10; 
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += boxBigger;
    fragment.appendChild(box); 
  }
  container.appendChild(fragment); 
  
}

function handleDestroy() {
  container.innerHTML = "";
}