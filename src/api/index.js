/* 
API calls are putting in public folder instead of internal call 
and doing a fetch to mimic REST API calls in reality.
*/

import axios from 'axios'

function fetch (child) {
    return new Promise((resolve) => {
        axios
            .get(child)
            .then(response => {
                resolve(response.data)
            })
    })
}

export function fetchIngredients () {
  return fetch(`./public/data/ingredients.json`)
}

export function fetchRecipes () {
    return fetch(`./public/data/recipes.json`)
}