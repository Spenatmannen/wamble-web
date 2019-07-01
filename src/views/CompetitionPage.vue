<template>
  <div>
      {{ $route.params.id }}
    <!-- <div v-if="!signedIn">
      <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out class="signout"></amplify-sign-out>
      <div>
        <div class="form">
          <input class="input" v-model="name" placeholder="Coffee Shop Name">
          <input class="input" v-model="description" placeholder="Coffee Shop Description">
          <button class="button" v-on:click="createCoffeeShop">Create Coffee Shop</button>
        </div>
        <div v-for="item in coffeeShops" :key="item.key" class="list-item">
          <p class="name">{{ item.name }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CompetitionPage",
  created() {
    this.findUser();
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.findUser();
      } else {
        this.$store.state.signedIn = false;
        // this.signedIn = false;
        this.$store.state.user = null;
      }
    });
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

