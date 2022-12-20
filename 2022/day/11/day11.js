const { input } = require('./input');
const sort = (o) => o.sort((a,b)=>b-a);

const monkeyBusiness = (monkies, rounds, worryFn) => {
    let inspected = monkies.map(m=>0);
    let m_items = monkies.map(monkey => [...monkey.items]);
    for (let i = 0; i < rounds; i++) {
        for (let j = 0; j < monkies.length; j++) {
            let {op, test} = monkies[j];
            while(m_items[j].length) {
                let item = m_items[j].shift();
                let new_worry = worryFn(item, op)
                let next_monkey = test(new_worry);
                m_items[next_monkey].push(new_worry)
                inspected[j]++;
            }
        }
    }
    return inspected;
};

p1 = sort(monkeyBusiness(input, 20, (i, opFn) => Math.floor(opFn(i)/3)));
console.log('p1', p1, p1[0] * p1[1]);

p2 = sort(monkeyBusiness(input, 10000, (i, opFn) => {
    return opFn(i) % input.map((m)=>m.testval).reduce((a,b)=>a*b, 1);
}));
console.log('p2', p2, p2[0] * p2[1]);
