# Connect 4

### Procedure

- users can select which column they want to go to
- change turns after each move
- track wlt
  - check wins
- different color markers for the player and ai
- reset
- check if there is no overlay
- check when a column or row if full with different markers
- quit

**[assumptions]**

- assume wins by column
- assume the ai is random
- assume the player will red
- assume the player moves first
- assume there is no time between turns

**[structure]**

---

variables

    - board
    - wlt
    - (color)

---

ai_move(){

    -- check color
    {- check for open spot}

    - random movement

    - switch turn

}

user_move(){

    -- check color
    {- check for open spot}

    - on click players movement

    - switch

}

board(){

    - array of arrays of strings

}

reset(){

    - clear the board

}

detection(wlt){

    -- it should check color

    {- track wins

    - track losses

    - track tie}

    - store the outcome

}

quit(){

    - when the player hovers over the box it should say something along the lines of "surrender to cowardness?"

}
