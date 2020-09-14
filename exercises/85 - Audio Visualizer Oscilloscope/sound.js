import { hslToRgb } from './utils.js';

const WIDTH = 1500;
const HEIGHT = 1500;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

async function getAudio() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioCtx = new AudioContext();
        analyzer = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyzer);
        // how much data should we collect
        analyzer.fftSize = 2 ** 15;
        // pull the data off the audio
        // how many pieces of data are there
        bufferLength = analyzer.frequencyBinCount;
        const timeData = new Uint8Array(bufferLength);
        const frequencyData = new Uint8Array(bufferLength);
        drawTimeData(timeData);
        drawFrequency(frequencyData);
        console.log(timeData);
        console.log(frequencyData);
}

function drawTimeData(timeData) {
        // inject time data into time data array
        analyzer.getByteTimeDomainData(timeData);
        // now that we have data, lets turn it into a visualization

        // 1. clear the canvas TODO
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        // 2. set-up canvas drawing
        ctx.linewidth = 10;
        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        const sliceWidth = WIDTH / bufferLength;
        let x = 0;
        timeData.forEach((data, i) => {
                const v = data / 128;
                const y = (v * HEIGHT) / 2;
                // draw our lines
                if (i === 0) {
                        ctx.moveTo(x, y);
                } else {
                        ctx.lineTo(x, y);
                }
                x += sliceWidth;
        });

        ctx.stroke();

        // call itself as soon as possible
        requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
        // get the frequency Data into our frequency data array

        analyzer.getByteFrequencyData(frequencyData);
        // figure out bar width
        const barWidth = (WIDTH / bufferLength) * 10;
        let x = 0;
        frequencyData.forEach(amount => {
                // comes in from 0-255 and we need to figure out that height.
                // 100% is center line 0 is bottom
                const percent = amount / 255;
                const [h, s, l] = [360 / [percent * 360] - 0.5, 0.5, 0.6];
                const barHeight = HEIGHT * percent;
                const [r, g, b] = hslToRgb(h, s, l);
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth;
        });

        requestAnimationFrame(() => {
                drawFrequency(frequencyData);
        });
}

getAudio();
