//letter variables
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//starting variables
var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];


//computers choice of letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    
//resets game without refreshing page
var reset = function() {
    guesses = 10;
    guessedLetters = [];
//resets computer 
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }



   // When the user presses a key, it will run the following function...
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

    guessedLetters.push(userGuess);

    if(userGuess === computerChoice){
        wins++;
        alert("Dang, you got some skills!");
        reset ();
    }
    else{
        
        guesses--;
        
    }

    if(guesses === 0){
        losses++
        alert("You're a fake! Try again.")
        reset ();

    }

 

    //shows up on the html

  
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessLeft').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessedLetters').innerHTML = "Guesses So Far: " + guessedLetters.join(', ');



};