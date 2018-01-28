const getUserChoice = (event)  => {
  let userInput=event;
 console.log(userInput.toLowerCase());
  if(userInput==='rock'|| userInput==='paper'||userInput==='scissors'){
   return userInput;
  }else{console.log("please input a valid user");}
};

function getComputerChoice() {
  Randm=Math.floor(Math.random()*3);
  if(Randm===0){
    return 'rock';
  }else if (Randm===2){
    return 'paper';}
  else{
    return 'scissors';}
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice===computerChoice){
    return "the game was tied";
  }

  if(userChoice==='rock'){
    if(computerChoice==='scissors'){
      return "you won";
    }else{
      return "the computer won";
    }
  }

  if(userChoice==='paper'){
    if(computerChoice==='rock'){
      return "you won";
    }else {
      return "the computer won";
    }
  }

   if(userChoice==='scissors'){
    if(computerChoice==='paper'){
      return "you won";
    }else {
      return "the computer won";
    }
  }
  if(userChoice==='bomb'){
    return 'you won';
  }
};

const playGame = () => {
 const userChoice= getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log("you threw:"+userChoice);
  console.log("the computer threw:"+computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
}
playGame();
