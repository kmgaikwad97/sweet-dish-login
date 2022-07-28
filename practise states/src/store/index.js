import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {id:1, name:"Shopping at 7", done: true},
      {id:2, name:"Learn Vuex", done: true},
      {id:3, name:"Gaming", done: false},
      {id:4, name:"Football", done: true},
      {id:5, name:"Manifest", done: true},
      {id:6, name:"Music", done: false},
      {id:7, name:"Gym", done: true},
      {id:8, name:"Cycling", done: false},
    ],
    count:0
  },
  getters:{
    doneTodos: state =>{
      return state.todos.filter(todo=>todo.done)  
    }
  },
  mutations: {
    // increment(state){             
    //   setTimeout(() => {
    //   state.count++ 
    //   }, 1000);
    // }
    // increment(state){             
    //   state.count++
    // }

    // payload
    increment(state,payload){             
        state.count+= payload
      }

  },
  actions: {
    increment:(context,payload)=>{
      setTimeout(() => {
      context.commit("increment",payload)
      }, 700);
    }
  },
  modules: {
  }
})
