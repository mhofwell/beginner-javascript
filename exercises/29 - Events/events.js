const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const buyButtons = document.querySelectorAll(`button.buy`);

function handleBuyButtonClick(event) {
        console.log(`you clicked the button`);
        const button = event.target;
        // console.log(button.textContent);
        // console.log(`you are buying it!`);
        // console.log(parseFloat(event.target.dataset.price));
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(event.target === event.currentTarget);
        // stop this event from bubbling up
        // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener(`click`, handleBuyButtonClick);
});

window.addEventListener(
        'click',
        function(event) {
                console.log(`you clicked the window!`);
                console.log(event.target);
                console.log(event.type);
                console.log(event.bubbles);
                // event.stopPropagation();
        },
        { capture: true }
);

const photo = document.querySelector('.el');

photo.addEventListener('mousemove', function(e) {
        console.log(e.currentTarget);
        console.log(this);
});
