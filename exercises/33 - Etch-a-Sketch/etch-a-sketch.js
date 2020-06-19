// select the elements on the page - canvas, context, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');

// set up our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

const { width, height } = canvas;
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // starting point for drawer
ctx.lineTo(x, y); // where you drew your line too
ctx.stroke(); // draw a line from where you started to where you drew your line too

// const x = canvas.width;
// const y = canvas.height;

// write a draw function

function draw() {}

// write a handler for the keys

// clear or shake function

// listen for arrow keys
