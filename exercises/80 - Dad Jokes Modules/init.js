import { go } from './jokes.js';

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('mouseenter', go, { once: true });
