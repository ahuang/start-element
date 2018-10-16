<template>
    <Split style="height: 500px;">
        <SplitArea :size="15">
            <el-button @click="refreshTree" size="mini">刷新整颗树</el-button>
            <el-button @click="refreshRoot" size="mini">刷新根节点下的自节点</el-button>
          <el-tree v-if="isShowTree"
            node-key="id" ref="myTree" :props="defaultProps"
            lazy :load="loadNode"
            @node-click="handleNodeClick"
            @node-contextmenu="handleNodeRightClick">
          </el-tree>
        </SplitArea>
        <SplitArea :size="85">
            <div contenteditable="true" > 
                <p>
                    现状: 刷新页面可以刷新树结构 <br>
                    期望：点击刷新按钮也可以刷新树结构
                </p>
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
        refreshTree(){
            console.log('@refreshTree');
            this.isShowTree = false;
            this.$nextTick(()=>{
                this.isShowTree = true;
            })

        },
        refreshRoot(){
            console.log('@refreshTree');
            const newData = [
                { id: 2,name: `good${((Math.random())*100).toFixed(2)}`, leaf: true}, 
                { id: 3,name: `ok${((Math.random())*100).toFixed(2)}`}
            ];
            this.$refs.myTree.updateKeyChildren(1, newData);
        },
        // 懒加载树
        loadNode(node, resolve) {
            console.log('loadNode: ', node, node.level);
            if (node.level === 0) { // level 0
                return resolve([ 
                    { id:1, name: `随机数${((Math.random())*100).toFixed(2)}`} 
                ]);
            }else if(node.level === 1){    // level 1
                setTimeout(() => {
                    const data = [
                        { id: 2,name: 'good', leaf: true}, 
                        { id: 3,name: 'ok'}
                    ];
                    resolve(data);
                }, 500);
            }else if(node.level === 2){
                setTimeout(() => {
                    const data = [
                        { id: 4, name: 'over?', leaf: true}, 
                        { id: 5, name: 'yes', leaf: true}
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
.el-tree-node__label{
  color: orange;
  font-weight: bold;
}


</style>
