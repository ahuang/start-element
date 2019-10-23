<template>
    <div>
        <h1>el-select下拉框大于输入框</h1>
        <h2>奇怪的是，使用官方自带的例子，无法重现这个问题，而且下拉样式比较奇怪</h2>
        <div style="width: 200px; margin: 0 auto;">
            <el-select v-model="value" placeholder="请选择" style="width: 100%;" size="small" >
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectWidth',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }    
}
</script>

