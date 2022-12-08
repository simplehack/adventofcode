const { allowedNodeEnvironmentFlags } = require('process');
const { input } = require('./input');
const sum = (arr) => arr.reduce((sum, val) => sum + val);

const updateSize = (parent, size) => {
    parent._size = parent._size + size;
    if (typeof parent._parent !== 'undefined') updateSize(parent._parent, size);
}
const getPath = (dir, path = '') => {
    if (typeof dir._parent === 'undefined') return path;
    path = `${dir._name}/${path}`;
    if (dir && dir._parent) {
        return getPath(dir._parent, path)
    }
    return path;
}
const process_commands = (input) => {
    let output = {};
    let dir = output;
    let d;
    input.forEach((x) => {
        switch (true) {
            case /^\$ cd/.test(x):
                d = x.split('cd ')[1];
                if (d == '..') {
                    dir = dir._parent;
                } else {
                    d = getPath(dir) + d;
                    if (d === '/') dir[d] = {_size: 0, _name: d}
                    dir = dir[d];
                }
                break;
            case (/^dir/).test(x):
                d = getPath(dir) + x.split(' ')[1];
                dir[d] = {_parent: dir, _size: 0, _name: d}
                break;
            case (/^\d+/).test(x):
                let f = x.split(' ');
                dir[f[1]] = parseInt(f[0], 10);
                updateSize(dir, dir[f[1]]);
                break;
        }
    });
    return output;
}

const getDirectoriesBySize = (input, fn) => {
    const testAll = (d, matches) => {        
        Object.keys(d).forEach((k) => {
            if (typeof d[k] === 'object' && k != '_parent') {
                return testAll(d[k], matches)
            }
            if (k === '_size' && fn.call(this, d[k])) {
                matches.push({[d._name]:d[k]})
            }
        });
        return matches;
    }
    return testAll(input, []);
}

const getSumOfDirectoriesBelowSize = (fs, size) => {
    return getDirectoriesBySize(fs, (s) => s <= size);
}

const getMinimumNecessaryToDelete = (fs, capacity, space_needed) => {
    const available_space = capacity - fs['/']._size;
    const minsize = space_needed - available_space;
    const dirs = getDirectoriesBySize(fs, (s) => s >= minsize);
    return dirs.sort((a,b) => a - b).pop()
}

const fs = process_commands(input);
console.log('part 1', sum(getSumOfDirectoriesBelowSize(fs, 100000).map(o => Object.values(o)[0])));
console.log('part 2', getMinimumNecessaryToDelete(fs, 70000000, 30000000));