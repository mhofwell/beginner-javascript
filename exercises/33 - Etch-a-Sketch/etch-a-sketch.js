// select the elements on the page - canvas, context, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');

// set up our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing

ctx.moveTo(200, 200); // starting point

ctx.lineTo(200, 200);
ctx.stroke(); // draw a line from where you started to where you drew your line too

// write a draw function

// write a handler for the keys

// clear or shake function

// listen for arrow keys
