import { isValidColor } from './colors.js';

function logWords(results) {
        console.log(results[results.length - 1][0].transcript);
}

function handleResult({ results }) {
        logWords(results);
        const words = results[results.length - 1][0].transcript;
        console.log(words);
        // lowercase everything first

        let color = words.toLowerCase();
        // strip any spaces out
        color = color.replace(/\s/g, '');
        // check if words are a valid color
        if (!isValidColor(color)) return; //
        // then show UI for it
        const colorSpan = document.querySelector(`.${color}`);
        colorSpan.classList.add('got');
        console.log('valid!');
        // change the background color
        document.body.style.backgroundColor = color;
}

export { handleResult };
