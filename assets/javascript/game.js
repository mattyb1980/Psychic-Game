 
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

   
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetters = [];

    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter)

    document.onkeyup = function(event) {

     
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      // var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      // console.log(computerLetter)
      // Only run the following code block if the user presses "r" or "p" or "s".
      if (userGuess === computerLetter) {
        wins++;
        reset();
      } 
      else if (userGuess !== computerLetter) {
        guessesLeft--;

        if (guessesLeft === 0) {
          losses++;
          reset();
        }
        else{
          guessedLetters.push(userGuess);
          console.log(guessedLetters);
          var guessedDiv = document.getElementById("guessedLetters");
          guessedDiv.textContent = guessedLetters;
          var guessLeftDiv = document.getElementById("guessesLeft");
          guessLeftDiv.textContent = guessesLeft;
        }        
      };
    };

    function reset(){
      computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(computerLetter)
      guessesLeft = 9;
      guessedLetters = [];

      var guessLeftDiv = document.getElementById("guessesLeft");
        guessLeftDiv.textContent = guessesLeft;

      var lossDiv = document.getElementById("losses");
      lossDiv.textContent = losses;

      var winDiv = document.getElementById("wins");
      winDiv.textContent = wins;

      var guessedDiv = document.getElementById("guessedLetters");
      guessedDiv.textContent = guessedLetters;

    }
    

