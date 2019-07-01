<template>
  <div class="LandingPage"></div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { API, graphqlOperation } from "aws-amplify";
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
  name: "LandingPage",
  data() {
    return {
      msg: String,
      name: "",
      description: "",
      coffeeShops: [],
      listCoffeeShops: []
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

  methods: {
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
    }
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
