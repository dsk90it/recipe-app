import { renderDOM } from "./views";
import { createRecipe } from "./recipe";
import { setFilters } from "./filters";

renderDOM()

// Search Items
document.querySelector('#searchInput').addEventListener('input', (e) => {
    setFilters({
        searchTerm: e.target.value
    })
    renderDOM()
})

// Add Recipe
document.querySelector('#addButton').addEventListener('click', () => {
    const id = createRecipe()
    location.assign(`edit.html#${id}`)
})