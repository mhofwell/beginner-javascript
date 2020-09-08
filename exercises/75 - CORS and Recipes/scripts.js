const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
        const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
        const data = await res.json();
        return data;
}

// async function handleSubmit(e) {
//         e.preventDefault();
//         console.log(form.query.value);
//         const el = e.currentTarget;
//         // turn the form off
//         el.submit.disabled = true;
//         // submit the search
//         console.log(el.query.value);
//         const recipes = await fetchRecipes(el.query.value);
//         console.log(recipes);
//         el.submit.disabled = false;
//         displayRecipes(recipes.results);
// }

async function handleSubmit(e) {
        e.preventDefault();
        const el = event.currentTarget;
        fetchDisplay(form.query.value);
}

async function fetchDisplay(query) {
        // turn the form off
        form.submit.disabled = true;
        // submit the search
        console.log(form.query.value);
        const recipes = await fetchRecipes(query);
        console.log(recipes);
        form.submit.disabled = false;
        displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
        console.log('creating html');
        const html = recipes.map(
                recipe => `<div class = "recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
       
        ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
       
        <a href="${recipe.href}">View Recipe -></a>
       
        </div>`
        );
        recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);

fetchDisplay('pizza');
