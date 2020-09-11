import { go } from './init.js';

// run the bitch

const app = document.querySelector('.app');
app.addEventListener('mouseenter', go, { once: true });
