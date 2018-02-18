// Play a sound or song when the user guesses their word correctly, like in our demo.
// Write some stylish CSS rules to make a design that fits your game's theme.

// HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// Don't forget to place your global variables and functions above your object.


// Remember: global variables, then objects, then calls.


// Use key events to listen for the letters that your players will type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).


// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.


// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

$(document).ready(function () {
    console.log("ready!");
    var words = ["banana", "dog", "madonna", "hello", "symphony", "photosynthesis", "coelomate"];
    var currentWordDiv = document.getElementById("current-word");
    var blanks = [];
    var guessedLetters = [];
    var guessedLettersDiv = document.getElementById("letters-guessed");
    var guessesRemaining;
    var guessesRemainingDiv = document.getElementById("guesses-left");
    var gamePlay = false;

    var currentWord = words[Math.floor(Math.random() * words.length)];
    var currentWordSplit = currentWord.split("");
    console.log(currentWord + " length: " + currentWord.length);

    var workingArray;

    function myFunc(event) {
        console.log("key press: " + event.key);
        var letter = event.key;

        // if the game isn't already on, start it and generate the word
        if (!gamePlay) {
            gamePlay = true;
            for (var i = 0; i < currentWord.length; i++) {
                blanks.push("_");
            }
            guessesRemaining = Math.ceil(currentWord.length += currentWord.length * .33);
        } else {
            // if the letter is NOT in the word...
            if (currentWord.indexOf(letter) === -1) {
                // if it HAS already been guessed, do nothing
                if (guessedLetters.indexOf(letter) !== -1) {
                    return;
                } else {
                    // if it has NOT already been guessed, push it 
                    guessedLetters.push(letter.toUpperCase());
                    guessesRemaining--;
                }
                console.log("guessed letters: " + guessedLetters);
            
            // if the letter IS in the word...
            } else {
                // if it has already been guessed, do nothing
                if (blanks.indexOf(letter) !== -1){
                    return;
                }

                // find the position of the letter in the word
                var pos = currentWord.indexOf(letter);

                // in the blanks array, find the matching positions and change them to the letter
                while (pos !== -1) {
                    blanks[pos] = letter;
                    pos = currentWord.indexOf(letter, pos + 1);
                }
                
                guessesRemaining--;
            }
        }

        // Update page displays
        workingArray = blanks.join(" ");
        currentWordDiv.textContent = workingArray;
        guessesRemainingDiv.textContent = guessesRemaining;
        guessedLettersDiv.textContent = guessedLetters.join(" ");



        // blanks don't generate until the game has been started with a letter press
    }

    document.addEventListener("keyup", myFunc);

})