console.log("js is working");

//get values of all div/square by using parent div 'panel'
const squares = document.querySelectorAll('#gamePanel div');
const resetBtn = document.querySelector('#resetBtn');
let player = document.querySelector(".playerName");

//create an array of  all squares values 
let squaresArray = Array.from(squares);
console.log(`squares/div array ${squaresArray}`);
console.log(squaresArray);

let turn = 'X';

let board = [
    '', '', '',
    '', '', '',
    '', '', ''
];

function cellClick(event) {

    // const squares = document.querySelectorAll('#gamePanel div');
    // let squaresArray = Array.from(squares);
    //Find the index of the square from squares Array ==> that matches the square that the user clicks

    let ids = squaresArray.findIndex(function (square) {
        //event.target return which square was clicked
        console.log("return square === event.target " + event.target);
        return square === event.target;
    });

    console.log("Ids is " + ids);

    //display value on div
    event.target.textContent = turn;
    squaresArray[ids] = turn;
    board[ids] = turn; //adding index value of a particular square to board array

    console.log("the value of board is" + board);

    //logic to give another player a turn
    // let turn = 'X';
    if (turn === 'X') {
        console.log(player);
        player.textContent = turn;

        turn = 'O'
        //change color of selected cell/Div to Blue
        event.target.style.backgroundColor = "blue";

    } else {
        turn = 'X'
        player.textContent = "O";
        //change color of selected cell/Div to RED
        event.target.style.backgroundColor = "red";
    };


}; //end of cellClick function

function reset() {
    alert("are you sure for a new game?");
    location.reload();

}

//add eventListener for each cell/Div
document.getElementById('gamePanel').addEventListener('click', cellClick);
resetBtn.addEventListener("click", reset);














