const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const buyButtons = document.querySelectorAll(`button.buy`);

function handleClick() {
        console.log('IT GOT CLICKED!');
}

butts.addEventListener('click', handleClick);

coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

function buyItem() {
        console.log(`Buying item!`);
}

function attachEventListener(targetButton) {
        console.log(`binding the buy button!`);
        targetButton.addEventListener(`click`, buyItem);
}

// buyButtons.forEach(attachEventListener);
buyButtons.forEach(button => {
        button.addEventListener(`click`, () => {
                console.log(`you did it`);
        });
});

// Before the exercise switch in Events. ^^^
