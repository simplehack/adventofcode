const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.split('\n');

const stackmap = [1, 5, 9, 13, 17, 21, 25, 29, 33];
let stacks = [[],[],[],[],[],[],[],[],[]];
let moves = [];

input.forEach((item, index) => {
	let m, row;
	if (index <= 7) { // stacks
		row = [...item];
		stackmap.forEach((s, i)=> {
			if (row[s] !== ' ' && row[s] !== '' ) stacks[i] = [row[s], ...stacks[i]];
		});
	} else if (index >= 10 && index < input.length-1) { // moves
		m = item.split(' ').map(Number);
		moves = [...moves, [m[1], m[3], m[5]]];
	}
});

module.exports = {
	stacks,
	moves
};