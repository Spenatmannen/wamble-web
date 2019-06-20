<template>
  <div>
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    <!-- <v-facebook-login app-id="338038713536141"></v-facebook-login> -->
  </div>
</template>


<script>
import { Auth } from 'aws-amplify';

export default {
  name: "UserLogin",
  props: {
    authConfig: {
      signUpConfig: {
        hiddenDefaults: ["phone_number", "email"]
      }
    }
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.state.signedIn = true;
        this.$store.state.user = true;
      } catch (err) {
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
      }
    }
  },
  components: {
    VFacebookLogin
  }
};
</script>