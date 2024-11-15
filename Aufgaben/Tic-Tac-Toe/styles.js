var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var buttons = document.querySelectorAll('.tic-tac-toe button');
var CurrentPlayer = "X"; // This also defines who starts$

function set_move()

document.getElementsByTagName("button").addEventListener("click", set_move);