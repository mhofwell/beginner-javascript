console.log('Im from node');

const age = 50;
if (age > 70) {
        console.log('yep');
} else if (age > 60) {
        console.log('omg');
} else if (age > 60) {
        console.log('omg');
} else {
        console.log('nothing is true');
}

function slugify(sentence, lowercase) {
        let slug = sentence.replace(/\s/g, '-');
        if (lowercase) {
                slug = slug.toLowerCase();
        }
        return slug;
}

const name = 'wes';
const last = 'bos';

if (name === 'scott' || (name === 'wes' && last === 'bos')) {
        console.log('Cool name');
}

const isAwesomeName = 'awesome'.includes('wes');
if (isAwesomeName) {
        console.log('cool name bro');
}

function nameIsAwesome(name) {
        return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')) {
        console.log('COOOLNAMEwES');
}

const dog = '';
if (dog) {
        console.log('you have a dog');
}
console.log('you dont');

const score = 0;
if (score) {
        console.log('there is a score already');
}
console.log('no score yet');

const values = [[], {}, -10, 1, 0, 'full string', '', undefined, NaN, null];

console.group('truthy or falsy values ');
values.forEach(value => {
        if (value) {
                console.log('value');
        }
        console.log('value is falsy');
});
console.groupEnd();

console.clear();

const isCool = true;
if (!isCool) {
        console.log('you are kewl');
}

// ternary
const count = 0;
// let word;
// if (count === 1) {
//     word = 'item';
// }
// word = 'items';

// 1. condition
// 2. do when true
// 3. do when false
const word = count == 1 ? 'item' : 'items';

const sentence = `you have ${count} item${count === 1 ? '' : 's'} in your cart`;
console.log(sentence);

function showAdminBar() {
        console.log('showing admin bar');
}
const isAdmin = true;
//  isAdmin ? showAdminBar() : null;

// AND AND TRICK!

function check1() {
        console.log('running check 1');
        return false;
}

function check2() {
        console.log('running check 2');
        return true;
}

function check3() {
        console.log('running check 3');
        return true;
}

if (check1() && check2() && check3()) {
        console.log('all checks pass');
} else {
        console.log('some failed');
}

// isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();

if (isAdmin) showAdminBar();
