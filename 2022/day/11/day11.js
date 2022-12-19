const { inspect } = require('util');
const { input } = require('./input');
let debug
const monkeyBusiness = (monkies, rounds, worryfactor) => {
    let inspected = monkies.map(m=>0);
    let m_items = monkies.map(monkey => [...monkey.items]);
    for (let i = 0; i < rounds; i++) {
        for (let j = 0; j < monkies.length; j++) {
            let {op, test} = monkies[j];
            while(m_items[j].length) {
                let item = m_items[j].shift();
                if (debug) console.log(j, item, op(item));
                let new_worry = Math.floor(op(item) / worryfactor);
                let next_monkey = test(new_worry);
                m_items[next_monkey].push(new_worry)
                inspected[j]++;
            }
        }
    }
    return inspected;
};
const sort = (o) => o.sort((a,b) => b-a);

p1 = monkeyBusiness(input, 20, 3);
p1_sorted = sort(p1);
console.log('p1', p1_sorted[0] * p1_sorted[1]);

