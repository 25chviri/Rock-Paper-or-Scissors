const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  	if(userInput==='rock' ||
       userInput==='paper' ||
       userInput ==='scissors'){
     return userInput;
     }else  {
     	console.log('Error');
      return 'Error'
     } 
};

function getComputerChoice(){
  const choiceVariable= Math.floor(Math.random()*3);
  switch(choiceVariable){
      case 0:
      return 'rock';

      case 1:
      return 'paper';

      case 2:
      return 'scissors';
      
  }
}

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === 'bomb'){
      return 'user won';
      }else{
  if(userChoice === computerChoice){
    return 'Game was a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
       return 'computer won';
    }else if (computerChoice ==='scissors'){
       return 'user won';
    }
  }else if(userChoice === 'paper') {
    if(computerChoice === 'rock'){
       return 'user won';
       }else if (computerChoice === 'scissors'){
         return 'computer won';
       }
  }else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'computer won';
    }else if (computerChoice === 'paper'){
      return 'user won';
    }   
  }
  }
};



function playGame(input){
  const userChoice = getUserChoice(input);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}

playGame('rock');
