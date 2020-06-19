// select the elements on the page - canvas, context, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
const MOVE_AMOUT = 10;
// set up our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUT;

const hue = 0;
// ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // starting point for drawer
ctx.lineTo(x, y); // where you drew your line too
ctx.stroke(); // draw a line from where you started to where you drew your line too

// const x = canvas.width;
// const y = canvas.height;

// write a draw function

function draw({ key }) {
        console.log(key);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        // hue += 1;
        // move our x and y values depending on what the user did
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUT;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUT;
                        break;
                default:
                        break;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
}

// write a handler for the keys

function handleKey(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
                // console.log(e.key);
                // console.log('handling key');
        }
}

// clear or shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);
