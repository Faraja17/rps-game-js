// variables to keep track of the number of wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

// outer main game loop
while(true) {
    console.log("" + wins + " Wins " + "" + losses + " Losses " + "" + ties + " Ties ");


// inner player input loop
    aLoop:
    while(true) {
        var playerMove = prompt("Enter your move: (r)ock (p)aper (s)cissors or (q)uit", "");
        if(playerMove == "q"){ // quit program if player selects q
            console.log("Thank you for playing!");
            break aLoop;
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



// compare player vs. computer, then display and record the total wins/losses/ties



// tie



// win



// loss


}