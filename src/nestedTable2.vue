<template>
  <div style='width: 400px;margin-left:300px'>
    <h1>nested table2</h1>
    <el-table :data="tableData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.list" size="small">
            <el-table-column label="所属店铺" prop="shop"></el-table-column>
            <el-table-column label="商品分类" prop="category"></el-table-column>
          </el-table>
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
          name: "好滋好味鸡蛋仔",
          list: [
            { id: 1, shop: "shop1.1", category: "category1.1" },
            { id: 1, shop: "shop1.1", category: "category1.2" }
          ]
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          list: [
            { id: 2, shop: "shop2.1", category: "category2.1" },
            { id: 2, shop: "shop2.2", category: "category2.2" }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
