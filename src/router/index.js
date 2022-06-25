import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import CategoryList from '../views/Category/CategoryList.vue'
import EditCategory from "../views/Category/EditCategory.vue";
import AddProduct from "../views/Product/AddProduct.vue";
import ProductList from '../views/Product/ProductList.vue'
import EditProduct from "../views/Product/EditProduct.vue";
import ShowDetails from "../views/Product/ShowDetails";
import ListProducts from "../views/Category/ListProducts.vue";
import Signup from "../views/sign-up.vue";
import Signin from '../views/sign-in.vue';
import Cart from '../views/Cart-list.vue';




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  

  {
    path : '/admin/category/add',
    name : 'AddCategory',
    component: AddCategory
  },
  
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin/product/list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path : '/admin/category/list',
    name : 'CategoryList',
    component: CategoryList
  },

  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
