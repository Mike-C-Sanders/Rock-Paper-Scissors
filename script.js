var rPS = ['R', 'P', 'S'];
var results = ['won', 'lost', 'tied'];
var wins = 0;
var losses = 0;
var ties = 0;
var rand = 0;

var playGame = function(){
    rand = randomNum();
    var userChoice = window.prompt('Enter R, P, or S:');
    userChoice = userChoice.toUpperCase();

    if(!userChoice){
        return;
    }

    //tie condition
    if(rPS[rand] === userChoice){
        ties++;
        messageAlert(results[2], rPS[rand]);
        window.alert('Stats:'+ '\nWins: ' + wins + '\nLosses: ' + losses+ '\nTies: ' + ties);
    }
    //win condition
    else if((userChoice === 'P' && rPS[rand] === 'R') ||
            (userChoice === 'R' && rPS[rand] === 'S') ||
            (userChoice === 'S' && rPS[rand] === 'P')){
                messageAlert(results[0], rPS[rand]);
                wins++;
                window.alert('Stats:'+ '\nWins: ' + wins + '\nLosses: ' + losses+ '\nTies: ' + ties);
            }
    //lose condition
    else{
        messageAlert(results[1], rPS[rand]);
        losses++;
        window.alert('Stats:'+ '\nWins: ' + wins + '\nLosses: ' + losses+ '\nTies: ' + ties);
    }
    if(window.confirm('Would you like to play again?')){
        playGame();
    }
};
//function used to produce a new random number. This number will be used to select rock paper or scissors.
var randomNum = function(){
    return Math.floor(Math.random()*3);    
}
// used to print out the outcome of the game
var messageAlert = function(outcome, computerChoice){
    window.alert('The Computer selected: ' + computerChoice);
    window.alert('You ' + outcome + '!');
    return;
}

playGame();
