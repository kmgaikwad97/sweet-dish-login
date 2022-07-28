import Vue from 'vue'
import Vuex from 'vuex'

import cake from "../assets/cake.jpeg"
import fries from "../assets/fries.jpg"
import pizza from "../assets/pizza.jpg"
import macroni from "../assets/macroni.jpg"
import salad from "../assets/salad.jpg"
import samosa from "../assets/samosa.jpeg"
import soup from "../assets/soup.jpg"
import tacos from "../assets/tacos.jpg"
import noodles from "../assets/noodles.jpg"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRated:[
      {id:1,name:"Cake",price:100,url:cake,desc:"Very Tasty Cake",rate:4.1},
      {id:2,name:"Fries",price:320,url:fries,desc:"Very Tasty fries",rate:4.6},
      {id:3,name:"Pizza",price:160,url:pizza,desc:"Very Tasty pizza",rate:4.7}
    ],
   allCategories: [
      {id:4,name:"Macroni",price:500,url:macroni,desc:"Very Tasty macroni",rate:3.9},
      {id:5,name:"Salad",price:469,url:salad,desc:"Very Tasty salad",rate:2.7},
      {id:6,name:"Samosa",price:470,url:samosa,desc:"Very Tasty samosa",rate:4.9}],

    dishesNearYou:[
        {id:7,name:"Soup",price:190,url:soup,desc:"Very Tasty soup",rate:4.2},
      {id:8,name:"Tacos",price:199,url:tacos,desc:"Very Tasty tacos",rate:4.1},
      {id:9,name:"Noodles",price:399,url:noodles,desc:"Very Tasty noodles",rate:4.8},

    ],

    cartItemCount:0,
    cartItems:[]
  },
  mutations: {
    addToCart(state,payload){

      let item = payload;
      item = { ...item, quantity:1 }

      if(state.cartItems.length > 0){
        let bool = state.cartItems.some(i => i.id === item.id)
        if(bool){
          let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
          state.cartItems[itemIndex]["quantity"]+=1;
        }else{
          state.cartItems.push(item)
        }
        // where there are no items in the cart
      }else{
        state.cartItems.push(item)
      }

      state.cartItemCount++
    },

    removeItem(state,payload){
      if(state.cartItems.length > 0){
        let bool = state.cartItems.some(i => i.id === payload.id)

        if(bool){
          let index = state.cartItems.findIndex(el => el.id === payload.id)

          if(state.cartItems[index]["quantity"] !== 0){
            state.cartItems[index]["quantity"] -= 1
            state.cartItemCount--
          }

          // update
          if(state.cartItems[index]["quantity"] === 0){
            state.cartItems.splice(index,1)
          }

        }
      }
    }
  },
  actions: {
    addToCart:(context, payload)=>{
      context.commit("addToCart", payload)
    },
    removeItem:(context,payload)=>{
      context.commit("removeItem", payload)
    }
  },
  modules: {
  }
})
