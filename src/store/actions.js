import { fetchIngredients, fetchRecipes } from '../api'

export default {
    FETCH_ALL ({commit, dispatch}) {     
        Promise.all([fetchRecipes(), fetchIngredients()])
            .then((data) => commit('setAll', {...data[0], ...data[1]}))
    }
}