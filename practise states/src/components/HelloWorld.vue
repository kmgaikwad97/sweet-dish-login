<template>
  <div class="box">
    <ul>
      <li v-for="i in doneTodos" :key="i.id">{{ i.name }}</li>
    </ul>
    <div style="padding:25px">
      <h3>Count:{{count}}</h3>
      <!-- <button type="button" @click="increment()" class="btn btn-primary">Add</button> -->
      <button type="button" @click="increment(7)" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    doneTodos() {
      // return this.$store.state.todos.filter(todo=>todo.done);
      // return this.$store.state.todos.filter(todo=>!todo.done);

      // with the getters
      return this.$store.getters.doneTodos;
    },
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    // increment(){
    //   // mutations
    //   // this.$store.commit('increment')


    //   // Actions
    //   this.$store.dispatch('increment')
    // }

    increment(payload){
      this.$store.dispatch('increment',payload)
    }


  }
};
</script>

<style scoped>
.box {
  margin: 75px auto;
  width: 300px;
  background: lightcoral;
  padding-top: 10px;
}
</style>