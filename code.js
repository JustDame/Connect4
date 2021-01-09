// Board columns are populated with the name of their color to decide what color to make the HTML column background
let ai_color = 'yellow'
let user_color = 'red'

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

function user_move(x, y) {}

function reset() {
    wins = 0   
    losses = 0
    ties =  0

    board = [
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', '']
  ]

}

/**
 * Because we are only checking horizontally for now
 * The function will iterate over each row
 * and count the simulatenous occurrences of each color.
 * 
 * If 4 is reached, that color wins
 */
function detect_wlt() {}

/**
 * Checks if the row is full, if so notify the user
 * If row is not occupied, the next available column in that row is passed to user_move fn call
 * @param {*} x 
 * @param {*} y 
 */
function choose (x, y) {}

// Updates the HTML with the new score
function update_score () {}