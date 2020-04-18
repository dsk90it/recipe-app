import { intializeEditPage } from './views'
import { removeRecipe, updateRecipe } from './recipe'
import { createIngredient } from './ingredients'

const hashId = location.hash.substring(1)
const editTitle = document.querySelector('#editTitle')
const editBody = document.querySelector('#editBody')
const deleteBtn = document.querySelector('#deleteBtn')
const saveBtn = document.querySelector('#saveBtn')
const ingredientForm = document.querySelector('form')

// Intialize edit-page with values
intializeEditPage(hashId)

// Edit Title
editTitle.addEventListener('input', (e) => {
    updateRecipe(hashId, {
        title: e.target.value
    })
})

// Edit Notes
editBody.addEventListener('input', (e) => {
    updateRecipe(hashId, {
        preparation: e.target.value
    })
})

// Delete Recipe
deleteBtn.addEventListener('click', () => {
    removeRecipe(hashId)
    location.assign('/index.html')
})

// Save Recipe
saveBtn.addEventListener('click', () => {
    if(editTitle.value !== '' && editTitle.value.trim()){
        location.assign('/index.html')
    } else{
        alert('Add Recipe Name')
    }
})

// Add Ingredient
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.addInput.value.trim()

    if(text.length > 0){
        createIngredient(hashId, text)
        // renderIngredient()
        e.target.addInput.value = ''
    }
})

// Toggle Ingredient

// Delete Ingredient