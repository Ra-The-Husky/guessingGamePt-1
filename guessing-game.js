const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askGuess = () => {
  r1.question("Enter a guess: ", (num) => {
    if (checkGuess(Number(num))) {
      console.log("You Win!");
      r1.close();
    } else {
      askGuess();
    }
  });
};

let secretNumber = 1;

const checkGuess = (num) => {
  if (num > secretNumber) {
    console.log("Too high");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    num === secretNumber;
    console.log("Correct!");
    return true;
  }
};

askGuess();
