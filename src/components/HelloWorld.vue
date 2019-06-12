<template>
  <div class="helloWorld">
    <div v-if="!signedIn">
      <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
      <!-- <v-facebook-login app-id="338038713536141"></v-facebook-login> -->
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
    </div>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { VFBLogin as VFacebookLogin } from "vue-facebook-login-component";

const ListCoffeeShops = `
  query {
    listCoffeeShops {
      items {
        id name description
      }
    }
  }
`;
const CreateCoffeeShop = `
  mutation($name: String! $description: String) {
    createCoffeeShop(input: {
      name: $name description: $description
    }) {
      id name description
    }
  }
`;

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: String,
      name: "",
      description: "",
      coffeeShops: [],
      listCoffeeShops: [],
      test: "teee",
      authConfig: {
        signUpConfig: {
          hiddenDefaults: [
            'phone_number',
            'email'
          ]
        }
      }
    };
  },
  async beforeCreate() {
    const {
      data: {
        listCoffeeShops: { items }
      }
    } = await API.graphql(graphqlOperation(ListCoffeeShops));
    this.coffeeShops = items;
  },
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
    },
    async createCoffeeShop() {
      if (this.name === "" || this.description === "") {
        return;
      }
      const coffeeShop = { name: this.name, description: this.description };
      const coffeeShops = [...this.coffeeShops, coffeeShop];
      this.coffeeShops = coffeeShops;
      this.name = "";
      this.description = "";
      try {
        await API.graphql(graphqlOperation(CreateCoffeeShop, coffeeShop));
        // console.log("coffee shop successfully created!");
      } catch (err) {
        // console.log("error adding item: ", err);
      }
    },
  },
  components: {
    VFacebookLogin
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signout {
  background-color: #ededed;
  margin: 0;
  padding: 11px 0px 1px;
}
</style>
