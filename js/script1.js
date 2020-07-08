
alert("are you sure for a new game?");

//reset name of player
player.textContent = "";

const squares1 = document.querySelectorAll('#gamePanel div');
console.log(`sqaures   ${squares1}`);

squares.style.backgroundColor = "white";
document.getElementById('#gamePanel div').style.background = "orange";
    // const divColor = squares1.style.backgroundColor;
    // console.log(divColor);
    // squares1.style.textContent = "";


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