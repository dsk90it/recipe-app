import { renderDOM } from "./views";
import { createRecipe } from "./recipe";
import { setFilters } from "./filters";

renderDOM()

document.querySelector('#searchInput').addEventListener('input', (e) => {
    setFilters({
        searchTerm: e.target.value
    })
    renderDOM()
})

document.querySelector('#addButton').addEventListener('click', () => {
    const id = createRecipe()
    location.assign(`edit.html#${id}`)
})