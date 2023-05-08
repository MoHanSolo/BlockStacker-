/*----- constants -----*/

/*----- state variables -----*/
let start; // this will be 
let grid; // this will be a 2d array of 20 arrays with 20 arrays with 13 values 
let winner; // this will be a set to null
const button = document.querySelector("button"); // this will stop the moving blocks to iterate to the next row
const stop = document.querySelector('#stop');

/*----- cached elements  -----*/

/*----- event listeners -----*/
    // stop.addEventListener('click', function() {
    //     let i = 0;

    //     let blockStop = setInterval(function() {
    //         console.log('!')
    //     }, 1000);
    // });


/*----- functions -----*/
init();

function init() {
  start = 1;
  grid = [
    
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 12
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 11
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 10
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 9
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 8
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 7
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 6
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 5
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 4
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 3
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 2
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 1
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 0
// r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r 13 r14 r15 r16 r17 r18 r19 
    ];
    winner = null;
    render();
}
    // calls the render function for the grid, message, and controls
function render() {
  renderGrid();
  renderMessage();
  renderControls();
}

    // function that renders the grid and it's individual cells

function renderGrid() {
  grid.forEach(function(colArr, colIdx) {
    colArr.forEach(function(rowVal, rowIdx) {
        console.log(colArr, colIdx, rowVal, rowIdx)
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId)
        console.log(cellEl);
    });
  });
}

function renderMessage() {
  
}

function renderControls() {
  
}