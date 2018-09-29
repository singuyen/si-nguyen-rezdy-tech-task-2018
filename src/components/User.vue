<template>
  <div class="user">
    <h3>User</h3>
    <p>{{ username }}</p>
    <h3>
        {{ this.$store.state.counter }}
    </h3>
    <button @click="increment">
        Increment
    </button>
    
    <div v-for="item in items">{{ item.name }}</div>
    

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'User',
    props: {
        username: String
    },
    data () {
        return {
            items: this.$store.getters.activeItems
        }
    },
    methods: mapActions([
        'increment'
    ]),
    
    beforeMount () {
        this.$store.dispatch('fetchData')
            .then(() => {
                this.items = this.$store.getters.activeItems
            })
    }
}

</script>