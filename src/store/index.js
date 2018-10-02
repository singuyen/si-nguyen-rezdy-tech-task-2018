import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            allData: {}
        },
        getters,
        actions,
        mutations: {
            setAll (state, data) {
                state.allData = data
                Vue.set(state.allData)
            }
        }
    })
}