// Make a div

const divOne = document.createElement(`div`);

// add a class of wrapper to it

divOne.classList.add(`wrapper`);

// put it into the body

document.body.append(divOne);

// make an unordered list

const listOne = document.createElement('ul');
document.body.appendChild(listOne);

// add three list items with the words "one, two three" in them

const li = `
<li>one</li>
<li>two</li>
<li>three</li>
`;

listOne.insertAdjacentHTML('afterbegin', li);

// put that list into the above wrapper

divOne.append(listOne);

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy

const img = document.createElement(`img`);
img.src = `https://picsum.photos/200/300`;
img.width = 250;
img.classList.add = `cute`;
img.alt = `Cute Puppy!`;

// Append that image to the wrapper
divOne.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const string = `
<div> 
<p> one </p>
<p> two </p>
</div>
`;

// put this div before the unordered list from above
divOne.insertAdjacentHTML(`afterbegin`, string);

// extra, add a class to the div in HTMLFrag

const newClass = divOne.children[0].classList.add(`news`);

// add a class to the second paragraph called warning

const pClass = document.querySelector(`.news`);
pClass.children[1].classList.add(`warning`);

// remove the first paragraph

pClass.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:

function generatePlayerCard(name, age, height) {
        const inHTML = `    
        <div class="playerCard">
                <h2>${name} — ${age}</h2>
                <p>
                        They are ${height} and ${age} years old. In Dog years this person would be LOTS. That would
                        be a tall dog!
                </p>
                <button class="delete" type="button">&times; Delete</button> 
        </div>`;
        return inHTML;
}

// make a new div with a class of cards

const cardList = document.createElement(`div`);
cardList.classList.add(`cards`);

// Have that function make 4 cards

let playerCards = generatePlayerCard(`mike`, 2, 3);
playerCards += generatePlayerCard(`dom`, 2, 3);
playerCards += generatePlayerCard(`birdie`, 2, 3);
playerCards += generatePlayerCard(`wolverine`, 2, 3);
// append those cards to the div

cardList.innerHTML = playerCards;

// put the div into the DOM just before the wrapper element

divOne.insertAdjacentElement(`beforebegin`, cardList);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!

const buttons = document.querySelectorAll(`.delete`);

// make out delete function

function deleteCard(event) {
        const clicked = event.currentTarget;
        clicked.closest(`.playerCard`).remove();
}

// loop over them and attach a listener

buttons.forEach(button => button.addEventListener(`click`, deleteCard));
