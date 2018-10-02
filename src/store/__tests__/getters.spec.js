import getters from '../getters'

describe('Getters', () => {
    const allData = {  
       "recipes":[
          {  
             "title":"Ham and Cheese Toastie",
             "ingredients":[  
                "Ham",
                "Cheese"
             ]
          }
      ],
      "ingredients":[  
         {  
            "title":"Ham",
            "best-before":"2018-10-07",
            "use-by":"2018-10-12"
         },
         {  
            "title":"Cheese",
            "best-before":"2018-10-07",
            "use-by":"2018-10-12"
         }
      ]
    }
      
    const state = {
        allData
    }

    test('is working', () => {
        const filteredData = getters.getFilteredRecipes(state)
        const expectedResult = [{"isAvailableInFridge": true, "isBeforeBestBefore": true, "isBeforeUseBy": true, "title": "Ham and Cheese Toastie"}]
        expect(filteredData).toEqual(expectedResult)
    })
})