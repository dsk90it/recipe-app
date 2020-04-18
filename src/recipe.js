import { v4 as uuidv4 } from 'uuid';

let recipes = []

// Read existing recipes from localStorage
const loadRecipes = () => {
    const recipesString = localStorage.getItem('recipes')
    
    try{
        return recipesString ? JSON.parse(recipesString) : []
    } catch(e){
        return []
    }
}

// Get Recipes
const getRecipes = () => recipes

// Save recipes to localStorage
const saveRecipe = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

// Create recipe
const createRecipe = () => {
    const uniqueId = uuidv4()

    recipes.push({
        id: uniqueId,
        title: '',
        ingredients: [],
        preparation: ''
    })
    saveRecipe()
    
    return uniqueId
}

// Update recipe
const updateRecipe = (id, { title, preparation }) => {
    const currentItem = recipes.find((item) => item.id === id)
    
    if(typeof title === 'string'){
        currentItem.title = title
    }
    if(typeof preparation === 'string'){
        currentItem.preparation = preparation
    }
    saveRecipe()

    return currentItem
}

// Remove recipe
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((item) => item.id === id)
    
    if (recipeIndex > -1){
        recipes.splice(recipeIndex, 1)
        saveRecipe()
    }
}

recipes = loadRecipes()

export { getRecipes, createRecipe, removeRecipe, updateRecipe, saveRecipe }