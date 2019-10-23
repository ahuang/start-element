<template>
  <div>
    input can not
    <el-button @click="onAdd">add</el-button>

    <el-table :data="form.urls" stripe border size="small">
      <el-table-column prop="name" label="name" width="80" />

      <el-table-column prop="realPercent" label="权重" width="120">
        <template slot-scope="scope">
          <el-input v-if="scope.$index===urlEditIndex" v-model="scope.row.realPercent" />
          <span v-else>{{ `${scope.row.realPercent ? scope.row.realPercent : 0}%` }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="urlEditIndex = scope.$index">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        urls: []
      },
      urlEditIndex: null
    };
  },
  created() {},
  methods: {
    onAdd() {
      const origindata = [
        { id: 1, name: "111", realPercent: 10.91, remark: "aaa" },
        { id: 2, name: "222", realPercent: 22.22, remark: "bbb" }
      ];
      origindata.map(d => {
        this.form.urls.push(d);
      });
      this.modifydata();
    },
    modifydata(){
        this.form.urls.map(d=>{
            d.realPercent += 2;
        })
    }
  }
};
</script>