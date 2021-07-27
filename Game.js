const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log("Invalid Input!");
  }
};
function getComputerChoice(){
  let x = Math.floor(Math.random() * 3);
  switch(x){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb'){
    return 'The user won!';
  }
  if(userChoice === computerChoice){
    return 'That was a tie!';
  }
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!';
    }
    else{
      return 'The user won!';
    }
  }
  else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won!';
    }
    else{
      return 'The user won!';
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'The user won!';
    }
    else{
      return 'The computer won!';
    }
  }
};

function playGame(){
let userChoice = getUserChoice('rock');
let computerChoice = getComputerChoice();
console.log(`The user picked ${userChoice} and the computer picked ${computerChoice}!`);
console.log(determineWinner(userChoice, computerChoice));
};
playGame();
