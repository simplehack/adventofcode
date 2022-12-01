const { input } = require('./input');
const part2 = function(input) {
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
    return sum(elfs.sort((a,b) => b - a).slice(0,3));
};
//console.log(part2([100, 400, '', 300, '', 100, 100, 700, '', 2000, 200, 20, 2]));
console.log(part2(input));