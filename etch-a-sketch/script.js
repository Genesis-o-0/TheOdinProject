const gridContainer = document.getElementById("grid-container");
const colorBlindingBtn = document.getElementById("color-blinding");
const colorPicker = document.getElementById("color-picker");
const eraserBtn = document.getElementById("eraser");
const resetBtn = document.getElementById("reset");
const gridSizeInput = document.getElementById("grid-size");
const gridSizeText = document.getElementById("grid-size_text");
// default settings
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";
const ERASER_COLOR = "white";
let eraserMode = false;
let blendingMode = false;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
// preventing default draging behavior
document.body.addEventListener("dragstart", (event) => {
  event.preventDefault();
});
// simulating hold and drag mouse
let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

function createColumnsOfDivs(numberOfColumns) {
  const listOfDivs = [];
  for (let column = 0; column < numberOfColumns; column++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${gridContainer.clientWidth / numberOfColumns}px`;
    div.style.height = `${gridContainer.clientWidth / numberOfColumns}px`;
    div.addEventListener("mousedown", changeGridColor);
    div.addEventListener("mouseover", changeGridColor);
    listOfDivs.push(div);
  }
  return listOfDivs;
}
function changeGridColor(event) {
  if (event.type === "mouseover" && !mouseDown) {
    return;
  } else {
    if (blendingMode) {
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    } else if (eraserMode) {
      event.target.style.backgroundColor = ERASER_COLOR;
    } else {
      event.target.style.backgroundColor = currentColor;
    }
  }
}

function createGridOfDivs(numberOfRows, numberOfColumns) {
  for (let row = 0; row < numberOfRows; row++) {
    const rowOfDivs = createColumnsOfDivs(numberOfColumns);
    gridContainer.append(...rowOfDivs);
  }
}
function resetGrid() {
  eraserMode = false;
  blendingMode = false;
  colorBlindingBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
  gridContainer.innerHTML = "";
  createGridOfDivs(currentSize, currentSize);
}
colorBlindingBtn.onclick = () => {
  blendingMode = !blendingMode;
  colorBlindingBtn.classList.toggle("active", blendingMode);
  eraserBtn.classList.remove("active");
};
colorPicker.oninput = (event) => {
  eraserMode = false;
  blendingMode = false;
  eraserBtn.classList.remove("active");
  colorBlindingBtn.classList.remove("active");
  currentColor = event.target.value;
};
eraserBtn.onclick = () => {
  blendingMode = false;
  eraserMode = !eraserMode;
  colorBlindingBtn.classList.remove("active");
  eraserBtn.classList.toggle("active", eraserMode);
};
resetBtn.onclick = () => {
  resetGrid();
};
gridSizeInput.onchange = (event) => {
  currentSize = parseInt(event.target.value);
  gridSizeText.innerText = `${currentSize} x ${currentSize}`;
  resetGrid();
  createGridOfDivs(currentSize, currentSize);
};
window.onload = () => {
  createGridOfDivs(currentSize, currentSize);
  gridSizeText.innerText = `${currentSize} x ${currentSize}`;
  gridSizeInput.value = 16;
};
