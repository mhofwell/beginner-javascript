const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold all of our items state.

const items = [];

// so we make a submit handler

function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted!');
        const name = e.currentTarget.item.value;
        if (!name) {
                return;
        }
        const item = {
                name,
                id: Date.now(),
                complete: false,
        };
        // push the items into our state
        items.push(item);
        console.log(`There are now ${items.length} in your state`);
        // clear the form
        e.target.reset();
        // fire off a custom event that will tell anyone else who cares that the items have been updated.
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
        console.log(items);
        const html = items
                .map(
                        item => `<li class ="shopping-item">
                        <input type="checkbox">
                        <span class ="itemName">${item.name}</span> 
                        <button aria-label="Remove ${item.name}">&times</button> 
        </li>`
                )
                .join('');
        list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', e => {
        console.log(e);
});
