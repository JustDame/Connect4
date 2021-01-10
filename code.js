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
function ai_move() {

    let a = get_available_space(x);
    let b = check_col_full (x);

    if (b == true){
    
    } else {
      board[a][x] = ai_color;
      render_board();
      const outcome = detect_wlt(board);

        if(outcome == 'continue'){
          ai_turn();
        }else{
          alert(outcome);

          switch(outcome){
        case 'loss':
            losses++;
            break;
        case 'tie':
            ties++;
            break;
          }
          update_score ()
        }
    }

   
}

function reset() {
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
 */
function user_move(x) 
{
    let a = get_available_space(x);
    let b = check_col_full (x);

    if (b == true){
      alert('Current column is full');
    } else {
      board[a][x] = user_color;
      render_board();
      const outcome = detect_wlt(board);

        if(outcome == 'continue'){
          ai_turn();
        }else{
          alert(outcome)
          switch(outcome){
        case 'win':
            wins++;
            break;
        case 'tie':
            ties++;
            break;
          }
          update_score ()
        }
    } 
  
}


// Updates the HTML with the new score
function update_score () {}


// Checks if a column is full
function check_col_full (col) {

}

// Get the index of the correct available spot in a specific row
function get_available_space(col){

}