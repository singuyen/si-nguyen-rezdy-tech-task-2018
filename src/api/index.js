import axios from 'axios'

function fetch (child) {
    return new Promise((resolve, reject) => {
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