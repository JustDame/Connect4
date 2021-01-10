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
    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 6; j++)
        {
            let chip = document.getElementById(`chip-${i}-${j}`).style.backgroundColor = board[i][j]
            
        }
    }
    
}

// Randomly chooses a space
function ai_move() {}

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
 * If row is not occupied, get_available_space is called for that row
 * whose results are used to change the board at that index to user_color
 * @param {*} x 
 * @param {*} y 
 */
function choose (x) {}

// Updates the HTML with the new score
function update_score () {}

// Checks if a column is full
function check_col_full (col) {

}

// Get the index of the correct available spot in a specific row
function get_available_space(col) {}