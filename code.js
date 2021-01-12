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
  ['', '', '', '', '', ''],
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
function ai_move() {
    let x = Math.floor(Math.random() * Math.floor(6))
    let a = get_available_space(x);
    let b = check_col_full (x);

    if (b == true){
    
    } else {
      board[a][x] = ai_color;
      render_board();
      const outcome = detect_wlt();

        if(outcome == 'continue'){

        }else{
          alert(outcome);


          switch(outcome){
        case 'loss':
            losses++;
            break;
        case 'tie':
            ties++;
            break;
        case 'win':
            wins++;
            break;
          }
          reset()
          update_score ()
        }
    }

   
}
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

function reset() {
    
    board = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', '']
  ]

  render_board()
  update_score()
}

/**
 * Because we are only checking horizontally for now
 * The function will iterate over each row
 * and count the simulatenous occurrences of each color.
 * 
 * If 4 is reached, that color wins
 */
function detect_wlt() {
  // Check if board is full, if so, tie
  let tie = true
  for (let i = 0; i < 6 && tie; i++) {
    if (!check_col_full(i)) {
      tie = false
    }
  }

  if (tie) return 'tie'

  // Check WTL for each player
  for (let y = 0; y < board.length; y++) {    
    let row = board[y]

    let lastColor = null;
    let count = 0

    for (let col = 0; col < row.length; col++) {
      let color = row[col]

      if (col === 5) {
        lastColor = row[col - 1] 
      }

      if (lastColor === null) {
        lastColor = color;
        count = 1;
      } else if (lastColor === color) {
        count++;
      } else {
        lastColor = color
        count = 1;
      }

      if ((lastColor === user_color) && count >= 4) {
        return 'win'
      } else if ((lastColor === ai_color) && count >= 4) {
        return 'loss'
      } else {
        continue;
      }
    }
  }

  return 'continue'
}

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
          ai_move();
        }else{
          alert(outcome)
          switch(outcome){
        case 'win':
            wins++;
            break;
        case 'tie':
            ties++;
            break;
        case 'loss':
            losses++;
            break;
          }
          reset()
          update_score ()
        }
    } 
  
}


// Updates the HTML with the new score
function update_score () {
  document.getElementById('wins').textContent = 'Wins: ' + wins
  document.getElementById('loss').textContent = '| Losses: ' + losses
  document.getElementById('tie').textContent = '| Ties: ' + ties
}


// Checks if a column is full
function check_col_full (col) {
    let count = 0
    for(let i = 0; i < 7; i++)
    {
        let spot = board[i][col]
        if(spot === "red" || spot === "yellow")
        {
            count ++
        }
    
    }
    if(count == 7)
    {
        return true
    }
    else{
        return false
    }
}

// Get the index of the correct available spot in a specific row
function get_available_space(col){
  for (let y = 0; y < board.length; y++) {
    let spot = board[y][col]
    if (spot === '') {
      continue;
    } else {
      return y - 1
    }
  }

  return 6
}

function quit(){
  reset()
  wins = 0
  losses = 0
  ties = 0
  update_score()
}
