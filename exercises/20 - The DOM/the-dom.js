// /* eslint-disable */

// const abc = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.dir(heading.textContent);
// console.dir(heading.innerText);
// // heading.textContent = 'Wes is cool';
// // console.dir(heading.textContent);
// // console.dir(heading.innerText);

// // textContent gets the content of all elements, including <
// // <script> and <style>

// //innerText only shows "human readable elements."  Its aware
// // of styling and won't return hidden elements"

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`

// pizzaList.insertAdjacentText('afterBegin', '🍕' );
// pizzaList.insertAdjacentText('beforeend', '🍕' );

// Classes! =----=-=-=-=-=-=-=-==-=-=-=-======----

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
        pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
