console.log("js is working");

//get values of all div/square by using parent div 'panel'
const squares = document.querySelectorAll('#gamePanel div');
const resetBtn = document.querySelector('#resetBtn');
let player = document.querySelector(".playerName");
let winnerPlayer = document.querySelector(".winner");

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
    findWinner();
}; //end of cellClick function

let winner;
let winFlag = null;

function findWinner() {
    if ((board[0] === board[1]) && (board[1] === board[2])) {  //first row
        winner = board[0];
        console.log("winner", winner);
    } else if ((board[3] === board[4]) && (board[4] === board[5])) { //second row
        winner = board[3];
        console.log("winner", winner);
    } else if ((board[6] === board[7]) && (board[7] === board[8])) { //third row
        winner = board[6];
        console.log("winner", winner);
    }
    else if ((board[0] === board[3]) && (board[3] === board[6])) { //first column
        winner = board[0];
        console.log("winner", winner);
    }
    else if ((board[1] === board[4]) && (board[4] === board[7])) { //second column
        winner = board[1];
        console.log("winner", winner);
    }
    else if ((board[2] === board[5]) && (board[5] === board[8])) { //third column
        winner = board[2];
        console.log("winner", winner);
    }
    else if ((board[0] === board[4]) && (board[4] === board[8])) { //diagonal
        winner = board[0];
        console.log("winner", winner);
    }
    else if ((board[2] === board[4]) && (board[4] === board[6])) { //diagonal
        winner = board[2];
        console.log("winner", winner);
    } else if (board.includes('')) {  //if cells are empty then no winner
        winner = null;
    } else {
        winner = "Its a tie - NoWinner"; //its a tie if cell is not null
    }

    winnerPlayer.textContent = winner;

}

function reset() {
    alert("are you sure for a new game?");
    location.reload();

}

//add eventListener for each cell/Div
document.getElementById('gamePanel').addEventListener('click', cellClick);
resetBtn.addEventListener("click", reset);



// console.log("js is working");

// //get values of all div/square by using parent div 'panel'
// const squares = document.querySelectorAll('#gamePanel div');
// const squareBoxes = document.querySelectorAll(".squareBox");
// const resetBtn = document.querySelector('#resetBtn');
// let player = document.querySelector(".playerName");
// let winnerPlayer = document.querySelector(".winner");

// //create an array of  all squares values 
// let squaresArray = Array.from(squares);
// console.log(`squares/div array ${squaresArray}`);
// console.log(squaresArray);

// let turn = 'X';

// let board = [
//     '', '', '',
//     '', '', '',
//     '', '', ''
// ];

// function cellClick(event) {

//     // const squares = document.querySelectorAll('#gamePanel div');
//     // let squaresArray = Array.from(squares);
//     //Find the index of the square from squares Array ==> that matches the square that the user clicks

//     let ids = squaresArray.findIndex(function (square) {
//         //event.target return which square was clicked
//         console.log("return square === event.target " + event.target);
//         return square === event.target;
//     });

//     console.log("Ids is " + ids);

//     //display value on div
//     event.target.textContent = turn;
//     squaresArray[ids] = turn;
//     board[ids] = turn; //adding index value of a particular square to board array

//     console.log("the value of board is" + board);


//     //logic to give another player a turn
//     // let turn = 'X';
//     if (turn === 'X') {
//         console.log(player);
//         player.textContent = turn;

//         turn = 'O'
//         //change color of selected cell/Div to Blue
//         event.target.style.backgroundColor = "blue";

//     } else {
//         turn = 'X'
//         player.textContent = "O";
//         //change color of selected cell/Div to RED
//         event.target.style.backgroundColor = "red";
//     };
//     findWinner();
// }; //end of cellClick function

// let winner;

// function findWinner() {
//     if ((board[0] === board[1]) && (board[1] === board[2])) {  //first row
//         winner = board[0];
//         //removeClickEvent();
//     } else if ((board[3] === board[4]) && (board[4] === board[5])) { //second row
//         winner = board[3];
//         //removeClickEvent();
//     } else if ((board[6] === board[7]) && (board[7] === board[8])) { //third row
//         winner = board[6];
//         //removeClickEvent();
//     } else if ((board[0] === board[3]) && (board[3] === board[6])) { //first column
//         winner = board[0];
//         //removeClickEvent();
//     } else if ((board[1] === board[4]) && (board[4] === board[7])) { //second column
//         winner = board[1];
//         //removeClickEvent();
//     } else if ((board[2] === board[5]) && (board[5] === board[8])) { //third column
//         winner = board[2];
//         //removeClickEvent();
//     } else if ((board[0] === board[4]) && (board[4] === board[8])) { //diagonal
//         winner = board[0];
//         //removeClickEvent();
//     } else if ((board[2] === board[4]) && (board[4] === board[6])) { //diagonal
//         winner = board[2];
//         //removeClickEvent();
//     } else if (board.includes('')) {  //if cells are empty then no winner
//         winner = null;
//     } else {
//         winner = "It's a tie - NoWinner"; //its a tie if all above conditions in if-else-if not met
//     }

//     winnerPlayer.textContent = winner; //display winner on html

// }

// function reset() {
//     alert("are you sure for a new game?");
//     //location.reload();
//     player.textContent = "";
//     winnerPlayer.textContent = "";
// }

// // function reset() {
// //     board = ['', '', '', '', '', '', '', '', ''];
// //     turn = 'X';

// //     squares.forEach((square) => {
// //         square.innerHTML = "";
// //         square.removeEventListener("click", cellClick);
// //         square.addEventListener("click", cellClick, { once: true });
// //         //str.event.target.style.backgroundColor = "white";

// //     });
// // }
// // function removeClickEvent() {
// //     //document.getElementById('gamePanel').removeEventListener("click", cellClick);
// //     squares.forEach((box) => {
// //         box.removeEventListener("click", cellClick);
// //     });
// // }


// //add eventListener for each cell/Div
// document.getElementById('gamePanel').addEventListener('click', cellClick);
// resetBtn.addEventListener("click", reset);













