import { intializeEditPage, renderIngredients } from './views'
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

// Render Ingredients
renderIngredients(hashId)

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

// Save Button
saveBtn.addEventListener('click', () => {
    if(editTitle.value !== '' && editTitle.value.trim()){
        location.assign('/index.html')
    } else{
        alert('Add Recipe Name')
    }
})

// Add New Ingredient
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.addInput.value.trim()

    if(text.length > 0){
        createIngredient(hashId, text)
        renderIngredients(hashId)
        e.target.addInput.value = ''
    } else{
        alert('Recipe field cannot empty')
    }
})