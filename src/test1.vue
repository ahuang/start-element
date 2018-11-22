<template>
    <div>
        <h2>el-select远程搜索</h2>
        <p>远程搜索：如果用户有输入并且和远程数据有匹配才有下拉框；否则如果没有输入或者输入没有匹配不会有下拉框. 防止用户看到其他人的数据</p>
        <el-select
            v-if="isShowSelect"
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>        
    </div>
</template>
<script>
export default {
    name: 'test',
    data(){
        return {
            isShowSelect:true,
            options4: [],
            value9: [],
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"]            
        }
    },
    mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
            document.addEventListener('click',(e)=>{
                this.isShowSelect = false;
            },false);
    },
    methods: {
        remoteMethod(query) {
            if (query !== '') {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.options4 = this.list.filter(item => {
                return item.label.toLowerCase()
                    .indexOf(query.toLowerCase()) > -1;
                });
            }, 200);
            } else {
            this.options4 = [];
            }
        },

    }    
}
</script>

