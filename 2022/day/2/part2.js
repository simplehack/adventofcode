const { input } = require('./input');
const ROCK = 1; //AX
const PAPER = 2; //BY
const SCISSORS = 3; //CZ
const WIN = 6; //Z
const TIE = 3; //Y
const LOSS = 0; //X
const outcomes = {
    "A X": LOSS+SCISSORS,
    "A Y": TIE+ROCK,
    "A Z": WIN+PAPER,
    "B X": LOSS+ROCK,
    "B Y": TIE+PAPER,
    "B Z": WIN+SCISSORS,
    "C X": LOSS+PAPER,
    "C Y": TIE+SCISSORS,
    "C Z": WIN+ROCK
};
const sum = (arr) => arr.reduce((sum, val) => sum + val);
console.log(sum(input.map(move => outcomes[move])));