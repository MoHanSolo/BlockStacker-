/*----- constants -----*/
const COLORS = {
    '0': 'black',
    '1': 'limegreen'
};
/*----- state variables -----*/
let start; // this will be the starting position of the game
let grid; // this will be a 2d array of 20 arrays with 13 values 
let winner = null; // this will be a set to null
const button = document.querySelector("button"); // this will stop the moving blocks to iterate to the next row


/*----- cached elements  -----*/

const winMessage = document.querySelector('h3');
const stopEls = [...document.querySelectorAll(".grid-item")];

/*----- event listeners -----*/
    
document.querySelector('#button').addEventListener('click', stopBlocks);


/*----- functions -----*/
init();

function init() {
// start = 1;    
  grid = [
    
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 0
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 1
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 2
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 3
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 4
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 5
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 6
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 7
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 8
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 9
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 10
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 11
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // col 12
// r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r 13 r14 r15 r16 r17 r18 r19 
    ];
    winner = null;
    render();
}

function stopBlocks(evt) {
  const rowIdx = stopEls.indexOf(evt.target);
  const rowArr = grid[rowIdx];
  console.log(rowIdx);


}

    // calls the render function for the grid, message, and controls
  
  function render() {
  renderGrid();
  renderMessage();
  renderControls();
  renderCell();
}

    // function that renders the grid and individual cells in each array

function renderGrid() {
  grid.forEach(function(colArr, colIdx) {
    colArr.forEach(function(rowVal, rowIdx) {
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = COLORS[rowVal]
        cellEl.addEventListener("click", () => {
          console.log(cellId)
        })
       
    });
  });
}

function renderCell() {
  for (cell of cellId) {
    const newArticle = document.createElement("article");
    newArticle.setAttribute("Cell ID");
    newArticle.innerHTML = `<h4>${cellId}</h4>`;
    grid.appendChild(newArticle);
  };

  document.body.appendChild(sectionGrid);
}

    // message that is made visible once player wins (reaches the top)

    // function to move one cell across the grid's row
// function moveOne() {
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         grid[i][j] = 0 
//         grid[i][j + 1] = 1
//         break
//       } 
//     }
//   }
//   renderGrid()
// }

function renderMessage() {
    if(winner) {
        
 }
}

function renderControls() {
  // the win message needs to be rendered conditionally 

  // win message: hide while game is in play 
  // button: hide when there is a winner
  if(winner) {
    winMessage.style.visibility = 'visible';

 if(!winner) {
    button.style.visibility = 'visible';
  }
 }
};

// setInterval(moveOne, 3000)