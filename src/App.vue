<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <!-- 全量目录树 -->
    <!-- <all-tree></all-tree> -->

    <!-- 懒加载 -->
    <!-- <lazy-tree></lazy-tree> -->

    <!-- el-select下拉框大于输入框 -->
    <!-- <select-width></select-width> -->

    <!-- table内部嵌套普通结构 && 数据同步获取 -->
    <!-- <nestedTable1></nestedTable1> -->
    
    <!-- table内部嵌套不同表头的table && 数据同步获取 -->
    <!-- <nestedTable2></nestedTable2> -->

    <!-- table内部嵌套不同表头的table && 数据异步请求获取  && 定时更新父子table部分数据-->
    <!-- <nestedTable3></nestedTable3> -->

    <!-- table内部嵌套不同表头的table && 数据异步请求获取 && 懒加载 -->
    <!-- <nestedTable4></nestedTable4>     -->

    <!-- 嵌套在table中的input的编辑问题，没有问题，没有重现无法编辑的问题 -->
    <input-can-not></input-can-not>

  </div>
</template>

<script>
import allTree from './01.allTree.vue';
import lazyTree from './02.lazyTree.vue';
import selectWidth from './03.selectWidth.vue';
import nestedTable1 from './04.nestedTable.test1.vue';
import nestedTable2 from './04.nestedTable.test2.vue';
import nestedTable3 from './04.nestedTable.test3.vue';
import nestedTable4 from './04.nestedTable.test4.vue';
import inputCanNot from './05.input-can-not.vue';

export default {
  name: 'app',
  components: {
    allTree, 
    lazyTree, 
    selectWidth,
    nestedTable1,
    nestedTable2, 
    nestedTable3, 
    nestedTable4,
    inputCanNot
  },
  data () {
    return {
      msg: 'vue + element test',    
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
