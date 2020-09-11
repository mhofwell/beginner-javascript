import wait from 'waait';
import faker from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

// console.log(faker);
// console.log(`${faker.name.firstName()}`);

// // faker

// const fakeNames = Array.from({ length: 10 }, () => `${faker.name.firstName()} + ${faker.name.lastName()}`);

// console.log(fakeNames);

// // wait

// async function go() {
//         console.log('going!');
//         await wait(200);
//         console.log('ending');
// }

// go();

// // date-fns

// const diff = formatDistance(new Date(1986, 3, 4, 11, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { addSuffix: true });

// // January 12th, 2020

// const date = new Date();
// const formatted = format(date, `LLLL 'the' do y`);
// console.log(formatted);

// async function getJoke() {
//         const { data } = await axios.get('https://icanhazdadjoke.com', {
//                 headers: {
//                         Accept: 'application/JSON',
//                 },
//         });
//         console.log(data);
// }

// getJoke();

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const b = [123, 46, 3, 789, 9];

// const intersect = intersection(a, b);
// console.log(intersect);

// const person1 = { name: 'wes' };
// const person2 = { name: 'wes' };

// console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
        return new Promise(function(resolve, reject) {
                if (firstName === 'Wes') {
                        resolve('Cool name');
                        return;
                }
                reject(new Error('bad'));
        });
}

async function checkName() {
        const [err, val] = await to(checkIfNameIsCool('Wes'));
        if (err) {
                console.log('error you suck');
        } else {
                console.log(val);
        }
}

checkName();
