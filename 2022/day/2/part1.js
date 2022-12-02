const { input } = require('./input');
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const WIN = 6;
const TIE = 3;
const LOSS = 0;
const outcomes = {
    "A X": ROCK+TIE,
    "A Y": PAPER+WIN,
    "A Z": SCISSORS+LOSS,
    "B X": ROCK+LOSS,
    "B Y": PAPER+TIE,
    "B Z": SCISSORS+WIN,
    "C X": ROCK+WIN,
    "C Y": PAPER+LOSS,
    "C Z": SCISSORS+TIE
};
const sum = (arr) => arr.reduce((sum, val) => sum + val);
console.log(sum(input.map(move => outcomes[move])));