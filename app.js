// create a 16x16 grid of square divs
let board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat($size, 1fr)`;
board.style.gridTemplateRows = `repeat($size, 1fr)`;

// creates our background grid
for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
   square.style.backgroundColor = 'blue';
   board.insertAdjacentElement('beforeend', square);
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}