const { kStringMaxLength } = require('buffer');
const { dir } = require('console');
const { input } = require('./input');
const rows = input.length;
const cols = input[0].length;

const split = (arr, index) => {
    let x = arr.slice(0, index)
    let y = arr.slice(index+1);
    return [x, y];
}

const toEdge = (input, row, col) => {
    let [left, right] = split([...input[row]].map(Number), col);
    let [top, bottom] = split(input.map(o => o.charAt(col)).map(Number), row);
    return [top.reverse(), right, bottom, left.reverse()]
}

const checkVisiblity = (forest) => {
    let visible_trees = 0
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            let tree = parseInt(forest[i].charAt(j), 10);
            let borders = toEdge(input, i, j);
            let visible = borders.find((b) => {
                return b.length === 0 || b.every((t) => t < tree)
            });
            if (visible) visible_trees++;
        }
    }
    return visible_trees
}

const scenicScoring = (forest) => {
    let scores = [];
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            let tree = parseInt(forest[i].charAt(j), 10);
            let borders = toEdge(input, i, j);
            let score = borders.map((b) => {
                if (!b.length) return 0;
                return b.findIndex(t => t >= tree)+1 || b.length;
            }).reduce((x,p)=>x*p);
            scores = [...scores, score]
        }
    }
    return scores.sort((a,b)=>a-b)
}

console.log('part1', checkVisiblity(input));
console.log('part2', scenicScoring(input).pop());
