<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import router from './router'; // vue-router instance
import store from './store'; // vuex store instance



export default {
  name: 'app',
  router,
  store,
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>

body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>