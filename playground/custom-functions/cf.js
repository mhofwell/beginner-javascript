// function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
        console.log('Running Calc Bill!!');
        const total = billAmount * (1 + taxRate) + billAmount * tipRate;
        console.log(billAmount, taxRate, tipRate);
        return total;
}

const myBill123 = calculateBill(100, undefined, 0.2);
console.log(myBill123);

// function call or **run**
// const myBill = 100;
// const myRate = 0.2;
// const myTotal2 = calculateBill(myBill, myRate);

function sayHiTo(firstName) {
        return `Hello ${firstName}`;
}

function doctorize(name) {
        return `Dr. ${name}`;
}

function yell(name = 'silly goose') {
        return `Hey ${name.toUpperCase()}`;
}

// const greeting = sayHiTo('Jack');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 20 + 30, 0.15);
