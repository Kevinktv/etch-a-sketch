function makeGrid(size){
    let grid = document.querySelector('.grid');
    grid.remove();
    grid = document.createElement('div');
    grid.classList.add('grid');
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
    const body = document.querySelector('body');
    const flex = document.querySelector('.flex');
    body.insertBefore(grid, flex);



    const cells = document.querySelectorAll('.grid>div');
    // Resize button
    btn = document.querySelector('button#resize');
    btn.addEventListener('click', resize);

    // psychedelic colors
    btn = document.querySelector('button#psychedelic');
    btn.addEventListener('click', fillColor);

    // Black white colors
    btn = document.querySelector('button#black');
    btn.addEventListener('click', fillColor);

    // Eraser button
    btn = document.querySelector('button#eraser');
    btn.addEventListener('click', fillColor);
}

function addBlack(e){
    //Adds a color class to cell on hover
    const cell = e.target;
    cell.style.backgroundColor = 'black';
}

function psychedelic(e){
    const cell = e.target;
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    cell.style.backgroundColor = rgb;
}

function eraser(e){
    const cell = e.target;
    cell.style.backgroundColor = 'white';
}

function fillColor(e){
    // fills square with color depending on the mouse event value(button value)
    const col = e.target.value;
    console.log(col)
    const cells = document.querySelectorAll('.grid>div');
    switch(col){
        case 'black': 
            cells.forEach((cell) => {cell.onmouseover = addBlack});
            break;
        
        case 'psychedelic':
            cells.forEach((cell) => {cell.onmouseover = psychedelic});
            break;
        
        case 'eraser':
            cells.forEach((cell) => {cell.onmouseover = eraser});
            break;
    }
}

function resize(e){
    //Resize the grid.
    let newSize;
    do{
        newSize = prompt('Enter the new size! (Less than 100)');
    }
    while(newSize > 100);

    makeGrid(Number(newSize));


}

// Making the default grid on page start
makeGrid(16);
