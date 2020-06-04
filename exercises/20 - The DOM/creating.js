// console.log('it works');

// const myParagraph = document.createElement('p');
// myParagraph.textContent = 'I am a P';
// myParagraph.classList.add('special');
// console.log(myParagraph);

// const myImage = document.createElement('img');
// myImage.src = 'https://picsum.photos/200';
// myImage.alt = 'alternate text';
// console.log(myImage);

// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');
// console.log(myDiv);

// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// document.body.appendChild(myDiv);

// // oh shoot we need to add something to the top like a heading!

// const heading = document.createElement('h2');
// heading.textContent = 'Cool Things';

// myDiv.insertAdjacentElement('afterbegin', heading);

// // Do this using the tools we just used.

// // <ul>
// // <li> </li>
// // <li> </li>
// // <li> </li>
// // <li> </li>
// // <li> </li>
// // </ul>

const myList = document.createElement('ul');
myList.textContent = 'Mikes First List';
console.log(myList);

const listItem = document.createElement('li');
listItem.textContent = 'one';
console.log(listItem);

const listItem2 = document.createElement('li');
listItem2.textContent = 'two';
console.log(listItem2);

const listItem3 = document.createElement('li');
listItem3.textContent = 'three';
console.log(listItem3);

const listItem4 = document.createElement('li');
listItem4.textContent = 'four';
console.log(listItem4);

const listItem5 = document.createElement('li');
listItem5.textContent = 'five';
console.log(listItem5);

myList.appendChild(listItem);
myList.appendChild(listItem3);

myList.insertAdjacentElement('beforeend', listItem5);
listItem.insertAdjacentElement('afterend', listItem2);
listItem3.insertAdjacentElement('afterend', listItem4);

document.body.appendChild(myList);
