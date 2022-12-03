const { input } = require('./input');

const sum = (arr) => arr.reduce((sum, val) => sum + val);
const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const getPriority = (item) =>  priorities.indexOf(item) + 1;

let sum_priorities = sum(input.map((sack, index) => {
    let [c1, c2] = [[...sack].splice(0, sack.length/2), [...sack].splice(sack.length/2)];
    return getPriority(c1.find((x) => c2.includes(x)));
}));
console.log(sum_priorities);
