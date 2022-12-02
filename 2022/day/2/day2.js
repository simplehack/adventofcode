const { input } = require('./input');
const ROCK = 1; //AX
const PAPER = 2; //BY
const SCISSORS = 3; //CZ
const WIN = 6; //Z
const TIE = 3; //Y
const LOSS = 0; //X
const assumption = {
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
const actual = {
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
console.log('Part 1', sum(input.map(move => assumption[move])));
console.log('Part 2', sum(input.map(move => actual[move])));