const { input } = require('./input');
const overlapping_jobs = input.map(item=>item.split(',')).filter((job) => {
    const [x, y] = [job[0].split('-').map(Number), job[1].split('-').map(Number)];
    return (x[0] <= y[0] && y[1] <= x[1]) || (y[0] <= x[0] && x[1] <= y[1]);
});
console.log(overlapping_jobs.length);

const any_overlaps = input.map(item=>item.split(',')).filter((job) => {
    const [x, y] = [job[0].split('-').map(Number), job[1].split('-').map(Number)];
    return (y[0] >= x[0] && y[0] <= x[1]) || (x[0] >= y[0] && x[0] <= y[1]);
})
console.log(any_overlaps.length)