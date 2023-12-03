/* Etch A Sketch game*/

const gridSizeButton = document.querySelector('#pink');
const rgbButton = document.querySelector('#rainbow');
const gridContainer = document.querySelector('#grid-container');
const SQUARE_SIZE = 20;

// Create AxA grid of pink square divs
// UPDATE: add progressive darkening. Each interaction adds 20% more color, so full color after 5 interactions
gridSizeButton.addEventListener('click', () => {

    // First, clear previous grid created
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let gridSize;
    do {
        gridSize = parseInt(prompt('Please enter the grid size as in AxA: '));
        if (gridSize > 100) {
            alert('Grid size can be 100 at max. Please try again.');
        }
    } while (gridSize > 100) 
    
    for (i = 0; i < gridSize; i++) {

        for (j = 0; j < gridSize; j++) {
            gridContainer.appendChild(document.createElement('div'));
        }
    }
    // Adding same height and width so each div becomes a square
    // Container width is calculated such that it wraps to form a AxA grid
    gridContainer.style = `border: 2px solid black; height: ${gridSize * SQUARE_SIZE}px; width: ${gridSize * SQUARE_SIZE}px; display: flex; flex-wrap: wrap`;

    // Set height and width for each square in a way that it matches the size of the gridContainer
    const squares = document.querySelectorAll('#grid-container > div');
    squares.forEach((square) => square.style = `width: ${SQUARE_SIZE}px; height: ${SQUARE_SIZE}px; flex: none`);

    // Set up hover effect on divs to change color when mouseover, leaving a trail like a pencil would
    // initial color(always white): 255 255 255, my target color 100%: 255 0 43 (or whatever color I want selected from upper area of rgb color selector)
    // Delta after each darkening factor applied: R(255-255)*factor= 0 G(0-255)*factor = -51 B(43-255)*factor= -42.4
    
    // My target color
    let rgbNum1 = 255;
    let rgbNum2 = 0;
    let rgbNum3 = 43;
    
    squares.forEach((square) => {
        let darkFactor = 0.125;
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = `rgb(${255 + (rgbNum1 - 255)*darkFactor}, ${255 + (rgbNum2 - 255)*darkFactor}, ${255 + (rgbNum3 - 255)*darkFactor})`;
            if (darkFactor < 1) {
                darkFactor += 0.125;
            } 
        });
    });
});


// Create AxA grid of rgb square divs
rgbButton.addEventListener('click', () => {

    // First, clear previous grid created
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let gridSize;
    do {
        gridSize = parseInt(prompt('Please enter the grid size as in AxA: '));
        if (gridSize > 100) {
            alert('Grid size can be 100 at max. Please try again.');
        }
    } while (gridSize > 100) 
    
    for (i = 0; i < gridSize; i++) {

        for (j = 0; j < gridSize; j++) {
            gridContainer.appendChild(document.createElement('div'));
        }
    }
    // Adding same height and width so each div becomes a square
    // Container width is calculated such that it wraps to form a AxA grid
    gridContainer.style = `border: 2px solid black; height: ${gridSize * SQUARE_SIZE}px; width: ${gridSize * SQUARE_SIZE}px; display: flex; flex-wrap: wrap`;

    // Set height and width for each square in a way that it matches the size of the gridContainer
    const squares = document.querySelectorAll('#grid-container > div');
    squares.forEach((square) => square.style = `width: ${SQUARE_SIZE}px; height: ${SQUARE_SIZE}px; flex: none`);

    // Set up hover effect on divs to change color when mouseover, leaving a trail like a pencil would. Random Value for rgb
    
    squares.forEach((square) => square.addEventListener('mouseover', (e) => {
        let rgbNum1 = Math.floor((Math.random() * 255) + 1);
        let rgbNum2 = Math.floor((Math.random() * 255) + 1);
        let rgbNum3 = Math.floor((Math.random() * 255) + 1);
        e.target.style.background = `rgb(${rgbNum1}, ${rgbNum2}, ${rgbNum3})`;
    }));
});
