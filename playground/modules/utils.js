const last = 'bos';
const middle = 'jack';

export function returnHi(name) {
        return `hi ${name}`;
}

const first = 'mike';
// NAMED exports - we can have as many as we want

export { last, middle };

export default first;
