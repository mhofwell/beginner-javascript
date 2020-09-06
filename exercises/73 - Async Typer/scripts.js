function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
        return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop

// async function draw(el) {
//         const text = el.textContent;
//         console.log(el);
//         let soFar = '';
//         for (const letter of text) {
//                 console.log(letter);
//                 soFar += letter;
//                 console.log(soFar);
//                 el.textContent = soFar;
//                 // wait for some amount of time
//                 console.log(el.dataset);
//                 const { typeMin, typeMax } = el.dataset;
//                 const time = getRandomBetween(typeMin, typeMax);
//                 await wait(time);
//         }
// }

// recursion

async function draw(el) {
        let index = 1;
        const text = el.textContent;
        const { typeMin, typeMax } = el.dataset;
        async function drawLetter() {
                el.textContent = text.slice(0, index);
                index += 1;
                // exit condition
                // wait for sometime
                const time = getRandomBetween(typeMin, typeMax);
                await wait(time);
                if (index <= text.length) {
                        drawLetter();
                }
        }
        // when this function draw() runs, kick off drawLetter
        drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);

// awesome
