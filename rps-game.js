// variables to keep track of the number of wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;
var computerMove = "";

// outer main game loop
while(true) {
    console.log("" + wins + " Wins " + "" + losses + " Losses " + "" + ties + " Ties ");


// inner player input loop
    aLoop:
    while(true) {
        var playerMove = prompt("Enter your move: (r)ock (p)aper (s)cissors or (q)uit", "");
        if(playerMove == "q"){ // quit program if player selects q
            console.log("Thank you for playing!");
        } else if(playerMove == "r" || playerMove === "p" || playerMove === "s"){
            break aLoop;// break out of player loop if r, p, or s, is selected, otherwise remind to select one.
        }
        console.log("Type one of r, p, s, or q.");
    }    

// display what the player chose
    if(playerMove == "r") {
        console.log("ROCK versus. . .");
    } else if(playerMove == "p") {
        console.log("PAPER versus. . .");
    } else if(playerMove == "s") {
        console.log("SCISSORS versus. . .");
    }

// display what the computer chose
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        computerMove = "r";
        console.log("ROCK");
    } else if(randomNumber === 1) {
        computerMove = "p";
        console.log("PAPER");
    } else if(randomNumber === 2) {
        computerMove = "s";
        console.log("SCISSORS");
    }

// compare player vs. computer, then display and record the total wins/losses/ties

// tie
    if(playerMove == computerMove) {
        console.log("It is a tie!")
        ties = ties + 1
    

// win
    } else if(playerMove == "r" && computerMove == "s") {
        console.log("You win!")
        wins = wins + 1
    } else if(playerMove == "p" && computerMove == "r") {
        console.log("You win!")
        wins = wins + 1
    } else if(playerMove == "s" && computerMove == "p") {
        console.log("You win!")
        wins = wins + 1


// loss
    } else if(playerMove == "r" && computerMove == "p") {
        console.log("You lose!")
        losses = losses + 1
    } else if(playerMove == "p" && computerMove == "s") {
        console.log("You lose!")
        losses = losses + 1
    } else if(playerMove == "s" && computerMove == "r") {
        console.log("You win!")
        losses = losses + 1
    }

}