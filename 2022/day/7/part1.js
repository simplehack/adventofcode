const { allowedNodeEnvironmentFlags } = require('process');
const { input } = require('./input');
const sum = (arr) => arr.reduce((sum, val) => sum + val);


const process_commands = (input) => {
    let output = {};
    let dir = output;
    let d;
    const updateSize = (parent, size) => {
        parent._size = parent._size + size;
        if (typeof parent._parent !== 'undefined') updateSize(parent._parent, parent._size);
    }
    input.forEach((x) => {
        switch (true) {
            case /^\$ cd/.test(x):
                d = x.split('cd ')[1];
                if (d == '..') {
                    dir = dir._parent;
                } else {
                    if (d === '/') dir[d] = {_size: 0, _name: d}
                    dir = dir[d];
                }
                break;
            case /^$ ls/.test(x):
                break;
            case (/^dir/).test(x):
                d = x.split(' ')[1]
                dir[d] = {_parent: dir, _size: 0, _name: d}
                break;
            case (/^\d+/).test(x):
                let f = x.split(' ');
                dir[f[1]] = parseInt(f[0], 10);
                updateSize(dir, dir[f[1]]);
                break;
            default:
        }
    });
    return output;
}

const getDirectoriesBelowSize = (input, maxsize) => {
    const testAllDirs = (d, dirs) => {        
        Object.keys(d).forEach( k => {
            if (typeof d[k] === 'object' && k != '_parent') {
                return testAllDirs(d[k], dirs)
            }
            if (k === '_size' && d[k] <= maxsize) {
                dirs.push({[d._name]:d[k]})
            }
        })
        return dirs
    }
    return testAllDirs(input, []);
}


const getSumOfDirectoriesBelowSize = (input, size) => {
    return sum(getDirectoriesBelowSize(process_commands(input), size).map(o => Object.values(o)[0]));
}

console.log(getSumOfDirectoriesBelowSize(input, 100000));
