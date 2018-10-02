import {
    isPastDate,
    checkFridgeStock,
    checkFridgeUseBy,
    checkFridgeBestBefore
} from '../ingredientsAvailability'

describe('Ingredients Availability checking is functional with', () => {
    const recipes = {
            title: 'Item 1',
            ingredients: [
                'Ham',
                'Cheese'
            ]
        }
    
    const fridgeOne = [
        {
            "title": "Ham",
            "use-by": "2015-10-10",
            "best-before": "3000-10-20"
        }
    ]
    
    const fridgeTwo = [
        {
            title: 'Ham',
            "use-by": "2015-10-10",
            "best-before": "3000-10-20"
        },
        {
            title: 'Cheese',
            "use-by": "2015-10-10",
            "best-before": "2015-10-20"
        }
    ]
    
    test('isPastDate is working', () => {
        const isPast = isPastDate('2015-10-10')
        const isNotPast = isPastDate('3000-10-10')
        
        expect(isPast).toBe(true)
        expect(isNotPast).toBe(false)
    })
    
    test('checkFridgeUseBy is working as expected', () => {
        
        const isInStockOne = checkFridgeUseBy(recipes.ingredients, fridgeTwo)

        expect(isInStockOne).toBe(false)
    })
    
    test('checkFridgeBestBefore is working as expected', () => {
        
        const isInStockTwo = checkFridgeBestBefore(recipes.ingredients, fridgeTwo)

        expect(isInStockTwo).toBe(false)
    })
})