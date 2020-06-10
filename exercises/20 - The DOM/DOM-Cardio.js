// const divTwo = `<div class="wrapper"></div>`;
// const myHTML = document.createRange().createContextualFragment(divTwo);

// document.body.append(myHTML);

// Make a div

// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// divOne.insertAdjacentElement(`beforeend`, imgOne);

// const pageImg = document.querySelector(`.wrapper img`);

// function toggleRound() {
//         pageImg.classList.toggle('round');
// }

// pageImg.addEventListener('click', toggleRound);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const divOne = document.createElement(`div`);
divOne.classList.add(`wrapper`);
document.body.append(divOne);

const uList = document.createElement(`ul`);
uList.textContent = `wicked, man!`;

const itemOne = document.createElement(`li`);
itemOne.textContent = `I'm an item`;

const itemTwo = document.createElement(`li`);
itemTwo.textContent = `I'm an item`;

const itemThree = document.createElement(`li`);
itemThree.textContent = `I'm an item`;

uList.appendChild(itemOne);
uList.appendChild(itemTwo);
uList.appendChild(itemThree);

divOne.insertAdjacentElement('afterbegin', uList);

const imgOne = document.createElement('img');
imgOne.src = 'https://picsum.photos/200/300';
imgOne.width = 400;
imgOne.classList.add('cute!');
imgOne.alt = 'super cute!';

divOne.insertAdjacentElement(`beforeend`, imgOne);

const htmlFrag = `
<div>
<p></p>
<p></p>
</div>
`;

// const myFragment = document.createRange().createContextualFragment(htmlFrag);

const ulList = divOne.querySelector('ul');
ulList.insertAdjacentHTML(`beforebegin`, htmlFrag);

// extra, add a class to the div in HTMLFrag

divOne.children[0].classList.add('myDiv');

// add a class to the second paragraph called warning

const myDiv1 = document.querySelector('.myDiv');
myDiv1.children[1].classList.add('warning');

// remove the first paragraph

myDiv1.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayercard(name, age, height) {
        const retHTML = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${height *
                age}. That would be a tall dog!
                <button class="delete" type="button">&times; Delete</button>
            </p>
    </div>
    `;
        return retHTML;
}

// make a new div with a class of cards

const divTwo = document.createElement(`div`);
divTwo.classList.add('cards');

// Have that function make 4 cards

let pcards = generatePlayercard('mike', 1, 2);
pcards += generatePlayercard('dom', 2, 3);
pcards += generatePlayercard('jeff', 2, 3);
pcards += generatePlayercard('birdie', 2, 3);

// append those cards to the div

divTwo.append(pcards);

// put the div into the DOM just before the wrapper element

divTwo.innerHTML = pcards;

divOne.insertAdjacentElement('beforebegin', divTwo);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!

const buttons = document.querySelector('.delete');

// make out delete function

function deleteCard(event) {
        const clicked = event.currentTarget;
        // clicked.parentElement.remove();
        clicked.closest('.playerCard').remove();
}
// loop over them and attach a listener

buttons.forEach(button => button.addEventListener('click', deleteCard));
