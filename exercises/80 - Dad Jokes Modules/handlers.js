import { randomItemFromArray } from './utils.js';
import { fetchJoke } from './lib.js';
import { jokeHolder, jokeButton } from './elements.js';
import buttonText from './buttontxt.js';

async function handleClick() {
        const { joke } = await fetchJoke();
        jokeHolder.textContent = joke;
        jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

export { handleClick };
