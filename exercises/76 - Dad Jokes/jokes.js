const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
        'Ugh.',
        '🤦🏻‍♂️',
        'omg dad.',
        'you are the worst',
        'seriously',
        'stop it.',
        'please stop',
        'that was the worst one',
];

async function fetchJoke() {
        // turn loader on
        loader.classList.remove('hidden');
        jokeButton.classList.add('hidden');
        const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'application/json',
                },
        });
        const data = await response.json();
        loader.classList.add('hidden');
        jokeButton.classList.remove('hidden');
        return data;
}

function randomItemFromArray(arr, not) {
        const item = arr[Math.floor(Math.random() * arr.length)];
        return item === not ? randomItemFromArray(arr, not) : item;
}

// function randomItemFromArray(arr, not) {
//         const item = arr[Math.floor(Math.random() * arr.length)];
//         console.log(item);
//         // if (item === not) {
//         //         console.log('omg');
//         //         return randomItemFromArray(arr, not);
//         // }
//         // return item;
// }

async function handleClick() {
        const { joke } = await fetchJoke();
        jokeHolder.textContent = joke;
        jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
