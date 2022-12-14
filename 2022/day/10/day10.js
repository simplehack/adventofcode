const { input } = require('./input');

const cycles = [];
let current_value = 1;
let current_cycle = 0;
for (let x = 0; x < input.length; x++) {
    let [ins, val] = input[x].split(' ');
    let cycles_to_run = (ins === 'addx') ? 2 : 1;
    for (let i = 0; i < cycles_to_run; i++) {
        cycles[current_cycle] = current_value;
        current_cycle++;
    }
    if (ins === 'addx') {
        current_value = current_value + parseInt(val, 10);
    }
}


let signal_strength = 0;
let registers_to_check = [20, 60, 100, 140, 180, 220];
registers_to_check.forEach((reg) => {
    signal_strength += reg * cycles[reg-1];
});
console.log('part1', signal_strength);



let starting_pos = 0;
let rows = [40, 60, 80, 120, 160, 200];
let crt = [];
rows.forEach(() => {
    let row_pixel = 0;
    let row = [];
    while (row_pixel < 40) {
        let cycle = row_pixel+starting_pos;
        let reg_val = cycles[cycle];
        let pixel = (row_pixel >= reg_val-1 && row_pixel <= reg_val+1) ? '#' : '.'
        row.push(pixel);
        row_pixel++;
    }
    starting_pos = starting_pos + row_pixel;
    crt.push(row.join(''));
})
console.log('part2');
console.log(crt);
