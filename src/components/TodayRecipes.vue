<template>
    <div>
        <button class="btn" @click="FETCH_ALL">
            What's for lunch
        </button>
        <table border="1" v-if="getFilteredRecipes.length > 0">
            <thead>
                <tr>
                    <th>Recipes</th>
                    <th>Available In Fridge</th>
                    <th>Before Use by</th>
                    <th>Before Best Before</th>
                </tr>
            </thead>
            <tbody>
                <tr class="item-list"
                    v-for="item in getFilteredRecipes"
                        :key="item.title"
                        :item="item">
                    <td>{{ item.title }}</td>
                    <td>{{ item.isAvailableInFridge }}</td>
                    <td>{{ item.isBeforeUseBy }}</td>
                    <td>{{ item.isBeforeBestBefore }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'TodayRecipes',
    computed: mapGetters([
        'getFilteredRecipes'
    ]),
    methods: mapActions([
        'FETCH_ALL'
    ])
}
</script>

<style lang="stylus" scoped>
    table 
        border 1px solid #000
        border-collapse collapse
        
    .btn 
        padding 10px
        border 0
        font-size: 14px
        background #000
        color #FFF
        margin 10px 0
</style>