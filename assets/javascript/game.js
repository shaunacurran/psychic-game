var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;


    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)



   // When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }
    else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

  
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessedLetters').innerHTML = "Guesses So Far: " + userGuess;



};