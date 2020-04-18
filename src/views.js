import { getRecipes } from "./recipe"
import { getFilters } from "./filters"
import { toggleIngredient, removeIngredient } from "./ingredients"

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

    return `You have ${dontHave.length} ingredient${plural} to cook`
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
        recipeContainer.innerHTML = `<h2>No recipes to show!</h2>`
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

// Generate Ingredient HTML
const generateIngredientDOM = (currentRecipe, ingredient) => {
    const column = document.createElement('div')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    const checkMark = document.createElement('i')
    const labelText = document.createElement('span')
    const closeBtn = document.createElement('button')

    // add classes
    column.classList.add('ingredients-col')
    label.classList.add('checklist')
    checkMark.classList.add('checkmark')

    // Append elements
    column.appendChild(label)
    label.appendChild(checkbox)
    label.appendChild(checkMark)
    label.appendChild(labelText)
    column.appendChild(closeBtn)

    // Checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = ingredient.have
    checkbox.addEventListener('change', () => {
        toggleIngredient(ingredient)
    })

    // Label text
    labelText.textContent = ingredient.text

    // delete button
    closeBtn.textContent = '❌'
    closeBtn.addEventListener('click', () => {
        removeIngredient(currentRecipe, ingredient.id)
    })

    return column
}

// Render Final Ingredients
const renderIngredients = (recipeID) => {
    const ingredientsContainer = document.querySelector('#ingredientsContainer')
    const currentRecipe = getRecipes().find((item) => item.id === recipeID)
    const currentIngredients = currentRecipe.ingredients
    
    ingredientsContainer.innerHTML = ''

    if(currentIngredients.length > 0){
        currentIngredients.forEach((item) => {
            ingredientsContainer.appendChild(generateIngredientDOM(currentRecipe, item))
        })
    } else{
        ingredientsContainer.innerHTML = `<h3>No Ingredients!</h3>`
    }
}

export { renderDOM, renderIngredients, intializeEditPage}