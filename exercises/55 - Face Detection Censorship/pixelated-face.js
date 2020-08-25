const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');

const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');

const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new window.FaceDetector({ fastMode: true });
const SIZE = 10;
const SCALE = 1.5;

// Write a function to populate a users video.

async function populateVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
        });
        video.srcObject = stream;
        await video.play();
        // size the canvases to be the same size as the video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        faceCanvas.width = video.videoWidth;
        faceCanvas.height = video.videoHeight;
}

function drawFace(face) {
        const { width, height, top, left } = face.boundingBox;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#ffc600';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(left, top, width, height);
}
async function detect() {
        const faces = await faceDetector.detect(video);

        // ask the browser when the next animation frame is and tell it to run detect for us
        faces.forEach(drawFace);
        faces.forEach(censor);
        requestAnimationFrame(detect);
}

function censor({ boundingBox: face }) {
        faceCtx.imageSmoothingEnabled = false;
        faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
        faceCtx.drawImage(
                // 5 source args
                video, // where does the source come from?
                face.x, // where do we start the source pull from?
                face.y, //
                face.width, //
                face.height, //
                // 4 draw args
                face.x, // where should we start drawing the x and y?
                face.y,
                SIZE,
                SIZE
                // take that face back out and draw it back at normal size.
        );
        // draw the small face back on, but scale up
        const width = face.width * SCALE;
        const height = face.height * SCALE;
        faceCtx.drawImage(
                faceCanvas, // source
                face.x, // where do we start the source pull from?
                face.y, //
                SIZE,
                SIZE,
                // drawing args
                face.x - (width - face.width) / 2,
                face.y - (height - face.height) / 2,
                width,
                height
        );
}

populateVideo().then(detect);
