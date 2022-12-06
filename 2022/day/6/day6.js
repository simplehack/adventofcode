const { input } = require('./input');
const stream = input[0].split('');


const len = 4;
let i = len, location;
while(i<stream.length+1) {
    const s = [stream[i-4],stream[i-3],stream[i-2], stream[i-1]];
    if (s.filter((item, index, arr) => arr.indexOf(item) == index).length == len) {
        location = i;
        break;
    }
    i++;
}
console.log(location)

const part2len = 14;
let j = part2len, part2location;
while(j<stream.length+1) {
    let hmm = Array.apply(null, Array(part2len)).map((x, i) => stream[j-(part2len-i)]);
    if (hmm.filter((item, index, arr) => arr.indexOf(item) == index).length == part2len) {
        part2location = j;
        break;
    }
    j++;
}
console.log(part2location)
