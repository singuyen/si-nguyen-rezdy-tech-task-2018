<template>
  <div id="app">
    <nav>
        <router-link to="/lunch">Lunch </router-link>
        <router-link to="/about-us">About </router-link>
        <router-link to="/contact-us">Contact </router-link>
    </nav>
    <div class="container">
        <router-view class="view"></router-view>
    </div>
    <TodayRecipes />

  </div>
</template>

<script>
import TodayRecipes from './components/TodayRecipes.vue'

export default {
  name: 'app',
  components: {
    TodayRecipes
  }
}
</script>

<style lang="stylus" scoped>
nav
    display flex 
    
    a
        display block 
        padding 10px
        text-decoration none 
        background #DADADA
        
    a.router-link-active 
        background #000
        color #FFF

.container
    margin 10px 0
</style>

