<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <TheNavigation></TheNavigation> -->
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation'
import router from './router'; // vue-router instance
import store from './store/'; // vuex store instance



export default {
  name: 'app',
  router,
  store,
  components: {
    'TheNavigation': TheNavigation
  }
}
</script>

<style>

body {
  margin: 0;
}
#app {
  height: 100vh;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>