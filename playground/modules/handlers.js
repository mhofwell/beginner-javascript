// import currencies from './currencies.js';

// function handleButtonClick(e) {
//         console.log(currencies);
//         const currText = document.querySelector('.list');
//         currText.insertAdjacentHTML = `<div> yeah! ${currencies}</div> `;
//         return currText;
// }

// export { handleButtonClick };

// use async await to load the module only when you need.

export async function handleButtonClick(e) {
        const { localCurrency, default: currencies } = await import('./currencies.js');
        console.log(localCurrency, currencies);
}
