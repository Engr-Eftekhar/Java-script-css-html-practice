// Gussing game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5

for(i = 1; i <= 5; i++){
    var GuessNumber = parseInt(prompt("Enter a Randon Number :"));

var randomNumber = Math.floor(Math.random()*5) + 1;

if(GuessNumber==randomNumber){
    document.write("You have won" + "<br>");
    
    }else{
        document.write("You have lost. Random number was " + randomNumber + "<br>");
    }
}
