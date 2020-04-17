import { v4 as uuidv4 } from 'uuid';
import { getRecipes, saveRecipe } from './recipe'

// Add Ingredient
const addIngredient = (id, text) =>{
    const recipes = getRecipes()
    const currentIndex = recipes.findIndex((item) => item.id === id)

    recipes[currentIndex].ingredients.push({
        id: uuidv4(),
        text: text,
        have: false
    })
    saveRecipe()
}

// Remove Ingredient
const removeIngredient = (id) => {
}

// Toggle Ingredient
const toggleIngredient = (id) => {
}

export { addIngredient, removeIngredient, toggleIngredient }