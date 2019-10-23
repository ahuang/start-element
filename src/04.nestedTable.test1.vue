<template>
  <div>
    <h1>nested table</h1>
    <el-table :data="tableData" style="width: 100%" @expand-change="onExpandChange">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "nestedTable",
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          shop: "王小虎夫妻店"
        }
      ]
    };
  },
  methods: {
    /*
        点击修改内容，不能异步
        row 当前操作(展开或者关闭)的行
        expandedRows  操作完之后，当前所有展开的行
        
        如何判断当前是展开还是折叠呢？ 
            1. 个人任务可以通过查询row是否在expandedRows存在来判断，如果存在那么是展开，否则是折叠
       */
    onExpandChange(row, expandedRows) {
      console.log(
        "onExpandChange",
        JSON.stringify(row),
        JSON.stringify(expandedRows)
      );
      this.tableData[0].shop = "shop-1111";
      this.tableData[0].category = "category-111";
    }
  }
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>