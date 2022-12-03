const { input } = require('./input');

const sum = (arr) => arr.reduce((sum, val) => sum + val);
const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const getPriority = (item) =>  priorities.indexOf(item) + 1;

const sum_part_1 = sum(input.map((sack, index) => {
    let [c1, c2] = [[...sack].slice(0, sack.length/2), [...sack].slice(sack.length/2)];
    return getPriority(c1.find((x) => c2.includes(x)));
}));

const group_size = 3;
let groups = [];
for (let x = 0; x <= input.length; x++) {
    if (x && !(x % group_size)) {
        groups = [...groups, input.slice(x-group_size, x).map(g => [...g])];
    }
}
const sum_part_2 = sum(groups.map((group) => {
    return getPriority(group[0].find((x) => group[1].includes(x) && group[2].includes(x)));
}));
console.log([sum_part_1, sum_part_2]);
