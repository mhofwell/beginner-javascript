function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
        popup.classList.remove('open');
        await wait(1000);
        // remove the popup entirely
        popup.remove();
        popup = null;
}

function ask(options) {
        return new Promise(async function(resolve) {
                // first we need to create a popup with all the fields in it

                const popup = document.createElement('form');
                popup.classList.add('popup');
                popup.insertAdjacentHTML(
                        'afterbegin',
                        `<fieldset> 
                            <label>${options.title}</label> 
                            <input type="text" name="input"/>
                            <button type="submit"> submit </button>
                        </fieldset> 
                `
                );
                // check if they want a cancel button

                if (options.cancel) {
                        const skipButton = document.createElement('button');
                        skipButton.type = ' button';
                        skipButton.textContent = 'cancel';
                        console.log(popup.firstChild);
                        popup.firstElementChild.appendChild(skipButton);
                        skipButton.addEventListener(
                                'click',
                                function() {
                                        resolve(null);
                                        destroyPopup(popup);
                                },
                                { once: true }
                        );
                }
                // listen for the submit event on the inputs
                popup.addEventListener(
                        'submit',
                        function(e) {
                                e.preventDefault();
                                resolve(e.target.input.value);
                                // remove it from the DOM entirely
                                destroyPopup(popup);
                        },
                        { once: true }
                );
                // when someone does submit it we want to resolve the data that was in the input box.

                // insert that popup into the DOM
                document.body.appendChild(popup);

                // put a very small timeout before we add the open class to stick the code at end of the event loop to make it appear like a transition.
                await wait(50);
                popup.classList.add('open');
        });
}

// select all buttons that have a question

async function askQuestion(e) {
        const button = e.currentTarget;
        const cancel = 'cancel' in button.dataset;
        const answer = await ask({ title: button.dataset.question, cancel: true });
        console.log(answer);
}

const buttons = document.querySelectorAll('[data-question');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
        { title: 'What is your name?' },
        { title: 'What is your age?', cancel: true },
        { title: 'What is your dog?' },
];

async function asyncMap(array, callback) {
        // make an array to store the results
        const results = [];
        // loop over our array
        for (const item of array) {
                const result = await callback(item);
                results.push(result);
        }
        // when we are done the loop return it
        return results;
}

async function go() {
        const answers = await asyncMap(question, ask);
        console.log(answers);
}

go();
// async function askMany() {
//         for (const question of questions) {
//                 const answer = await ask(question);
//                 console.log(answer);
//         }
// }

// askMany();
