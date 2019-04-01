//Set up array: key inputs, wins, looses, guesses left

var keyChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var Losses = 0;
var guessesLeft = 12;
//use event listener to capture use input
document.onkeyup = function (event) {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase(); //toLowerCase if user inputs Capital
    //generate random keyChoice
    var computerGuess = keyChoice[Math.floor(Math.random() * keyChoice.length)];
    //Manipulate DOMS in functions
    //document.: getElementbyID, getELementByCLassName, querySelector
    //reset guess once user reaches 0
    function newGame() {
        guessesLeft = 12;
        document.querySelector(".guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }
    //Correct guess increment wins + reset guessesleft
    function correctGuess() {
        wins++;
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        newGame();
        document.querySelector(".userGuess").innerHTML = " ";
    }
    //incorrect guess increment loss + reset guessesleft
    function incorrectGuess() {
        Losses++;
        document.querySelector(".Losses").innerHTML = "Losses: " + Losses;
        newGame();
        document.querySelector(".userGuess").innerHTML = " ";
        document.querySelector(".looser").src = "C:\Users\Juanito\Psychic_Game\assets\images\boo.gif";
    }
    //check user input with generated keyChoice
    if (userInput === computerGuess) {
        correctGuess();
    } else {
        guessesLeft--;
        document.querySelector(".guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.querySelector(".userGuess").append(" " + userInput + ", ");
    }
    if (guessesLeft === 0) {
        incorrectGuess();
    } if (wins === 12) {
        Exit();
    }
};