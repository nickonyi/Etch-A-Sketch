const container = document.querySelector('#container');
const button = document.querySelector('.btn-grid-size');


function addGrid(numberOfDivsToCreate) {

    let gridSize = Math.pow(numberOfDivsToCreate, 2);

    while (gridSize > 0) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.style.border = '1px solid black';
        container.appendChild(newDiv);

        gridSize--;
    }


    container.setAttribute(
        'style',
        `grid-template:repeat(${numberOfDivsToCreate},1fr)/repeat(${numberOfDivsToCreate},1fr);`
    );
}




function changeColor() {
    this.style.background = 'red';
}

function clear() {
    let reqGridSize = prompt('How many squares do you want?');

    if (reqGridSize >= 1 && reqGridSize <= 100) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild); //remove all the grid boxess
        }
        addGrid(reqGridSize);
    } else {
        alert("choose a number between 1 - 100");
        clear();
    }
}

button.addEventListener('click', clear);
window.onload = addGrid(16);