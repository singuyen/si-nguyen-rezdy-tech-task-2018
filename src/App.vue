<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <nav>
        <router-link to="/" exact>
            Logo 
        </router-link>
        <router-link to="/home">Home page </router-link>
        <router-link to="/about-us">About Us </router-link>
        <router-link to="/contact-us">Contact Us </router-link>

    </nav>
    <h3>Content</h3>
    <div>
        <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
