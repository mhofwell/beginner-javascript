import { generateOptions } from './util.js';
import { handleInput } from './handlers.js';
import currencies from './currencies.js';
import { fromSelect, toSelect } from './elements.js';

// when the page loads this code runs!

function go() {
        const form = document.querySelector('.app form');
        const optionsHTML = generateOptions(currencies);

        // populate options elements on page load

        fromSelect.innerHTML = optionsHTML;
        toSelect.innerHTML = optionsHTML;

        form.addEventListener('input', handleInput);
}

export { go };
