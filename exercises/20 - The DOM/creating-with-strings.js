const item = document.querySelector('.item');

const width = 200;
const src = `https://picsum.photos/${width}`;
const desc = `cute pup`;
const myHTML = `

<div class = "wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div> 
`;

// Turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);
// console.log(myFragment.querySelector('img'));

document.body.append(myFragment);
