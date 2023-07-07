const ApI_KEY = "25ac9c18ce3d4179bb3b214179f3b81a"
const recipesListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
    recipesListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredintsEl = document.createElement("p");
        recipeIngredintsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((Ingredient) =>Ingredient.original).join(", ")}
        `;

        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.target = "_blank";
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredintsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipesListEl.appendChild(recipeItemEl);
    })
}

async function getRecipes(){
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${ApI_KEY}`)
    const data = await response.json()

    return data.recipes
}


async function init(){
    const recipes = await getRecipes()
    displayRecipes(recipes);
}

init()