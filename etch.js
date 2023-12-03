/* Etch A Sketch game*/

const gridSizeButton = document.querySelector('button');
const gridContainer = document.querySelector('#grid-container');
const SQUARE_SIZE = 20;

// Create AxA grid of square divs
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
    squares.forEach((square) => square.addEventListener('mouseover', (e) => e.target.style.background = 'pink'));
});



