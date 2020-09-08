const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';

async function fetchRecipes(query) {
        const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
        const data = await res.json();
}

fetchRecipes('pizza');
