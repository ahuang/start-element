<template>
  <div style="width: 400px;margin-left:300px">
    <h1>nested table4</h1>
    <el-table :data="tableData"  @expand-change="onExpandChange">
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
      tableData: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getData();
    },
    async getData() {
      this.tableData = await this.getOutData();
    },
    handleData(outData, inData) {
      this.tableData = outData.map(d=>{
        d.list = inData[d.id];
        return d;
      });
    },
    getOutData() {
      return new Promise(resolve => {
        setTimeout(() => {
          // 注意！！ 这里list必须定义，否则后面直接更新list不会生效。如果list不定义就要用Vue.$set来更新list
          return resolve([{ id: 1, name: "111",list: [] }, { id: 2, name: "222",list:[] }]);
        }, 500);
      });
    },
    async onExpandChange(){
      const inData = await this.getInData();
      this.tableData.map(d=>{
        d.list = inData[d.id];
      });
    },    
    getInData() {
      return new Promise(resolve => {
        setTimeout(() => {
          return resolve({
            1: [
              { id: 1, shop: "shop1.1-"+Math.random(), category: "category1.1" },
              { id: 1, shop: "shop1.1-"+Math.random(), category: "category1.2" }
            ],
            2: [
              { id: 2, shop: "shop2.1", category: "category2.1" },
              { id: 2, shop: "shop2.2", category: "category2.2" }
            ]
          });
        }, 500);
      });
    },

  }
};
</script>
