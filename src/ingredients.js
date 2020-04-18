import { v4 as uuidv4 } from 'uuid';
import { getRecipes, saveRecipe } from './recipe'
import { renderIngredients } from './views';

// Create Ingredient
const createIngredient = (id, text) =>{
    const recipe = getRecipes().find((item) => item.id === id)

    recipe.ingredients.push({
        id: uuidv4(),
        text: text,
        have: false
    })
    saveRecipe()
}

// Toggle Ingredient
const toggleIngredient = (ingredient) => {
    ingredient.have = !ingredient.have
    saveRecipe()
}

// Remove Ingredient
const removeIngredient = (currentRecipe, ingredientsId) => {
    const ingredientsSet = currentRecipe.ingredients
    const itemIndex = ingredientsSet.findIndex((item) => item.id === ingredientsId)

    if (itemIndex > -1){
        ingredientsSet.splice(itemIndex, 1)
        renderIngredients(currentRecipe.id)
        saveRecipe()
    }
}

export { createIngredient, toggleIngredient, removeIngredient }