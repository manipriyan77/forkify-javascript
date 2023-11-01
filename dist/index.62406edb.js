const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
async function fetchRecipe() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        // const recipe = data.data.recipe;
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            cookingTime: recipe.cooking_time,
            imageUrl: recipe.image_url,
            ingredients: recipe.ingredients,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            servings: recipe.servings
        };
        console.log("data :>> ", recipe);
    } catch (error) {
        console.log("error :>> ", error);
    }
}
fetchRecipe();

//# sourceMappingURL=index.62406edb.js.map
