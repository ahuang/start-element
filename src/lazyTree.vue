<template>
    <Split style="height: 500px;">
        <SplitArea :size="15">
            <div class="tool">
                <el-button>button1</el-button>
                <el-button>button2</el-button>
            </div>
          <el-tree v-if="isShowTree"
            node-key="id" ref="myTree" :props="defaultProps"
            lazy :load="loadNode"
            @node-click="handleNodeClick"
            @node-contextmenu="handleNodeRightClick">
          </el-tree>
        </SplitArea>
        <SplitArea :size="85">
            <div contenteditable="true" style="outline:none"> 
                <el-button @click="refreshRoot" size="mini">更新-根目录</el-button>
                <el-button @click="refreshChild" size="mini">更新-mama子节点</el-button>
                <el-button @click="addRoot" size="mini">新增-根目录</el-button>
                <el-button @click="addChild" size="mini">新增-mama子节点</el-button>                
                <h2>占位文字</h2> 
                <span style="color:gray">
                    在雨中漫步,蓝色街灯渐露,相对望,无声紧拥抱着,为了找往日,寻温馨的往日,消失了,任雨洒我面,难分水点泪痕,心更乱,愁丝绕千百段,骤变的态度,无心伤她说话,收不了,
                    冷雨夜我在你身边,盼望你会知,可知道我的心,比当初已改变,只牵强地相处,冷雨夜我不想归家,怕望你背影,只苦笑望雨点,须知要说清楚,可惜我没胆试,在雨中漫步,
                    尝水中的味道,仿似是,情此刻的尽时,未了解结合,留低思忆片段,不经意,冷雨夜我在你身边,盼望你会知,可知道我的心,比当初已改变,只牵强地相处,冷雨夜我不想归家,怕望你背影,
                    只苦笑望雨点,须知要说清楚,可惜我没胆试,冷雨夜我在你身边,盼望你会知,可知道我的心,比当初已改变,只牵强地相处,冷雨夜我不想归家,怕望你背影,
                    只苦笑望雨点,须知要说清楚,可惜我没胆试
                    ----------------------,
                    前面是哪方,谁伴我闯荡,沿路没有指引,若我走上又是窄巷,寻梦像扑火,谁共我疯狂,长夜渐觉冰冻,但我只有尽量去躲,几多天真的理想,几多找到是颓丧,沉默去迎失望,
                    几多心中创伤,只有淡忘,从前话说要如何,其实你与昨日的我,活到今天变化甚多,只有顽强,明日路纵会更彷徨,疲倦惯了再没感觉,别再可惜计较什么,Wo,谁愿夜探访,留在我身旁,
                    陪伴渡过黑暗,为我驱散寂寞痛楚,寻觅没结果,谁伴我闯荡,期望暴雨飘去,便会冲破命运困锁,几多天真的理想,几多找到是颓丧,沉默去迎失望,几多心中创伤,只有淡忘,从前话说要如何,
                    其实你与昨日的我,活到今天变化甚多,只有顽强,明日路纵会更彷徨,疲倦惯了再没感觉,别再可惜计较什么,只有淡忘,从前话说要如何,其实你与昨日的我,活到今天变化甚多,只有顽强,
                    明日路纵会更彷徨,疲倦惯了再没感觉,别再可惜计较什么,始终上路过    
                </span>     
            </div>              
        </SplitArea>
    </Split>     
</template>

<script>
export default {
    name: 'lazyTree',
    data () {
        return {
            visible: false,
            defaultProps: {
                children: 'children',
                label: 'name',
                isLeaf: 'leaf'
            },
            isShowTree: true
        }
    },
    methods: {
        addRoot(){
            console.log('this.$refs.myTree.root: ',this.$refs.myTree.root);
            // this.$refs.myTree.append({ id:10, name: `new-parent-${this.genRandom()}`}, 0)
            this.$refs.myTree.root.data = [{id: 0, name: ''}]; // 给root添加data
            this.$refs.myTree.insertBefore({ id:10, name: `new-parent-${this.genRandom()}`}, 1); //在node.data.id=1节点之前添加新节点
        },
        addChild(){
            this.$refs.myTree.append({ id:10, name: `new-node-${this.genRandom()}`}, 1)
        },
        // 更新-根目录
        refreshRoot(){
            console.log('@refreshTree');
            // 下面这种方式，不局限于根目录的个数，刷新之后目录会折叠
            this.isShowTree = false;
            this.$nextTick(()=>{
                this.isShowTree = true;
            });
            // 未采用
                // 下面这种方式，需要遍历根目录的每个节点进行替换，刷新之后目录会保持
                // let node1 = this.$refs.myTree.getNode('1');
                // node1.data = {
                //     name: `mama-${this.genRandom()}`,
                //     id: 1
                // };
                // let node2 = this.$refs.myTree.getNode('2');
                // node2.data = {
                //     name: `papa-${this.genRandom()}`,
                //     id: 2
                // };            
                // 下面这种方式，需要遍历根目录，但是第一个参数0不生效，刷新之后目录会保持
                // let superRoot = this.$refs.myTree.root;
                // console.log('this.$refs.myTree.root', superRoot);
                // this.$refs.myTree.updateKeyChildren(0,[
                //     { id:1, name: `mama-${this.genRandom()}`},
                //     { id:2, name: `papa-${this.genRandom()}`}            
                // ]);

        },
        genRandom(){
            return ((Math.random())*100).toFixed(2);
        },
        // 更新-mama子节点
        refreshChild(){
            console.log('@refreshRoot');
            const newData1 = [
                { id: 3,name: `good-${this.genRandom()}`, leaf: true}, 
                { id: 4,name: `ok-${this.genRandom()}`}
            ];      
            this.$refs.myTree.updateKeyChildren(1, newData1);
        },
        // 懒加载树
        loadNode(node, resolve) {
            console.log('loadNode: ', node, node.level);
            if (node.level === 0) { // level 0                
                this.level0Data = [ 
                    { id:1, name: `mama-${this.genRandom()}`},
                    { id:2, name: `papa-${this.genRandom()}`} 
                ];
                return resolve(this.level0Data);
            }else if(node.level === 1){    // level 1
                setTimeout(() => {
                    const data = [
                        { id: 3,name: 'good', leaf: true}, 
                        { id: 4,name: 'ok'}
                    ];
                    resolve(data);
                }, 500);
            }else if(node.level === 2){
                setTimeout(() => {
                    const data = [
                        { id: 5, name: 'over?', leaf: true}, 
                        { id: 6, name: 'yes', leaf: true}
                    ];
                    resolve(data);
                }, 500);
            }else {
                return resolve([]);
            }
        },
        handleNodeClick(data,node,com){
            console.log('左点击', node, data.label);
        },
        handleNodeRightClick(event,data,node,com){
            console.log('右点击', node, data.label);
        }        
    }      
}
</script>


<style>
.split.split-horizontal, .gutter.gutter-horizontal{
    text-align: left;
}
.el-tree-node__label{
  color: orange;
  font-weight: bold;
}

.el-button--mini, .el-button--mini.is-round{
    margin: 10px;
    display: block;
}

.tool{
    margin: 10px;
    display: flex;
}
.tool .el-button--mini, .el-button--mini.is-round {
    display: inline-block;
}

</style>
