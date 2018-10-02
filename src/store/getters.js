import { orderBy } from 'lodash'

import { checkFridgeStock, checkFridgeUseBy, checkFridgeBestBefore } from '../utils/ingredientsAvailability'

export default {
    getFilteredRecipes (state) {
        const recipes = state.allData['recipes'] || []
        const fridgeStock = state.allData['ingredients'] || []
        
        const availableRecipes = recipes.map(({title, ingredients}) => {
            return {
                title,
                isAvailableInFridge: checkFridgeStock(ingredients, fridgeStock),
                isBeforeUseBy: checkFridgeUseBy(ingredients, fridgeStock),
                isBeforeBestBefore: checkFridgeBestBefore(ingredients, fridgeStock)
            }
        })
        
        return orderBy(availableRecipes, ['isBeforeBestBefore'], ['desc'])
    }
}