<template>
   <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

         <!-- <a class="navbar-brand" href="#">
            <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
            </a>-->

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">

                        <li class="nav-item">
                           <router-link :to="{ name: 'home' }"> <a class="nav-link" href="">Home</a></router-link> 
                        </li>
                       
                        <li class="nav-item dropdown" v-if="token" >
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link :to="{ name: 'CategoryList' }">  <a class="dropdown-item" href="#">Categories</a></router-link>
                                <router-link :to="{ name: 'ProductList' }">  <a class="dropdown-item" href="#">Products</a></router-link>

                            </div>
                        </li>

                         <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarAccount"
                            data-toggle="dropdown"
                        >
                            Accounts
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarAccount">
                                    
                            <router-link
                            v-if="!token"
                            class="dropdown-item"
                            :to="{ name: 'Signup' }"
                            >Sign up
                            </router-link>
                             <router-link
                            v-if="!token"
                            class="dropdown-item"
                            :to="{ name: 'Signin' }"
                            >Sign in
                            </router-link>
                             <a class="dropdown-item" v-if="token" href="#" @click="signout"
                            >Sign out
                            </a>
                        </div>
                        </li>

                        <li class="nav-item" v-if="token">
                            <div id="cart" style="position:relative">
                                <span id="nav-cart-count">{{cartCount}}</span>
                                <router-link class="" :to="{ name: 'Cart' }">
                                <i class="fa fa-shopping-cart" style="font-size:36px"></i>
                                </router-link>
                            </div>
                            </li>
                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                            <div class="input-group-text">
                                <i class="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i class="fa fa-fw fa-search text-dark mr-2"></i>
                    </a>
                    <a class="nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </a>
                    <a class="nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-user text-dark mr-3"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </a>
                </div>
            </div>

        </div>
    </nav> <br><br>
    <!-- Close Header -->
</template>
<script>
import swal from "sweetalert";
export default {
  name: "nav-bar",
  props: ["cartCount"],
  data() {
    return {
      token: null,
    };
  },
  methods: {
   signout() {
      localStorage.removeItem("token");
      this.token = null;
      swal({
        text: "Logged you out. Visit again",
        icon: "success",
      });
      this.$emit("resetCartCount");
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>
<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link {
  color: rgba(255, 255, 255);
}

#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 10px;
}
</style>