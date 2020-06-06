const wes = document.querySelector('.wes');

// Properties for Elements!

// console.log(wes.children);

// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementChild);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

// console.log(wes.childNodes);

// Properties for Nodes!

// el.childNodes;
// el.firstChild;
// el.lastChild;
// el.prevousSibling;
// el.nextSibling;
// el.parentNode;

// Removing Elements

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
