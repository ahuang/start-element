<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <!-- 全量目录树 -->
    <!-- <all-tree></all-tree> -->

    <!-- 懒加载 -->
    <!-- <lazy-tree></lazy-tree> -->

    <!-- el-select远程搜索，回车时选择框消失处理 -->
    <!-- <test1></test1> -->

  <!-- el-select下拉框大于输入框 -->
    <!-- <select-width></select-width> -->

    <!-- table内部嵌套普通结构 && 数据同步获取 -->
    <!-- <nestedTable1></nestedTable1> -->
    
    <!-- table内部嵌套不同表头的table && 数据同步获取 -->
    <!-- <nestedTable2></nestedTable2> -->

    <!-- table内部嵌套不同表头的table && 数据异步请求获取  && 定时更新父子table部分数据-->
    <!-- <nestedTable3></nestedTable3> -->

    <!-- table内部嵌套不同表头的table && 数据异步请求获取 && 懒加载 -->
    <nestedTable4></nestedTable4>    

  </div>
</template>

<script>
import allTree from './allTree.vue';
import lazyTree from './lazyTree.vue';
import test1 from './test1.vue';
import selectWidth from './selectWidth.vue';
import nestedTable1 from './nestedTable1.vue';
import nestedTable2 from './nestedTable2.vue';
import nestedTable3 from './nestedTable3.vue';
import nestedTable4 from './nestedTable4.vue';

export default {
  name: 'app',
  components: {
    allTree, 
    lazyTree, 
    test1, 
    selectWidth,
    nestedTable1,
    nestedTable2, 
    nestedTable3, 
    nestedTable4
  },
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
