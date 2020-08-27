const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold all of our items state.

let items = [];

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
                        <input value= "${item.id}" 
                        type="checkbox"
                        ${item.complete ? 'checked' : ''}
                        <span class ="itemName">${item.name}</span> 
                        <button aria-label="Remove ${item.name}"
                        value = "${item.id}">
                        &times</button> 
        </li>`
                )
                .join('');
        list.innerHTML = html;
}

function mirrorToLocalStorage() {
        console.log('Saving items to localStorage');
        localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
        console.info('Restoring from local storage');
        // pull the items from Local Storage
        const lsItems = JSON.parse(localStorage.getItem('items'));
        if (lsItems.length) {
                // items = lsItems;
                // lsItems.forEach(item => items.push(item));
                // items.push(lsItems[0]);
                items.push(...lsItems);
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
        }
}

function deleteItem(id) {
        console.log('deleting', id);
        // update our items array without this one
        items = items.filter(item => item.id !== id);
        console.log(items);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
        const itemRef = items.find(item => item.id === id);
        itemRef.complete = !itemRef.complete;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// event delegation.  We listen for a click on the list ul but then delegate the click over to the button if that was what was clicked.

list.addEventListener('click', function(e) {
        if (e.target.matches('button')) {
                deleteItem(parseInt(e.target.value));
        }
        if (e.target.matches('input[type="checkbox"]')) {
                markAsComplete(parseInt(e.target.value));
        }
});

restoreFromLocalStorage();
