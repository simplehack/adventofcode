const { input } = require('./input');
const part1 = function(input) {
    const sum = (arr) => arr.reduce((sum, val) => sum + val );
    let elfs = [], vals = [];
    input.forEach((val, index, arr) => {
        if (val) { // not empty
            vals = [...vals, parseInt(val, 10)];
        }
        if (!val || index === arr.length-1) { // empty or last item
            elfs = [...elfs, sum(vals)]
            return vals = [];
        }
    });
    return Math.max.apply(Math, elfs);
};
//console.log(part1([100, 400, '', 300, '', 100, 100, 700, '', 2000, 200, 20, 2]));
console.log(part1(input));