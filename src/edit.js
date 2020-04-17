import { intializeEditPage } from './views'
import { removeRecipe, updateRecipe } from './recipe'

const hashId = location.hash.substring(1)
const editTitle = document.querySelector('#editTitle')
const editBody = document.querySelector('#editBody')
const deleteBtn = document.querySelector('#deleteBtn')
const saveBtn = document.querySelector('#saveBtn')

intializeEditPage(hashId)

editTitle.addEventListener('input', (e) => {
    updateRecipe(hashId, {
        title: e.target.value
    })
})

editBody.addEventListener('input', (e) => {
    updateRecipe(hashId, {
        preparation: e.target.value
    })
})

deleteBtn.addEventListener('click', () => {
    removeRecipe(hashId)
    location.assign('/index.html')
})

saveBtn.addEventListener('click', () => {
    if(editTitle.value !== '' && editTitle.value.trim()){
        location.assign('/index.html')
    } else{
        alert('Add Recipe Name')
    }
})