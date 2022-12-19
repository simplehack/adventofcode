const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.test'))
	.toString()
	.trim()
	.split('\n\n')
	.map(item => {
		let x = item.split('\n')
		let monkey = {};
		
		let starting_items = x[1].split(': ')[1];
		monkey.items = [...starting_items.split(', ').map(Number)];

		let operation = x[2].split('= ')[1].split(' ');
		let opFn;
		if (operation[1] === '*' && operation[2] === 'old') {
			opFn = (n) => n * n;
		} else if (operation[1] === '*') {
			opFn = (n) => n * parseInt(operation[2], 10);
		} else if (operation[1] === '+') {
			opFn = (n) => n + parseInt(operation[2], 10);
		}
		monkey.op = opFn;
		
		let test =  x[3].split(': ')[1].split(' ');
		let is_true = parseInt(x[4].split(': ')[1].split(' ')[3], 10);
		let is_false = parseInt(x[5].split(': ')[1].split(' ')[3], 10);
		let test_nums = [test[2], is_true, is_false].map(Number);
		test = [test[0], ...test_nums];
		let testFn;
		if (test[0] === 'divisible') {
			testFn = (n) => Math.abs(n % test[1]) == 0 ? is_true : is_false
		}
		monkey.test = testFn;
		return monkey;
	})

module.exports = {
	input,
};