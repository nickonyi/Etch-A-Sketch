const container = document.querySelector('#container');

function createGrid(gridsize) {
    for (i = 0; i < gridsize ** 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.style.border = '1px solid black';
        container.appendChild(newDiv);
        container.style.gridTemplateColumns = `repea`;
    }

}

window.onload = createGrid(16);