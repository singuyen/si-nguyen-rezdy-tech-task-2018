import Vue from 'vue'
import Vuex from 'vuex'
import { fetchData } from '../api'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            counter: 1,
            dataList: []
        },
        getters: {
            activeItems: (state) => {
                return state.dataList
            }
        },
        actions: {
            increment: ({commit}) => {
              commit('increment')
            },
            fetchData: ({commit}) => {
                return fetchData()
                    .then(data => commit('setList', data ))
            }
        },
        mutations: {
            increment (state) {
                // mutate state
                state.counter++
            },
            setList (state, data) {
                state.dataList = data.data
            }
        }
    })
}