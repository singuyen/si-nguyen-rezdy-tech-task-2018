import { find, get } from 'lodash'

export function isPastDate(date) {
    const getNow = Date.now()
    const myDate = date.split('-')
    const targetDate = `${myDate[1]},${myDate[2]},${myDate[0]}`
        
    return getNow >= new Date(targetDate).getTime() ? true : false
}

export function checkFridgeStock(recipesIngredients, fridgeStock) {
    const availableItems = recipesIngredients.reduce(
        (acc, title) => {
            const inStock = find(fridgeStock, {title})
                        
            return inStock ? [...acc, inStock] : acc
        }, []
    )
    
    return availableItems.length === recipesIngredients.length
}

export function checkFridgeUseBy(recipesIngredients, fridgeStock) {
    const pastUseByItems = recipesIngredients.reduce(
        (acc, title) => {
            const inStock = find(fridgeStock, {title})
            const useBy = get(inStock, 'use-by', '0000-00-00')

            return (!isPastDate(useBy) && inStock) ? acc : [...acc, inStock]
        }, 
        []
    )
        
    return pastUseByItems.length === 0
}

export function checkFridgeBestBefore(recipesIngredients, fridgeStock) {
    const pastBestBeforeItems = recipesIngredients.reduce(
        (acc, title) => {
            const inStock = find(fridgeStock, {title})
            const bestBefore = get(inStock, 'best-before', '0000-00-00')

            return (!isPastDate(bestBefore) && inStock) ? acc : [...acc, inStock]
        }, 
        []
    )
            
    return pastBestBeforeItems.length === 0
}