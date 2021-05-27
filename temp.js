function makeGrid(size){
    const grid = document.querySelector('#grid');

    let gridSize = '';
    for(i = 0; i < size; ++i){
        gridSize = gridSize + 'auto ';
    }
    gridSize = gridSize.trimEnd();

    grid.setAttribute('style',
    `grid-template-rows: ${gridSize}; grid-template-columns: ${gridSize};`);

    for(i = 0; i < size * size; ++i){
        let div = document.createElement('div');
        grid.appendChild(div);
    }
}

function addColor(e){
    //Adds a color class to cell on hover
    const cell = e.target;
    cell.classList.add('fillIn');
}

function resize(){
    //Resize the grid.
    let size;
    do{
        size = prompt('Enter the new size! (Less than 100)');
    }
    while(size > 100);



}

// Making the default grid on page start
makeGrid(16);

// Change color on hover
const cells = document.querySelectorAll('#grid>div');
cells.forEach((cell) => {cell.addEventListener('mouseover', addColor)});

// button
btn = document.querySelector('button');
btn.addEventListener('click', resize);