console.log("js is working");

//get values of all div/square by using parent div 'panel'
const squares = document.querySelectorAll('#gamePanel div');
const resetBtn = document.querySelector('#resetBtn');
console.log(resetBtn);
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


};

function reset() {
    alert("are you sure for a new game?");
    const squares1 = document.querySelectorAll('#gamePanel div'); console.log(`sqaures${squares1}`);
    let squaresArray1 = Array.from(squares1);

    // const divColor = squares1.style.backgroundColor;
    // console.log(divColor);
    // squares1.style.textContent = "";

    // player.textContent = "";


    let ids1 = squaresArray1.findIndex(function (square1) {
        //event.target return which square was clicked
        console.log("return square1 in reset === event.target " + event.target);
        return square1 === event.target;
    });

    squaresArray1[ids1] = "";

}

//add eventListener for each cell/Div
document.getElementById('gamePanel').addEventListener('click', cellClick);
resetBtn.addEventListener("click", reset);

























//const squares = Array.from(document.querySelectorAll('#board div'));
// const squares = Array.from(document.querySelectorAll('#panel'));
// console.log(squares);

// function game() {
//         board = [
//             '', '', '',
//             '', '', '',
//             '', '', ''
//         ];
//     };

//     game();

//     function playGame() {

//         //reading each indes of board array
//         board.forEach(function (mark, index) {
//             console.log("index is  " + index);

//             mark = squaresArray[index].textContent;
//             //console.log("mark is " + mark);

//         });

    //Below foreach returns all 9 elements
    // board.forEach((index) => {
    // console.log("index is  " + index);

    // mark = squaresArray[index].textContent;
    // console.log("mark is " + mark);

    // });
// }

//playGame();