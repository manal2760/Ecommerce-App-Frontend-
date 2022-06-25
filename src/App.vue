<template>
  <Navbar :cartCount="cartCount" :isAdmin="isAdmin" @resetCartCount="resetCartCount" />
  <router-view v-if="categories && products"
  :baseURL="baseURL"
  :categories="categories"
  :products="products"
  @fetchData="fetchData"
  >
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar/nav-bar";
import axios from 'axios';
export default {
  components: {Navbar},
  data() {
    return {
      baseURL : "http://localhost:8080/",
      products: null,
      categories: null,
      cartCount: 0,
      isAdmin: false,
    }
  },
  methods: {
  
    async fetchData() {
      // api call to get all the categories
      await axios.get(this.baseURL + "category/list/")
      .then(res => {
        this.categories = res.data
      }).catch((err) => console.log('err', err));
      // api call to get the products
      await axios.get(this.baseURL + "product/list/")
      .then(res => {
        this.products = res.data
      }).catch((err) => console.log('err', err));

      if (this.token) {
        axios
          .get(`${this.baseURL}cart/list/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log("err", err));
      }
    },
    resetCartCount() {
      this.cartCount = 0;

    },
  },
  
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>