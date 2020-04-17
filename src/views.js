import { getRecipes } from "./recipe"
import { getFilters } from "./filters"

// Generate Cards HTML
const generateCardDOM = (recipe) => {
    const recipeList = document.createElement('li')
    const recipeAnchor = document.createElement('a')
    const recipeTitle = document.createElement('p')
    const recipeSubText = document.createElement('span')

    recipeList.appendChild(recipeAnchor)
    recipeAnchor.setAttribute('href', `edit.html#${recipe.id}`)

    recipeAnchor.appendChild(recipeTitle)
    recipeTitle.textContent = recipe.title

    recipeAnchor.appendChild(recipeSubText)
    recipeSubText.textContent = generateSummary(recipe)

    return recipeList
}

// Generate Ingredient Summary HTML
const generateSummary = (recipe) => {
    const ingredients = recipe.ingredients
    const dontHave = ingredients.filter((item) => item.have)
    const plural = dontHave.length <= 1 ? '' : 's'

    return `${dontHave.length} ingredient${plural} to cook`
}

// Render Final DOM
const renderDOM = () => {
    const recipeContainer = document.querySelector('#recipeContainer')
    const { searchTerm } = getFilters()
    const filteredRecipes = getRecipes().filter((item) => {
        const textMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
        return textMatch
    })

    recipeContainer.innerHTML = ''

    if(filteredRecipes.length > 0){
        filteredRecipes.forEach((item) => recipeContainer.appendChild(generateCardDOM(item)))
    } else{
        recipeContainer.innerHTML = `<p class="empty-message">No recipes to show!</p>`
    }
}

// Initialize Edit page
const intializeEditPage = (id) => {
    const currentRecipe = getRecipes().find((item) => item.id === id)
    const editTitle = document.querySelector('#editTitle')
    const editBody = document.querySelector('#editBody')

    if(!currentRecipe){
        location.assign('/index.html')
    }

    editTitle.value = currentRecipe.title
    editBody.value = currentRecipe.preparation
}

export { renderDOM, intializeEditPage}