import { v4 as uuidv4 } from 'uuid';
import { getRecipes, saveRecipe } from './recipe'

const allRecipes = getRecipes()

// Create Ingredient
const createIngredient = (id, text) =>{
    const currentIndex = allRecipes.findIndex((item) => item.id === id)

    recipes[currentIndex].ingredients.push({
        id: uuidv4(),
        text: text,
        have: false
    })
    saveRecipe()
}

// Remove Ingredient
const removeIngredient = (id, ingredientID) => {
    const currentItem = allRecipes.filter((item) => item.id === id)
    const ingredients = currentItem.ingredients
    const ingredientIndex = ingredients.findIndex((item) => item.id === ingredientID)

    if(ingredientIndex > -1){
        ingredients.splice(ingredientIndex, 1)
        saveRecipe()
    }
}

// Toggle Ingredient
const toggleIngredient = (id) => {
    saveRecipe()
}

export { createIngredient, removeIngredient, toggleIngredient }