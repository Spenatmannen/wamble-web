<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <TheNavigation></TheNavigation> -->
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation";
import router from "./router"; // vue-router instance
import store from "./store/"; // vuex store instance

export default {
  name: "app",
  router,
  store,
  components: {
    TheNavigation: TheNavigation
  }
};
</script>

<style lang="scss">
@import './scss/_variables.scss';
@import './scss/_mixins.scss';


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;

  @include respond(tab-land) {
    font-size: 56.25%;
  }

  @include respond(tab-port) {
    font-size: 50%;
  }

  @include respond(big-desktop) {
    font-size: 75%;
  }
}

body {
  box-sizing: border-box;
  margin: 0;
  font-size: $default-font-size;

  @include respond(tab-port) {
    padding: 0;
  }
}

::selection {
  background-color: $color-primary;
  color: $color-white;
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