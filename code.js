// Board columns are populated with the name of their color to decide what color to make the HTML column background
let board = [
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', '']
]

let wins = 0
let losses = 0
let ties = 0

// Iterates the board and renders each piece and their associated color
function render_board() {

}

// Randomly chooses a space
function ai_move() {}

function user_move() {}

function reset() {}

/**
 * Because we are only checking horizontally for now
 * The function will iterate over each row
 * and count the simulatenous occurrences of each color.
 * 
 * If 4 is reached, that color wins
 */
function detect_wlt() {}

/**
 * Checks if the tile is occupied, if so notify the user
 * If tile is not occupied, the column is set with the name of the user's color
 * Then executes the wlt detection and check results to either execute the ai's move
 * or update the score
 * @param {*} x 
 * @param {*} y 
 */
function choose (x, y) {}

// Updates the HTML with the new score
function update_score () {}