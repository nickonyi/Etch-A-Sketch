const container = document.querySelector('#container');
const userColorPicker = document.querySelector('#input-color');
const colorButtons = document.querySelectorAll('.featurebutton');
let color = 'black';



function createGrid(gridsize) {
    for (i = 0; i < gridsize ** 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.style.border = '1px solid black';
        container.appendChild(newDiv);
        container.style.gridTemplateColumns = `repeat(${gridsize},1fr)`;
        container.style.gridTemplateRows = `repeat(${gridsize},1fr)`;
    }
    const gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'gray':
            this.style.backgroundColor = 'gray';
            break;
        case 'eraser':
            this.style.backgroundColor = 'white';
            break;
        default:
            this.style.background = color;
    }

}

function changeColor(e) {
    switch (e.target.dataset.color) {
        case 'rainbow':
            color = 'rainbow';
            break;
        case 'gray':
            color = 'gray';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
    }
}

function userSelection(e) {
    color = e.target.value;
}

function resetGrid() {
    const reqGridSize = prompt("Enter the number of boxes you want");

    if (reqGridSize >= 1 && reqGridSize <= 100) {
        const gridCells = document.querySelectorAll('.grid');
        gridCells.forEach(gridCell => gridCell.remove());
        createGrid(reqGridSize);
    } else {
        alert("The boxes should be between 1-100");
    }
}
window.onload = createGrid(16);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
userColorPicker.addEventListener('change', userSelection);
userColorPicker.addEventListener('input', userSelection);