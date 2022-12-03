const { input } = require('./input');

const sum = (arr) => arr.reduce((sum, val) => sum + val);
const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const getPriority = (item) =>  priorities.indexOf(item) + 1;
const group_size = 3;

let groups = [];
for (let x = 0; x <= input.length; x++) {
    if (x && !(x % group_size)) {
        groups = [...groups, input.slice(x-group_size, x).map(g => [...g])];
    }
}
const sum_priorities = sum(groups.map((group) => {
    return getPriority(group[0].find((x) => group[1].includes(x) && group[2].includes(x)));
}));
console.log(sum_priorities);
