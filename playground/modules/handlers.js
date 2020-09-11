import currencies from './currencies.js';

function handleButtonClick(e) {
        console.log(currencies);
        const abc = Object.entries(currencies)
                .map(([abbr, long]) => `${abbr} - ${long}`)
                .join(' ');
        console.log(abc);
        const currDiv = document.querySelector('.list');
        currDiv.textContent = `${abc}`;
        return currDiv;
}

export { handleButtonClick };

// use async await to load the module only when you need.

export async function handleButtonClick(e) {
        const { localCurrency, default: currencies } = await import('./currencies.js');
        console.log(localCurrency, currencies);
}
