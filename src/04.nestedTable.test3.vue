<template>
  <div style="width: 400px;margin-left:300px">
    <h1>nested table3</h1>
    <button @click="startTimer">开启定时轮询</button>
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
      tableData: [],
      count:0,
      timer: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    startTimer(){
      this.timer = setInterval(()=>{
        console.log('this.count:',this.count);
        if(this.count>=5){
          console.log('停止轮询');        
          this.timer && clearInterval(this.timer);        
        }else{
          console.log('更新数据 部分');
          this.tableData[0].list[0].shop = 'newshow-'+Math.random();
          this.tableData[0].list[1].shop = 'newshow-'+Math.random();
          this.tableData[1].list[0].shop = 'newshow-'+Math.random();
          this.tableData[1].list[1].shop = 'newshow-'+Math.random();
        }
        this.count += 1;
      },2000)
    },
    init() {
      this.getData();
    },
    async getData() {
      const outData = await this.getOutData();
      const inData = await this.getInData();
      this.handleData(outData, inData);
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
          return resolve([{ id: 1, name: "111-"+Math.random() }, { id: 2, name: "222"+Math.random()   }]);
        }, 500);
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
    }
  }
};
</script>
