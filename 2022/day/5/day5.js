const { stacks, moves } = require('./input');

const part1_stacks = [...stacks];
moves.forEach((move, index) => {
    let [count, from, to] = move, i=0;
    while (i < count) {
        part1_stacks[to-1] = [...part1_stacks[to-1], part1_stacks[from-1].pop()];
        i++;
    }
});
const part1_top = part1_stacks.map((s) => {
    return s[s.length-1]
});
console.log(part1_top.join(''))

const part2_stacks = [...stacks];
moves.forEach((move, index) => {
    let [count, from, to] = move;
    let len = part2_stacks[from-1].length;
    part2_stacks[to-1] = [
        ...part2_stacks[to-1],
        ...part2_stacks[from-1].splice(len-count, count)
    ];
});
const part2_top = part2_stacks.map((s) => {
    return s[s.length-1]
});
console.log(part2_top.join(''));



