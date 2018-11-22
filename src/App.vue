<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!-- 全量目录树 -->
    <!-- <all-tree></all-tree> -->
    <!-- 懒加载 -->
    <!-- <lazy-tree></lazy-tree> -->
    <test1></test1>
  </div>
</template>

<script>
import allTree from './allTree.vue';
import lazyTree from './lazyTree.vue';
import test1 from './test1.vue';

export default {
  name: 'app',
  components: {allTree, lazyTree, test1},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',    
    }
  },
  methods: {

  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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


</style>
