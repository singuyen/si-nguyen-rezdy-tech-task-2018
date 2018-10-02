import { 
    shallowMount, 
    createLocalVue,
    RouterLinkStub 
} from '@vue/test-utils'
import Vuex from 'vuex'

import TodayRecipesComp from '../TodayRecipes.vue'
import { merge } from 'lodash'

const localVue = createLocalVue()

localVue.use(Vuex)

function createStore (overrides) {
  const defaultStoreConfig = {
    getters: {
        getFilteredRecipes: jest.fn()
    },
    action: {
        FETCH_ALL: jest.fn(() => Promise.resolve())
    }
  }
  return new Vuex.Store(
    merge(defaultStoreConfig, overrides)
  )
}

function createWrapper (overrides) {
  const defaultMountingOptions = {
    stubs: {
      RouterLink: RouterLinkStub
    },
    localVue,
    store: createStore()
  }
  return shallowMount(TodayRecipesComp, merge(defaultMountingOptions, overrides))
}

describe('renders Today Recipes with', () => {
    const allData = [
      {
          "title": "Item 1",
          "isAvailableInFridge": true
      },
      {
          "title": "Item 2",
          "isAvailableInFridge": true
      }
    ]
  
    const store = createStore({
        getters: {
            getFilteredRecipes: () => allData
        }
    })
    
    const wrapper = createWrapper({ store })
    
    test('a button to load the content', () => {
        expect(wrapper.find('button').text()).toBe('What\'s for lunch')
    })
    
    test('a table to all the children', () => {
        expect(wrapper.findAll('tr.item-list')).toHaveLength(allData.length)
    })
    
    test('a first row with correct content', () => {
        expect(wrapper.find('tr.item-list:first-child').text()).toBe('Item 1 true')
    })
})
