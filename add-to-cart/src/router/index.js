import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import FoodDetails from '../components/FoodDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food-details',
    name: 'food-details',
    component:FoodDetails
  },
  {
    path: '/cart',
    name: 'cart',
    component:Cart
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
