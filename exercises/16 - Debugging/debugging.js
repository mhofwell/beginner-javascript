const people = [
        { name: 'Wes', cool: true, country: 'Canada' },
        { name: 'Scott', cool: true, country: 'Merica' },
        { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//         console.group(`${person.name}`);
//         console.log(person.country);
//         console.log(person.cool);
//         console.groupEnd(`${person.name}`);
// });

people.forEach((person, index) => {
        //   debugger;
        console.log(person.name);
});

// Console Methods
// FREQUENTLY USED

// Callstack or Stack Trace

// Grabbing Elements

// Breakpoints
// FREQUENTLY USED

// Scope

// Network Requests
// FREQUENTLY USED

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
        console.group('doing some stuff');
        console.log(`Hey I'm one`);
        console.warn('watch out!');
        console.error('this is an error!');
        console.groupEnd('doing some stuff');
}

function doctorize(name) {
        // console.count('running Doctorize');
        return `Dr. ${name}`;
}

function greet(name) {
        //  doesntExist(); // Will cause an error
        return `Hello ${name}`;
}

function go() {
        const name = doctorize(greet('Wes'));
        console.log(name);
}

function bootstrap() {
        console.log('Starting the app!');
        go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
        const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
        e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
        const res = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'text/plain',
                },
        });
        const joke = await res.text();
        console.log(joke);
        return joke;
}
