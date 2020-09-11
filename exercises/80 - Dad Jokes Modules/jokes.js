import { handleClick } from './handlers.js';
import { jokeButton } from './elements.js';

function go() {
        jokeButton.addEventListener('click', handleClick);
}

export { go };
